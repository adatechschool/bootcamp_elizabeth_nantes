import com.example.callcenter.Call;
import com.example.callcenter.CallCenter;
import com.example.callcenter.Worker;
import com.example.callcenter.WorkerHierarchyComparator;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Call> calls = new ArrayList<>();
        calls.add(new Call(1, false));
        calls.add(new Call(2, false));
        calls.add(new Call(3, false));
        calls.add(new Call(4, true));
        calls.add(new Call(5, false));
        calls.add(new Call(6, false));
        calls.add(new Call(7, true));
        calls.add(new Call(8, false));
        calls.add(new Call(9, false));
        calls.add(new Call(10, false));
        calls.add(new Call(11, false));
        calls.add(new Call(12, false));
        calls.add(new Call(13, false));
        calls.add(new Call(14, false));
        calls.add(new Call(15, false));
        calls.add(new Call(16, false));
        calls.add(new Call(17, false));
        calls.add(new Call(18, false));


        List<Worker> workers = new ArrayList<>();

        // Trier une liste de travailleurs pour faciliter l'algo
        workers.add(new Worker("Agathe", true, Worker.Hierarchy.DIRECTOR));
        workers.add(new Worker("Elliot", false, Worker.Hierarchy.MANAGER));
        workers.add(new Worker("Bill", true, Worker.Hierarchy.RESPONDENT));
        workers.add(new Worker("Tiffany", false, Worker.Hierarchy.RESPONDENT));
        workers.add(new Worker("Sandra", true, Worker.Hierarchy.RESPONDENT));
        workers.add(new Worker("Rachida", false, Worker.Hierarchy.DIRECTOR));
        workers.add(new Worker("Daniela", true, Worker.Hierarchy.DIRECTOR));
        workers.add(new Worker("Joanne", true, Worker.Hierarchy.MANAGER));
        workers.add(new Worker("Jeremy", true, Worker.Hierarchy.RESPONDENT));
        workers.add(new Worker("Jane", true, Worker.Hierarchy.RESPONDENT));
        workers.add(new Worker("Sony", true, Worker.Hierarchy.MANAGER));
        workers.add(new Worker("Akida", true, Worker.Hierarchy.RESPONDENT));


        Collections.sort(workers, new WorkerHierarchyComparator());

        //Vérification du tri
        for (Worker worker : workers) {
            System.out.println(worker.getName() + " - " + worker.getHierarchy());
        }

        CallCenter.handleMultipleCalls(calls, workers);
    }

}