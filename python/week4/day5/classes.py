class Student:
    def __init__(self): # first function to run when creating a student
        self.first_name = "Abraham" # attributes
        self.last_name = "Smith"
        self.address = "Floreal"
        self.full_name = f"{self.first_name} {self.last_name}"
        self.year_of_birth = 2000 
        self.age= 2024 - self.year_of_birth

student_1 = Student()
print(f"{student_1.full_name} aged {student_1.age} lives at {student_1.address}")



class car:
    def __init__(self,make,color,year):
        self.color=color
        self.brand=make
        self.year=year
mycar=car("toyota","red",2020)
print (f"my car is a {mycar.color} {mycar.brand} from {mycar.year}")

 

 class Person :
   