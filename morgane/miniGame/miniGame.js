"use strict";
const { Player, ChildMonster, Monster } = require("./classes");

function fight(player, target) {
  while (target.healthPoint > 0 && player.healthPoint > 0) {
    target.takeDamages(player.dealDamages());
    if (target.healthPoint > 0) {
      player.takeDamages(target.dealDamages());
    }
  }
}

function isTargetDead(target) {
  if (target.healthPoint <= 0) {
    return true;
  }
  return false;
}

function determineTarget(totalMonstreMorts) {
  console.log("-----------------");
  if (totalMonstreMorts % 3 === 2) {
    console.log("Un petit monstre arrive !");
    return new ChildMonster();
  } else {
    console.log("Un gros monstre arrive !");
    return new Monster();
  }
}

const Joueur = new Player();

let totalPetitMonstreMorts = 0;
let totalGrosMonstreMorts = 0;

while (Joueur.healthPoint >= 0) {
  let targetedMonster = determineTarget(
    totalPetitMonstreMorts + totalGrosMonstreMorts
  );

  fight(Joueur, targetedMonster);

  if (isTargetDead(targetedMonster)) {
    if (targetedMonster instanceof ChildMonster) {
      totalPetitMonstreMorts += 1;
    } else {
      totalGrosMonstreMorts += 1;
    }
  }
}
console.log("----TOTAL----");
console.log("J'ai tué " + totalGrosMonstreMorts + " gros monstres");
console.log("J'ai tué " + totalPetitMonstreMorts + " petits monstres");

/* 

Une class Joueur qui a 100 points de vie, une méthode subieDesDegats, une méthode Attaque qui blesse un nombre aléatoire entre 2 et 10 point de dégâts.

Une class ChildMonster qui a 10 point de vie, une méthode subieDesDegats, une méthode Attaque qui blesse un nombre aléatoire entre 0 et 4 point de dégâts.

Une class Monster qui a 20 point de vie, une méthode subieDesDegats, une méthode Attaque qui blesse un nombre aléatoire entre 1 et 6 point de dégâts.

Le joueur affronte les monstres un par un jusqu’à sa mort, il attaque le premier, il y a un ChildMonster tous les 3 monstres.

A la fin vous devez afficher le nombre de ChildMonster et Monster que le joueur a tué. */
