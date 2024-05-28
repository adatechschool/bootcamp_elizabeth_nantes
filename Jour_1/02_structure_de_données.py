"""Implement an algorithm to determine if a string has
 all unique characters. What if you cannot use additional 
 data structures?"""

#l'array set n'a pas de doublon par nature
def allUnique(str):
    return str.length === new set(str).size

allUnique("abc")
allUnique("abca")


"""faire une bulle  sort fonction ou un dictionnaire
on doit avoir un return true si pas de répétition et false si 
une lettne re répéte"""