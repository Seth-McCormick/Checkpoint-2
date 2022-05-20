let clickUpgrades = {
    stamina: {
        price: 50,
        quantity: 0,
        multiplier: 1
    },
    strength: {
        price: 250,
        quantity: 0,
        multiplier: 1
    }

};

let autoUpgrades = {
    stance: {
        price: 300,
        quantity: 0,
        multiplier: 5
    },
    moreArms: {
        price: 1000,
        quantity: 0,
        multiplier: 10
    }


}


let skill = 0

function mine() {
    skill += 1
    if (clickUpgrades.stamina.quantity >= 1) {
        skill += clickUpgrades.stamina.quantity


    }
    console.log(skill);

    document.getElementById('skill').innerText = skill

}

function update() {

    document.getElementById('skill').innerText = skill

}

function buyStamina() {
    if (skill >= clickUpgrades.stamina.price
    ) {
        clickUpgrades.stamina.quantity += 1
        skill -= clickUpgrades.stamina.price

        console.log(clickUpgrades.stamina.quantity);
        update()
    }
    document.getElementById('buy-stamina').innerHTML = clickUpgrades.stamina.quantity
}


function buyStance() {
    if (skill >= autoUpgrades.stance.price) {
        autoUpgrades.stance.quantity += 1
        skill -= autoUpgrades.stance.price

    }
    update()
    // collectAutoUpgrades()
    document.getElementById("buy-stance").innerHTML = autoUpgrades.stance.quantity

}

function initiateAutoUpgrades() {
    console.log('interval start')

    document.getElementById('skill').innerHTML = skill
    if (autoUpgrades.stance.quantity >= 1) {
        skill += autoUpgrades.stance.quantity * autoUpgrades.stance.multiplier
    }
}


// Note Created an extra function (was jumping through too many hoops to achieve goal which effected my outcome)
// function collectAutoUpgrades() {
//     skill += 5
//     setInterval(initiateAutoUpgrades, 3000)
// }



// Note moved this outside a function since it wont initiate unless i have an actual quantity (initiateAutoUpgrades)
setInterval(initiateAutoUpgrades, 3000)
// collectAutoUpgrades()



