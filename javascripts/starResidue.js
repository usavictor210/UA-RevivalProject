function getStarResEffect() {
    var multi = getStarResMultiplier()

    return Decimal.max(Decimal.log(player.starRes.amount, 50) + 1, 1).times(multi);
}

function getStarResMultiplier() {
    var perCondenseMult = player.transferUpgrades.includes(9) ? 2 : 1.75
    var condenseMult = Decimal.pow(perCondenseMult, Math.max(getTotalCondenses(), 0))
    var multi = new Decimal(1);

    multi = multi.times(condenseMult)
    if (player.transferUpgrades.includes(4)) multi.times(upgMults.tupg4)
    return multi
}

function getDefaultStarRes() {
	var starRes = {
        amount: new Decimal(1),
        highest: new Decimal(1),
        upgrades: {
            condense: {
                times: 0,
                mostCondenses: 0
            }
        },
	}

	return starRes;
}

function getStarResProduction() {
    var multi = new Decimal(1);
    var base = getTotalBoughtResBonus() / 100;
    
    if (player.prestigePower.gte(1)) multi = multi.times(Decimal.max(player.prestigePower.log(3), 1))
    if (player.transferUpgrades.includes(2)) multi = multi.times(upgMults.tupg2)
    if (player.transferUpgrades.includes(6)) multi = multi.times(Decimal.pow(1.1, getTotalCondenses()))
    if (player.quasar.active) multi = multi.times(fetchQuasarUpgEffect(2))
    
    var final = multi.times(base)
    return final;
}

function updateStarRes() {
    // Show automatically if already reset once for a tier
    var showStarRes = false;
    for (var i = 0; i < 6; i++) {
        if (player.prestiges[i] > 0) {
            showStarRes = true;
            break;
        }
    }
    
    if (!showStarRes && getTotalBought() < 1) {
        getElement("starResDisplay").style = "display: none;"
        getElement("starResImpact").style = "display: none;"
        getElement("condenseResidue").style = "display: none;"
    } else {
        getElement("starResDisplay").style = "text-align: center; display: inline;"
        getElement("starResImpact").style = "text-align: center; display: inline;"
        getElement("condenseResidue").style = "width:256px; height:64px; display: inline-block;"
    }
    getElement("starResImpact").innerHTML = format(player.starRes.amount, 2, 0, 0) + " units (+" + format(getStarResProduction(), 3, 0, 0) + "/sec) of star residue give a " + format(getStarResEffect(), 3, 0, 0) + "x bonus to all generators";
    getElement("starResDisplay").innerHTML = "Star residue is accumulating based on total generators bought"
    if (getTotalCondenses() > 0) {
        getElement("starResImpact").innerHTML += "<br>You have condensed " + getTimesCondensed() + " time" + (getTimesCondensed() == 1 ? "" : "s")
        if (getFreeCondenses() > 0) {
            getElement("starResImpact").innerHTML += " and have " + getFreeCondenses() + " free condense" + (getFreeCondenses() == 1 ? "" : "s");
        }
        getElement("starResImpact").innerHTML += ", multiplying the effect by " + format(getStarResMultiplier(), 3, 0, 0) + "x";
    }
    if (player.prestigePower.gt(1)) {
        getElement("starResDisplay").innerHTML += " and prestige power"
    }
    if (player.generators[9].bought > 0 || player.prestigePower.gt(1)) {
        getElement("starResDisplay").innerHTML += "<br>(Tier 10s count as 4 generators each)"
    }

    var word = player.transferUpgrades.includes(10) ? "Requires " : "Costs " 

    getElement("condenseResidue").innerHTML = "Condense star residue into something greater<br>" + word + format(getCondenseCost(getTimesCondensed()), 3, 0, 0) + " residue";
    if (player.starRes.amount.gte(getCondenseCost(getTimesCondensed()))) {
        updateClass("condenseResidue",'longButton')
    } else {
        updateClass("condenseResidue",'shopUnafford')
    }
}

function getCondenseCost(count) {
    var multi = new Decimal(1);
    var tupg10Mult = player.transferUpgrades.includes(10) ? 2 / 3 : 1;
    var tupg11Mult = player.transferUpgrades.includes(11) ? 1 + Decimal.logarithm((player.prestigePeak[0].log10() + 1), 4) : 1
    multi = multi.times(tupg10Mult)

    if (count < 5) {
        return Decimal.pow(25, count * 1/3 + 1).times(multi).div(tupg11Mult)
    } else {
        return Decimal.pow(1.828e3, (count - 4) * 2/5 + 1).times(multi).div(tupg11Mult)
    }
}

function buyStarCondense() {
    if (player.starRes.amount.gte(getCondenseCost(getTimesCondensed()))) {
        if (!(player.transferUpgrades.includes(10))) {
            player.starRes.amount = player.starRes.amount.sub(getCondenseCost(getTimesCondensed()));
        }
        player.starRes.upgrades.condense.times++;
        //showStarResImpact(player.starRes.upgrades.condense.times)
    }
}

function showUniqueUnlock(id) {
	var milestoneBox = getElement('milestone')
	milestoneBox.style.transform = 'translate(0%, 0%)'
	clearTimeout(showMilestoneTimeout)
	showMilestoneTimeout = setTimeout(function() {
		milestoneBox.style.transform = 'translate(-100%, 0%)';
	}, 6000)

	updateElement('milestoneMessage', '')
	updateElement('milestoneRequirement', '')
	updateElement('milestoneCheck', '')
}

function getTimesCondensed() {
    return player.starRes.upgrades.condense.times;
}

function getFreeCondenses() {
    var free = 0;

    if (player.transferUpgrades.includes(12)) free += Math.floor(Math.sqrt(new Decimal(player.prestigePeak[1]).log(4)))
    
    return free;
}

function getTotalCondenses() {
    return getTimesCondensed() + getFreeCondenses()
}

function resetStarResidue(tier) {
    if (tier > 1) player.starRes = getDefaultStarRes()
    else {
        player.starRes.amount = new Decimal(1);
        player.starRes.upgrades.condense.times = 0;
    }
}

function getTotalBoughtResBonus() {
    var total = 0;
    for (var i = 0; i < 9; i++) {
        total += player.generators[i].bought
    }
    total += (player.generators[9].bought * 4)
    return total;
}

// getTotalBought() will still be useful