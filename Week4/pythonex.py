ex1


def display_message():
    print("I am learning Python functions in this course.")

display_message()


ex2

def favorite_book(title):
    print(f"One of my favorite books is {title}.")

favorite_book("Alice in Wonderland")



ex3 
def describe_city(city, country="Mauritius"):
    print(f"{city} is in {country}.")

describe_city("Port Louis")
describe_city("Reykjavik", "Iceland")

ex4
import random

def compare_numbers(number):
    random_number = random.randint(1, 100)

    if number == random_number:
        print("🎉 Success! Both numbers are the same:", number)
    else:
        print("❌ Fail!")
        print("Your number:", number)
        print("Random number:", random_number)

compare_numbers(25)


ex5
def make_shirt(size="Large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

make_shirt()


make_shirt(size="Medium")


make_shirt(size="Small", text="Code is fun!")


ex6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for magician in magicians:
        print(magician)

def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = magicians[i] + " the Great"
make_great(magician_names)
show_magicians(magician_names)



