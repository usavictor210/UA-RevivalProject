// Compression is either being moved to late Supernova, or being removed entirely.
// The execution of this idea is making me question whether I should attempt to implement a softcap
// such early on in the game. For now this will go unused.

function getCompressionInit() {
    compression = {
        current: new Decimal(0),
        highest: new Decimal(0),
    }

    return compression;
}

function getCompressionScale() {
    var scale;
    if (!player.breakLimit) {
        scale = ((Decimal.max(player.stars.sub(Math.sqrt(Number.MAX_VALUE)), 1).log10()) / Math.log10(Number.MAX_VALUE)) / 4;
        if (scale < 0) return 0
    } else {
        // need to increase scaling depending on how high scaling becomes
        scale = 1;
    }

    return scale;
}

function getCompressionMagnification() {
    return Decimal.pow(10, getCompressionScale())
}

function getCompressionEffect() {
    return Decimal.pow(3, player.compression.current);
}

function updateCompression() {
    player.compression.current = getCompressionMagnification()
    player.compression.highest = Decimal.max(player.compression.highest, player.compression.current)
    getElement("compressionDisplay").textContent = format(player.compression.current, 5, 0, 0)
    getElement("compressionReduction").textContent = format(getCompressionEffect(), 2, 0, 0) + "x"
}