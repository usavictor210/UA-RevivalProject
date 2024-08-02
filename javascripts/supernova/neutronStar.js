function getStarLimit(player) {
    if (player.breakLimit && player.currentChallenge == 0 && !player.preSupernova) {
        return Number.POSITIVE_INFINITY;
    } else if (player.overlimit) {
        return new Decimal('5.592438960924321e400'); // This will change in the future
    } else {
        return Number.MAX_VALUE
    }
}

function getStarLimit() {
    if (player.breakLimit && player.currentChallenge == 0 && !player.preSupernova) {
        return Number.POSITIVE_INFINITY;
    } else if (player.overlimit) {
        return new Decimal('5.592438960924321e400'); // This will change in the future
    } else {
        return Number.MAX_VALUE
    }
}