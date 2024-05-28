# # demander une entrée
# # boucle for pour parcourir l’entrée
# # boucle for pour comparer la même entrée 2 fois ?
# # si l’entrée est différente : true
# # si l’entrée est identique : false


def compareString(string):
  for i in range(len(string)):
    for j in range(i + 1, len(string)):
      if(string[i] == string[j]):
        return False;

  return True;

string = input("Entrez un mot : ")

if(compareString(string)):
  print("c’est unique");
else:
  print("ce n’est pas unique");

# test = {input("Entrez un mot : ")}
# print(test)