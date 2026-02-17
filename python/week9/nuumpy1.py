import numpy as np
mynormalarray=[1,2,3,4,5]
myarray=np.array(mynormalarray)
print(myarray * 2)


myarray=np.array([[1,2,3],[4,5,6],[7,8,9]])


print (myarray.dtype)

myzeronp=np.zeros((5,10))
print(myzeronp)


arrayyes=np.array([[1,2,3],[4,5,6],[6,7,8]])
print (arrayyes[1:3,1:3])


print   (np.random.rand(1,5))

arrayyes=[1,2,3,4,5,6,7,8,9]

print(np.reshape(arrayyes,(9,1)))