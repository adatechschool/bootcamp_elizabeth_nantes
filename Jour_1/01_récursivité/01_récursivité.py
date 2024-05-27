# le nombre de chemins possibles.
# nombre de marche à monter:
# i+1
# i+2
# i+3
# i est la marche ou l’on se trouve.

def numberStep(n):
  if (n == 0):
    return 1
  elif (n<0):
    return 0
  else:
    return (numberStep(n-1) + numberStep(n-2) + numberStep(n-3) + numberStep(n-4))

n = int(input("Entrez le nombre de marche : "))

#for i in range(n):
print(numberStep(n))
