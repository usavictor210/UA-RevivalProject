function getDefaultTransfer() {
    var transfer = {
		playtime: 0,
		fastest: 9999999999,
		points: {
			amount: new Decimal(0),
			total: new Decimal(0)
		},
		upgrades: [],
	}

    return transfer
}
