
def calculate_price(ornaments: str) -> int:
    values = {
        '*': 1,
        'o': 5,
        '^': 10,
        '#': 50,
        '@': 100,
    }
    
    price = 0
    last_value = 0
    for ornament in ornaments:
        value = values.get(ornament, None)
        if value is None:
            return 'undefined'
        price += value - 2 * last_value if value > last_value else value
        last_value = value
    
    return price


print(calculate_price('***'))  # 3   (1 + 1 + 1)
print(calculate_price('*o'))   # 4   (5 - 1)
print(calculate_price('o*'))   # 6   (5 + 1)
print(calculate_price('*o*'))  # 5  (-1 + 5 + 1) 
print(calculate_price('**o*')) # 6  (1 - 1 + 5 + 1) 
print(calculate_price('o***')) # 8   (5 + 3)
print(calculate_price('*o@'))  # 94  (-5 - 1 + 100)
print(calculate_price('*#'))   # 49  (-1 + 50)
print(calculate_price('@@@'))  # 300 (100 + 100 + 100)
print(calculate_price('#@'))   # 50  (-50 + 100)
print(calculate_price('#@Z'))  # undefined (Z is unknown)
