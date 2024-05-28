"""A child is running up a staircase with n steps and
 can hop either 1 step, 2 steps, or 3 steps at a time. 
 Implement a method to count how many possible ways the child 
 can run up the stairs."""

#première façon
""" faire un boucle de 0 au nombre de marche choisi
commencer par enveler un marche puis vois ce qu'il reste,
le faire pour deux marches, etc
calculer condition
i +a """
step1 = 1
step2 = 2
step3 = 3
def step(stairsMax):
    if stairsMax ==0 :
        print("test", "fini")
    elif stairsMax >= 1:
        step(stairsMax -1)
        print(1)

print(step(4))








"""voir toutes les possibilités pour montés x marches
# x =  marche total
y = calcul les possibilités pour monter y marche"""
def compter_facons(n):
    # Cas de base
    if n == 0:
        return 1
    elif n == 1:
        return 1
    elif n == 2:
        return 2
    
    # Initialiser le tableau des façons
    ways = [0] * (n + 1)
    ways[0] = 1
    ways[1] = 1
    ways[2] = 2
    
    # Calculer les façons pour chaque marche jusqu'à n
    for i in range(3, n + 1):
        ways[i] = ways[i-1] + ways[i-2] + ways[i-3]
    
    return ways[n]

# Exemple d'utilisation
n = 3
print(f"Nombre de façons de monter {n} marches : {compter_facons(n)}")
