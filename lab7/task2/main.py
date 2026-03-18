from models import Animal, Dog, Cat

def main():
    generic_animal=Animal("Generic", 5, "Unknown" )
    dog=Dog("Buddy", 3, "Golden Retriever")
    cat=Cat("Whiskers", 2, "Orange")

    animals=[generic_animal,dog,cat]

    for animal in animals:
        print(animal.info())
        print("Sound: ",animal.speak())
        print(animal)
        print()

    print(dog.fetch())
    print(cat.scratch())
if __name__=="__main__":
    main()