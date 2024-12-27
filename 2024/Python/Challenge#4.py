
def create_xmas_tree(height: int, ornament: str) -> str:
    width = 2 * height - 1
    tree = ''
    
    for i in range(1, height + 1):
        ornaments = ornament * (2 * i - 1)
        tree += ornaments.center(width, '_') + '\n'
    
    tree += '#'.center(width, '_') + '\n'
    tree += '#'.center(width, '_')
    
    return tree


tree = create_xmas_tree(5, '*')
print(tree)
'''
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
'''

tree2 = create_xmas_tree(3, '+')
print(tree2)
'''
__+__
_+++_
+++++
__#__
__#__
'''

tree3 = create_xmas_tree(6, '@')
print(tree3)
'''
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
'''
