class Animal:
    def __init__(self, name, age, species):
        self.name=name
        self.age=age
        self.species=species

    def speak(self):
        return "Some sound"
    def info(self):
        return f"{self.name} is a {self.age}-year old{self.species}"
    def __str__(self ):
        return f"Animal(name={self.name}, age={self.age}, species={self.species})"
class Dog(Animal):
    def __init__(self,name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed=breed
    def speak(self):
        return "Woof!"
    def fetch(self):
        return f"{self.name} is fetching the ball!"
    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, breed={self.breed})"
    
class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color=color
    def speak(self):
        return "Meow!"
    def scratch(self):
        return f"{self.name} is scratching the furniture!"
    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, color={self.color})" 
        