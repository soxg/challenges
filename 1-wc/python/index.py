#!/usr/bin/env python3

import sys
import os

def main(): 
    option = None
    path = None

    if len(sys.argv) == 1:
        print("Usage: ccwc [-l | -c | -m | -w] file")
        sys.exit(1)

    if len(sys.argv) > 1: 
        option = sys.argv[1]
        if not option.startswith('-'):
            path = option
            option = None
        
        if len(sys.argv) > 2:
            path = sys.argv[2]
        
        if path:
            with open(path, 'r') as f:
                text = f.read()
        else:
            text = sys.stdin.read()
    
    lines = len(text.split('\n'))
    words = len(text.split())
    chars = len(text)
    bytes = len(text.encode('utf-8'))

    if option == '-l':
        print(lines)
    elif option == '-c':
        print(bytes)
    elif option == '-w':
        print(words)
    elif option == '-m':
        print(chars)
    else:
        print(lines, words, bytes)
    
if __name__ == "__main__":
    main()

