const age = prompt('Inserisci la tua età');
console.log('age', age, typeof age);

const ageNumber = parseInt(age);
console.log('ageNumber', ageNumber, typeof ageNumber);


const distance = prompt('Inserisci distanza da percorrere');
console.log(distance, typeof distance);

const distanceNumber = parseInt(distance);
console.log('distanceNumber', distanceNumber, typeof distanceNumber);

const pricePerKm = 0.21;
let totalePrice;

if (distanceNumber >= 1) { //validazione di sicurezza

    totalePrice = distanceNumber * pricePerKm;

    if(ageNumber < 18){
        totalePrice = totalePrice - totalePrice * 0.2
    }else if(ageNumber >= 65){
        totalePrice = totalePrice - totalePrice * 0.4
    }


    console.log(totalePrice.toFixed(2));

}else{
    console.log('Distanza non valida');
}










