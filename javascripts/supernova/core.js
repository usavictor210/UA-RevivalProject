function getDefaultSupernova() {
	var supernova = {
		playtime: 0,
		fastest: 9999999999,
		neutronStars: {
			amount: new Decimal(0),
			total: new Decimal(0)
		},
		upgrades: [],
		inVoid: false,
	}

    return supernova
}