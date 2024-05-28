package org.bootcamp;

import static org.bootcamp.Appellation.*;
import static org.bootcamp.Sex.MADAME;
import static org.bootcamp.Sex.MONSIEUR;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Employee director = new Director("Huang","Tianhong",MADAME, DIRECTOR, null);
        Employee manager = new Manager("Hamel","Camille",MONSIEUR, MANAGER,director);
        Employee respondent = new Employee("Hamel","Jaqen",MONSIEUR, RESPONDENT,manager);


        respondent.reponse();

    }
}

