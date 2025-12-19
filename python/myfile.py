print ("hello")

itemprice=input("enter the item price: ")
itemprice=float(itemprice)
print (f"the vatrate is  {(0.15)}")


if itemprice>1000:
    print ("You are eligible for free shipping ")
else :
    print("you are not eligible for free shipping ")
    print(f"please add {1000-itemprice}")
vatrate=0.15
vat=itemprice*vatrate
finalprice=itemprice+vat

print("the final price " + str(finalprice))
print("vat amount " + str(vat))

description ="strings are "
description1=description.upper()
print(description1)

description2=description.replace("are","is")
print(description2)
description3=description[:7]
print(description3)


name = "Frank"
age = 65

print(f"Hello, {name}. You are {age}.")