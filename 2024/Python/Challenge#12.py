
def calculate_price(ornaments: str) -> int:
    values = {
        '*': 1,
        'o': 5,
        '^': 10,
        '#': 50,
        '@': 100,
    }
    
    price = 0
    for i in range(len(ornaments)):
        ornament = ornaments[i]
        next_ornament = ornaments[i+1] if i < (len(ornaments) - 1) else None
        
        value = values.get(ornament, None)
        next_value = values.get(next_ornament, None)
        
        if not value or (next_ornament and not next_value): return
        
        if next_value and value < next_value:
            price -= value
        else:
            price += value
    
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
