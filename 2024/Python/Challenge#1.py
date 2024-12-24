from typing import List

def prepare_gifts(gifts: List[int]) -> List[int]:
    non_duplicated_gifts = list(set(gifts))
    sorted_gifts = sorted(non_duplicated_gifts)
    return sorted_gifts


gifts1 = [3, 1, 2, 3, 4, 2, 5]
preparedGifts1 = prepare_gifts(gifts1)
print(preparedGifts1) # [1, 2, 3, 4, 5]

gifts2 = [6, 5, 5, 5, 5]
preparedGifts2 = prepare_gifts(gifts2)
print(preparedGifts2) # [5, 6]

gifts3 = []
preparedGifts3 = prepare_gifts(gifts3)
print(preparedGifts3) # []
# There are no gifts, the list remains empty
