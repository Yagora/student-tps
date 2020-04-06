'use strict';

const object = {
    a : 1
};
console.log(object.toString())

function toto () {}

class Bouteille {
    constructor(hauteur, nombreDeLitre, marque) {
        this._hauteur = hauteur;
        this._nombreDeLitre = nombreDeLitre;
        this._buchonIsOpen = false;
        this._marque = marque;
    }
    get hauteur() {
        return this._hauteur;
    }
    get buchonIsOpen() {
        return this._buchonIsOpen;
    }
    openBuchon() {
        this._buchonIsOpen = true;
    }
    closeBuchon() {
        this._buchonIsOpen = false;
    }
}

class Coca extends Bouteille {
    constructor(ligth) {
        super(30, 2, 'coca')
        this._ligth = ligth
    }

    set ligth(ligthBool) {
        this._ligth = ligthBool;
    }
}












const bouteille1 = new Bouteille(30, 2);
const array = new Array();
const bouteille2 = new Bouteille(50, 1);
//bouteille1._hauteur = 14;
console.log(bouteille1.hauteur)
bouteille1.openBuchon()
console.log(bouteille1.buchonIsOpen)
bouteille1.closeBuchon()
console.log(bouteille1.buchonIsOpen)
console.log(bouteille2)

