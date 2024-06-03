#Use this as Reference
#The variables written in this piece are completely random
#Only works with 16 digit credit cards
#Can be optimized but I dont have the time to

credit_num = str(input("Number on Credit Card: "))
num = []

for letter in credit_num:
    num.append(letter)
    
print(num)

nd = ""
nd = nd + str(int(num[0]) * 2)

inte = 2
for i in range(7):
    nd = nd + str(int(num[inte]) * 2)
    inte = inte + 2

print(nd)

td = ""
inte = 1
for i in range(7):
    td = td + num[inte]
    inte = inte + 2

print(td)

ndd = []
for letter in nd:
    ndd.append(letter)

for letter in td:
    ndd.append(letter)

total = 0
print(ndd)

nums = len(ndd)
for i in range(nums):
    total = total + int(ndd[i])

print(str(total))


num_left = total % 10

print(str(num_left))

Lcheck = 10 - num_left
print(str(Lcheck))
if int(credit_num[15]) == Lcheck:
    print("correct!")

else:
    print("incorrect")

