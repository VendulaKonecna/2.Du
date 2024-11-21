const justFood = pocetLidi => {
    const cena = pocetLidi * 100
    return `Catering od Just Food pro ${pocetLidi} lidí za ${cena} Kč.`
}
pocetLidi = 10
console.log(justFood(pocetLidi))

const yourMama = pocetLidi => {
    const cena = pocetLidi * 200
    return `Catering od Your Mama pro ${pocetLidi} lidí za ${cena} Kč.`
}
pocetLidi = 10
console.log(yourMama(pocetLidi))

const flavourHaven = pocetLidi => {
    const cena = pocetLidi * 500
    return `Catering od Flavour Haven pro ${pocetLidi} lidí za ${cena} Kč.`
}
pocetLidi = 100
console.log(flavourHaven(pocetLidi))



const createEvent = (name, numberPeople, cateringFunction) => {
    const flavourHaven = cateringFunction => {

    }
    return ``
}
