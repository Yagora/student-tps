'use strict';

function throwerror() {
    throw new Error('ceci est mon erreur')
}

function trytosendanerror() {
    throwerror()
}

try {
    trytosendanerror()
} catch (e) {
    console.log(e)
    console.log('Mais tout vas bien c"est pas grave')
}
console.log('tototo')