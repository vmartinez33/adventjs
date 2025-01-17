
def decode_filename(filename: str) -> str:
    filename = "_".join(filename.split("_")[1:])
    filename = ".".join(filename.split(".")[:-1])
    return filename


filename = decode_filename('2023122512345678_sleighDesign.png.grinchwa')
print(filename)  # ➞ "sleighDesign.png"

filename2 = decode_filename('42_chimney_dimensions.pdf.hack2023')
print(filename2)  # ➞ "chimney_dimensions.pdf"

filename3 = decode_filename('987654321_elf-roster.csv.tempfile')
print(filename3)  # ➞ "elf-roster.csv"
