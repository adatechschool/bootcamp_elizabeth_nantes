class Employees():
  #niveau hiérarchique des employé·e·s
  level = None
  #temps en seconde pour répondre avant que l’appel soit transmis
  handleTime = 60
  def __init__(self, employees, busy):
    self.employees = employees
    #mais comment passer de None à True ou False ?
    self.busy = False

  def answerCall(self):
  def escalateCall(self):


class Respondent(Employees):
  level = 0
  def __init__(self):
    super(Respondent, self).__init__(employees, busy)
    


class Manager(Employees):
  level = 1
  def __init__(self):
    super(Manager, self).__init__(employees, busy)

class Director(Employees):
  level = 2
  def __init__(self):
    super(Director, self).__init__(employees)

# method dispatchcall()
# create callCenter object ?
# if handleTime

class callCenter():
  
  def __init__(self):
    self.