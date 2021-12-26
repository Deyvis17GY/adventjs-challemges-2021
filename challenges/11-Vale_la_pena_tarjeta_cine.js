function shouldBuyFidelity(times) {
    const entry = 12;
    const discount = 0.75;
    let cardPrice = 250;
    let ticketPrice = times * entry;
    let auxCost = 0;
    let arrayCard = [cardPrice];
    for (let i = 1; i <= times; i++) {
        auxCost = (discount ** i) * entry;
        arrayCard.push(auxCost);
    }
    const costCard = arrayCard.reduce((a, b) => a + b, 0);
    return costCard < ticketPrice ? true : false;
}

console.log(shouldBuyFidelity(100));