class Employees():
  #niveau hiérarchique des employé·e·s
  level = None
  #temps en seconde pour répondre avant que l’appel soit transmis
  handleTime = 60
  #condition 1 seul appel à la fois
  busyCall = 1
  def __init__(self, employees):
    self.employees = employees


class Respondent(Employees):
  level = 0
  handleTime = 1 minute
  def __init__(self):
    if handleTime
#->    escalateCall to manager

class Manager(Employees):
  level = 1
  def __init__(self):
    if handleTime
#->    escalateCall to director

class Director(Employees):
  level = 2
  def __init__(self):

# method dispatchcall()
# 