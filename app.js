let clickUpgrades = {
    stamina: {
        price: 25,
        quantity: 0,
        multiplier: 1.5
    },
    strength: {
        price: 50,
        quantity: 0,
        multiplier: 3
    }

};

let autoUpgrades = {
    friend: {
        price: 100,
        quantity: 0,
        multiplier: 5
    },
    sluice: {
        price: 200,
        quantity: 0,
        multiplier: 10
    }


}


let crystals = 0

function mine() {
    crystals += 1
    if (clickUpgrades.stamina.quantity >= 1) {
        crystals += clickUpgrades.stamina.quantity


    }
    console.log(crystals);

    document.getElementById('Crystals').innerText = crystals

}

function update() {

    document.getElementById('Crystals').innerText = crystals

}

function buyStamina() {
    if (crystals >= clickUpgrades.stamina.price
    ) {
        clickUpgrades.stamina.quantity += 1
        crystals -= clickUpgrades.stamina.price
        clickUpgrades.stamina.price = clickUpgrades.stamina.price * 2
        console.log(clickUpgrades.stamina.quantity);
        update()
    }
    document.getElementById('buy-stamina').innerText = clickUpgrades.stamina.quantity
    document.getElementById('stamina-price').innerText = clickUpgrades.stamina.price
    document.getElementById('stamina-crystals').innerText = clickUpgrades.stamina.multiplier * clickUpgrades.stamina.quantity
}

function buyStrength() {
    if (crystals >= clickUpgrades.strength.price) {
        clickUpgrades.strength.quantity += 1
        crystals -= clickUpgrades.strength.price
        clickUpgrades.strength.price = clickUpgrades.strength.price * 2
        update()
    }
    document.getElementById('buy-strength').innerText = clickUpgrades.strength.quantity
    document.getElementById('strength-price').innerText = clickUpgrades.strength.price
    document.getElementById('strength-crystals').innerText = clickUpgrades.strength.multiplier * clickUpgrades.strength.quantity
}


function buyFriend() {
    if (crystals >= autoUpgrades.friend.price) {
        autoUpgrades.friend.quantity += 1
        crystals -= autoUpgrades.friend.price
        autoUpgrades.friend.price = autoUpgrades.friend.price * 2
    }
    update()
    // collectAutoUpgrades()
    document.getElementById('buy-friend').innerText = autoUpgrades.friend.quantity
    document.getElementById('friend-price').innerText = autoUpgrades.friend.price
    document.getElementById('friend-crystals').innerText = autoUpgrades.friend.multiplier * autoUpgrades.friend.quantity
}

function buySluice() {
    if (crystals >= autoUpgrades.sluice.price) {

        autoUpgrades.sluice.quantity += 1
        crystals -= autoUpgrades.sluice.price
        autoUpgrades.sluice.price = autoUpgrades.sluice.price * 2
    }
    update()
    document.getElementById('buy-sluice').innerText = autoUpgrades.sluice.quantity
    document.getElementById('sluice-price').innerText = autoUpgrades.sluice.price
    document.getElementById('sluice-crystals').innerText = autoUpgrades.sluice.multiplier * autoUpgrades.sluice.quantity
}

function initiateAutoUpgrades() {
    // console.log('interval start')

    document.getElementById('Crystals').innerHTML = crystals
    if (autoUpgrades.friend.quantity >= 1) {
        crystals += autoUpgrades.friend.quantity * autoUpgrades.friend.multiplier
    }
}


// Note Created an extra function (was jumping through too many hoops to achieve goal which effected my outcome)
// function collectAutoUpgrades() {
//     skill += 5
//     setInterval(initiateAutoUpgrades, 3000)
// }



// Note moved this outside a function since it wont initiate unless i have an actual quantity (initiateAutoUpgrades)
setInterval(initiateAutoUpgrades, 3000)


// Note Auto initiates functions so it will draw to page automatically

buyStamina()
buyStrength()
buyFriend()
buySluice()