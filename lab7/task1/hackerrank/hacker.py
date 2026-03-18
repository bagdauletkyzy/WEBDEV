import numpy as np
import math
from itertools import groupby
from html.parser import HTMLParser


#task1 linal
def task_determinant():
    n = int(input())
    matrix = [list(map(float, input().split())) for _ in range(n)]
    det = np.linalg.det(matrix)
    print(round(det, 2))


#task2 is leap
def is_leap(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)


def task_is_leap():
    year = int(input())
    print(is_leap(year))


#task3 print
def task_print_function():
    n = int(input())
    for i in range(1, n + 1):
        print(i, end="")


#task4 minion wtf
def minion_game(string):
    vowels = "AEIOU"
    kevin = 0
    stuart = 0
    length = len(string)

    for i in range(length):
        if string[i] in vowels:
            kevin += length - i
        else:
            stuart += length - i

    if kevin > stuart:
        print("Kevin", kevin)
    elif stuart > kevin:
        print("Stuart", stuart)
    else:
        print("Draw")


def task_minion_game():
    s = input().strip()
    minion_game(s)


#task5 list comp
def task_list_comprehensions():
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

    result = [[i, j, k]
              for i in range(x + 1)
              for j in range(y + 1)
              for k in range(z + 1)
              if i + j + k != n]

    print(result)


#task6 no ides
def task_no_idea():
    n, m = map(int, input().split())
    arr = list(map(int, input().split()))
    a = set(map(int, input().split()))
    b = set(map(int, input().split()))

    happiness = 0
    for num in arr:
        if num in a:
            happiness += 1
        elif num in b:
            happiness -= 1

    print(happiness)


#task7 angle mbc
def task_find_angle():
    ab = int(input())
    bc = int(input())

    angle = math.degrees(math.atan(ab / bc))
    print(f"{round(angle)}°")


#task8 compress str
def task_compress_string():
    s = input().strip()
    result = []

    for key, group in groupby(s):
        count = len(list(group))
        result.append(f"({count}, {int(key)})")

    print(" ".join(result))


#task9 symmertric diff
def task_symmetric_difference():
    _ = int(input())
    english = set(map(int, input().split()))
    _ = int(input())
    french = set(map(int, input().split()))

    print(len(english.symmetric_difference(french)))


# task10 html parser
class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print(tag)
        for attr, value in attrs:
            print(f"-> {attr} > {value}")

    def handle_startendtag(self, tag, attrs):
        print(tag)
        for attr, value in attrs:
            print(f"-> {attr} > {value}")


def task_html_parser():
    n = int(input())
    html = ""
    for _ in range(n):
        html += input() + "\n"

    parser = MyHTMLParser()
    parser.feed(html)



if __name__ == "__main__":
    # task_determinant()
    # task_is_leap()
    # task_print_function()
    # task_minion_game()
    # task_list_comprehensions()
    # task_no_idea()
    # task_find_angle()
    # task_compress_string()
    # task_symmetric_difference()
    # task_html_parser()
    pass