// import functions and grab DOM elements
import { getComputers, getPhones, getPizzas, getSpeaker } from './fetch-utils.js';

const pizzaEL = document.querySelector('.pizza');
const computerEL = document.querySelector('.computer');
const phoneEL = document.querySelector('.phone');
const speakerEL = document.querySelector('.speaker');
// let state


window.addEventListener('load', async() => {
    const pizzas = await getPizzas();
    // console.log(pizzas);

    for (const pizza of pizzas) {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const p1 = document.createElement('p');

        div.classList.add('pizza-item');
        p.textContent = pizza.topping;
        p1.textContent = pizza.sauce;
        div.append(p, p1);
        pizzaEL.append(div);
    }
});


window.addEventListener('load', async() => {
    const computers = await getComputers();


    for (const computer of computers) {
        const divComputerItem = document.createElement('div');
        const pBrand = document.createElement('p');
        const pSoftware = document.createElement('p');
        const pStorage = document.createElement('p');
        const pRAM = document.createElement('p');

        divComputerItem.classList.add('computer-item');
        pBrand.textContent = computer.BRAND;
        pSoftware.textContent = computer.SOFTWARE;
        pStorage.textContent = computer.STORAGE_IN_GB;
        pRAM.textContent = computer.RAM_IN_GB;

        divComputerItem.append(pBrand, pSoftware, pStorage, pRAM);
        computerEL.append(divComputerItem);
    }
  
});


window.addEventListener('load', async() => {
    const phones = await getPhones();


    for (const phone of phones) {
        const divPhoneItem = document.createElement('div');
        const pBrand = document.createElement('p');
        const pRELEASEDATE = document.createElement('p');
        const pSIZE = document.createElement('p');
        const pSALES = document.createElement('p');

        divPhoneItem.classList.add('phone-item');

        pBrand.textContent = phone.BRAND;
        pRELEASEDATE.textContent = phone.REALEASE_DATE;
        pSIZE.textContent = phone.SIZE_INCHES;
        pSALES.textContent = phone.SALES_IN_MILLIONS;


        divPhoneItem.append(pBrand, pRELEASEDATE, pSIZE, pSALES);
        phoneEL.append(divPhoneItem);
    }
  
});


window.addEventListener('load', async() => {
    const speakers = await getSpeaker(); 

    for (const speaker of speakers) {
        const divSpeakerItem = document.createElement('div');
        const pBRAND = document.createElement('p');
        const pPRICE = document.createElement('p');
        const pAMAZONRATING = document.createElement('p');
        const pHOW_LOUD = document.createElement('p');

        divSpeakerItem.classList.add('speaker-item');

        pBRAND.textContent = `Brand: ${speaker.BRAND}`;
        pPRICE.textContent = `$${speaker.PRICE}`;
        pAMAZONRATING.textContent = `Amazon Rating: ${speaker.AMAZON_RATING}`;
        pHOW_LOUD.textContent = `From 1-5 How Loud: ${speaker.HOW_LOUD}`;

        divSpeakerItem.append(pBRAND, pPRICE, pAMAZONRATING, pHOW_LOUD);


        speakerEL.append(divSpeakerItem);
    }
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
