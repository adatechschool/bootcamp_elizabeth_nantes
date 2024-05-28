"""Imagine you have a call center with three levels of employees: respondent, manager, and director. An incoming telephone call must be first allocated to a respondent 
who is free. If the respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not free or not able to handle it, then the call 
should be escalated to a director. Design the classes and data structures for this problem. Implement a method dispatchCall() which assigns a call to the first available 
employee."""

#Respondent
class RespondentCall():
    def __init__(self, name, free=False):
        self.name = "Respondent"
        self.free=free

    def dispatchCall(self):
        if self.free ==True:
            print(f"{self.name} a pris l'appelle")
        else:
            print(f"{self.name} a rejeté, le passé au suivant")
            ManagerCall()

#Manager
class ManagerCall(RespondentCall):
    def __init__(self, name, free=False):
        self.name = "Manager"
        self.free=free

    def dispatchCall(self):
        if self.free ==True:
            print(f"{self.name}  a pris l'appelle")
        else:
            print(f"{self.name} a rejeté, le passé au suivant")
            DirectorCall()

#Director
class DirectorCall(RespondentCall):
    def __init__(self, name, free=False):
        self.name = "Director"
        self.free=True

    def dispatchCall(self):
        if self.free ==True:
            print(f"{self.name}  a pris l'appelle")
        else:
            print(f"{self.name} a rejeté, le passé au suivant")

isRespondentFree = RespondentCall()
isRespondentFree = ManagerCall()
isRespondentFree = DirectorCall()