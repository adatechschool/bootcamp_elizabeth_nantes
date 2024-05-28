package com.example.callcenter;
import java.util.List;
import java.util.Optional;

public class CallCenter {
    public static void handleMultipleCalls (List<Call> calls, List<Worker> workers) {
        calls.forEach(call -> {
                    if (!call.isHandled()) {
                        Optional<Worker> availableWorker = workers.stream()
                                .filter(Worker::isAvailable)
                                .findFirst();
                        if (availableWorker.isPresent()) { //méthode de l'Optional pour voir s'il a retourné une valeur
                            Worker worker = availableWorker.get();
                            worker.handleCall(call);
                        } else {
                            System.out.println("Sadly, no more workers were available and call "+ call.callNumber+" was left unattended");
                        }

                    } else {
                        System.out.println("Call n°" + call.callNumber+" Was already handled");
                    }

                }
        );
    }
}
