from typing import List

def create_frame(names: List[str]) -> str:
    # largest_name = max (names, key=len) if names else ""
    largest_name = ""
    for name in names:
        if len(name) > len(largest_name):
            largest_name = name
    largest_length = len(largest_name)
    
    frame = '*' * (largest_length + 4) + "\n"
    for name in names:
        frame += "* " + name.ljust(largest_length) + " *\n"
    frame += '*' * (largest_length + 4)
    
    return frame


frame1 = create_frame(['midu', 'madeval', 'educalvolpz'])
print(frame1)
# Expected result:
'''
***************
* midu        *
* madeval     *
* educalvolpz *
***************
'''

frame2 = create_frame(['midu'])
print(frame2)
# Expected result:
'''
********
* midu *
********
'''

frame3 = create_frame(['a', 'bb', 'ccc'])
print(frame3)
# Expected result:
'''
*******
* a   *
* bb  *
* ccc *
*******
'''
