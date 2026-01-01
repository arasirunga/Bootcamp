#ex1

myfavnum = {12, 34, 56, 78}
myfavnum.add(100)
myfavnum.add(500)

myfavnum.remove(500)
print(myfavnum)


friend_fav_numbers = {23, 45, 67, 89}
our_fav_numbers = myfavnum.union(friend_fav_numbers)


#ex2
tuples={1,2,3,4}
tuples.add(5)
print (tuples)

#ex3
basket=["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")


basket.count("Apples")
print(basket)

basket.clear()
print (basket)


#ex4
#float is decimal numbers and integer is whole number
lst = []
i = 1.5

while i < 6:
    lst.append(i)
    i += 0.5

print(lst)


#ex5
for num in range (1,20):
    print (num)



for num in range (1,20):
    if num % 2 ==0:
        print (num)

#ex6
name=input("enter your name:")

while True:
    if len(name) > 2 and all(not(name[i].isdigit()) for i in range(len(name))):
        break
    else:
        name=input("enter your name:")

print("thank you")

#ex7
fav=input ("enter fav fruits")
list=fav.split(",")


anyfruit=input("enter fruit name")
if anyfruit in list:
    print("you chose a favorite fruit")
else:
    print("you chose a new fruit.I hope you enjoy it!")

#ex8
toppings=input("enter pizza toppings")
list=[toppings]
while toppings != "quit":
    print("Adding topping to your pizza")
    toppings=input("enter pizza toppings")  
    list.append(toppings)
    break
print (list)
cost=(len(list)-1)*2.50 +10
print (f"your total cost is {cost}")

ex9

list1=[]
numofpeople=int(input("enter number of people"))
for i in range (numofpeople):
    ticket=input("do you want a ticket? yes/no")
    if ticket=="yes":
        age=int(input("enter your age"))
    if age < 3:
        price=0
    elif age >=3 and age <=12:
        price=10
    else:
        price=15

list1.append(price)
totalcost=sum(list1)
print (f"the total cost is {totalcost}")