'use strict';

// Faire un petit jeu de survie.
// Une class Joueur qui a 100 points de vie, une méthode subieDesDegats, une méthode Attaque qui blesse un nombre aléatoire entre 2 et 10 point de dégâts.
// Une class ChildMonster qui a 10 point de vie, une méthode subieDesDegats, une méthode Attaque qui blesse un nombre aléatoire entre 0 et 4 point de dégâts.
// Une class Monster qui a 20 point de vie, une méthode subieDesDegats, une méthode Attaque qui blesse un nombre aléatoire entre 1 et 6 point de dégâts.
// Le joueur affronte les monstres un par un jusqu’à sa mort, il attaque le premier, il y a un ChildMonster tous les 3 monstres.
// A la fin vous devez afficher le nombre de ChildMonster et Monster que le joueur a tué.

class Personnage {

    constructor(pointsDeVie, degatsMinimum, degatsMaximum) {
        this.pointsDeVie = pointsDeVie;
        this.degatsMinimum = degatsMinimum;
        this.degatsMaximum = degatsMaximum;
    };
    attaque() {
        const nombreAleatoire = Math.floor(Math.random() * (this.degatsMaximum - this.degatsMinimum + 1) + this.degatsMinimum);
        return nombreAleatoire;
    };
    subieDesDegats(degats) {
        this.pointsDeVie = this.pointsDeVie - degats;
    };

    // Attaques du joueur 

    attaqueNormaleDuJoueur(degats) {
        if (degats !== this.degatsMaximum && degats !== this.degatsMinimum) {
            return console.log('+ Le Joueur attaque et inflige ' + degats + ' points de dégâts !');
        };
    };
    attaqueCritiqueReussieDuJoueur(degats) {
        if (degats === this.degatsMaximum) {
            return console.log('+ MAGNIFIQUE !!! Le Joueur attaque et place sa botte secrète ! Il inflige un coup superbe équivalent à ' + degats + ' points de dégâts !!!');
        };
    };
    attaqueCritiqueRateeDuJoueur(degats) {
        if (degats === this.degatsMinimum) {
            return console.log('+ OUPS ! Le Joueur attaque et tente de placer sa botte secrète... Il se précipite trop et rate son coup, infligeant seulement ' + degats + ' points de dégâts !');
        };
    };
    attaqueDesespereeDuJoueur(degats) {
        if (this.pointsDeVie === 1) {
            return console.log('+ Le joueur place une attaque desespérée et inflige ' + degats + ' points de dégâts... Il se battra jusqu\'à son dernier souffle !!!');
        };
    };

    // Attaques des monstres

    attaqueCritiqueDuGrosMonstre(degats) {
        if (degats === this.degatsMaximum) {
            return console.log('+ AARGHH !!! Le gros monstre attaque en mode BERSERK et inflige ' + degats + ' points de dégâts !!!');
        };
    };
    attaqueNormaleDuGrosMonstre(degats) {
        if (degats !== this.degatsMaximum) {
            return console.log('+ Le gros monstre attaque à son tour et inflige ' + degats + ' points de dégâts !');
        };
    };
    attaqueNormaleDuPetitMonstre(degats) {
        if (degats >= this.degatsMinimum && degats <= this.degatsMaximum) {
            return console.log('+ Le petit monstre attaque à son tour et inflige ' + degats + ' points de dégâts !');
        };
    };

    // Coups reçus par le joueur

    subieAttaqueNormaleDunMonstre(degats) {
        if (degats < 6 && degats >= 1 && this.pointsDeVie > 0) {
            console.log('  - Le joueur reçoit ' + degats + ' points de dégâts. Il lui reste ' + this.pointsDeVie + ' points de vie...');
        };
    };
    subieAttaqueCritiqueDuGrosMonstre(degats) { // A corriger
        if (degats === 6 && this.pointsDeVie > 0) {
            console.log('  - Le joueur encaisse difficilement l\'attaque en mode BERSERK de ' + degats + ' points de dégâts... Il accuse le coup et il lui reste ' + this.pointsDeVie + ' points de vie !');
        };
    };
    laFinDuJoueurApproche() {
        if (this.pointsDeVie <= 5 && this.pointsDeVie > 1) {
            console.log('  - Le joueur n\'a plus que ' + this.pointsDeVie + ' points de vie... La fin approche !');
        };
    };
    plusQueUnPointDeVie() {
        if (this.pointsDeVie === 1) {
            console.log('  - Le joueur n\'a plus que ' + this.pointsDeVie + ' point de vie... Sa vie ne tient qu\'à un fil !');
        };
    };
    subieCoupAZeroPoints(degats) {
        if (degats === 0) {
            return console.log('  - Le joueur s\'amuse de l\'attaque ratée du petit monstre et le repousse au sol d\'un coup de pied au visage bien senti !');
        };
    };
    subieCoupFatal(degats) {
        if (this.pointsDeVie <= 0) {
            return console.log('  - RIP... Le joueur reçoit ' + degats + ' points de dégâts... Il est mort !');;
        };
    };
    mortDuJoueur() {
        if (this.pointsDeVie <= 0) {
            return console.log('+++ Le joueur s\'est battu vaillament et a tué ' + totalGrosMonstres + ' gros monstres et ' + totalPetitsMonstres + ' petits monstres... Gloire à lui !! +++');
        };
    };

