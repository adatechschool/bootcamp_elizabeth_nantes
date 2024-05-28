class Employees():
  def __init__(self, employees):
    self.employees = employees


class Respondent(Employees):
  def __init__(self):
    super().__init__()

class Manager(Employees):
  def __init__(self):
    super().__init__()

class Director(Employees):
  def __init__(self):
    super().__init__()

