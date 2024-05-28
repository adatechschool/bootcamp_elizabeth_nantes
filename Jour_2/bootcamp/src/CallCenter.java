import java.util.ArrayList;
import java.util.List;

public class CallCenter {
    private List<Respondent> respondents;
    private List<Manager> managers;
    private List<Director> directors;

    public CallCenter() {
        respondents = new ArrayList<>();
        managers = new ArrayList<>();
        directors = new ArrayList<>();

        // Initialize with some employees
        for (int i = 0; i < 5; i++) {
            respondents.add(new Respondent(this));
        }

        for (int i = 0; i < 2; i++) {
            managers.add(new Manager(this));
        }

        directors.add(new Director(this));
    }

    public void dispatchCall(Call call) {
        for (Respondent respondent : respondents) {
            if (respondent.isFree()) {
                respondent.receiveCall(call);
                respondent.setFree(false);
                return;
            }
        }

        for (Manager manager : managers) {
            if (manager.isFree()) {
                manager.receiveCall(call);
                manager.setFree(false);
                return;
            }
        }

        for (Director director : directors) {
            if (director.isFree()) {
                director.receiveCall(call);
                director.setFree(false);
                return;
            }
        }

        System.out.println("All employees are busy. Please wait.");
    }

    public void escalateCall(Call call, Employee fromEmployee) {
        if (fromEmployee instanceof Respondent) {
            for (Manager manager : managers) {
                if (manager.isFree()) {
                    manager.receiveCall(call);
                    return;
                }
            }
        }

        if (fromEmployee instanceof Manager) {
            for (Director director : directors) {
                if (director.isFree()) {
                    director.receiveCall(call);
                    return;
                }
            }
        }

        System.out.println("All employees are busy or cannot handle the call. Please wait.");
    }
}

