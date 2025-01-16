from typing import List, Literal

def move_train(board: List[str], mov: Literal['U', 'D', 'R', 'L']) -> Literal['none', 'crash', 'eat']:
    flat_board = ''.join(board)
    pos = flat_board.index('@')
    
    row, col = divmod(pos, len(board[0]))
    
    mov_map = {
        'U': (-1, 0),
        'D': (1, 0),
        'R': (0, 1),
        'L': (0, -1)
    }
    
    vector = mov_map[mov]
    new_row = row + vector[0]
    new_col = col + vector[1]
    
    if not (0 <= new_row < len(board)) or not (0 <= new_col < len(board[0])):
        return 'crash'
    
    next_position = board[new_row][new_col]
    match next_position:
        case 'o':
            return 'crash'
        case '*':
            return 'eat'
        case _:
            return 'none'


board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

print(move_train(board, 'U'))
# ➞ 'eat'
# Because the train moves up and finds a magical fruit

print(move_train(board, 'D'))
# ➞ 'crash'
# The train moves down and the head crashes into itself

print(move_train(board, 'L'))
# ➞ 'crash'
# The train moves to the left and crashes into the wall

print(move_train(board, 'R'))
# ➞ 'none'
# The train moves to the right and there is empty space on the right
