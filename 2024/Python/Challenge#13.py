
def is_robot_back(moves: str) -> bool | list[int]:
    i = 0
    double = False
    moves_made = set()
    position = [0, 0]
    moves_list = list(moves)
    
    while i < len(moves_list):
        move = moves_list[i]
        
        normal_moves = {
            'R': [1, 0],
            'L': [-1, 0],
            'U': [0, 1],
            'D': [0, -1]
        }
        
        inverted_moves = {
            'R': 'L',
            'L': 'R',
            'U': 'D',
            'D': 'U'
        }
        
        if move in normal_moves.keys():
            multiplier = 2 if double else 1
            position[0] += normal_moves[move][0] * multiplier
            position[1] += normal_moves[move][1] * multiplier
            double = False
        elif move == '*':
            double = True
        elif move == '!':
            moves_list[i+1] = inverted_moves[moves_list[i+1]]
        elif move == '?':
            if moves_list[i+1] in moves_made:
                i += 1

        moves_made.add(move)
        i += 1
    
    if position[0] == 0 and position[1] == 0:
        return True

    return position


print(is_robot_back('R'))     # [1, 0]
print(is_robot_back('RL'))    # true
print(is_robot_back('RLUD'))  # true
print(is_robot_back('*RU'))   # [2, 1]
print(is_robot_back('R*U'))   # [1, 2]
print(is_robot_back('LLL!R')) # [-4, 0]
print(is_robot_back('R?R'))   # [1, 0]
print(is_robot_back('U?D'))   # true
print(is_robot_back('R!L'))   # [2,0]
print(is_robot_back('U!D'))   # [0,2]
print(is_robot_back('R?L'))   # true
print(is_robot_back('U?U'))   # [0,1]
print(is_robot_back('*U?U'))  # [0,2]
print(is_robot_back('U?D?U')) # true

# Step-by-step examples:
print(is_robot_back('R!U?U')) # [1,0]
# 'R'  -> moves to the right
# '!U' -> inverts and becomes 'D'
# '?U' -> moves upwards, because the 'U' movement hasn't been done yet

print(is_robot_back('UU!U?D')) # [0,1]
# 'U'  -> moves upwards
# 'U'  -> moves upwards
# '!U' -> inverts and becomes 'D'
# '?D' -> does not move, since the 'D' movement has already been done
