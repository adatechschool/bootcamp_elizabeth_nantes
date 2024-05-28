"""Imagine you have a call center with three levels of employees: respondent, manager, and director. An incoming telephone call must be first allocated to a respondent 
who is free. If the respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not free or not able to handle it, then the call 
should be escalated to a director. Design the classes and data structures for this problem. Implement a method dispatchCall() which assigns a call to the first available 
employee."""

# Classe générale
class CallCenter:
    def __init__(self, name, free=False):
        self.name = name
        self.free = free

    def dispatchCall(self, next_level=None):
        if self.free:
            print(f"{self.name} a pris l'appel")
        else:
            print(f"{self.name} a rejeté l'appel, le passé au suivant")
            if next_level:
                next_level.dispatchCall()

# Respondent
class RespondentCall(CallCenter):
    pass

# Manager
class ManagerCall(CallCenter):
    pass

# Director
class DirectorCall(CallCenter):
    pass

# Création des instances
respondent = RespondentCall(name="Respondent Roger", free=False)
manager = ManagerCall(name="Manager Bernard", free=True)
director = DirectorCall(name="Director Albert", free=False)

# Tentative de dispatcher l'appel à travers les niveaux
respondent.dispatchCall(manager.dispatchCall(director))