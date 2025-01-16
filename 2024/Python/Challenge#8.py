from typing import List

def draw_race(indices: List[int], length: int) -> str:
    race = ''
    n_indices = len(indices)
    for i in range(1, n_indices + 1):
        snow = "~" * length
        index = indices[i - 1]
        if index != 0:
            snow = list(snow)
            snow[index] = "r"
            snow = "".join(snow)
        
        shift_space = " " * (n_indices - i)
        race += f"{shift_space}{snow} /{i}"
        
        if i != n_indices:
            race += "\n"
    
    return race


race1 = draw_race([0, 5, -3], 10)
print(race1)
"""
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
"""

race2 = draw_race([2, -1, 0, 5], 8)
print(race2)
"""
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
"""

race3 = draw_race([3, 7, -2], 12)
print(race3)
"""
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
"""
