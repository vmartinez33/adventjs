from codecs import strict_errors
import re

# def fix_packages(packages: str) -> str:
#     open_parenthesis = sorted([match.start() for match in re.finditer(r'\(', packages)], reverse=True)
#     close_parenthesis = sorted([match.start() for match in re.finditer(r'\)', packages)])
    
#     for i_open in open_parenthesis:
#         i_closed = next(i for i in close_parenthesis if i > i_open)
#         close_parenthesis.remove(i_closed)
#         packages = packages[:i_open] + packages[i_open:i_closed][::-1] + packages[i_closed:]
    
#     packages_no_parenthesis = packages.replace('(', '').replace(')', '')
#     return packages_no_parenthesis

def fix_packages(packages: str) -> str:
    while '(' in packages:
        packages = re.sub(r'\(([^()]+)\)', lambda match: match.group(1)[::-1], packages)
    return packages


packages = fix_packages('a(cb)de')
print(packages)  # ➞ "abcde"
# Volteamos "cb" dentro de los paréntesis

packages2 = fix_packages('a(bc(def)g)h')
print(packages2)  # ➞ "agdefcbh"
# 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

packages3 = fix_packages('abc(def(gh)i)jk')
print(packages3)  # ➞ "abcighfedjk"
# 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

packages4 = fix_packages('a(b(c))e')
print(packages4)  # ➞ "acbe"
# 1º volteamos "c" → "c", luego "bc" → "cb"
