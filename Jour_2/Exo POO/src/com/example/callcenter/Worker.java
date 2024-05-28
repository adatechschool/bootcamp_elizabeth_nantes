package com.example.callcenter;
import java.util.Comparator;
public class Worker {
    String name;
    boolean isAvailable;
    Hierarchy hierarchy;

    public Worker(String name, boolean isAvailable, Hierarchy hierarchy) {
        this.name = name;
        this.isAvailable = isAvailable;
        this.hierarchy = hierarchy;
    }


    public enum Hierarchy {
        RESPONDENT,
        MANAGER,
        DIRECTOR
    }

    public void setName(String name) {
        this.name = name;
    }


    public void setAvailable(boolean available) {
        isAvailable = available;
    }
    public void setHierarchy(Hierarchy hierarchy) {
        this.hierarchy = hierarchy;
    }


    public String getName() {
        return name;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public Hierarchy getHierarchy() {
        return hierarchy;
    }


    public void handleCall(Call call) {
        if (this.isAvailable){
            call.isHandled = true;
            this.isAvailable = false;
            System.out.println("call n° "+call.callNumber+" has been handled by "+this.name);
        }
    }

}