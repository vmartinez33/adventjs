from typing import List, TypedDict, Dict

class InventoryItem(TypedDict):
    name: str
    quantity: int
    category: str

Inventory = List[InventoryItem]

def organize_inventory(inventory: Inventory) -> Dict:
    organized_inventory = {}
    for item in inventory:
        name = item['name']
        quantity = item['quantity']
        category = item['category']
        
        if category not in organized_inventory:
            organized_inventory[category] = {}
        
        if name not in organized_inventory[category]:
            organized_inventory[category][name] = quantity
        else:
            organized_inventory[category][name] += quantity
    
    return organized_inventory


inventory = [
    {"name": "doll", "quantity": 5, "category": "toys"},
    {"name": "car", "quantity": 3, "category": "toys"},
    {"name": "ball", "quantity": 2, "category": "sports"},
    {"name": "car", "quantity": 2, "category": "toys"},
    {"name": "racket", "quantity": 4, "category": "sports"}
]
result = organize_inventory(inventory)
print(result)
# Resultado esperado:
# {
#   "toys": {
#     "doll": 5,
#     "car": 5
#   },
#   "sports": {
#     "ball": 2,
#     "racket": 4
#   }
# }

inventory2 = [
    {"name": "book", "quantity": 10, "category": "education"},
    {"name": "book", "quantity": 5, "category": "education"},
    {"name": "paint", "quantity": 3, "category": "art"}
]
result2 = organize_inventory(inventory2)
print(result2)
# Resultado esperado:
# {
#   "education": {
#     "book": 15
#   },
#   "art": {
#     "paint": 3
#   }
# }
