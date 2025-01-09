from typing import List, TypedDict, Literal


class Shoe(TypedDict):
    type: Literal['I', 'R']
    size: int

# def organize_shoes(shoes: List[Shoe]) -> List[int]:
#     shoes_by_size = {}
#     for shoe in shoes:
#         _type = shoe['type']
#         size = shoe['size']
        
#         if size not in shoes_by_size:
#             shoes_by_size[size] = {"I": 0, "R": 0}
    
#         shoes_by_size[size][_type] += 1
    
#     available_shoes = []
#     for size, types in shoes_by_size.items():
#         I = types.get('I', 0)
#         R = types.get('R', 0)
#         available_shoes += [size] * min(I, R)  # Version sin min() --> available_shoes += [size] * (I if I < R else R)
    
#     return available_shoes

def organize_shoes(shoes: List[Shoe]) -> List[int]:
    available_shoes = []
    shoes_by_size = {}

    for shoe in shoes:
        size = shoe["size"]
        shoe_type = shoe["type"]
        opposite_type = "R" if shoe_type == "I" else "I"

        if shoes_by_size.get(size, {}).get(opposite_type, 0) > 0:
            available_shoes.append(size)
            shoes_by_size[size][opposite_type] -= 1
        else:
            if size not in shoes_by_size:
                shoes_by_size[size] = {}
            shoes_by_size[size][shoe_type] = shoes_by_size[size].get(shoe_type, 0) + 1

    return available_shoes


shoes = [
  { 'type': 'I', 'size': 38 },
  { 'type': 'R', 'size': 38 },
  { 'type': 'R', 'size': 42 },
  { 'type': 'I', 'size': 41 },
  { 'type': 'I', 'size': 42 }
]
pairs = organize_shoes(shoes)
print(pairs)  # [38, 42]

shoes2 = [
  { 'type': 'I', 'size': 38 },
  { 'type': 'R', 'size': 38 },
  { 'type': 'I', 'size': 38 },
  { 'type': 'I', 'size': 38 },
  { 'type': 'R', 'size': 38 }
]
pairs2 = organize_shoes(shoes2)
print(pairs2)  # [38, 38]

shoes3 = [
  { 'type': 'I', 'size': 38 },
  { 'type': 'R', 'size': 36 },
  { 'type': 'R', 'size': 42 },
  { 'type': 'I', 'size': 41 },
  { 'type': 'I', 'size': 43 }
]
pairs3 = organize_shoes(shoes3)
print(pairs3)  # []
