#Task A
a = int(input())
i = 1
while i * i <= a:
    print(i * i)
    i += 1
#Task B
b = int(input())
for i in range(2, b + 1):
    if b % i == 0:
        print(i)
        break
#Task C
c = int(input())
x = 1
while x <= c:
    print(x, end=" ")
    x = x * 2
#Task D
d = int(input())
while d % 2 == 0:
    d = d // 2
if d == 1:
    print("YES")
else:
    print("NO")
#Task E
n = int(input())

k = 0
e = 1

while e < n:
    e = e * 2
    k += 1

print(k)