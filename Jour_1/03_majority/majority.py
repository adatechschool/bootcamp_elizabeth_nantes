def majority(array):
  counter = 0
  num = array[0]
  for i in array:
    frequence = array.count(i)
    if(frequence> counter):
      counter = frequence
      num=i
  return num

array = [1, 2, 2, 2, 6, 6, 6]
print(majority(array))