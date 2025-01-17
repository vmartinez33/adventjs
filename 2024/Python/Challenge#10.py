
def compile(instructions):
    def is_number(x):
        try:
            float(x)
            return True
        except ValueError:
            return False
    
    i = 0
    registers = {}
    
    while i < len(instructions):
        instruction = instructions[i].split(" ")
        function = instruction[0]
        
        match function:
            case "MOV":
                x, y = instruction[1], instruction[2]
                if is_number(x):
                    registers[y] = int(x)
                else:
                    registers[y] = registers.get(x, 0)
            case "INC":
                register = instruction[1]
                registers[register] = registers.get(register, 0) + 1
            case "DEC":
                register = instruction[1]
                registers[register] = registers.get(register, 0) - 1
            case "JMP":
                register, index = instruction[1], int(instruction[2])
                if registers.get(register, 0) == 0:
                    i = index
                    continue
        
        i += 1
    
    return registers.get("A", None)


instructions = [
  'MOV -1 C',  # copies -1 to register 'C',
  'INC C',  # increments the value of register 'C'
  'JMP C 1',  # jumps to the instruction at index 1 if 'C' is 0
  'MOV C A',  # copies register 'C' to register 'A',
  'INC A'  # increments the value of register 'A'
]
print(compile(instructions)) # -> 2
"""
 Step-by-step execution:
 0: MOV -1 C -> The register C receives the value -1
 1: INC C    -> The register C becomes 0
 2: JMP C 1  -> C is 0, jumps to the instruction at index 1
 1: INC C    -> The register C becomes 1
 2: JMP C 1  -> C is 1, the instruction is ignored
 3: MOV C A  -> Copies register C to A. Now A is 1
 4: INC A    -> The register A becomes 2
"""

print(compile([
    "MOV 5 B",
    "DEC B",
    "MOV B A",
    "INC A"
])) # -> 5

print(compile([
    "MOV 2 X",
    "DEC X",
    "DEC X",
    "JMP X 1",
    "MOV X A"
])) # -> -2
