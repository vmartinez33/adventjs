from typing import List


def in_box(box: List[str]) -> bool:
    for i in range(1, len(box) - 1):
        if '*' in box[i][1:-1]:
            return True                
    return False


result = in_box([
  "###",
  "#*#",
  "###"
])  # ➞ true
print(result)

result = in_box([
  "####",
  "#* #",
  "#  #",
  "####"
])  # ➞ true
print(result)

result = in_box([
  "#####",
  "#   #",
  "#  #*",
  "#####"
])  # ➞ false
print(result)

result = in_box([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])  # ➞ false
print(result)
