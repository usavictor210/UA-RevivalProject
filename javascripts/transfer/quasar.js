// The quasar will unlock on transfer, but full capability is seen after supernova
function quasarInit() {
    var quasar = {
        active: false,
        lightness: new Decimal(0),
        darkness: new Decimal(0),
        upgrades: [
            
        ],
        rebuyableUpg: [
            // first 8 are light1-4 and dark1-4
            null, 0, 0, 0, 0, 0, 0, 0, 0,
            // any future upgrades are pending
        ]
    }

    return quasar;
}

// unlock condition will vary between challenges and the like
function canUnlockQuasar() {
    return player.prestigePeak[1].gte(500)
}

// simple answer to darkness is to check whether this is false, however there may be times where you can't generate both
function canGenerateLight() {
    var starLimit = new Decimal(Number.MAX_VALUE)
    return player.stars.lte(starLimit) && player.quasar.lightness.lt(getLightnessCap())
}

function canGenerateDarkness() {
    return !canGenerateLight() && player.quasar.darkness.lt(getDarknessCap())
}

function getLightnessGenerateRate() {
    return new Decimal(0.001).times(fetchQuasarUpgEffect(1))
}

function getDarknessGenerateRate() {
    return new Decimal(0.0005).times(fetchQuasarUpgEffect(5))
}

function getLightnessCap() {
    return new Decimal(1).times(fetchQuasarUpgEffect(7))
}

function getDarknessCap() {
    return 1
}

function updateQuasar() {
    if (canUnlockQuasar() && (player.quasar === undefined || player.quasar.active == false)) {
        player.quasar = quasarInit()
        player.quasar.active = true
        newMilestone(23)
    }

    if (player.quasar.active) {
        getElement("quasarLocked").style = "display: none;"
        getElement("quasar").style = "display: inline-block;"
        getElement("lnAmount").textContent = format(player.quasar.lightness, 3, 0, false) + " / " + format(getLightnessCap(), 3, 0, false)
        getElement("dnAmount").textContent = format(player.quasar.darkness, 3, 0, false) + " / " + format(getDarknessCap(), 3, 0, false)
        
        for (let i = 1; i < 5; i++) {
            //console.log(i)
            getElement("lightUpg" + i + "eff").textContent = getQuasarUpgEffectDescription(i, "light" + i)
            getElement("lightUpg" + i + "cost").textContent = format(calculateQuasarRebuyableUpgCost(i, player.quasar.rebuyableUpg[i]), 3, 0, false) + " lightness"
            getElement("darkUpg" + i + "eff").textContent = getQuasarUpgEffectDescription(4 + i, "dark" + i)
            getElement("darkUpg" + i + "cost").textContent = format(calculateQuasarRebuyableUpgCost(4 + i, player.quasar.rebuyableUpg[4 + i]), 3, 0, false) + " darkness"
        }
    }
}

// base cost is before any purchases,
// multiplier is the cost multiplier after every purchase
var quasarDefaultUpg = {
    lightBaseCosts: [
        Infinity, 0.05, 0.1, 0.15, 4.0
    ],
    darkBaseCosts: [
        Infinity, 0.025, 0.1, 0.25, 4.0
    ],
    lightBaseMult: [
        Infinity, 1.5, 2.5, 3, 4
    ],
    darkBaseMult: [
        Infinity, 1.5, 1.8, 2, 6
    ]
}

// should i really let the player buy light and dark upgrades hundreds of millions of times
// i would be scaling the costs way before that point
// note this is for one upgrade; I did not account for geometric formula calculations.
function calculateQuasarRebuyableUpgCost(id, times) {
    if (id == 0) return null
    if (id < 5) return new Decimal(quasarDefaultUpg.lightBaseCosts[id]).times(Decimal.pow(quasarDefaultUpg.lightBaseMult[id], times));
    else return new Decimal(quasarDefaultUpg.darkBaseCosts[(id % 5) + 1]).times(Decimal.pow(quasarDefaultUpg.darkBaseMult[(id % 5) + 1], times));
}

function buyQuasarUpg(id) {
    // lightness if rebuyable id < 4
    cost = calculateQuasarRebuyableUpgCost(id, player.quasar.rebuyableUpg[id])
    if (id < 5) {
        console.log(id + " " + cost)
        if (player.quasar.lightness.gte(cost)) {
            player.quasar.lightness = player.quasar.lightness.sub(cost)
            player.quasar.rebuyableUpg[id]++
        }
    } else {
        console.log("alt " + id % 4 + " " + cost)
        if (player.quasar.darkness.gte(cost)) {
            player.quasar.darkness = player.quasar.darkness.sub(cost)
            player.quasar.rebuyableUpg[id]++
        }
    }
}

function getQuasarUpgEffectDescription(internal, id) {
    let count = player.quasar.rebuyableUpg[internal];
    switch (id) {
        case "light1": return format(fetchQuasarUpgEffect(1), 3, 0, false) + "x → " + format(fetchQuasarUpgEffect(1, (count + 1)), 3, 0, false) + "x"
        case "light2": return format(fetchQuasarUpgEffect(2), 3, 0, false) + "x → " + format(fetchQuasarUpgEffect(2, (count + 1)), 3, 0, false) + "x"
        case "light3": return "÷" + format(fetchQuasarUpgEffect(3), 3, 0, false) + " → ÷" + format(fetchQuasarUpgEffect(3, (count + 1)), 3, 0, false)
        case "light4": return "Improve varying star features"

        case "dark1": return format(fetchQuasarUpgEffect(5), 3, 0, false) + "x → " + format(fetchQuasarUpgEffect(5, (count + 1)), 3, 0, false) + "x"
        case "dark2": return format(fetchQuasarUpgEffect(6), 3, 0, false) + "x → " + format(fetchQuasarUpgEffect(6, (count + 1)), 3, 0, false) + "x"
        case "dark3": return "Cap is " + format(fetchQuasarUpgEffect(7), 3, 0, false) + "x → " + format(fetchQuasarUpgEffect(7, (count + 1)), 3, 0, false) + "x"
        case "dark4": return format(fetchQuasarUpgEffect(8), 3, 0, false) + " → " + format(fetchQuasarUpgEffect(8, count + 1), 3, 0, false)
    }
}

function fetchQuasarUpgEffect(id, purchaseTimes = player.quasar.rebuyableUpg[id]) {
	switch (id) {
		case 1: return Decimal.pow(1.15, purchaseTimes)
		case 2: return Decimal.pow(1.15, purchaseTimes)
		case 3: return Decimal.pow(new Decimal(8).times(Decimal.sqrt(player.quasar.lightness)), purchaseTimes / 3)
		case 5: return Decimal.pow(1.25, purchaseTimes)
		case 6: return Decimal.pow(1.1, purchaseTimes)
		case 7: return Decimal.pow(2, purchaseTimes)
        case 8: return Decimal.pow(new Decimal(Number.MAX_VALUE), (1 + 0.5 * purchaseTimes))
	}
}
