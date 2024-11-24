const justFood = pocetLidi => {
    const cena = pocetLidi * 100
    return `Catering od Just Food pro ${pocetLidi} lidí za ${cena} Kč.`
}


const yourMama = pocetLidi => {
    const cena = pocetLidi * 200
    return `Catering od Your Mama pro ${pocetLidi} lidí za ${cena} Kč.`
}


const flavourHaven = pocetLidi => {
    const cena = pocetLidi * 500
    return `Catering od Flavour Haven pro ${pocetLidi} lidí za ${cena} Kč.`
}


const createEvent = (name, numberPeople, cateringFunction) => {
    return `Událost ${name} s ${cateringFunction(numberPeople)}`
}
 
document.body.innerHTML += `<p>${justFood(10)}</p>`
document.body.innerHTML += `<p>${yourMama(10)}</p>`
document.body.innerHTML += `<p>${flavourHaven(10)}</p>`
document.body.innerHTML += `<p>${createEvent("Inaugurace prezidenta", 100, flavourHaven)}</p>`