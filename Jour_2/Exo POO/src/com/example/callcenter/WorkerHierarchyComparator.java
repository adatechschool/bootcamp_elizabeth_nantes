package com.example.callcenter;

import java.util.Comparator;

//On crée une classe de comparateur spéciale pour comparer la hierarchie
public class WorkerHierarchyComparator implements Comparator<Worker>{
    @Override
    public int compare(Worker w1, Worker w2){
        return w1.getHierarchy().ordinal() - w2.getHierarchy().ordinal();
    }

}
