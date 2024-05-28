const repondant = {
    employee:"repondant",
    disponibilite: true,
    name: ["Yannick", "Lise", "Emilie", "Meddhi", "Jean-Clement", "Valentin"],
};

const gestionnaire = {
    employee:"gestionnaire",
    disponibilite: true,
    name: ["Yannick", "Lise", "Emilie", "Meddhi", "Jean-Clement", "Valentin"],
};

const directeur = {
    employee:"directeur",
    disponibilite: true,
    name: ["Yannick", "Lise", "Emilie", "Meddhi", "Jean-Clement", "Valentin"],
     
};

function call() {
    for (let i = 0; i < 5; i++) {
        if ( repondant.disponibilite !== true) {
            console.log("indisponible"+ repondant.name[1]);
        } else if (gestionnaire.disponibilite === true) {
            console.log("Cette personne va prendre votre appel"+ gestionnaire.name[0]);
        } else if (directeur.disponibilite !== true) {
            console.log("indisponible"+ directeur.name[3]);
        } else {
            console.log("Veuillez renouveler votre appel");
        }
    }
}

call();


