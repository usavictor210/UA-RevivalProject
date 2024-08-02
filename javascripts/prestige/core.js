function getDefaultPrestige() {
    var prestige = {
        playtime: 0,
        fastest: 9999999999,
        power: new Decimal(1),
        anchors: {
            amount: 0,
            highest: 0
        }
    }

    return prestige
}