    // Coups reçus par le gros monstre

    grosMonstreSubieAttaqueNormaleDuJoueur(degats) {
        if (this.pointsDeVie > 0) {
            console.log('  - Le gros monstre reçoit ' + degats + ' points de dégâts. Il lui reste ' + this.pointsDeVie + ' points de vie...');
        };
    };
    mortDuGrosMonstre(degats) {
        if (this.pointsDeVie <= 0) {
            console.log('  - Le gros monstre reçoit un coup fatal de ' + degats + ' points de dégâts. Il est mort !');
            totalGrosMonstres = totalGrosMonstres + 1;
        };
    };

    // Coups reçus par le petit monstre

    petitMonstreSubieAttaqueNormaleDuJoueur(degats) {
        if (this.pointsDeVie > 0) {
            console.log('  - Le petit monstre reçoit ' + degats + ' points de dégâts. Il lui reste ' + this.pointsDeVie + ' points de vie...');
        };
    };
    mortDuPetitMonstre(degats) {
        if (this.pointsDeVie <= 0) {
            console.log('  - Le petit monstre reçoit un coup fatal de ' + degats + ' points de dégâts. Il est mort !');
            totalPetitsMonstres = totalPetitsMonstres + 1;
        };
    };

};

class Player extends Personnage {

    constructor() {
        super(100, 2, 10)
    };
    attaque() {
        const degats = super.attaque();
        super.attaqueNormaleDuJoueur(degats);
        super.attaqueCritiqueReussieDuJoueur(degats);
        super.attaqueCritiqueRateeDuJoueur(degats);
        super.attaqueDesespereeDuJoueur(degats);
        return degats;
    };

    subieDesDegats(degats) {
        super.subieDesDegats(degats);
        super.subieAttaqueNormaleDunMonstre(degats);
        super.subieAttaqueCritiqueDuGrosMonstre(degats);
        super.subieCoupAZeroPoints(degats);
        super.plusQueUnPointDeVie(degats);
        super.laFinDuJoueurApproche(degats);
        super.subieCoupFatal(degats);
        super.mortDuJoueur();
    };

};

class Monster extends Personnage {

    constructor() {
        super(20, 1, 6)
    };
    attaque() {
        const degats = super.attaque();
        super.attaqueNormaleDuGrosMonstre(degats);
        super.attaqueCritiqueDuGrosMonstre(degats);
        return degats;
    };
    subieDesDegats(degats) {
        super.subieDesDegats(degats);
        super.grosMonstreSubieAttaqueNormaleDuJoueur(degats);
        super.mortDuGrosMonstre(degats);
    };

};

class ChildMonster extends Personnage {

    constructor() {
        super(10, 0, 4)
    };
    attaque() {
        const degats = super.attaque();
        super.attaqueNormaleDuPetitMonstre(degats);
        return degats;
    };
    subieDesDegats(degats) {
        super.subieDesDegats(degats);
        super.petitMonstreSubieAttaqueNormaleDuJoueur(degats);
        super.mortDuPetitMonstre(degats);
    };

};

const joueur = new Player();

let unAutreCombatCommence = false;
let totalGrosMonstres = 1;
let totalPetitsMonstres = 0;

function choixDuMonstre() {

    if ((totalGrosMonstres + totalPetitsMonstres) % 3 == 0) {
        const petitMonstre = new ChildMonster();
        console.log('***** Le petit monstre #' + (totalPetitsMonstres + 1) + ' (soit le monstre ' + (totalGrosMonstres + totalPetitsMonstres) + ') attaque le joueur par surprise... Un nouveau combat commence !! *****');
        return petitMonstre;
    } else {
        const grosMonstre = new Monster();
        if (unAutreCombatCommence === true) {
            console.log('***** Le GROS MONSTRE #' + totalGrosMonstres + ' (soit le monstre ' + (totalGrosMonstres + totalPetitsMonstres) + ') attaque le joueur... Un nouveau combat commence !! *****');
        } else {
            console.log('***** Le GROS MONSTRE #' + totalGrosMonstres + ' (soit le monstre ' + (totalGrosMonstres + totalPetitsMonstres) + ') attaque le joueur... Le premier combat commence !! *****');
        };
        return grosMonstre;
    };

};

function joueurVersusMonstre() {

    let unMonstre = choixDuMonstre();
    while (joueur.pointsDeVie > 0 && unMonstre.pointsDeVie > 0) {
        unMonstre.subieDesDegats(joueur.attaque());
        if (unMonstre.pointsDeVie > 0) {
            joueur.subieDesDegats(unMonstre.attaque());
        };
    };
    unAutreCombatCommence = true;

};

function lancerLeJeu() {

    while (joueur.pointsDeVie > 0) {
        joueurVersusMonstre();
    };
    
};

lancerLeJeu();