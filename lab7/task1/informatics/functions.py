
def min4(a, b, c, d):
    m = a
    if b < m:
        m = b
    if c < m:
        m = c
    if d < m:
        m = d
    return m


def power(a, n):
    result = 1
    for i in range(n):
        result *= a
    return result


def xor(x, y):
    if (x and not y) or (not x and y):
        return 1
    return 0



#Task A
a, b, c, d = map(int, input().split())
print(min4(a, b, c, d))

#Task B
a, n = input().split()
a = float(a)
n = int(n)
print(power(a, n))

#Task C
x, y = map(int, input().split())
print(xor(bool(x), bool(y)))