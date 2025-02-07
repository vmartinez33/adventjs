import sys
from pathlib import Path


def main():
    args = sys.argv[1:]
    if len(args) < 2:
        print('Usage: python create_challenge.py <year> <challenge_number>')
        return
    
    year = args[0]
    challenge_number = args[1]
    files = [
        Path(f'{year}/Python/Challenge#{challenge_number}.py'),
        Path(f'{year}/TypeScript/Challenge#{challenge_number}.ts'),
        Path(f'{year}/JavaScript/Challenge#{challenge_number}.js'),
    ]
    
    for file in files:
        if file.exists():
            print(f'{file} already exists')
            continue
        
        with file.open('w') as f:
            f.write('\n\n')
        
        print(f'{file} created')

    print('Done')

if __name__ == '__main__':
    main()