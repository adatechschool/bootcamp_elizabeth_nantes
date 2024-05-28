package org.bootcamp;

import java.util.Random;

public class Employee {
    private String Nom;
    private String Prenom;
    private Sex Sex;
    private Appellation Appellation;
    private Employee Responsable;

    public boolean disponibilite() {
        Random random = new Random();
        return random.nextBoolean();
    }

    public void reponse() {
        if (this.disponibilite()) {
            System.out.println(this.Appellation + " " + this.Sex + " " + this.Prenom + " " + this.Nom + " va répondre votre appel !");
        } else {
            System.out.println(this.Appellation + " n'est pas dispobile.");
            if(this.Responsable != null){
                this.Responsable.reponse();
            }
        }
    }

    public String getNom() {
        return Nom;
    }

    public void setNom(String nom) {
        Nom = nom;
    }

    public String getPrenom() {
        return Prenom;
    }

    public void setPrenom(String prenom) {
        Prenom = prenom;
    }

    public Sex getSex() {
        return Sex;
    }

    public void setSex(Sex sex) {
        Sex = sex;
    }

    public org.bootcamp.Appellation getAppellation() {
        return Appellation;
    }

    public void setAppellation(org.bootcamp.Appellation appellation) {
        Appellation = appellation;
    }

    public Employee(String nom, String prenom, org.bootcamp.Sex sex, org.bootcamp.Appellation appellation, Employee responsable) {
        Nom = nom;
        Prenom = prenom;
        Sex = sex;
        Appellation = appellation;
        Responsable = responsable;
    }
}
