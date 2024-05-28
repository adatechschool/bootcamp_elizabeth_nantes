package org.bootcamp;

import java.util.Random;


public class Director extends Employee {


    public Director(String nom, String prenom, org.bootcamp.Sex sex, org.bootcamp.Appellation appellation, Employee responsable) {
        super(nom, prenom, sex, appellation, null);
    }

    @Override
    public void reponse() {
        if (this.disponibilite()) {
            System.out.println(this.getAppellation() + " " + this.getSex() + " " + this.getPrenom() + " " + this.getNom() + " va répondre votre appel !");
        } else {
            System.out.println(this.getAppellation() + " n'est pas dispobile, veillez rappeler plus tard ! ");
        }
    }
}



