abstract class Employee {
    protected CallCenter callCenter;
    private boolean free;

    public Employee(CallCenter callCenter) {
        this.callCenter = callCenter;
        this.free = true;
    }

    public boolean isFree() {
        return free;
    }

    public void setFree(boolean free) {
        this.free = free;
    }

    public void receiveCall(Call call) {
        if (canHandleCall(call)) {
            handleCall(call);
        } else {
            escalateCall(call);
        }
    }

    protected abstract boolean canHandleCall(Call call);
    protected abstract void handleCall(Call call);
    protected abstract void escalateCall(Call call);
}

class Respondent extends Employee {
    public Respondent(CallCenter callCenter) {
        super(callCenter);
    }

    @Override
    protected boolean canHandleCall(Call call) {
        //TODO: faire la logique de simulation d'un appel avec un temps ? pour set à false les booleens et escalate
        return true;
    }

    @Override
    protected void handleCall(Call call) {
        //TODO: logique à faire pour les handle call
        System.out.println("Respondent is handling the call");
    }

    @Override
    protected void escalateCall(Call call) {
        System.out.println("Respondent is escalating the call to manager");
        callCenter.escalateCall(call, this);
    }
}

class Manager extends Employee {
    public Manager(CallCenter callCenter) {
        super(callCenter);
    }

    @Override
    protected boolean canHandleCall(Call call) {
        return true;
    }

    @Override
    protected void handleCall(Call call) {
        System.out.println("Manager is handling the call");
    }

    @Override
    protected void escalateCall(Call call) {
        // Escalate to director
        System.out.println("Manager is escalating the call to director");
        callCenter.escalateCall(call, this);
    }
}

class Director extends Employee {
    public Director(CallCenter callCenter) {
        super(callCenter);
    }

    @Override
    protected boolean canHandleCall(Call call) {
        return true;
    }

    @Override
    protected void handleCall(Call call) {
        System.out.println("Director is handling the call");
    }

    @Override
    protected void escalateCall(Call call) {
        // No further escalation
        System.out.println("Director cannot escalate further");
    }
}