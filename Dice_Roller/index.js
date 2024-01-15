function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1; //random number between 1 and 6
        values.push(value);
        images.push(`<img src="images/dice${value}.png">`);
    }

    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(``);
}