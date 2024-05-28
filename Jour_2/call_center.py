class Employees():
  level = None
  def __init__(self, employees):
    self.employees = employees


class Respondent(Employees):
  level = 0
  def __init__(self):

class Manager(Employees):
  level = 1
  def __init__(self):

class Director(Employees):
  level = 2
  def __init__(self):

