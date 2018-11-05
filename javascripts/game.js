diffMultiplier = 1
player={version:0.7,
	beta:20.41,
	alpha:0,
	playtime:0,
	updateRate:20,
	lastUpdate:0,
	notation:'Standard',
	customMixed:[['Standard',0],['Letters',306],['Scientific',2109],['Logarithm',1e4]],
	layout:1,
	offlineProgress:true,
	explanations:false,
	useMonospaced:false,
	hotkeys:true,
	theme:'Normal',
	showProgress:false,
	customScrolling:false,
	milestones:0,
	storyEnabled:false,
	stars:new Decimal(10),
	totalStars:new Decimal(0),
	generators:[{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0}],
	prestiges:[0,0,0,0,0,0],
	prestigePeak:[new Decimal(1),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)],
	highestTierPrestiges:[0,0,0,0,0,0],
	prestigePlaytime:0,
	prestigePower:new Decimal(1),
	transferPlaytime:0,
	transferPoints:new Decimal(0),
	totalTP:new Decimal(0),
	gainPeak:[0,0],
	transferUpgrades:[],
	overlimit:false,
	supernovaPlaytime:0,
	fastestSupernova:Number.MAX_VALUE,
	lastSupernovas:[],
	neutronStars:new Decimal(0),
	totalNS:new Decimal(0),
	supernovaUpgrades:[],
	headstarts:true,
	supernovaHeadstart:true,
	supernovaTabsUnlocked:0,
	achievements:[],
	ach2possible:false,
	challengeUnlocked:0,
	currentChallenge:0,
	challPow:new Decimal(1),
	chall14Stuff:[],
	challengesCompleted:{},
	challConfirm:true,
	rewardBoxes:[0,0,0],
	autobuyers:{},
	buyinshopFeatures:[],
	autobuyerPriorities:[1,2,3,4,5,6,7,8,9,10],
	preBreakAutonovaOptions:{time:60,overlimit:true},
	preSupernova:false,
	breakLimit:false,
	ppHeadstartUpgrades:[0,0,0],
	neutronBoosts:{basePower:0,powers:[0,0,0],ppPower:0},
	neutrons:new Decimal(0),
	neutronTiers:[{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0}],
	totalNeutrons:new Decimal(0),
	destabilization:{unstableStars:new Decimal(0),
		timeLeft:0,
		activated:false,
		lastTick:0,
		upgrades:[0,0,0,0]},
	secondSetUnlocked:false,
	aliens:{lastTick:0,
		amount:0,
		progress:0,
		resets:0,
		kept:0,
		upgrades:[0,0,0,0,0,0] /*1: Interval reduction
			2: Progress gain
			3: Amount limit
			4: Special # of supernovas
			5: Keep the fraction of free neutron boost powers each alien supernova
			6: Interval increase each alien supernova*/},
	quarkStars:new Decimal(0),
	perks:{totalQuarkStars:new Decimal(0),
		perkShards:0,
		upgrades:{},
		levels:{},
		respec:false},
	stellarPillars:{upgrades:[],
		pillarUsed:0,
		reset:false},
	unlockables:{},
	neutronChallengeUnlocked:0,
	currentNeutronChallenge:0,
	neutronChallengesCompleted:{},
	stellarBots:{},
	particles:new Decimal(0),
	strings:new Decimal(0),
	cheatOptions:{breakLimitNS:false}}
ordinals=['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th']
				
lastSave=0
timeSinceSave=0
themeSelected='Normal'
milestoneRequirements=['Buy your first tier 1 generator','Buy your first tier 2 generator','Buy your first tier 3 generator','Buy your first tier 4 generator','Buy your first tier 5 generator','Buy your first tier 6 generator','Buy your first tier 7 generator','Buy your first tier 8 generator','Buy your first tier 9 generator','Buy your first tier 10 generator',
	'Buy 5 10th tier generators','Prestige for the first time','Reach 5x prestige power','Reach 10x prestige power','Reach 20x prestige power','Reach 50x prestige power','Reach 75x prestige power','Transfer for the first time','Buy 2 transfer upgrades','Buy 4 transfer upgrades',
	'Buy 8 transfer upgrades','Buy 12 transfer upgrades','Buy 14 transfer upgrades','Supernova for the first time','Buy 2 supernova upgrades','Buy 4 supernova upgrades','Buy 8 supernova upgrades','Buy 12 supernova upgrades','Earn 100 neutron stars in total','Unlock challenges',
	'Complete a challenge','Complete 2 challenges','Complete 4 challenges','Complete 8 challenges','Complete 12 challenges','Max all of autobuyer upgrades','Buy 1 buyinshop feature','Buy 2 buyinshop features','Buy 4 buyinshop features','Break limit!',
	'Buy all buyinshop features','Reach 5 neutron boost power','Reach 10 neutron boost power','Reach 20 neutron boost power','Buy your first neutron tier 1 generator','Buy your first neutron tier 2 generator','Buy your first neutron tier 3 generator','Buy your first neutron tier 5 generator','Buy your first neutron tier 8 generator','Buy your first neutron tier 10 generator']
storyMessages=['Breakfast is ready!','Sorry, but this breakfast belongs to yo- oh wait..','Our home got invaded by aliens! Oh no, we need to do something!','Quick, put on your clothes and lets go with your parents!','Phew, that was close. We are going to the planet who invaded us.','We made it to the airport, lets fly around to the rocket!','And here we are. I could control the rocket, if I was the owner.','This is it, get your spacesuit on.','Blast off! We are going to the planet that invaded us!','Oooo, stars are shiny. Wait a minute... whenever I see, I see too many stars. Who did this?',
	'The person that generated stars must be the god of stellar.','Oh no! All of our favorite stars are gone! What should I do now?!','Wait a minute, this guy reproduces everything! He must be fantastic for remaking our favorite stars too!','Get ready... we are now raiding somewhere that invaded us!']
achList={names:['Speedrunner','I don\'t need those','What are you doing?','We can\'t show tier 11','Supernova Demon','Is the person Todd Rogers?','Do I really need to upgrade?','Challenge Speedway','Renewed Novas'],
	requirements:['Supernova in 10 seconds without headstarts','Supernova in 90 seconds without autobuyers, hotkeys, and max all','Buy 40 tier 1 generators without having transfer upgrades nor prestige power','Buy 111 tier 10 generators but buy tier 9 generator once','Supernova without tiers 6-10','Supernova in 0.2 seconds without headstarts','Supernova without having transfer upgrades','Complete a challenge in under a second','Supernova while you are in pre-supernova mode']}
explainList={stars:'<b>Stars</b><br>Stars is your main currency and is a currency part of the game. You could buy generators by spending this!',gens:'<b>Generators</b><br>Generators is a production part of this game. There are 10 tiers in this game, each tier will produces the previous tier but the first tier would produces stars.<br>When you buy one, the generator you bought will produce 5% faster multiplicatively.',prestige:'<b>Prestige</b><br>Prestige is a <i>soft</i> reset but you keep some of your features and content.<br>In this game, if you prestige right away, you will get a production multiplier bonus for all of the generators multiplicatively.',transfer:'<b>Transfer</b><br>Transfer is like prestige, but it resets all of your prestiges and give the player upgrades instead of production multiplier. The currency when you transfer is called transfer points, where you can spend upgrades with it.',
	tupg1:'<b>Transfer upgrade <span style="font-size:66.6%">#3</span></b><br>This upgrade would increases the production multiplier by 2% multiplicatively every time the amount reaches the powers of ten.',tupg2:'<b>Transfer upgrade <span style="font-size:66.6%">#1</span></b><br>This upgrade would increases the production multiplier of all generators as the time increases after you started the game.',tupg3:'<b>Transfer upgrade <span style="font-size:66.6%">#2</span></b><br>This upgrade would increases the production multiplier of all generators as the time increases after you transfered.',tupg4:'<b>Transfer upgrade <span style="font-size:66.6%">#4</span></b><br>This upgrade would increases the production multiplier of all generators as your prestige power peak is higher.',tupg5:'<b>Transfer upgrade <span style="font-size:66.6%">#5</span></b><br>This upgrade would increases the production multiplier of all generators as your transfer point peak is higher.',tupg6:'<b>Transfer upgrade <span style="font-size:66.6%">#6</span></b><br>This upgrade would increases the prestige power gain as itself.',tupg7:'',
	tupg8:'<b>Transfer upgrade <span style="font-size:66.6%">#8</span></b><br>This upgrade will affects the price of tier 10 generators that buying increases the cost in lower rate.',tupg9:'<b>Transfer upgrade <span style="font-size:66.6%">#9</span></b><br>This <i>simple</i> upgrade doubles the prestige power gain.',tupg10:'<b>Transfer upgrade <span style="font-size:66.6%">#10</span></b><br>This upgrade will affects tier 10 generators that buying increases the production multiplier by 7% instead.',tupg11:'<b>Transfer upgrade <span style="font-size:66.6%">#11</span></b><br>This upgrade will increases the production multiplier of all generators by 0.145% each time you buy tier 5 generator.',tupg12:'<b>Transfer upgrade <span style="font-size:66.6%">#12</span></b><br>This upgrade will increases the production multiplier of all generators by 3x!',tupg13:'<b>Transfer upgrade <span style="font-size:66.6%">#13</span></b><br>You will unlock this upgrade after buying first 12 upgrades. Then this upgrade would increases prestige power gain as you gain more transfer points.',tupg14:'<b>Transfer upgrade <span style="font-size:66.6%">#14</span></b><br>You will unlock this upgrade after buying first 12 upgrades. Then this upgrade would increases transfer point gain as you have higher prestige power.',
	supernova:'',snupg1:'<b>Supernova upgrade <span style="font-size:66.6%">#1</span></b><br>This upgrade would increases the production multiplier of all generators as you buy more generators.',snupg4:'<b>Supernova upgrade <span style="font-size:66.6%">#2</span></b><br>This upgrade would increases the production multiplier of all generators as you gain more stars from the total amount.',snupg5:'<b>Supernova upgrade <span style="font-size:66.6%">#3</span></b><br>This upgrade would increases the production multiplier of all generators then decreases it slowly after you supernova.',snupg6:'<b>Supernova upgrade <span style="font-size:66.6%">#4</span></b><br>This upgrade would increases the prestige power gain as you supernova many times.',
	snupg7:'<b>Supernova upgrade <span style="font-size:66.6%">#5</span></b><br>This upgrade would increase the transfer point gain as you have more neutron stars.',snupg8:'<b>Supernova upgrade <span style="font-size:66.6%">#6</span></b><br>This upgrade would increase the prestige power gain by 3x.',snupg9:'<b>Supernova upgrade <span style="font-size:66.6%">#7</span></b><br>This upgrade would increase the bonus per tier 10 generator to 1.13x multiplicatively.',snupg10:'<b>Supernova upgrade <span style="font-size:66.6%">#8</span></b><br>This upgrade would increases the production multiplier of all generators as you bought more transfer upgrades.',
	snupg11:'<b>Supernova upgrade <span style="font-size:66.6%">#9</span></b><br>This upgrade would reduce the costs for generators as you have more prestige power.',snupg12:'<b>Supernova upgrade <span style="font-size:66.6%">#10</span></b><br>This upgrade would increases the production multiplier of all generators.',snupg13:'<b>Supernova upgrade <span style="font-size:66.6%">#11</span></b><br>This upgrade would increases the production multiplier of all generators as you have shorter time for last transfer before supernovaing.',snupg14:'<b>Supernova upgrade <span style="font-size:66.6%">#12</span></b><br>This upgrade would increases the production multiplier of all generators by 10x.',
	snupg15:'<b>Supernova upgrade <span style="font-size:66.6%">#13</span></b><br>This upgrade would increases the production multiplier of all generators as you have more achievements.',snupg16:'<b>Supernova upgrade <span style="font-size:66.6%">#14</span></b><br>This upgrade would increases the production multiplier of tier 1 generator as you buy more tier 10 generators.',snupg2:'<b>Supernova upgrade <span style="font-size:66.6%">#15</span></b><br>This upgrade would start with all transfer upgrades bought.',snupg3:'<b>Supernova upgrade <span style="font-size:66.6%">#16</span></b><br>This upgrade would start with an increasing prestige power as your neutron stars increases.',
	autoupgrader:'<b>Autoupgrader</b><br>This autobuyer would automatically buy all transfer upgrades in order.',autotransfer:'<b>Autotransfer</b><br>This autobuyer would automatically transfer when TP gain reaches the amount times your transfer points or TP gain reached the another amount.',autoprestige:'<b>Autoprestige</b><br>This autobuyer would automatically prestige when PP gain reaches the amount times your prestige power.',autogenerator:'<b>Autogenerator</b><br>This autobuyer would automatically buy all generators.',autonova:'<b>Autonova</b><br>This autobuyer would automatically supernova when NS gain reaches the amount.',
	bisfeature1:'<b>Buyinshop feature <span style="font-size:66.6%">#1</span></b><br>This autobuyer feature allows autogenerator to buy multiple each tier per autobuyer interval.',bisfeature2:'<b>Buyinshop feature <span style="font-size:66.6%">#2</span></b><br>This autobuyer feature allows to change the order of autogenerator that wants to buy.',bisfeature3:'<b>Buyinshop feature <span style="font-size:66.6%">#3</span></b><br>This autobuyer feature allows to change the autoprestige multiplier (auto prestiges if prestige power gain reaches the multiplier times your prestige power)',bisfeature4:'<b>Buyinshop feature <span style="font-size:66.6%">#4</span></b><br>This autobuyer feature allows to change the autotransfer multiplier (auto transfer if transfer point gain reaches the multiplier times your transfer points)',bisfeature5:'<b>Buyinshop feature <span style="font-size:66.6%">#5</span></b><br>This autobuyer feature unlocks autotransfer in different way, which it waits for auto transfer when transfer point gain has been reached the value.',bisfeature6:'<b>Buyinshop feature <span style="font-size:66.6%">#6</span></b><br>This autobuyer feature unlocks autonova, which is a new kind for autobuyer to come.',
	nbPowers:'<b>Neutron boosts</b><br>Neutron boosts have some limited upgrades that increases the production multiplier of all generators except the last one. The first 3 upgrades will increases the production multiplier by the base, located before the exponents come; and you can spend it by either stars, transfer points, or neutron stars.<br>You can buy one of the upgrades up to 20 times (or 30 if you are buying with neutron stars instead), which is the maximum of these upgrade.<br>Beside neutron boosts, you can able to break limit for more stars! Hooray!',nbBase:'<b>Neutron boosts <span style="font-size:66.6%">Base upgrade</span></b><br>This upgrade would increase the base, located at the value before the exponents, for more powerful neutron boosts. You can buy this upgrade up to 10 times, which is the maximum of this upgrade.',nbPPPower:'<b>Neutron boosts <span style="font-size:66.6%">PP power</span></b><br>This upgrade will increase the prestige power gain from neutron boosts at sublinear (x<sup>n</sup> for all n<1) rates. You can buy this upgrade up to 5 times, which is the maximum of this upgrade.',
	neutronTiers:'<b>Neutron tiers</b><br>Beside the normal generators, there is another group of generators which called neutron tiers. Instead, the first generator in this group will produces neutrons, which translated to reduces the cost for all other generators; and buying one will increases the production multiplier by 5x multiplicatively!',snupg17:'<b>Supernova upgrade <span style="font-size:66.6%">#17</span></b><br>This upgrade will multiply neutron tier 1 generator by 10x instead of 5x.',snupg18:'<b>Supernova upgrade <span style="font-size:66.6%">#18</span></b><br>This upgrade will increases the production multiplier of neutron tier 2 generator as you have more neutrons.',snupg19:'<b>Supernova upgrade <span style="font-size:66.6%">#19</span></b><br>This upgrade will increases the production multiplier of neutron tier 3 generator as you bought more neutron tier 8 generators.',snupg20:'<b>Supernova upgrade <span style="font-size:66.6%">#20</span></b><br>This upgrade will increases the production multiplier of neutron tier 4 generator as you gain more prestige power.',snupg21:'<b>Supernova upgrade <span style="font-size:66.6%">#21</span></b><br>This upgrade will increases the production multiplier of neutron tier 5 generator as...',
	snupg22:'<b>Supernova upgrade <span style="font-size:66.6%">#22</span></b><br>This upgrade will increases the production multiplier of neutron tier 6 generator as...',snupg23:'<b>Supernova upgrade <span style="font-size:66.6%">#23</span></b><br>This upgrade will increases the production multiplier of neutron tier 7 generator as...',snupg24:'<b>Supernova upgrade <span style="font-size:66.6%">#24</span></b><br>This upgrade will increases the production multiplier of neutron tier 8 generator as...',snupg25:'<b>Supernova upgrade <span style="font-size:66.6%">#25</span></b><br>This upgrade will increases the production multiplier of neutron tier 9 generator as...',snupg26:'<b>Supernova upgrade <span style="font-size:66.6%">#26</span></b><br>This upgrade will increases the production multiplier of neutron tier 10 generator as...',
	growthRate:'<b>Growth rate</b><br>Growth rate means you will get a percentage of the resource you will earn in a second.<br>For example, 12% growth rate means you will earn 12% of your resources after a second.'}
tab='gen'
oldTab=tab
lastTab=tab
showTooMuch=false
showedTooMuch=false
showTooMuch2=false
showedTooMuch2=false
SNTab='upgrades'
oldSNTab=SNTab
genTab='tiers'
oldGenTab=genTab
HNTab='perks'
oldHNTab=HNTab
challTab='normal'
oldChallTab=challTab
oldLayout=player.layout
showMilestoneTimeout=null
clickedWrong=0

keysPressed=[]
timeframes={year:31556952,
	month:2629746,
	day:86400,
	hour:3600,
	minute:60,
	second:1}	
notOnFocus=true
notOnShift=1

const haListU=['','U','D','T','Q','Qi','S','Sp','O','N']
const haListT=['','D','V','T','Q','Qi','S','Sp','O','N']
const haListH=['','C','Dn','Tn','Qn','Qin','Sn','Spn','On','Nn']
const haListUS=['','U','D','T','Q','P','S','H','O','N']
const haListTS=['','D','V','T','Q','P','S','H','O','N']
const haListT2=['','MI','MC','NA','PC','FM']
const haListT2S=['','m','u','n','p','f']
const letters='abcdefghijklmnopqrstuvwxyz'
const colors=[[0.9,0,0],[0,0.9,0],[0,0,0.9],[0.9,0.9,0],[0,0.9,0.9],[0.9,0,0.9],[0.45,0.45,0.45],[0.9,0.9,0.9],[0.1,0.1,0.1],[0.9,0.45,0]]

costs={tiers:[],tupgs:[6,1,3,10,15,25,35,50,100,250,500,1000,3000,5000],snupgs:[1,15,300,1,1,1,2,2,3,4,5,6,8,9,10,12,1e55,1e70,1e85,1e100,1e110,1e120,1e135,1e150,1e165,1e180],intReduceCost:1,bisfeatures:[3000,5000,7500,10000,1e5,1e6,1e4,1e9],bbCost:1000,ppHeadstartUpgs:[],neutronBoosts:[0,0,0,0,0],neutronTiers:[],destabilization:[0,0,0,1e45]}
ppsSingles=[new Decimal(0)]
pps=[new Decimal(0)]
ppt=[new Decimal(0)]
upgMults={}
gainRate=[0,0]
starsLimit=Number.MAX_VALUE
maxValueLog=Math.log10(Number.MAX_VALUE)
maxValueLogSub1=maxValueLog-1
maxValueLogarithmicallySquared=Decimal.pow(10,maxValueLog*maxValueLog)
maxValueLogLog=Math.log10(maxValueLog)
tooMuch=false
ppHeadstart=new Decimal(1)
ppHSValue1=new Decimal(1)
ppHSValue2=new Decimal(1)
ppHSPreBreakLimit=new Decimal(1e16)
streqs=[200,3000,25000,1e12,1e25,1e200]
challreqs=[200,300,500,750,1000,1200,1500,1750,2000,2200,2500,2750]
neutronBoost=new Decimal(1)
neutronBoostPP=new Decimal(1)
ntppsSingles=[new Decimal(0)]
ntpps=[new Decimal(0)]
ntppt=[new Decimal(0)]
neutronPower=new Decimal(1)
dsInterval=5
dsTime=3600
dsPercentage=90
unstableStarsAfterActivation=new Decimal(0)
totalAliens=0
var gameLoopInterval
	
function updateElement(elementID,value) {
	document.getElementById(elementID).innerHTML=value
}
	
function updateClass(elementID,value) {
	document.getElementById(elementID).className=value
}
	
function moveElement(elementID,moveTo) {
	document.getElementById(moveTo).appendChild(document.getElementById(elementID))
}
	
function showElement(elementID,style) {
	document.getElementById(elementID).style.display=style
}
	
function hideElement(elementID) {
	document.getElementById(elementID).style.display='none'
}
	
function visibleElement(elementID) {
	document.getElementById(elementID).style.visibility='visible'
}
	
function invisibleElement(elementID) {
	document.getElementById(elementID).style.visibility='hidden'
}

function leftScroll(elementID) {
	document.getElementById(elementID).scrollLeft-=192
}

function rightScroll(elementID) {
	document.getElementById(elementID).scrollLeft+=192
}

function onFocus() {
	notOnFocus=false
}

function onUnfocus() {
	notOnFocus=true
}

function switchLayout() {
	player.layout=player.layout%2+1
}

function format(number,decimalPoints=2,offset=0,rounded=true) {
	if (number.mantissa==undefined) number = new Decimal(number)
	if (Number.isNaN(number.mantissa)) return '?'
	if (number.lte(Number.NEGATIVE_INFINITY)) return '-&#x221e;'
	if (number.gte(Number.POSITIVE_INFINITY)) return '&#x221e;'
	var notationChoosed=player.notation
	if (notationChoosed=='Mixed') {
		notationChoosed=getNotation(number.exponent)
	}
	if (notationChoosed=='CIF') {
		if (number.lt(1e4)) return number.toFixed(rounded?0:Math.min(Math.max(4-number.exponent,0),4))
	} else {
		if (number.lt(Math.pow(1000,offset+1))) return number.toFixed(rounded?0:Math.min(Math.max(decimalPoints-number.exponent,0),decimalPoints))
	}
	if (notationChoosed=='Standard') {
		var abbid=Math.floor(number.exponent/3)-offset-1
		var remainder=number.exponent%3
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+abbreviation(abbid)
	} else if (notationChoosed=='Long scale') {
		var abbid=Math.floor(number.exponent/3)-offset
		var remainder=number.exponent%3
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+abbreviationLong(abbid)
	} else if (notationChoosed=='Standard (short)') {
		var abbid=Math.floor(number.exponent/3)-offset-1
		var remainder=number.exponent%3
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+abbreviationShort(abbid)
	} else if (notationChoosed=='Letters') {
		var abbid=Math.floor(number.exponent/3)-offset
		var remainder=number.exponent%3
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+letter(abbid)
	} else if (notationChoosed=='Scientific') {
		var exponent=number.exponent-offset*3
		if (exponent>99999) {
			var exponentExponent=Math.floor(Math.log10(exponent))
			var exponentMantissa=exponent/Math.pow(10,exponentExponent)
			return (number.mantissa*Math.pow(10,offset*3)).toFixed(decimalPoints)+'e'+exponentMantissa.toFixed(2)+'e'+exponentExponent
		}
		return (number.mantissa*Math.pow(10,offset*3)).toFixed(decimalPoints)+'e'+exponent
	} else if (notationChoosed=='Engineering') {
		var remainder=number.exponent%3
		var exponent=number.exponent-remainder
		if (exponent>99999) {
			var exponentExponent=Math.floor(Math.log10(exponent))
			var exponentMantissa=exponent/Math.pow(10,exponentExponent)
			var exponentRemainder=exponentExponent%3
			exponentExponent-=exponentRemainder
			return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+'e'+(exponentMantissa*Math.pow(10,exponentRemainder)).toFixed(2-exponentRemainder)+'e'+exponentExponent
		}
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+'e'+exponent
	} else if (notationChoosed=='Logarithm') {
		var log=number.log10()
		if (log>=1e5) {
			var logLog=Math.log10(log)
			return 'ee'+logLog.toFixed(2)
		}
		return 'e'+log.toFixed(decimalPoints)
	} else if (notationChoosed=='Natural logarithm') {
		var log=number.log(2.718281828459045)
		if (log>=1e5) {
			var logLog=Math.log10(log)*2.30258509
			return 'e<sup>e^'+logLog.toFixed(2)+'</sup>'
		}
		return 'e^'+log.toFixed(decimalPoints)
	} else if (notationChoosed=='Repoalphabet') {
		var abbid=Math.floor(number.exponent/3)-offset
		var remainder=number.exponent%3
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+sameletter(abbid)
	} else if (notationChoosed=='Hyper-E') {
		var exponent=number.exponent-offset*3
		if (exponent>99999) {
			var log=number.log10()
			var logExponent=Math.floor(Math.log10(log))
			var logMantissa=log*Math.pow(0.1,logExponent)
			return logMantissa.toFixed(2)+'E'+logExponent+'#2'
		}
		return (number.mantissa*Math.pow(10,offset*3)).toFixed(decimalPoints)+'e'+exponent
	} else if (notationChoosed=='Original') {
		var abbid=Math.floor(number.exponent/3)-offset
		var remainder=number.exponent%3
		if (abbid>100) return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+letter(abbid)
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+abbreviation(abbid-1)
	} else if (notationChoosed=='Hybrid') {
		var abbid=Math.floor(number.exponent/3)-offset
		var remainder=number.exponent%3
		if (abbid>5) return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+letter(abbid+23)
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+abbreviation(abbid-1)
	} else if (notationChoosed=='Infinity') {
		var log=number.log10()/maxValueLog
		var logLog=Math.floor(Math.log10(log))
		if (logLog>6) {
			logLog=logLog/maxValueLog
			return '&#x221e;<sup>&#x221e;^'+logLog.toFixed(6)+'</sup>'
		}
		return '&#x221e;^'+log.toFixed(Math.min(6-logLog,4))
	} else if (notationChoosed=='Square exponent') {
		var srLog=Math.sqrt(number.log10())
		if (srLog>=1e5) {
			var srLogLog=Math.sqrt(Math.log10(srLog))
			return 'e(e('+srLogLog.toFixed(4)+'^2)^2)'
		}
		return 'e('+srLog.toFixed(decimalPoints*2)+'^2)'
	} else if (notationChoosed=='Polynominal exponent') {
		var peLog=Math.log10(number.log10())/maxValueLogLog
		return '10<sup>log<sub>10</sub>(&#x221e;)^'+peLog.toFixed(4)+'</sup>'
	} else if (notationChoosed=='Color') {
		var abbid=Math.floor(number.exponent/3)-offset
		var remainder=number.exponent%3
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+getColor(abbid)
	} else if (notationChoosed=='Megacolor') {
		var abbid=Math.floor(number.exponent/3)-offset
		var remainder=number.exponent%3
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+getMegacolor(abbid)
	} else if (notationChoosed=='Progress') {
		var abbid=Math.floor(number.exponent/3)-offset
		var remainder=number.exponent%3
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+getProgress(abbid)
	} else if (notationChoosed=='CIF') {
		return CIFformat(number)
	} else if (notationChoosed=='Overcomplicated') {
		var abbid=Math.floor(number.exponent/3)-offset
		var remainder=number.exponent%3
		return '<text style="'+getOvercomplicated(abbid)+'">'+(number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+'</text>'
	} else {
		return '?'
	}
}

function formatTime(s) {
	if (s < 1) {
		if (s < 0.002) return '1 millisecond'
		return Math.floor(s*1000)+' milliseconds'
	} else if (s < 59.5) {
		if (s < 1.005) return '1 second'
		return s.toPrecision(2)+' seconds'
	} else if (s < Number.POSITIVE_INFINITY) {
		var timeFormat=''
		var lastTimePart=''
		var needAnd=false
		var needComma=false
		for (id in timeframes) {
			if (id=='second') {
				s=Math.floor(s)
				if (s>0) {
					if (lastTimePart!='') {
						if (timeFormat=='') {
							timeFormat=lastTimePart
							needAnd=true
						} else {
							timeFormat=timeFormat+', '+lastTimePart
							needComma=true
						}
					}
					lastTimePart=s+(s==1?' second':' seconds')
				}
			} else if (id=='year') {
				var amount=Math.floor(s/31556952)
				if (amount>0) {
					s-=amount*31556952
					lastTimePart=format(amount,2,1)+(amount==1?' year':' years')
				}
			} else {
				var amount=Math.floor(s/timeframes[id])
				if (amount>0) {
					s-=amount*timeframes[id]
					if (lastTimePart!='') {
						if (timeFormat=='') {
							timeFormat=lastTimePart
							needAnd=true
						} else {
							timeFormat=timeFormat+', '+lastTimePart
							needComma=true
						}
					}
					lastTimePart=amount+' '+id+(amount==1?'':'s')
				}
			}
		}
		return timeFormat+(needComma?',':'')+(needAnd?' and ':'')+lastTimePart
	} else {
		return 'eternity'
	}
}

function formatCosts(number) {
	var notationChoosed=player.notation
	if (notationChoosed=='Mixed') notationChoosed=getNotation(number.exponent)
	if (number.gte(starsLimit)) {
		return '&#x221e;'
	} else if (number.lt(1)) {
		var exponent=-number.exponent
		if (player.notation=='Mixed') notationChoosed=getNotation(exponent)
		if (notationChoosed=='CIF') {
			var first=number.mantissa.toFixed(4)+'/'
		} else {
			var first=number.mantissa.toFixed(1)+'/'
			if (exponent<3) return first+Math.pow(10,exponent)
		}
		if (notationChoosed=='Standard') {
			var abbid=Math.floor(exponent/3)-1
			var remainder=exponent%3
			return first+Math.pow(10,remainder).toFixed(2-remainder)+abbreviation(abbid)
		} else if (notationChoosed=='Long scale') {
			var abbid=Math.floor(exponent/3)
			var remainder=exponent%3
			return first+Math.pow(10,remainder).toFixed(2-remainder)+abbreviationLong(abbid)
		} else if (notationChoosed=='Standard (short)') {
			var abbid=Math.floor(exponent/3)
			var remainder=exponent%3
			return first+Math.pow(10,remainder).toFixed(2-remainder)+abbreviationShort(abbid)
		} else if (notationChoosed=='Letters') {
			var abbid=Math.floor(exponent/3)
			var remainder=exponent%3
			return first+Math.pow(10,remainder).toFixed(2-remainder)+letter(abbid)
		} else if (notationChoosed=='Scientific') {
			if (exponent>99999) {
				var exponentExponent=Math.floor(Math.log10(exponent))
				var exponentMantissa=exponent/Math.pow(10,exponentExponent)
				return first+'1.00e'+exponentMantissa.toFixed(2)+'e'+exponentExponent
			}
			return first+'1.00e'+exponent
		} else if (notationChoosed=='Engineering') {
			var remainder=exponent%3
			var exponent=exponent-remainder
			if (exponent>99999) {
				var exponentExponent=Math.floor(Math.log10(exponent))
				var exponentMantissa=exponent/Math.pow(10,exponentExponent)
				var exponentRemainder=exponentExponent%3
				exponentExponent-=exponentRemainder
				return first+Math.pow(10,remainder).toFixed(2-remainder)+'e'+(exponentMantissa*Math.pow(10,exponentRemainder)).toFixed(2-exponentRemainder)+'e'+exponentExponent
			}
			return first+Math.pow(10,remainder).toFixed(2-remainder)+'e'+exponent
		} else if (notationChoosed=='Logarithm') {
			if (exponent>99999) {
				var logLog=Math.log10(exponent)
				return first+'ee'+logLog.toFixed(2)
			}
			return first+'e'+exponent+'.00'
		} else if (notationChoosed=='Natural logarithm') {
			var log=exponent*2.302585092994046
			if (log>=1e5) {
				var logLog=Math.log10(log)*2.302585092994046
				return first+'e<sup>e^'+logLog.toFixed(2)+'</sup>'
			}
			return first+'e^'+log.toFixed(2)
		} else if (notationChoosed=='Repoalphabet') {
			var abbid=Math.floor(exponent/3)
			var remainder=exponent%3
			return first+Math.pow(10,remainder).toFixed(2-remainder)+sameletter(abbid)
		} else if (notationChoosed=='Hyper-E') {
			if (exponent>99999) {
				var logExponent=Math.floor(Math.log10(exponent))
				var logMantissa=exponent/Math.pow(10,logExponent)
				return first+logMantissa.toFixed(2)+'E'+logExponent+'#2'
			}
			return first+'1.00e'+exponent
		} else if (notationChoosed=='Original') {
			var abbid=Math.floor(exponent/3)
			var remainder=exponent%3
			if (abbid>100) return first+Math.pow(10,remainder).toFixed(2-remainder)+letter(abbid)
			return first+Math.pow(10,remainder).toFixed(2-remainder)+abbreviation(abbid-1)
		} else if (notationChoosed=='Hybrid') {
			var abbid=Math.floor(exponent/3)
			var remainder=exponent%3
			if (abbid>5) return first+Math.pow(10,remainder).toFixed(2-remainder)+letter(abbid+23)
			return first+Math.pow(10,remainder).toFixed(2-remainder)+abbreviation(abbid-1)
		} else if (notationChoosed=='Infinity') {
			var log=exponent/maxValueLog
			var logLog=Math.floor(Math.log10(log))
			if (logLog>6) {
				logLog=logLog/maxValueLog
				return '&#x221e;<sup>&#x221e;^'+logLog.toFixed(6)+'</sup>'
			}
			return first+'&#x221e;^'+log.toFixed(Math.min(6-logLog,4))
		} else if (notationChoosed=='Square exponent') {
			var srLog=Math.sqrt(exponent)
			if (srLog>=1e5) {
				var srLogLog=Math.floor(Math.log10(srLog))
				return first+'e(e('+srLogLog.toFixed(4)+'^2)^2)'
			}
			return first+'e('+srLog.toFixed(4)+'^2)'
		} else if (notationChoosed=='Polynominal exponent') {
			var peLog=Math.log10(exponent)/maxValueLogLog
			return first+'10<sup>log<sub>10</sub>(&#x221e;)^'+peLog.toFixed(4)+'</sup>'
		} else if (notationChoosed=='Color') {
			var abbid=Math.floor(exponent/3)
			var remainder=exponent%3
			return first+Math.pow(10,remainder).toFixed(2-remainder)+getColor(abbid)
		} else if (notationChoosed=='Megacolor') {
			var abbid=Math.floor(exponent/3)
			var remainder=exponent%3
			return first+Math.pow(10,remainder).toFixed(2-remainder)+getMegacolor(abbid)
		} else if (notationChoosed=='Progress') {
			var abbid=Math.floor(exponent/3)
			var remainder=exponent%3
			return first+Math.pow(10,remainder).toFixed(2-remainder)+getProgress(abbid)
		} else if (notationChoosed=='CIF') {
			return first+CIFformat(Decimal.pow(10,exponent))
		} else if (notationChoosed=='Overcomplicated') {
			var abbid=Math.floor(exponent/3)
			var remainder=exponent%3
			return first+'<text style="'+getOvercomplicated(abbid)+'">'+Math.pow(10,remainder).toFixed(2-remainder)+'</text>'
		} else {
			return first+'?'
		}
	} else if (number.lt(10)) {
		if (notationChoosed=='CIF') return number.toNumber().toFixed(4)
		return number.toFixed(1)
	} else {
		if (notationChoosed=='CIF') return CIFformat(number)
		return format(number)
	}
}

function formatRate(number,type) {
	if (number.lt(1/3600)) return number.mul(86400).toFixed(2)+' '+type+'/day'
	if (number.lt(1/60)) return number.mul(3600).toFixed(2)+' '+type+'/hr'
	if (number.lt(1)) return number.mul(60).toFixed(2)+' '+type+'/min'
	return format(number,2,0,false)+' '+type+'/s'
}

function formatNSCosts(number) {
	number=new Decimal(number)
	if (number.gte(Number.MAX_VALUE)&&!player.cheatOptions.breakLimitNS) {
		return '&#x221e;'
	} else {
		return format(number)+' NS'
	}
}

function abbreviation(label) {
	step=0
	abb=''
	abbFull=''
	
	if (label==0) {
		return 'k'
	}
	if (label==1) {
		return 'M'
	}
	do {
		var u=Math.floor(label)%10
		var t=Math.floor(label/10)%10
		var h=Math.floor(label/100)%10
		abb=''
		
		if (u>0&&!(u==1&&t==0&&h==0&&step>0)) {
			if (u==2&&t==0) {
				abb='B'
			} else {
				abb=haListU[u]
			}
		}
		if (t>0) {
			abb=abb+haListT[t]
			if (u==0&&t>1) {
				abb=abb+'g'
			}
		}
		if (h>0) {
			abb=abb+haListH[h]
		}
		highAbb=haListT2[step]
		if (u>0||t>0||h>0) {
			if (abbFull=='') {
				abbFull=abb+highAbb+abbFull
			} else {
				abbFull=abb+highAbb+'-'+abbFull
			}
		}
		label=label/1000
		step++
	} while (label>0)
	
	return abbFull
}

function abbreviationShort(label) {
	step=0
	abb=''
	abbFull=''
	
	if (label==0) {
		return 'k'
	}
	if (label==1) {
		return 'M'
	}
	do {
		var u=Math.floor(label)%10
		var t=Math.floor(label/10)%10
		var h=Math.floor(label/100)%10
		abb=''
		
		if (u>0&&!(u==1&&t==0&&h==0&&step>0)) {
			if (u==2&&t==0) {
				abb='B'
			} else {
				abb=haListUS[u]
			}
		}
		if (t>0) {
			abb=abb+haListTS[t]
			if (u==0&&t>2) {
				abb=abb+'g'
			}
		}
		if (h==1) {
			abb=abb+'C'
		}
		if (h>1) {
			abb=abb+haListTS[h]
			if (((u!=2&&t==0)||(u==0&&t==1))&&h>1) {
				abb=abb+'n'
			}
		}
		highAbb=haListT2S[step]
		if (u>0||t>0||h>0) {
			abbFull=abb+highAbb+abbFull
		}
		label=label/1000
		step++
	} while (label>0)
	
	return abbFull
}

function abbreviationLong(label) {
	step=0
	abb=''
	abbFull=''
	addD=(label%2==1)
	
	label=Math.floor(label/2)
	if (label==0) {
		return 'k'
	}
	if (label==1) {
		return 'M'+(addD?'d':'')
	}
	do {
		var u=Math.floor(label)%10
		var t=Math.floor(label/10)%10
		var h=Math.floor(label/100)%10
		abb=''
		
		if (u>0&&!(u==1&&t==0&&h==0&&step>0)) {
			if (u==2&&t==0) {
				abb='B'
			} else {
				abb=haListU[u]
			}
		}
		if (t>0) {
			abb=abb+haListT[t]
			if (u==0&&t>1) {
				abb=abb+'g'
			}
		}
		if (h>0) {
			abb=abb+haListH[h]
		}
		highAbb=haListT2[step]
		if (u>0||t>0||h>0) {
			if (abbFull=='') {
				abbFull=abb+highAbb+abbFull
			} else {
				abbFull=abb+highAbb+'-'+abbFull
			}
		}
		label=label/1000
		step++
	} while (label>0)
	
	return abbFull+(addD?'d':'')
}

function CIFformat(b){if(9E15<b.exponent)return b.mantissa.toPrecision(5)+"e"+b.exponent;if(1>b.exponent)return b+"";var a=Math.floor((b.exponent-1)/3);b=Decimal.div(b,Decimal.fromMantissaExponent(1,3*a)).toPrecision(5);var e=" K M B T Qa Qi Sx Sp Oc No".split(" "),f=" U D T Q P S H O N".split(" "),g=" Dc Vg Tg Qg Pg Sg Hg Og Ng".split(" "),h=" Ct Dt Tt Qt Pt St Ht Ot Nt".split(" "),k=" Mi Mc Na Pi Fm At Zt Yt".split(" "),d="",c=0,a=a-1;if(10>a)return b+e[a+1];for(;0<a;)a%1E3&&(d=f[a%10-(a%1E3==!!c)*!!c]+g[(a-a%10)%100/10]+h[(a-a%100)%1E3/100]+k[c]+d),c++,a=Math.floor(a/1E3);return b+d};

function letter(label) {
	var result=''
	do {
		var id=(label-1)%26
		result=letters.slice(id,id+1)+result
		label=Math.floor((label-1)/26)
	} while (label>0)
	return result
}

function sameletter(label) {
	var result=''
	var id=(label-1)%26
	result=letters.slice(id,id+1)
	var length=Math.ceil(label/26)
	if (length>5) {
		result=result+'<span style="font-size:75%">'+format(length,2,1)+'</span>'
	} else {
		result=result.repeat(length)
	}
	return result
}

function getColor(label) {	
	var result=''
	do {
		var id=(label-1)%30
		var colorid=Math.floor(id/3)%10		
		var fade=(id/3)%1		
		var red=Math.floor((colors[(colorid+1)%10][0]*fade+colors[colorid%10][0]*(1-fade))*255)		
		var green=Math.floor((colors[(colorid+1)%10][1]*fade+colors[colorid%10][1]*(1-fade))*255)		
		var blue=Math.floor((colors[(colorid+1)%10][2]*fade+colors[colorid%10][2]*(1-fade))*255)		
		result='<span style="width:1em;height:1em;font-size:50%;background-color:rgb('+red+','+green+','+blue+');display:inline-block"></span>'+result
		label=Math.floor((label-1)/30)
	} while (label>0)
	return result
}

function getMegacolor(label) {	
	var result=''
	do {
		var id=(label-1)%16777216
		result='<span style="width:1em;height:1em;font-size:50%;background-color:rgb('+(Math.floor(id/65536)%256)+','+(Math.floor(id/256)%256)+','+(Math.floor(id)%256)+');display:inline-block"></span>'+result
		label=Math.floor((label-1)/16777216)
	} while (label>0)
	return result	
}

function getProgress(label) {
	var boxes='<span style="position:absolute;width:'+label/Math.pow(maxValueLog,7)*3%maxValueLog%1*100+'%;height:100%;background-color:#e5e5e5;display:inline-block"></span>'
	boxes='<span style="position:absolute;width:'+label/Math.pow(maxValueLog,6)*3%maxValueLog%1*100+'%;height:100%;background-color:#727272;display:inline-block"></span>'+boxes
	boxes='<span style="position:absolute;width:'+label/Math.pow(maxValueLog,5)*3%maxValueLog%1*100+'%;height:100%;background-color:#e500e5;display:inline-block"></span>'+boxes
	boxes='<span style="position:absolute;width:'+label/Math.pow(maxValueLog,4)*3%maxValueLog%1*100+'%;height:100%;background-color:#00e5e5;display:inline-block"></span>'+boxes
	boxes='<span style="position:absolute;width:'+label/Math.pow(maxValueLog,3)*3%maxValueLog%1*100+'%;height:100%;background-color:#0000e5;display:inline-block"></span>'+boxes
	boxes='<span style="position:absolute;width:'+label/Math.pow(maxValueLog,2)*3%maxValueLog%1*100+'%;height:100%;background-color:#e5e500;display:inline-block"></span>'+boxes
	boxes='<span style="position:absolute;width:'+label/maxValueLog*3%maxValueLog%1*100+'%;height:100%;background-color:#00e500;display:inline-block"></span>'+boxes
	return '<span style="position:relative;text-align:left;width:4em;height:1em;font-size:50%;background-color:#e50000;display:inline-block">'+boxes+'</span>'
}

function getOvercomplicated(label) {
	var result=''
	var colors=[[0.9,0,0],[0,0.9,0],[0,0,0.9],[0.9,0.9,0],[0,0.9,0.9],[0.9,0,0.9],[0.45,0.45,0.45],[0.9,0.9,0.9],[0.1,0.1,0.1],[0.9,0.45,0]]		
	var ocv1=label%11
	if (ocv1>0) {
		ocv1--
		var red=Math.floor(colors[ocv1][0]*255)
		var green=Math.floor(colors[ocv1][1]*255)
		var blue=Math.floor(colors[ocv1][2]*255)
		result=result+'color:rgb('+red+','+green+','+blue+');'
	}
	var ocv2=Math.floor(label/11)%10000
	if (ocv2>0) {
		ocv2--
		var red=Math.floor(colors[ocv2%10][0]*255)
		var green=Math.floor(colors[ocv2%10][1]*255)		
		var blue=Math.floor(colors[ocv2%10][2]*255)
		result=result+'text-shadow:'+((Math.floor(ocv2/10)%10)/50)+'em '+((Math.floor(ocv2/100)%10)/50)+'em '+((Math.floor(ocv2/1000)%10)/50)+'em rgb('+red+','+green+','+blue+');'
	}
	var ocv3=Math.floor(label/110000)%2550
	if (ocv3>0) {
		ocv3--
		var red=Math.floor(colors[ocv3%10][0]*255)
		var green=Math.floor(colors[ocv3%10][1]*255)
		var blue=Math.floor(colors[ocv3%10][2]*255)
		var alpha=1-Math.floor(ocv3/10)/255
		result=result+'background-color:rgba('+red+','+green+','+blue+','+alpha+');'
	}
	var ocv4=Math.floor(label/280500000)%50
	if (ocv4>0) {
		ocv4--
		var red=Math.floor(colors[ocv4%10][0]*255)
		var green=Math.floor(colors[ocv4%10][1]*255)
		var blue=Math.floor(colors[ocv4%10][2]*255)
		result=result+'border:solid '+(Math.floor(ocv4/10)%5+1)/50+'em rgb('+red+','+green+','+blue+');'
	}
	return result
}

function switchNotation(id=0) {
	if (id==0) {
		notation=player.notation
	} else {
		notation=player.customMixed[id-1][0]
	}
	if (notation=='Standard') {
		notation='Long scale'
	} else if (notation=='Long scale') {
		notation='Standard (short)'
	} else if (notation=='Standard (short)') {
		notation='Letters'
	} else if (notation=='Letters') {
		notation='Scientific'
	} else if (notation=='Scientific') {
		notation='Engineering'
	} else if (notation=='Engineering') {
		notation='Logarithm'
	} else if (notation=='Logarithm') {
		notation='Natural logarithm'
	} else if (notation=='Natural logarithm') {
		notation='Repoalphabet'
	} else if (notation=='Repoalphabet') {
		notation='Hyper-E'
	} else if (notation=='Hyper-E'&&id==0) {
		notation='Original'
	} else if (notation=='Original') {
		notation='Hybrid'
	} else if (notation=='Hybrid') {
		notation='Mixed'
	} else if ((notation=='Mixed'||notation=='Hyper-E')&&keysPressed.includes(16)) {
		notation='Infinity'
	} else if (notation=='Infinity') {
		notation='Square exponent'
	} else if (notation=='Square exponent') {
		notation='Polynominal exponent'
	} else if (notation=='Polynominal exponent') {
		notation='Color'
	} else if (notation=='Color') {
		notation='Megacolor'
	} else if (notation=='Megacolor') {
		notation='Progress'
	} else if (notation=='Progress') {
		notation='CIF'
	} else if (notation=='CIF') {
		notation='Overcomplicated'
	} else {
		notation='Standard'
	} 
	if (id==0) {
		player.notation=notation
		hideElement('mixedNotationOptions')
		updateElement('mixedNotationOptions','')
	} else {
		player.customMixed[id-1][0]=notation
		updateElement('mnoOptionN'+id,notation)
	}
	updateMilestones()
}

function getNotation(exponent) {
	var id=player.customMixed.length-1
	while (id>0) {
		if (exponent>=player.customMixed[id][1]) return player.customMixed[id][0]
		id--
	}
	return player.customMixed[0][0]
}

function showMNO() {
	showElement('mixedNotationOptions','table')
	var text=''
	for (i=0;i<player.customMixed.length;i++) {
		text=text+'<tr><td style="text-align:left">Notation: <button class="longButton" id="mnoOptionN'+(i+1)+'" onclick="switchNotation('+(i+1)+')">'+player.customMixed[i][0]+'</button></td><td style="text-align:right">Exponent: <input id="mnoOptionE'+(i+1)+'" value="'+player.customMixed[i][1]+'" onchange="changeNotationExponent('+(i+1)+')" onfocusin="onFocus()" onfocusout="onUnfocus()" '+(i==0?'disabled':'')+'></td></tr>'
	}
	updateElement('mixedNotationOptions',text+'<tr><td></td><td style="text-align:right"><button class="longButton" onclick="addNotation()">Add notation</button></td></tr><tr><td></td><td style="text-align:right"><button class="longButton" onclick="removeNotation()">Remove last notation</button></td></tr>')
	
	hideElement('exportSave')
}

function addNotation() {
	var id=player.customMixed.length+1
	player.customMixed.push(['Scientific',player.customMixed[id-2][1]*2])
	var row=document.getElementById('mixedNotationOptions').insertRow(id-1);
	row.innerHTML='<td style="text-align:left">Notation: <button class="longButton" id="mnoOptionN'+id+'" onclick="switchNotation('+id+')">Scientific</button></td><td style="text-align:right">Exponent: <input id="mnoOptionE'+id+'" value="'+player.customMixed[id-1][1]+'" onchange="changeNotationExponent('+id+')" onfocusin="onFocus()" onfocusout="onUnfocus()"></td>'
}

function changeNotationExponent(id) {
	player.customMixed[id-1][1]=document.getElementById('mnoOptionE'+id).value
}

function removeNotation() {
	var id=player.customMixed.length
	if (id==2) return
	player.customMixed.pop()
	var row=document.getElementById('mixedNotationOptions').deleteRow(id-1);
}

function save() {
	try {
		localStorage.setItem('save2',btoa(JSON.stringify(player)))
		console.log('Game saved!')
		lastSave=new Date().getTime()/1000
	} catch (e) {
		console.log('Well, we tried.')
		console.error(e)
	}
}

function load(savefile) {
	clearInterval(gameLoopInterval)
	try {
		var savefile=JSON.parse(atob(savefile))
		
        if (savefile.version<0.7) {
          alert("Sorry, but your save will be deleted due to the complications of the update. Saves that were before the test was merged into master are sort of messed up, since inflation and other bugs/confusing things happened. Once you dismiss this notice, the game will hard reset (the game will reload).")
		  localStorage.clear('save2')
		  location.reload()
          return 1
        }
		if (savefile.version<=0.7) {
			if (savefile.build!=undefined) {
				if (savefile.build<4||(savefile.build==4&&savefile.subbuild<4)) {
					savefile.preSupernova=false
					savefile.aliens={lastTick:0,amount:0,progress:0,interval:0,resets:0,kept:0,upgrades:[0,0,0,0,0,0]}
					savefile.neutronBoosts.powers[0]=Math.min(savefile.neutronBoosts.powers[0],20)
					savefile.neutronBoosts.powers[1]=Math.min(savefile.neutronBoosts.powers[1],20)
					savefile.neutronBoosts.powers[2]=Math.min(savefile.neutronBoosts.powers[2],30)
				}
				if (savefile.build<5) {
					savefile.overlimit=false
				}
				if (savefile.build<6) {
					savefile.fifthRowUnlocked=false
				}
				if (savefile.build<7) {
					savefile.secondSetUnlocked=savefile.fifthRowUnlocked
					delete savefile.fifthRowUnlocked
				}
				if (savefile.build<8&&savefile.notation=='Same-Letters') savefile.notation='Repoalphabet'
				if (savefile.build<9) savefile.chall14Stuff=[]
				if (savefile.build<=11) {
					if (savefile.build<11) savefile.subbuild=0
					if (savefile.subbuild<4) if (savefile.challengeUnlocked==undefined) savefile.challengeUnlocked=0
					if (savefile.subbuild<5.1) {
						for (i=0;i<10;i++) {
							if (typeof(savefile.autobuyerPriorities[i])=='string') savefile.autobuyerPriorities[i]=parseInt(savefile.autobuyerPriorities[i])
						}
					}
					if (savefile.subbuild<7.1) {
						savefile.beta=savefile.build
						savefile.alpha=savefile.subbuild
						
						delete savefile.build
						delete savefile.subbuild
					}
				}
			}
			if (savefile.beta<11.1) savefile.alpha=0
			if (savefile.beta<12||(savefile.beta==12&&savefile.alpha<8)) {
				savefile.offlineProgress=true
				if (savefile.milestones==undefined) savefile.milestones=0
				savefile.storyEnabled=true
				savefile.achievements=[]
				savefile.ach2possible=false
				savefile.neutrons=0
				savefile.totalNeutrons=0
				delete savefile.story
			}
			if (savefile.beta<14) {
				savefile.customMixed=[['Standard',0],['Letters',306],['Scientific',2109],['Logarithm',1e4]]
			}
			if (savefile.beta<15) {
				savefile.ppHeadstartUpgrades=[0,0,0]
			}
			if (savefile.beta<16) {
				savefile.preBreakAutonovaOptions={time:60,overlimit:true}
				savefile.customScrolling=false
			}
			if (savefile.beta<19.2) {
				savefile.destabilization={unstableStars:0,timeLeft:0,activated:false,lastTick:0,upgrades:[0,0,0,0]}
			}
			if (savefile.beta<19.21) {
				if (savefile.breakLimit==undefined) savefile.breakLimit=false
			}
			if (savefile.beta<20.3) if (savefile.generators[9].bought>0&&player.transferUpgrades.includes(10)) {
				for (i=0;i<10;i++) savefile.generators[i].amount=savefile.generators[i].bought
				savefile.stars=0
			}
		}
		
		savefile.stars=new Decimal(savefile.stars)
		savefile.totalStars=new Decimal(savefile.totalStars)
		for (i=0;i<10;i++) {
			savefile.generators[i].amount=new Decimal(savefile.generators[i].amount)
			savefile.neutronTiers[i].amount=new Decimal(savefile.neutronTiers[i].amount)
		}
		for (i=0;i<savefile.prestigePeak.length;i++) {
			savefile.prestigePeak[i]=new Decimal(savefile.prestigePeak[i])
		}
		savefile.prestigePower=new Decimal(savefile.prestigePower)
		savefile.transferPoints=new Decimal(savefile.transferPoints)
		savefile.totalTP=new Decimal(savefile.totalTP)
		for (i=0;i<savefile.gainPeak.length;i++) {
			savefile.gainPeak[i]=new Decimal(savefile.gainPeak[i])
		}
		for (i=0;i<savefile.lastSupernovas.length;i++) {
			savefile.lastSupernovas[i][1]=new Decimal(savefile.lastSupernovas[i][1])
			savefile.lastSupernovas[i][2]=new Decimal(savefile.lastSupernovas[i][2])
		}
		savefile.neutronStars=new Decimal(savefile.neutronStars)
		savefile.totalNS=new Decimal(savefile.totalNS)
		savefile.challPow=new Decimal(savefile.challPow)
		if (savefile.autobuyers.transfer!=undefined) {
			savefile.autobuyers.transfer.times=new Decimal(savefile.autobuyers.transfer.times)
			savefile.autobuyers.transfer.tp=new Decimal(savefile.autobuyers.transfer.tp)
		}
		if (savefile.autobuyers.prestige!=undefined) savefile.autobuyers.prestige.times=new Decimal(savefile.autobuyers.prestige.times)
		if (savefile.autobuyers.supernova!=undefined) savefile.autobuyers.supernova.ns=new Decimal(savefile.autobuyers.supernova.ns)
		savefile.neutrons=new Decimal(savefile.neutrons)
		savefile.totalNeutrons=new Decimal(savefile.totalNeutrons)
		savefile.destabilization.unstableStars=new Decimal(savefile.destabilization.unstableStars)
					
		savefile.quarkStars=new Decimal(savefile.quarkStars)
		savefile.particles=new Decimal(savefile.particles)
		savefile.strings=new Decimal(savefile.strings)
		
		starsLimit=(savefile.breakLimit&&savefile.currentChallenge==0&&!player.preSupernova)?Number.POSITIVE_INFINITY:(savefile.overlimit)?'5.592438960924321e400':Number.MAX_VALUE
		
		//Cheat
		if (savefile.cheatOptions==undefined) savefile.cheatOptions={}
		if (savefile.cheatOptions.breakLimitNS==undefined) savefile.cheatOptions.breakLimitNS=false
		if (savefile.perks==undefined) savefile.perks={totalQuarkStars:0,perkShards:0,upgrades:{},levels:{},respec:false}
		else if (savefile.perks.respec==undefined) savefile.perks={totalQuarkStars:0,perkShards:0,upgrades:{},levels:{},respec:false}
		if (savefile.stellarPillars==undefined) savefile.stellarPillars={upgrades:[],pillarUsed:0,reset:false}
		if (savefile.neutronChallengeUnlocked==undefined) savefile.neutronChallengeUnlocked=0
		if (savefile.currentNeutronChallenge==undefined) savefile.currentNeutronChallenge=0
		if (savefile.neutronChallengesCompleted==undefined) savefile.neutronChallengesCompleted={}
		else if (typeof(savefile.neutronChallengesCompleted)!='object') savefile.neutronChallengesCompleted={}
		savefile.perks.totalQuarkStars=new Decimal(savefile.perks.totalQuarkStars)
	
		if (player.version<savefile.version) throw 'Since you are playing in version '+player.version+', your savefile that is updated in version '+savefile.version+' has errors to the version you are playing.\nYour savefile has been discarded.'
		if (player.version==savefile.version) {
			if (savefile.beta!=undefined) {
				if (player.beta<savefile.beta) throw 'Since you are playing in beta '+player.beta+', your savefile that is updated in beta '+savefile.beta+' has errors to the beta you are playing.\nYour savefile has been discarded.'
				if (player.beta==savefile.beta) {
					if (savefile.alpha!=undefined) if (player.alpha<savefile.alpha) throw 'Since you are playing in alpha '+player.alpha+', your savefile that is updated in alpha '+savefile.alpha+' has errors to the alpha you are playing.\nYour savefile has been discarded.'
				}
			}
		}
		savefile.version=player.version
		savefile.beta=player.beta
		savefile.alpha=player.alpha
		
		player=savefile
		updateExplanations()
		updateTheme(player.theme)
		updateFont()
		if (player.stars.gte(starsLimit)) { player.stars=new Decimal(starsLimit); reset(3) }
		if (player.neutronStars.gte(Number.MAX_VALUE)&&!player.cheatOptions.breakLimitNS) { player.neutronStars=new Decimal(Number.MAX_VALUE); reset(4) }
		if (player.quarkStars.gte(Number.MAX_VALUE)) { player.quarkStars=new Decimal(Number.MAX_VALUE); reset(5) }
		if (player.particles.gte(Number.MAX_VALUE)) { player.particles=new Decimal(Number.MAX_VALUE); reset(6) }
		updateCosts()
		if (player.highestTierPrestiges[0]==0) pps[0]=new Decimal(0)
		if (player.supernovaTabsUnlocked<4) ntpps[0]=new Decimal(0)
		updateAutobuyers()
		updateMilestones()
		if (player.supernovaUpgrades.includes(2)) updatePPHeadstart()
		updateNeutronBoosts()
		updateNeutronPower()
		calculateDSValues()
		console.log('Game loaded!')
		
		if (!player.offlineProgress) player.lastUpdate=new Date().getTime()
		gameLoopInterval=setInterval(function(){gameLoop()},1000/player.updateRate)
		save()
	
		hideElement('exportSave')
		hideElement('mixedNotationOptions')
		updateElement('mixedNotationOptions','')
		return false //return false if loads
	} catch (e) {
		console.log('Your save failed to load:')
		console.error(e)
		gameLoopInterval=setInterval(function(){gameLoop()},1000/player.updateRate)
		return true //return true if there is a error
	}
}

function exportSave() {
	var savefile=btoa(JSON.stringify(player))
	showElement('exportSave','block')
	document.getElementById("exportText").value=btoa(JSON.stringify(player))
	
	hideElement('mixedNotationOptions')
	updateElement('mixedNotationOptions','')
}

function importSave() {
	var input=prompt('Copy and paste in your exported file and press enter.')
	if (load(input)) {
		if (input!=null) {
			alert('Your save was invalid or caused a game-breaking bug. :(')
		}
	}
}

function reset(tier,challid=0,gain=1) {
	if (tier==Infinity?confirm('If you hard reset, all progress in your save will be lost and you have to start over! Are you sure you want to do this?'):true) {
		if (challid>0) {
			switch (tier) {
				case 3: if (challid==player.currentChallenge) {return} break;
				case 4: if (challid==player.currentNeutronChallenge) {return} break;
			}
			if (player.challConfirm) switch (tier) {
				case 3: 
					var checkNotation=player.notation
					if (checkNotation=='Mixed') {
						var checkNotation=getNotation(308)
					}
					if (!confirm('You need to '+((checkNotation=='Polynominal exponent'||checkNotation=='Color'||checkNotation=='Megacolor'||checkNotation=='Progress')?'go supernova':format(Number.MAX_VALUE)+' stars')+' with special conditions. Some supernova upgrades doesn\'t work while you are in a challenge.')) {return}
					break
				case 4: 
					var checkNotation=player.notation
					if (checkNotation=='Mixed') {
						var checkNotation=getNotation(308)
					}
					if (!confirm('You need to '+((checkNotation=='Polynominal exponent'||checkNotation=='Color'||checkNotation=='Megacolor'||checkNotation=='Progress')?'go hypernova':format(Number.MAX_VALUE)+' neutron stars')+' with special conditions.')) {return}
					break
			}
			if (tier==3&&player.preSupernova) {
				if (confirm('You can\'t enter a challenge while you are in pre-supernova mode. Entering a challenge will disable pre-supernova mode.')) player.preSupernova=false
				else return
			}
		}
		if (tier==Infinity) {
			// Highest tier - reset
			clearInterval(gameLoopInterval)
			
			player.playtime=0
			player.updateRate=20
			player.lastUpdate=0
			player.layout=1
			player.milestones=0
			player.storyEnabled=false
			player.notation='Standard'
			player.customMixed=[['Standard',0],['Letters',306],['Scientific',2109],['Logarithm',1e4]]
			player.explanations=false
			player.useMonospaced=false
			player.hotkeys=true
			player.theme='Normal'
			player.showProgress=false
			player.customScrolling=false
			player.totalStars=new Decimal(0)
			player.prestigePeak=[new Decimal(1),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)]
			player.headstarts=true
			player.achievements=[]
			player.challConfirm=true
			player.totalNeutrons=new Decimal(0)
			localStorage.clear('save2')
			
			tab='gen'
			clickedWrong=0
			updateExplanations()
			updateMilestones()
			updateTheme('Normal')
			updateFont()
			hideElement('exportSave')
			hideElement('mixedNotationOptions')
			updateElement('mixedNotationOptions','')
			
			gameLoopInterval=setInterval(function(){gameLoop()},1000/player.updateRate)
			save()
		}
		if (tier>5) {
			//Tier 6 - Quantum
			player.prestiges[5]=(tier==6)?player.prestiges[5]+gain:0
			player.strings=(tier==6)?player.strings.add(getPostPrestigePoints(6)):new Decimal(0)
			player.prestigePeak[5]=(tier==Infinity)?new Decimal(0):(player.strings.gt(player.prestigePeak[5]))?player.strings:player.prestigePeak[5]
		}
		if (tier>4) {
			//Tier 5 - Exotic
			player.perks={totalQuarkStars:new Decimal(0),
				perkShards:0,
				upgrades:{},
				levels:{},
				respec:false}
			player.stellarPillars={upgrades:[],
				pillarUsed:0,
				reset:false}
			player.unlockables={}
			player.neutronChallengesCompleted={}
			player.stellarBots={}
			
			player.prestiges[4]=(tier==5)?player.prestiges[4]+gain:0
			player.particles=(tier==5)?player.particles.add(getPostPrestigePoints(5)):new Decimal(0)
			player.prestigePeak[4]=(tier==Infinity)?new Decimal(0):(player.particles.gt(player.prestigePeak[4]))?player.particles:player.prestigePeak[4]
		}
		if (tier>3) {
			//Tier 4 - Hypernova
			showTooMuch2=false
			SNTab='upgrades'
			if (genTab=='neutronTiers') {
				genTab='tiers'
			}
			if (tab=='supernova') {
				tab='gen'
			}
			
			player.rewardBoxes=[0,0,0]
			player.supernovaUpgrades=[]
			player.supernovaTabsUnlocked=0
			player.challengeUnlocked=0
			player.challengesCompleted={}
			player.autobuyers={}
			player.buyinshopFeatures=[]
			player.autobuyerPriorities=[1,2,3,4,5,6,7,8,9,10]
			player.preBreakAutonovaOptions={time:60,overlimit:true}
			player.breakLimit=false
			player.ppHeadstartUpgrades=[0,0,0]
			player.neutronBoosts={basePower:0,powers:[0,0,0],ppPower:0}
			for (i=0;i<10;i++) {
				player.neutronTiers[i].bought=0
			}
			player.destabilization.upgrades=[0,0,0,0]
			player.secondSetUnlocked=false
			player.aliens.upgrades=[0,0,0,0,0,0]
			player.prestiges[3]=(tier==4)?player.prestiges[3]+gain:0
			player.quarkStars=(tier==4)?player.quarkStars.add(getPostPrestigePoints(4)):new Decimal(0)
			player.prestigePeak[3]=(tier==Infinity)?new Decimal(0):(player.quarkStars.gt(player.prestigePeak[3]))?player.quarkStars:player.prestigePeak[3]
			if (tier==4&&gain>0&&player.currentNeutronChallenge>0) {
				if (player.neutronChallengesCompleted[player.currentNeutronChallenge]==undefined) {
					player.neutronChallengesCompleted[player.currentNeutronChallenge]=1
				} else {
					player.neutronChallengesCompleted[player.currentNeutronChallenge]++
				}
			}
			player.currentNeutronChallenge=(tier==4&&challid>0)?challid:0
			player.neutronChallengeUnlocked=player.currentNeutronChallenge
			
			updateCosts('autobuyers')
			updateCosts('neutronboosts')
			updateNeutronBoosts()
			updateCosts('neutrontiers')
			calculateDSValues()
		}
		if (tier>2) {
			//Tier 3 - Supernova
			tooMuch=false
			showTooMuch=false
			if (challid>0) {
				tab='gen'
			}
			
			player.lastTransferPlaytime=player.transferPlaytime
			player.overlimit=false
			player.prestiges[2]=(tier==3)?player.prestiges[2]+gain:0
			if (tier==3&&gain>0&&player.highestTierPrestiges[2]<6) getAchievement(5)
			player.highestTierPrestiges[2]=0
			player.fastestSupernova=(tier==Infinity)?Number.MAX_VALUE:(player.fastestSupernova>player.supernovaPlaytime)?player.supernovaPlaytime:player.fastestSupernova
			if ((tier==3&&gain>0)?player.lastSupernovas.unshift([player.supernovaPlaytime,player.stars,getPostPrestigePoints(3),gain])>10:false) {
				player.lastSupernovas.pop()
			} else if (tier==Infinity) {
				player.lastSupernovas=[]
			}
			if (player.currentChallenge==0) {
				if (player.supernovaPlaytime<10&&!player.supernovaHeadstart) getAchievement(1)
				if (player.supernovaPlaytime<90&&player.ach2possible) getAchievement(2)
				if (player.supernovaPlaytime<0.2&&!player.supernovaHeadstart) getAchievement(6)
			} else {
				if (player.supernovaPlaytime<1) getAchievement(8)
			}
			player.supernovaPlaytime=0
			player.neutronStars=(tier==3)?player.neutronStars.add((gain>0)?getPostPrestigePoints(3):0):new Decimal(0)
			if (player.supernovaUpgrades.includes(2)) updatePPHeadstart()
			player.totalNS=(tier==3)?player.totalNS.add((gain>0)?getPostPrestigePoints(3):0):(tier==Infinity)?new Decimal(0):player.totalNS
			if (tier==3&&gain>0&&player.currentChallenge>0) {
				if (player.challengesCompleted[player.currentChallenge]==undefined) {
					player.challengesCompleted[player.currentChallenge]=1
					if (player.currentChallenge<13) {
						player.rewardBoxes[0]++
						tab='supernova'
						SNTab='autobuyers'
					}
					
					var acc=amountChallengeCompleted()
					if (acc>0) newMilestone(31)
					if (acc>1) newMilestone(32)
					if (acc>3) newMilestone(33)
					if (acc>7) newMilestone(34)
					if (acc>11) newMilestone(35)
				} else {
					player.challengesCompleted[player.currentChallenge]++
				}
			}
			player.currentChallenge=(tier==3&&challid>0)?challid:0
			if (tier==3&&(!player.headstarts||player.currentChallenge>0||player.preSupernova)) {
				player.supernovaHeadstart=false
				player.ach2possible=true
			} else {
				player.supernovaHeadstart=true
				player.ach2possible=false
			}
			if (tier==3&&gain>0&&player.transferUpgrades.length==0) getAchievement(7)
			player.transferUpgrades=(player.supernovaUpgrades.includes(2)&&player.headstarts&&player.currentChallenge==0&&!player.preSupernova)?[1,2,3,4,5,6,7,8,9,10,11,12,13,14]:[]
			if (!player.breakLimit||player.preSupernova||player.currentChallenge>0) starsLimit=Number.MAX_VALUE
			if (tier==3&&gain>0&&player.autobuyers.interval==undefined) player.autobuyers.interval=10
			if (tier==3&&gain>0&&player.autobuyers.upgrade==undefined) {player.autobuyers.upgrade={lastTick:player.playtime,disabled:false}; updateAutobuyers()}
			player.neutrons=new Decimal(0)
			neutronPower=new Decimal(1)
			for (i=0;i<10;i++) {
				player.neutronTiers[i].amount=new Decimal(player.neutronTiers[i].bought)
			}
			ntppsSingles=[new Decimal(0)]
			ntpps=[new Decimal(0)]
			ntppt=[new Decimal(0)]
			var oldTotalAliens=player.aliens.kept+player.aliens.amount
			if (tier==3&&challid==-1) {
				player.aliens.resets++
				player.aliens.kept=player.aliens.amount/10
			} else {
				player.aliens.resets=0
				player.aliens.kept=0
			}
			player.aliens.lastTick=player.playtime
			player.aliens.amount=0
			player.aliens.progress=0
			var totalAliens=player.aliens.kept+player.aliens.amount
			if (oldTotalAliens!=totalAliens) updateNeutronBoosts()
			player.prestigePeak[2]=(tier==Infinity)?new Decimal(0):(player.neutronStars.gt(player.prestigePeak[2]))?player.neutronStars:player.prestigePeak[2]
			player.gainPeak[1]=new Decimal(0)
			if (tier==3&&gain>0) {
				newMilestone(24)
				if (player.totalNS.gte(100)) newMilestone(29)
				if (player.preSupernova) getAchievement(9)
			}
		}
		if (tier>1) {
			//Tier 2 - transfer
			player.prestiges[1]=(tier==2)?player.prestiges[1]+gain:0
			player.highestTierPrestiges[1]=0
			player.transferPlaytime=0
			player.transferPoints=(tier==2)?player.transferPoints.add(getTransferPoints()):new Decimal(0)
			player.totalTP=(tier==2)?player.totalTP.add(getTransferPoints()):(tier==Infinity)?new Decimal(0):player.totalTP
			player.prestigePeak[1]=(tier==Infinity)?new Decimal(0):(player.transferPoints.gt(player.prestigePeak[1]))?player.transferPoints:player.prestigePeak[1]
			player.gainPeak[0]=new Decimal(0)
			if (tier==2) {
				newMilestone(18)
				if (!player.headstarts||player.currentChallenge>0||player.preSupernova) {
					player.supernovaHeadstart=true
					player.ach2possible=false
				}
			}
		}
		//Tier 1 - prestige
		var oldPP=player.prestigePower
		player.prestiges[0]=(tier==1)?player.prestiges[0]+gain:0
		player.highestTierPrestiges[0]=0
		player.prestigePlaytime=0
		if (tier==1) {
			if (challid==-1) player.prestigePower=player.prestigePower.div(2).max(1)
			else if (challid==-2) player.prestigePower=player.prestigePower
			else player.prestigePower=getPrestigePower()
			if (player.prestigePower.gt(player.prestigePeak[0])) {
				player.prestigePeak[0]=player.prestigePower
				if (player.supernovaUpgrades.includes(2)) updatePPHeadstart()
			}
			
			newMilestone(12)
			if (player.prestigePower.gt(5)) newMilestone(13)
			if (player.prestigePower.gt(10)) newMilestone(14)
			if (player.prestigePower.gt(20)) newMilestone(15)
			if (player.prestigePower.gt(50)) newMilestone(16)
			if (player.prestigePower.gt(75)) newMilestone(17)
			
			var ratio=player.prestigePower.div(oldPP)
		} else {
			if (player.supernovaUpgrades.includes(2)&&player.headstarts&&player.currentChallenge==0&&!player.preSupernova) player.prestigePower=ppHeadstart
			else player.prestigePower=new Decimal(0)
		}
		
		//Any tier
		player.stars=(tier==1&&challid==-2)?player.stars.div(unstableStarsAfterActivation).max(10):new Decimal(10)
		player.generators=[{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0}]
		if (player.headstarts&&player.currentChallenge==0&&!player.preSupernova) {
			if (player.achievements.includes(1)&&(tier>1||challid!=-2)) player.stars=new Decimal(100)
			if (player.achievements.includes(6)&&player.breakLimit) {
				player.generators[9]={amount:new Decimal(1),bought:1}
				player.highestTierPrestiges[0]=10
			}
		}
		
		ppsSingles=[new Decimal(0)]
		pps=[new Decimal(0)]
		ppt=[new Decimal(0)]

		player.challPow=new Decimal(player.currentChallenge==11?0.1:1)
		player.chall14Stuff=[]
		
		if (tier==1&&challid==-2) {
			player.destabilization.unstableStars=unstableStarsAfterActivation
			player.destabilization.timeLeft=dsTime
			player.destabilization.lastTick=player.playtime
			player.destabilization.activated=true
		} else if (tier==1) {
			player.destabilization.timeLeft=Math.floor(player.destabilization.timeLeft*0.81)
		} else {
			player.destabilization.unstableStars=new Decimal(0)
			player.destabilization.timeLeft=0
			player.destabilization.activated=false
		}
		
		updateCosts('gens')
	}
}

function toggle(id) {
	player[id]=!player[id]
	if (id=='explanations') updateExplanations()
	if (id=='storyEnabled') updateMilestones()
	if (id=='breakLimit') {
		starsLimit=(player.breakLimit&&player.currentChallenge==0&&!player.preSupernova)?Number.POSITIVE_INFINITY:(player.overlimit||player.stars.gte(Number.MAX_VALUE))?'5.592438960924321e400':Number.MAX_VALUE
		if (player.stars.gte(Number.MAX_VALUE)) player.overlimit=true
		if (player.stars.gte(starsLimit)) reset(3)
			
		newMilestone(40)
	}
	if (id=='preSupernova') {
		if (player.preSupernova) {
			if (!confirm('Pre-supernova mode is where you start at the beginning even before your first supernova. Are you sure you want to do that?')) {
				player.preSupernova=false
			} else if (player.currentChallenge==0) {
				reset(3,0,0)
			} else if (!confirm('If you start with pre-supernova mode on, you will exit the current challenge. Are you sure you want to do that?')) {
				player.preSupernova=false
			} else {
				reset(3,0,0)
			}
		} else {
			if (!confirm('You are leaving pre-supernova mode. This will reenable any supernova features.')) player.preSupernova=true
		}
	}
	if (id=='useMonospaced') updateFont()
}

function checkToReset(tier) {
	if (tier==1) {
		var checkIfAvailable=false
		if (!tooMuch) {
			if (player.destabilization.timeLeft==0||player.destabilization.upgrades[3]==1) {
				if (player.stars.gte(player.transferUpgrades.includes(7)?1e37:1e39)) {
					if (getPrestigePower().gt(player.prestigePower)) checkIfAvailable=true
				}
			}
		}
		if (checkIfAvailable) reset(1)
		else if (player.currentChallenge==8||player.currentChallenge==13) reset(1,-1,0)
	}
	if (tier==2) if (player.prestigePower.gte(100)) reset(2)
	if (tier==3) if (player.stars.gte(Number.MAX_VALUE)) reset(3)
	if (tier==-1) if (!player.destabilization.activated) reset(1,-2,0)
	if (tier==-2) if (player.aliens.amount==20&&player.aliens.resets<5) reset(3,-1,0)
}

function switchUR() {
	clearInterval(gameLoopInterval)
	player.updateRate+=5
	if (player.updateRate==Number.MAX_VALUE) player.updateRate=5
	if (player.updateRate==65) player.updateRate=Number.MAX_VALUE
	gameLoopInterval=setInterval(gameLoop,1000/player.updateRate)
}

function updateMilestones() {
	updateElement('milestones',player.milestones+'/'+milestoneRequirements.length)
	updateElement('storyOption',(player.storyEnabled?'Disable':'Enable')+' story')
	var temp=1
	while (document.getElementById('milestone'+temp)) {
		if (temp>player.milestones+1) {
			hideElement('milestone'+temp)
		} else {
			var message=''
			showElement('milestone'+temp,'table-row')
			updateElement('ms'+temp+'requirement','<b>Milestone #'+temp+'</b>:<br>'+milestoneRequirements[temp-1])
			var msCompletion='ms'+temp+'completion'
			if (player.milestones>=temp) {
				updateElement(msCompletion,message+'Completed'+((player.storyEnabled&&storyMessages.length>=temp)?'<br><b>Story</b>: '+storyMessages[temp-1]:''))
				updateClass(msCompletion,'achCompleted')
			} else {
				updateElement(msCompletion,message+'Incomplete')
				updateClass(msCompletion,'ach')
			}
		}
		temp++
	}
	
	var temp=1
	do {
		if (player.achievements.includes(temp)) {
			updateElement('ach'+temp,'Completed')
			updateClass('ach'+temp,'achCompleted')
		} else {
			updateElement('ach'+temp,'Incomplete')
			updateClass('ach'+temp,'ach')
		}
		temp++
	} while (document.getElementById('ach'+temp))
}

function showMilestone(id,isAch) {
    var milestoneBox=document.getElementById('milestone')
    milestoneBox.style.transform='translate(0%,0%)'
    clearTimeout(showMilestoneTimeout)
    showMilestoneTimeout=setTimeout(function(){milestoneBox.style.transform='translate(-100%,0%)';},6000)
	if (isAch) {
		updateElement('milestoneMessage','Achievement unlocked!')
		updateElement('milestoneRequirement',achList.names[id-1])
		updateElement('milestoneCheck',achList.requirements[id-1])
	} else {
		updateElement('milestoneMessage','Milestone got!')
		updateElement('milestoneRequirement',milestoneRequirements[id-1])
		updateElement('milestoneCheck','Check in the milestones tab.')
	}
	updateMilestones()
}

function newMilestone(id) {
	if (id>player.milestones) {
		player.milestones=id
		showMilestone(id,false)
	}
}

function closeMilestone() {
	clearTimeout(showMilestoneTimeout)
	document.getElementById('milestone').style.transform='translate(-100%,0%)'
}
	
function switchTab(tabName) {
	tab=tabName
}

function switchTheme() {
	if (player.theme=='Normal') {
		player.theme='Light'
	} else if (player.theme=='Light') {
		player.theme='Original'
	} else if (player.theme=='Original') {
		player.theme='Colorblind'
	} else {
		player.theme='Normal'
	}
	updateTheme(player.theme)
}

function updateExplanations() {
	if (player.explanations) {
		enableTooltip('starsExplanation')
		enableTooltip('transferPoints')
		enableTooltip('neutronStars')
		enableTooltip('autoupgraderExplanation')
		enableTooltip('autotransferExplanation')
		enableTooltip('autoprestigeExplanation')
		enableTooltip('autogeneratorExplanation')
		enableTooltip('autonovaExplanation')
		enableTooltip('neutronboost')
		enableTooltip('NBPowerStarsExplanation')
		enableTooltip('NBPowerTPExplanation')
		enableTooltip('NBPowerNSExplanation')
		enableTooltip('NBBaseExplanation')
		enableTooltip('NBPPPowerExplanation')
		updateTooltip('starsExplanation',explainList.stars)
		updateTooltip('transferPoints',explainList.transfer)
		updateTooltip('neutronStars',explainList.supernova)
		updateTooltip('autoupgraderExplanation',explainList.autoupgrader)
		updateTooltip('autotransferExplanation',explainList.autotransfer)
		updateTooltip('autoprestigeExplanation',explainList.autoprestige)
		updateTooltip('autogeneratorExplanation',explainList.autogenerator)
		updateTooltip('autonovaExplanation',explainList.autonova)
		updateTooltip('neutronboost',explainList.nbPowers)
		updateTooltip('NBPowerStarsExplanation',explainList.nbPowers)
		updateTooltip('NBPowerTPExplanation',explainList.nbPowers)
		updateTooltip('NBPowerNSExplanation',explainList.nbPowers)
		updateTooltip('NBBaseExplanation',explainList.nbBase)
		updateTooltip('NBPPPowerExplanation',explainList.nbPPPower)
	} else {
		disableTooltip('starsExplanation')
		disableTooltip('transferPoints')
		disableTooltip('neutronStars')
		disableTooltip('autoupgraderExplanation')
		disableTooltip('autotransferExplanation')
		disableTooltip('autoprestigeExplanation')
		disableTooltip('autogeneratorExplanation')
		disableTooltip('autonovaExplanation')
		disableTooltip('neutronboost')
		disableTooltip('NBPowerStarsExplanation')
		disableTooltip('NBPowerTPExplanation')
		disableTooltip('NBPowerNSExplanation')
		disableTooltip('NBBaseExplanation')
		disableTooltip('NBPPPowerExplanation')
	}
}

function updateFont() {
	if (player.useMonospaced) document.getElementById('font').href='https://fonts.googleapis.com/css?family=Roboto+Mono'
	else document.getElementById('font').href='https://fonts.googleapis.com/css?family=Roboto'
}

function updateTheme(id) {
	if (themeSelected!=id) {
		themeSelected=id
		document.getElementById('theme').href='stylesheets/theme_'+id.toLowerCase()+'.css'
	}
}
	
function getCost(tier,bulk=1) {
	var multiplier=getCostMultiplier(tier)
	return Decimal.pow(multiplier,bulk).sub(1).div(multiplier-1).times(costs.tiers[tier-1])
}
	
function updateCosts(id='all') {
	if (id=='gens'||id=='all') {
		for (i=1;i<Math.min(player.highestTierPrestiges[0]+2,(player.currentChallenge==3)?10:11);i++) {
			var multiplier=getCostMultiplier(i)
			var cost=Decimal.pow(10,(player.currentChallenge==4&&i>1)?1:i*(0.9+0.1*i)).times(Decimal.pow(multiplier,player.generators[i-1].bought))
			if (player.supernovaUpgrades.includes(11)&&!player.preSupernova&&player.currentChallenge==0&&!player.prestigePower.eq(0)) cost=cost.div(Decimal.pow(multiplier,player.prestigePower.log10()).pow(0.1))
			if (player.currentChallenge==12) cost=cost.times(Decimal.pow(multiplier,(player.generators[0].bought+player.generators[1].bought+player.generators[2].bought+player.generators[3].bought+player.generators[4].bought+player.generators[5].bought+player.generators[6].bought+player.generators[7].bought+player.generators[8].bought+player.generators[9].bought)/250))
			if (neutronPower.gt(1)&&!player.preSupernova) cost=cost.div(neutronPower)
			costs.tiers[i-1]=cost
		}
	}
	if (id=='autobuyers'||id=='all') {
		if (player.autobuyers.interval!=undefined) costs.intReduceCost=Math.floor(Math.pow((player.autobuyers.interval==undefined)?Infinity:10/player.autobuyers.interval,1.43458799))
		if (player.autobuyers.gens!=undefined) {
			if (player.autobuyers.gens.bulk>256) {
				costs.bbCost=Decimal.pow(2,player.autobuyers.gens.bulk/128).times(256e3)
			} else {
				costs.bbCost=player.autobuyers.gens.bulk*250
			}
		}
	}
	if (id=='neutronboosts'||id=='all') {
		if (player.neutronBoosts.powers[0]>14){
			costs.neutronBoosts[0]=Decimal.pow(Number.MAX_VALUE,-8.5).times(Decimal.pow(Decimal.pow(Number.MAX_VALUE,2.25),player.neutronBoosts.powers[0]))
		} else {
			costs.neutronBoosts[0]=Decimal.pow(Number.MAX_VALUE,2).times(Decimal.pow(Decimal.pow(Number.MAX_VALUE,1.5),player.neutronBoosts.powers[0]))
		}
		if (player.neutronBoosts.powers[1]>14){
			costs.neutronBoosts[1]=Decimal.pow(Number.MAX_VALUE,-34/240).times(Decimal.pow(Decimal.pow(Number.MAX_VALUE,3/80),player.neutronBoosts.powers[1]))
		} else {
			costs.neutronBoosts[1]=Decimal.pow(Number.MAX_VALUE,1/30).times(Decimal.pow(Decimal.pow(Number.MAX_VALUE,1/40),player.neutronBoosts.powers[1]))
		}
		if (player.neutronBoosts.powers[2]>14){
			costs.neutronBoosts[2]=Decimal.pow(Math.pow(10,1.5),player.neutronBoosts.powers[2]).div(Math.pow(10,2.5))
		} else {
			costs.neutronBoosts[2]=Decimal.pow(10,player.neutronBoosts.powers[2]).times(1e5)
		}
		costs.neutronBoosts[3]=Decimal.pow(10,player.neutronBoosts.basePower+8)
		costs.neutronBoosts[4]=Decimal.pow(10,player.neutronBoosts.ppPower/0.0375+14)
	}
	if (id=='ppheadstartupgrades'||id=='all') {
		costs.ppHeadstartUpgs[0]=Decimal.pow(1e3,player.ppHeadstartUpgrades[0]+3)
		costs.ppHeadstartUpgs[1]=Decimal.pow(10,player.ppHeadstartUpgrades[1]+6)
		costs.ppHeadstartUpgs[2]=Decimal.pow(1e5,player.ppHeadstartUpgrades[2]+2)
	}
	if (id=='neutrontiers'||id=='all') { 
		for (i=0;i<10;i++) {
			costs.neutronTiers[i]=Decimal.times(Math.pow(10,Math.floor((i+6)/2)*Math.floor((i+9)/2)),Decimal.pow(Math.pow(10,i+Math.floor((i+4)/2)+Math.floor(Math.max(i-1,0)/3)*2),player.neutronTiers[i].bought))
		}
	}
	if (id=='destabilization'||id=='all') { 
		costs.destabilization[0]=Decimal.pow(1e5,player.destabilization.upgrades[0]+5)
		costs.destabilization[1]=Decimal.pow(1e5,player.destabilization.upgrades[1]+6)
		costs.destabilization[2]=Decimal.pow(10,player.destabilization.upgrades[2]*(player.destabilization.upgrades[2]+5)+35)
	}
}

function getCostMultiplier(tier) {
	return Math.pow((player.currentChallenge==2)?2.5:1.5,((player.currentChallenge==4)?(tier+2)/3:tier)*(tier+9)/10)/((tier==10&&player.transferUpgrades.includes(8))?10:1)
}

function isWorthIt(tier) {
	if (typeof(tier)=='number') {
		var cost=costs.tiers[tier-1]
		if (player.currentChallenge==4&&tier>1) return player.generators[tier-2].amount.gte(cost)
		if (player.currentChallenge==14&&player.chall14Stuff.includes(tier)) return false
		return player.stars.gte(cost)
	} else {
		if (tier.indexOf('nt')>-1) {
			return player.neutronStars.gte(costs.neutronTiers[parseInt(tier.split('nt')[1])-1])
		}
		return false
	}
}
	
function buyGen(tier,bulk=1,quick=false) {
	if (tier>player.highestTierPrestiges[0]+1) return
	if (!quick) if (!isWorthIt(tier)) return
	
	var multiplier=getCostMultiplier(tier)
	var resource=(player.currentChallenge==4&&tier>1)?player.generators[tier-2].amount:player.stars
	if (player.currentChallenge==14) var maxBulk=1
	else var maxBulk=Math.floor(resource.div(costs.tiers[tier-1]).times(multiplier-1).plus(1).log(multiplier))
	if (bulk==0) bulk=maxBulk
	else if (bulk>maxBulk) bulk=maxBulk
	for (i=0;i<6;i++) {
		if (bulk>0&&tier>player.highestTierPrestiges[i]) {
			player.highestTierPrestiges[i]=tier
		}
	}
	
	var spentAmount=getCost(tier,bulk)
	if (player.currentChallenge==4&&tier>1) {
		player.generators[tier-2].amount=player.generators[tier-2].amount.sub(spentAmount)
	} else {
		player.stars=player.stars.sub(spentAmount)
	}
	player.generators[tier-1].bought=player.generators[tier-1].bought+bulk
	player.generators[tier-1].amount=player.generators[tier-1].amount.add(bulk)
	updateCosts('gens')
	
	newMilestone(tier)
	if (tier==10) {
		if (Decimal.gt(player.generators[9].bought,4)) newMilestone(11)
		if (Decimal.gt(player.generators[9].bought,110)) if (Decimal.eq(player.generators[8].bought,1)) getAchievement(4)
	}
	
	if (tier==1&&!player.achievements.includes(3)) if (player.generators[0].bought>39&&player.generators[1].bought==0&&player.prestigePower.eq(1)&&player.transferUpgrades.length==0) getAchievement(3)
		
	if (player.currentChallenge==7) {
		for (j=0;j<tier-1;j++) {
			player.generators[j].amount=new Decimal(0)
		}
	}
	if (player.currentChallenge==8) player.challPow=new Decimal(1)
	if (player.currentChallenge==11) player.challPow=new Decimal(0.1)
	if (player.currentChallenge==13) player.challPow=Decimal.pow(1.003,bulk).times(player.challPow).min(2)
	if (player.currentChallenge==14?player.chall14Stuff.unshift(tier)>player.highestTierPrestiges[0]-3:false) player.chall14Stuff.pop()
}
	
function maxAll() {
	var buyTiers=[]
	for (i=1;i<Math.min(player.highestTierPrestiges[0]+2,(player.currentChallenge==3)?10:11);i++) {
		if (isWorthIt(i)) {
			buyTiers.push(i)
		}
	}
	for (j=buyTiers.length;j>0;j--) {
		var tierNum=buyTiers[j-1]
		var multiplier=getCostMultiplier(tierNum)
		var resource=(player.currentChallenge==4&&tierNum>1)?player.generators[tierNum-2].amount:player.stars.div(player.currentChallenge==4?1:j)
		if (player.currentChallenge==14) {
			var bulk=1
		} else {
			var bulk=Math.floor(resource.div(costs.tiers[tierNum-1]).times(multiplier-1).plus(1).log(multiplier))
		}
		for (k=0;k<6;k++) {
			if (bulk>0&&tierNum>player.highestTierPrestiges[k]) {
				player.highestTierPrestiges[k]=tierNum
			}
		}
		
		var spentAmount=getCost(tierNum,bulk)
		if (player.currentChallenge==4&&tierNum>1) {
			player.generators[tierNum-2].amount=player.generators[tierNum-2].amount.sub(spentAmount)
		} else {
			player.stars=player.stars.sub(spentAmount)
		}
		player.generators[tierNum-1].bought=player.generators[tierNum-1].bought+bulk
		player.generators[tierNum-1].amount=player.generators[tierNum-1].amount.add(bulk)
		updateCosts('gens')
	
		if (Decimal.gt(bulk,0)) {
			newMilestone(tierNum)
			if (tierNum==10) if (Decimal.gt(player.generators[9].bought,4)) newMilestone(11)
			if (player.currentChallenge==7) {
				for (k=0;k<j-1;k++) {
					player.generators[k].amount=new Decimal(0)
				}
			}
			if (player.currentChallenge==8) player.challPow=new Decimal(1)
			if (player.currentChallenge==11) player.challPow=new Decimal(0.1)
			if (player.currentChallenge==13) player.challPow=Decimal.pow(1.01,bulk).times(player.challPow).min(2)
			if (player.currentChallenge==14?player.chall14Stuff.unshift(tier)>player.highestTierPrestiges[0]-3:false) player.chall14Stuff.pop()
				
			player.ach2possible=false
		}
	}
}
	
function getGeneratorMultiplier(tier,chall5effect=true) {
	if (player.generators[tier].amount.eq(0)) {
		ppsSingles[tier]=new Decimal(0)
		return
	}
		
	var multi
	if (Decimal.gt(player.generators[tier].bought,0)) multi=Decimal.pow((tier==9&&player.supernovaUpgrades.includes(9)&&player.currentChallenge==0&&!player.preSupernova)?1.1:(tier==9&&player.transferUpgrades.includes(10))?1.07:(player.currentChallenge==1)?1.03:1.05,player.generators[tier].bought)
	else multi=new Decimal(1)
	
	multi=multi.times(player.prestigePower)
	if (player.transferUpgrades.length>0) {
		if (player.transferUpgrades.includes(1)&&player.generators[tier].amount.gte(10)) multi=multi.times(Decimal.pow(player.currentChallenge==6?1.0179821306309549:1.02,Math.floor(player.generators[tier].amount.log10())))
		if (player.transferUpgrades.includes(2)) multi=multi.times(upgMults.tupg2)
		if (player.transferUpgrades.includes(3)) multi=multi.times(upgMults.tupg3)
		if (player.transferUpgrades.includes(4)) multi=multi.times(upgMults.tupg4)
		if (player.transferUpgrades.includes(5)) multi=multi.times(upgMults.tupg5)
		if (player.transferUpgrades.includes(11)) multi=multi.times(upgMults.tupg11)
		if (player.transferUpgrades.includes(12)) multi=multi.times(Math.pow(3,player.currentChallenge==6?0.9:1))
	}
	
	if (player.supernovaUpgrades.length>0) if (!player.preSupernova) {
		if (player.supernovaUpgrades.includes(1)) multi=multi.times(upgMults.snupg1)
		if (player.supernovaUpgrades.includes(4)) multi=multi.times(upgMults.snupg4)
		if (player.supernovaUpgrades.includes(5)) multi=multi.times(1+4/(1+player.supernovaPlaytime/90))
		if (player.supernovaUpgrades.includes(10)) multi=multi.times(upgMults.snupg10)
		if (player.supernovaUpgrades.includes(13)) multi=multi.times(upgMults.snupg13)
		if (player.supernovaUpgrades.includes(15)) multi=multi.times(upgMults.snupg15)
		if (player.supernovaUpgrades.includes(16)&&tier==0) multi=multi.times(Decimal.pow(1.05,player.generators[9].amount))
		if (player.currentChallenge==0) {
			if (player.supernovaUpgrades.includes(12)) multi=multi.times(upgMults.snupg12)
			if (player.supernovaUpgrades.includes(14)) multi=multi.times(10)
				
			if (player.achievements.includes(2)&&!player.supernovaHeadstart) multi=multi.times(3)
			if (player.achievements.includes(3)&&tier==0) multi=multi.times(player.generators[0].bought)
			if (player.achievements.includes(4)&&tier==8) multi=multi.times(Decimal.times(player.generators[9].bought,15))
			if (player.achievements.includes(5)&&tier>4) multi=multi.times(Math.log10(player.prestiges[2]+1)/Math.log10(3))
		}
	}
		
	if (player.currentChallenge==5&&chall5effect) {
		if (tier==0) {
			for (j=1;j<player.highestTierPrestiges[0];j++) {
				getGeneratorMultiplier(j)
				multi=multi.times(ppsSingles[j])
			}
		} else {
			multi=multi.pow(1.01).times(player.generators[j].bought+1).add(1)
		}
	}
	if (player.currentChallenge==8||player.currentChallenge==11) multi=multi.times(player.challPow)
	if (player.currentChallenge==10&&tier==9) multi=multi.pow(0.9)
	if (player.currentChallenge==15) multi=multi.pow(player.stars.pow(-0.05))
		
	if (neutronBoost.gt(1)&&!player.preSupernova) multi=multi.times(neutronBoost)
	if (player.destabilization.timeLeft>0) multi=multi.pow(1-dsPercentage*0.0015)
		
	if (!chall5effect) return multi.times(player.generators[tier].amount)
	ppsSingles[tier]=multi
}

function getPrestigePower(stars) {
	if (stars==undefined) var usedStars=player.stars
	else var usedStars=stars
	var multi=Decimal.pow(usedStars,0.05).times(player.transferUpgrades.includes(7)?0.0353134386:0.0280504614)
	if (player.transferUpgrades.length>0) {
		if (player.transferUpgrades.includes(6)) {
			var tupg6multi=Math.pow(multi.max(794.148932).log10()*0.344839245,player.currentChallenge==6?0.675:0.75)
			if (stars==undefined) upgMults.tupg6=tupg6multi
			multi=multi.times(tupg6multi)
		}
		if (player.transferUpgrades.includes(9)) multi=multi.times(Math.pow(2,(player.currentChallenge==6)?0.9:1))
		if (player.transferUpgrades.includes(14)) multi=multi.times(upgMults.tupg14)
	}

	if (!player.preSupernova&&player.currentChallenge==0) {
		if (player.supernovaUpgrades.includes(6)) multi=multi.times(upgMults.snupg6)
		if (player.supernovaUpgrades.includes(8)) multi=multi.times(3)
	}
		
	if (player.currentChallenge==9) multi=multi.pow(0.85)
	if (player.currentChallenge==13) multi=multi.pow(player.challPow)
		
	if (neutronBoostPP.gt(1)) multi=multi.times(neutronBoostPP)
		
	return multi
}

function getTransferPoints() {
	var multi=player.prestigePower.div(100).cbrt()
	if (player.transferUpgrades.length>0) {
		if (player.transferUpgrades.includes(13)) multi=multi.times(upgMults.tupg13)
	}
	if (player.currentChallenge==9) multi=multi.pow(1.17)

	if (!player.preSupernova&&player.currentChallenge==0) {
		if (player.supernovaUpgrades.includes(7)) multi=multi.times(upgMults.snupg7)
		if (player.achievements.includes(7)) multi=multi.times(Math.log10(player.prestiges[2]+1)/Math.log10(2))
	}	
	
	return multi.floor()
}

function buyTransferUpgrade(num) {
	if (player.transferPoints.gte(costs.tupgs[num-1])&&!player.transferUpgrades.includes(num)&&(num<13||player.transferUpgrades.length>11)) {
		player.transferPoints=player.transferPoints.sub(costs.tupgs[num-1])
		player.transferUpgrades.push(num)
		if (num==8) updateCosts('gens')
			
		if (player.transferUpgrades.length>1) newMilestone(19)
		if (player.transferUpgrades.length>3) newMilestone(20)
		if (player.transferUpgrades.length>7) newMilestone(21)
		if (player.transferUpgrades.length>11) newMilestone(22)
		if (player.transferUpgrades.length>13) newMilestone(23)
	}
}

function updateUpgradeMultipliers() {
	if (player.transferUpgrades.length>0) {
		if (player.transferUpgrades.includes(2)) upgMults.tupg2=Math.pow(player.playtime/1800,(player.currentChallenge==6)?0.135:0.15)+1
		if (player.transferUpgrades.includes(3)) upgMults.tupg3=Math.pow(player.transferPlaytime/600,(player.currentChallenge==6)?0.117:0.13)+1
		if (player.transferUpgrades.includes(4)) upgMults.tupg4=Math.pow(player.prestigePeak[0].log10()*0.727038023,(player.currentChallenge==6)?0.63:0.7)
		if (player.transferUpgrades.includes(5)) upgMults.tupg5=Math.pow(player.prestigePeak[1].log10()*2.31566114,(player.currentChallenge==6)?0.63:0.7)
		if (player.transferUpgrades.includes(11)) upgMults.tupg11=Decimal.pow(1.00145,player.generators[4].bought)
		if (player.transferUpgrades.includes(13)) upgMults.tupg13=Decimal.pow(player.prestigePower.log10(),(player.currentChallenge==6)?0.369588574:0.410653971)
		if (player.transferUpgrades.includes(14)) upgMults.tupg14=Decimal.pow(player.transferPoints.lt(10)?1:player.transferPoints.log10(),(player.currentChallenge==6)?0.339848464:0.377609405)
	}
	if (player.supernovaUpgrades.length>0) {
		if (player.supernovaUpgrades.includes(1)) upgMults.snupg1=Decimal.add(1,player.generators[0].bought).add(player.generators[1].bought).add(player.generators[2].bought).add(player.generators[3].bought).add(player.generators[4].bought).add(player.generators[5].bought).add(player.generators[6].bought).add(player.generators[7].bought).add(player.generators[8].bought).add(player.generators[9].bought).log10()*1.08374517+1
		if (player.supernovaUpgrades.includes(4)) upgMults.snupg4=Decimal.pow(player.totalStars.log10(),1.5).times(0.000923858398)
		if (player.supernovaUpgrades.includes(6)) upgMults.snupg6=Math.log10(player.prestiges[2])+1
		if (player.supernovaUpgrades.includes(7)) upgMults.snupg7=Decimal.pow((player.neutronStars.lt(1))?1:Decimal.add(player.neutronStars.log10(),1),0.5)
		if (player.supernovaUpgrades.includes(10)) upgMults.snupg10=Math.pow(1+player.transferUpgrades.length,0.405683871)
		if (player.supernovaUpgrades.includes(12)) upgMults.snupg12=Math.min(1+1.12024118/Math.log10(player.fastestSupernova+1),5)
		if (player.supernovaUpgrades.includes(13)) upgMults.snupg13=Math.min(1+1.12024118/Math.log10(player.lastTransferPlaytime*6+1),5)
		if (player.supernovaUpgrades.includes(15)) upgMults.snupg15=Math.pow(1+player.achievements.length,0.74492186)
		if (player.supernovaUpgrades.includes(18)) upgMults.snupg18=Decimal.pow(player.neutrons,0.3)
		if (player.supernovaUpgrades.includes(19)) upgMults.snupg19=Decimal.pow(5,player.neutronTiers[7].bought)
		if (player.supernovaUpgrades.includes(20)) upgMults.snupg20=Decimal.pow(player.prestigePower,0.02)
		if (player.supernovaUpgrades.includes(21)) upgMults.snupg21=1
		if (player.supernovaUpgrades.includes(22)) upgMults.snupg22=1
		if (player.supernovaUpgrades.includes(23)) upgMults.snupg23=1
		if (player.supernovaUpgrades.includes(24)) upgMults.snupg24=1
		if (player.supernovaUpgrades.includes(25)) upgMults.snupg25=1
		if (player.supernovaUpgrades.includes(26)) upgMults.snupg26=1
	}
}

function notNow() {
	showTooMuch=false
}

function getPostPrestigePoints(tier) {
	var gainIsOne=false
	if (tier==3) if (!player.breakLimit||player.currentChallenge>0||player.preSupernova) gainIsOne=true
	if (tier==4) if (!player.cheatOptions.breakLimitNS) gainIsOne=true
	if (gainIsOne) return new Decimal(1)
	
	var pointsList=[player.stars,player.neutronStars,player.quarkStars,player.particles]
	var extra=new Decimal(0)
	var gain=new Decimal(0)
	switch (tier) {
		case 3: extra=player.destabilization.unstableStars; break
	}
	var sumPoints=pointsList[tier-3]
	if (extra.gt(0)) sumPoints=sumPoints.add(extra)
	if (sumPoints.lt(maxValueLogarithmicallySquared)) return sumPoints.div(Number.MAX_VALUE).pow(1/maxValueLogSub1).floor().max(1)
	return sumPoints.pow(1/maxValueLog)
}
	
function switchSNTab(tabName) {
	SNTab=tabName
}
	
function switchGenTab(tabName) {
	genTab=tabName
}

function buySupernovaUpgrade(num) {
	if (player.neutronStars.gte(costs.snupgs[num-1])&&!player.supernovaUpgrades.includes(num)) {
		player.neutronStars=player.neutronStars.sub(costs.snupgs[num-1])
		player.supernovaUpgrades.push(num)
		if (player.supernovaHeadstart) {
			if (num==2) player.transferUpgrades=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
			if (num==3) {
				updatePPHeadstart()
				if (player.prestigePower.lt(ppHeadstart)) player.prestigePower=ppHeadstart
			}
		}
			
		if (player.supernovaUpgrades.length>1) newMilestone(25)
		if (player.supernovaUpgrades.length>3) newMilestone(26)
		if (player.supernovaUpgrades.length>7) newMilestone(27)
		if (player.supernovaUpgrades.length>11) newMilestone(28)
	}
}

function getAchievement(achId) {
	if ((player.prestiges[2]>0||player.neutronStars.gt(0))&&!player.achievements.includes(achId)) {
		player.achievements.push(achId)
		showMilestone(achId,true)
	}
}

function updatePPHeadstart() {
	ppHSValue1=player.neutronStars.pow(Math.min(Math.max(player.neutronStars.log10(),5),12.5+0.05*player.ppHeadstartUpgrades[0]))
	ppHSValue2=player.prestigePeak[0].pow(1-1/(player.ppHeadstartUpgrades[2]+9))
	ppHSPreBreakLimit=Decimal.pow(10,player.ppHeadstartUpgrades[1]+16)
	var maximum=ppHSValue1
	if (player.breakLimit) {
		maximum=maximum.min(ppHSValue2)
	} else {
		maximum=maximum.min(ppHSPreBreakLimit)
	}
	ppHeadstart=maximum.max(1)
}

function amountChallengeCompleted() {
	var amount=0
	for (i in player.challengesCompleted) {
		if (parseInt(i)<13) amount++
	}
	return amount
}

function updateAutobuyers() {
	if (player.autobuyers.upgrade!=undefined) document.getElementById('toggleAutoupgrade').checked=player.autobuyers.upgrade.disabled
	if (player.autobuyers.transfer!=undefined) {
		document.getElementById('autotransferTimes').value=player.autobuyers.transfer.times.toString()
		if (player.autobuyers.transfer.tp!=undefined) document.getElementById('autotransferTP').value=player.autobuyers.transfer.tp.toString()
		if (player.autobuyers.transfer.tpDisabled!=undefined) document.getElementById('toggleAutotransferTP').value=player.autobuyers.transfer.tpDisabled
		document.getElementById('toggleAutotransfer').checked=player.autobuyers.transfer.disabled
	}
	if (player.autobuyers.prestige!=undefined) {
		document.getElementById('autoprestigeTimes').value=player.autobuyers.prestige.times.toString()
		document.getElementById('toggleAutoprestige').checked=player.autobuyers.prestige.disabled
	}
	if (player.autobuyers.gens!=undefined) {
		for (i=1;i<11;i++) {
			document.getElementById('toggleAutogen'+i).disabled=(player.autobuyers.gens.tiers[i]==undefined)
			document.getElementById('toggleAutogen'+i).checked=(player.autobuyers.gens.tiers[i]!=undefined?player.autobuyers.gens.tiers[i]:false)
		}
		for (i=0;i<10;i++) {
			document.getElementById('t'+(i+1)+'priority').value=player.autobuyerPriorities[i]
		}
	}
	if (player.autobuyers.supernova!=undefined) {
		document.getElementById('autonovaNS').value=player.autobuyers.supernova.ns.toString()
		document.getElementById('toggleAutonova').checked=player.autobuyers.supernova.disabled
	}
}

function toggleAutobuyer(id,genId) {
	if (id=='transferTP') {
		player.autobuyers.transfer.tpDisabled=!player.autobuyers.transfer.tpDisabled
	} else if (id=='gens') {
		player.autobuyers.gens.tiers[genId]=!player.autobuyers.gens.tiers[genId]
	} else {
		player.autobuyers[id].disabled=!player.autobuyers[id].disabled
	}
}

function reduceInt() {
	if (player.supernovaUpgrades.length==0) {
		var messages=['You must buy your first NS to get your first supernova upgrade.','Wait a minute, are you buying autobuyers instead? Aarex won\'t do that!','Really? Are you clicking in wrong places? Just do it or else...','Okay then... I will do it for you.']
		alert(messages[clickedWrong])
		clickedWrong++
		if (clickedWrong==4) {
			clickedWrong=0
			buySupernovaUpgrade(1)
		}
	} else if (player.neutronStars.gte(costs.intReduceCost)&&player.autobuyers.interval>0.05) {
		player.neutronStars=player.neutronStars.sub(costs.intReduceCost)
		player.autobuyers.interval=Math.max(player.autobuyers.interval*0.8,0.05)
		updateCosts('autobuyers')
		
		if (player.autobuyers.interval==0.05) newMilestone(36)
	}
}

function openRewardBox() {
	if (player.rewardBoxes[1]==0) player.rewardBoxes[1]=5*Math.sqrt(player.rewardBoxes[2]+1)
}

function unlockAutobuyer() {
	var number=player.rewardBoxes[2]
	if (number==0) {
		if (player.autobuyers.transfer==undefined) {
			player.autobuyers.transfer={lastTick:player.playtime,disabled:false,times:new Decimal(2)}
			processing=false
		}
	} else if (number==1) {
		if (player.autobuyers.prestige==undefined) {
			player.autobuyers.prestige={lastTick:player.playtime,disabled:false,times:new Decimal(10)}
			processing=false
		}
	} else {
		if (player.autobuyers.gens==undefined) player.autobuyers.gens={lastTick:player.playtime,tiers:{},bulk:1}
		if (player.autobuyers.gens.tiers[number-1]==undefined) {
			player.autobuyers.gens.tiers[number-1]=true
			processing=false
		}
	}
	updateAutobuyers()
	player.rewardBoxes[0]--
	player.rewardBoxes[1]=0
	player.rewardBoxes[2]++
}

function buyAutobuyerFeature(num) {
	if (player.neutronStars.gte(costs.bisfeatures[num-1])&&!player.buyinshopFeatures.includes(num)) {
		player.neutronStars=player.neutronStars.sub(costs.bisfeatures[num-1])
		player.buyinshopFeatures.push(num)
			
		switch (num) {
			case 5: player.autobuyers.transfer.tp=new Decimal(1e10); break
			case 6: player.autobuyers.supernova={lastTick:player.playtime,disabled:false,ns:new Decimal(100)}; break
			case 8: player.autobuyers.transfer.tpDisabled=false; break
		}
		
		if (player.buyinshopFeatures.length>0) newMilestone(37)
		if (player.buyinshopFeatures.length>1) newMilestone(38)
		if (player.buyinshopFeatures.length>3) newMilestone(39) 
		if (player.buyinshopFeatures.length>7) newMilestone(41) 
		updateAutobuyers()
	}
}

function changePriority(id) {
	var value1=document.getElementById('t'+id+'priority').value
	var index1=player.autobuyerPriorities.findIndex(function(c){return c==value1})
	var value2=player.autobuyerPriorities[id-1]
	player.autobuyerPriorities[index1]=parseInt(value2)
	player.autobuyerPriorities[id-1]=parseInt(value1)
	updateAutobuyers()
}

function buyBulk() {
	if (player.neutronStars.gte(costs.bbCost)&&(player.breakLimit||player.autobuyers.gens.bulk<256)) {
		player.neutronStars=player.neutronStars.sub(costs.bbCost)
		player.autobuyers.gens.bulk=player.autobuyers.gens.bulk*2
		updateCosts('autobuyers')
	}
}

function changeTimes(id) {
	player.autobuyers[id].times=new Decimal(document.getElementById('auto'+id+'Times').value)
}

function changeABP(id) {
	if (id=='supernova') {
		player.autobuyers.supernova.ns=new Decimal(document.getElementById('autonovaNS').value)
	} else {
		player.autobuyers.transfer.tp=new Decimal(document.getElementById('autotransferTP').value)
	}
}

function changePBANOption(id) {
	if (id==1) {
		player.preBreakAutonovaOptions.time+=15
		if (player.preBreakAutonovaOptions.time==Number.MAX_VALUE) player.preBreakAutonovaOptions.time=0
		if (player.preBreakAutonovaOptions.time==135) player.preBreakAutonovaOptions.time=Number.MAX_VALUE
	} else player.preBreakAutonovaOptions.overlimit=!player.preBreakAutonovaOptions.overlimit
}

function buyBoost(id) {
	switch (id) {
		case 1: 
			if (player.stars.gte(costs.neutronBoosts[0])&&player.neutronBoosts.powers[0]<40) {
				player.stars=player.stars.sub(costs.neutronBoosts[0])
				player.neutronBoosts.powers[0]++
				updateCosts('neutronboosts')
				updateNeutronBoosts()
			}
		break
		
		case 2: 
			if (player.transferPoints.gte(costs.neutronBoosts[1])&&player.neutronBoosts.powers[1]<40) {
				player.transferPoints=player.transferPoints.sub(costs.neutronBoosts[1])
				player.neutronBoosts.powers[1]++
				updateCosts('neutronboosts')
				updateNeutronBoosts()
			}
		break
		
		case 3:
			if (player.neutronStars.gte(costs.neutronBoosts[2])&&player.neutronBoosts.powers[2]<60) {
				player.neutronStars=player.neutronStars.sub(costs.neutronBoosts[2])
				player.neutronBoosts.powers[2]++
				updateCosts('neutronboosts')
				updateNeutronBoosts()
			}
		break
		
		case 4: 
			if (player.neutronStars.gte(costs.neutronBoosts[3])&&player.neutronBoosts.basePower<10) {
				player.neutronStars=player.neutronStars.sub(costs.neutronBoosts[3])
				player.neutronBoosts.basePower++
				updateCosts('neutronboosts')
				updateNeutronBoosts()
			}
		break
		
		case 5: 
			if (player.neutronStars.gte(costs.neutronBoosts[4])&&player.neutronBoosts.ppPower<0.15) {
				player.neutronStars=player.neutronStars.sub(costs.neutronBoosts[4])
				player.neutronBoosts.ppPower=Math.round((player.neutronBoosts.ppPower+0.0375)*80)/80
				updateCosts('neutronboosts')
				updateNeutronBoosts()
			}
		break
	}
}

function buyPPHeadstartUpg(id) {
	if (id==1) if (player.ppHeadstartUpgrades[0]==20) return
	if (id==3) if (player.ppHeadstartUpgrades[2]==10) return
	if (player.neutronStars.gte(costs.ppHeadstartUpgs[id-1])) {
		player.neutronStars=player.neutronStars.sub(costs.ppHeadstartUpgs[id-1])
		player.ppHeadstartUpgrades[id-1]++
		updateCosts('ppheadstartupgrades')
		updatePPHeadstart()
	}
}

function updateNeutronBoosts() {
	var totalNeutronBoostPower=player.neutronBoosts.powers[0]+player.neutronBoosts.powers[1]+player.neutronBoosts.powers[2]+totalAliens
	neutronBoost=Decimal.pow(10+Math.sqrt(player.neutronBoosts.basePower),totalNeutronBoostPower)
	neutronBoostPP=neutronBoost.pow(player.neutronBoosts.ppPower)
	
	if (totalNeutronBoostPower>4) newMilestone(42)
	if (totalNeutronBoostPower>9) newMilestone(43)
	if (totalNeutronBoostPower>19) newMilestone(44)
}
	
function buyNeutronGen(tier) {
	if (player.neutronStars.lt(costs.neutronTiers[tier-1])) return
		
	player.neutronStars=player.neutronStars.sub(costs.neutronTiers[tier-1])
	player.neutronTiers[tier-1].amount=player.neutronTiers[tier-1].amount.add(1)
	player.neutronTiers[tier-1].bought++
	updateCosts('neutrontiers')
	
	newMilestone(45)
	if (tier==2) newMilestone(46)
	if (tier==3) newMilestone(47)
	if (tier==5) newMilestone(48)
	if (tier==8) newMilestone(49)
	if (tier==10) newMilestone(50)
}
	
function maxAllNT() {
	var buyTiers=[]
	for (i=1;i<11;i++) {
		if (isWorthIt('nt'+i)) {
			buyTiers.push(i)
		}
	}
	for (j=buyTiers.length;j>0;j--) {
		var tierNum=buyTiers[j-1]
		var costMult=Math.pow(10,tierNum+Math.floor((tierNum+3)/2)+Math.floor(Math.max(tierNum-2,0)/3)*2-1)
		var bulk=Math.floor(player.neutronStars.div(j).div(costs.neutronTiers[tierNum-1]).times(costMult-1).plus(1).log(costMult))
		
		player.neutronStars=player.neutronStars.sub(Decimal.pow(costMult,bulk).sub(1).div(costMult-1).times(costs.neutronTiers[tierNum-1]))
		player.neutronTiers[tierNum-1].amount=player.neutronTiers[tierNum-1].amount.add(bulk)
		player.neutronTiers[tierNum-1].bought=player.neutronTiers[tierNum-1].bought+bulk
		updateCosts('neutrontiers')
	
		newMilestone(45)
		if (tierNum==2) newMilestone(46)
		if (tierNum==3) newMilestone(47)
		if (tierNum==5) newMilestone(48)
		if (tierNum==8) newMilestone(49)
		if (tierNum==10) newMilestone(50)
	}
}
	
function getNeutronTierMultiplier(tier) {
	var multi=Decimal.pow((player.supernovaUpgrades.includes(17)&&tier==0)?10:5,player.neutronTiers[tier].bought-1)
	
	if (tier>0) if (player.supernovaUpgrades.includes(tier+17)) multi=multi.times(upgMults['snupg'+(tier+17)])
	
	ntppsSingles[tier]=multi
}

function updateNeutronPower() {
	neutronPower=Decimal.pow(player.neutrons.add(1),Math.min(Math.max(14+player.neutrons.log10()*2,20),30))
	updateCosts('gens')
}

function calculateDSValues() {
	dsInterval=5*Math.pow(0.9,player.destabilization.upgrades[0]-player.destabilization.upgrades[1]/2)
	dsTime=3600+360*(player.destabilization.upgrades[1]-player.destabilization.upgrades[0]/2)
	dsPercentage=100-100/(player.destabilization.upgrades[2]+10)
}

function buyDestabilizationUpg(id) {
	if (id<3) if (player.destabilization.upgrades[id-1]==20) return
	if (id==4) if (player.destabilization.upgrades[3]==1) return
	if (player.neutronStars.gte(costs.destabilization[id-1])) {
		player.neutronStars=player.neutronStars.sub(costs.destabilization[id-1])
		player.destabilization.upgrades[id-1]++
		updateCosts('destabilization')
		calculateDSValues()
	}
}
	
function switchHNTab(tabName) {
	HNTab=tabName
}
	
function switchChallTab(tabName) {
	challTab=tabName
}

function buyNeutronChallenge(id) {
	if (true&&player.neutronChallengeUnlocked==0) {
		player.neutrons=player.neutrons.sub(0)
		player.neutronChallengeUnlocked=id
		tab='supernova'
		SNTab='challenges'
		challTab='neutron'
	}
}

function gameTick() {
	var currentTime = new Date().getTime()
	if (player.lastUpdate>0) {
		timeSinceSave=Math.floor(currentTime/1000-lastSave)
		if (timeSinceSave>=60) {
			save()
		}
		
		var diff=(currentTime-player.lastUpdate)/1000*diffMultiplier
		player.playtime+=diff
		player.prestigePlaytime+=diff
		player.transferPlaytime+=diff
		player.supernovaPlaytime+=diff
		if (!tooMuch) {
			if (player.transferUpgrades.length>0||player.supernovaUpgrades.length>0) updateUpgradeMultipliers()
			for (a=(player.currentChallenge==5?1:player.highestTierPrestiges[0]);a>0;a--) {
				getGeneratorMultiplier(a-1)
				pps[a-1]=ppsSingles[a-1].times(player.generators[a-1].amount)
				ppt[a-1]=pps[a-1].times(diff)
				if (a==1) {
					player.stars=player.stars.add(ppt[0])
					player.totalStars=player.totalStars.add(ppt[0])
				} else {
					player.generators[a-2].amount=player.generators[a-2].amount.add(ppt[a-1])
				}
			}
			if (player.supernovaTabsUnlocked>3) {
				for (a=10;a>0;a--) {
					if (player.neutronTiers[a-1].amount.gt(0)) {
						getNeutronTierMultiplier(a-1)
						ntpps[a-1]=ntppsSingles[a-1].times(player.neutronTiers[a-1].amount)
						ntppt[a-1]=ntpps[a-1].times(diff)
						if (a==1) {
							player.neutrons=player.neutrons.add(ntppt[0])
							player.totalNeutrons=player.totalNeutrons.add(ntppt[0])
							
							updateNeutronPower()
						} else {
							player.neutronTiers[a-2].amount=player.neutronTiers[a-2].amount.add(ntppt[a-1])
						}
					}
				}
			}
		}
		
		if (player.currentChallenge==8&&ppsSingles[0].gt(0)) player.challPow=player.challPow.times(Decimal.pow(0.99,diff*2))
		if (player.currentChallenge==11) player.challPow=player.challPow.times(Decimal.pow(1.03,diff)).min(1)
		if (player.currentChallenge==13&&ppsSingles[0].gt(0)) player.challPow=player.challPow.times(Decimal.pow(0.99,diff*(player.prestigePower.log10()/2+1)))
		if (player.stars.lt(0)) player.stars=new Decimal(0)
		if (player.transferPlaytime>0&&player.prestigePower.gte(1e2)) {
			gainRate[0]=getTransferPoints().div(player.transferPlaytime)
			if (gainRate[0].gt(player.gainPeak[0])) player.gainPeak[0]=gainRate[0]
		}
		if (player.breakLimit) {
			if (player.supernovaPlaytime>0&&player.stars.gt(Number.MAX_VALUE)) {
				gainRate[1]=Decimal.div(getPostPrestigePoints(3),player.supernovaPlaytime)
				if (gainRate[1].gt(player.gainPeak[1])) player.gainPeak[1]=gainRate[1]
			}
		}
		if (player.stars.gte(starsLimit)||tooMuch) {
			if (player.currentChallenge==0&&!player.overlimit&&!player.breakLimit) {
				starsLimit='5.592438960924321e400'
				player.overlimit=true
			} else {
				player.stars=new Decimal(starsLimit)
				tooMuch=true
			}
			if (player.supernovaPlaytime>player.preBreakAutonovaOptions.time) showTooMuch=true
			else if (tooMuch||(!player.preBreakAutonovaOptions.overlimit&&player.overlimit)) reset(3)
		}
		if (player.prestigePower.eq(0)) player.prestigePower=new Decimal(1) //Because I need to fix bugs from autobuyers.
		if (player.transferPoints.lt(0)) player.transferPoints=new Decimal(0)
		if (player.neutronStars.lt(0)) player.neutronStars=new Decimal(0)
		if ((player.neutronStars.gte(Number.MAX_VALUE)&&!player.cheatOptions.breakLimitNS)||showTooMuch2) {
			player.neutronStars=new Decimal(Number.MAX_VALUE)
			showTooMuch2=true
		}
		
		if (player.prestiges[2]>0||player.neutronStars.gt(0)) {
			while (streqs.length>player.supernovaTabsUnlocked && player.neutronStars.gte(streqs[player.supernovaTabsUnlocked])) {
				player.supernovaTabsUnlocked++
				if (player.supernovaTabsUnlocked==1) newMilestone(30)
			}
			while (challreqs.length>player.challengeUnlocked && player.neutronStars.gte(challreqs[player.challengeUnlocked])) {
				player.challengeUnlocked++
			}
		}
		
		if (player.rewardBoxes[1]>0) {
			player.rewardBoxes[1]=Math.max(player.rewardBoxes[1]-diff,0)
			if (player.rewardBoxes[1]==0) {
				unlockAutobuyer()
			}
		}
		
		if (player.autobuyers.interval!=undefined&&!player.preSupernova) {
			var occurrences=0
			if (!tooMuch&&!player.autobuyers.upgrade.disabled) {
				occurrences=Math.floor((player.playtime-player.autobuyers.upgrade.lastTick)/player.autobuyers.interval)
				if (occurrences>0) {
					player.autobuyers.upgrade.lastTick+=occurrences*player.autobuyers.interval
					var a=0
					while (a<14&&occurrences>0) {
						if (a<3) a=(a+1)%3+1
						if (!player.transferUpgrades.includes(a+1)) {
							if (player.transferPoints.gte(costs.tupgs[a])) {
								buyTransferUpgrade(a+1)
								occurrences--
							} else {
								occurrences=0
							}
						}
						a++
					}
				}
			}
			if (player.autobuyers.supernova!=undefined?!player.autobuyers.supernova.disabled:false) {
				occurrences=Math.floor((player.playtime-player.autobuyers.supernova.lastTick)/player.autobuyers.interval)
				if (occurrences>0) {
					player.autobuyers.supernova.lastTick+=occurrences*player.autobuyers.interval
					if (Decimal.gte(getPostPrestigePoints(3),player.currentChallenge>0?1:player.autobuyers.supernova.ns)) checkToReset(3)
				}
			}
			if (!tooMuch&&player.autobuyers.prestige!=undefined?!player.autobuyers.prestige.disabled:false) {
				occurrences=Math.floor((player.playtime-player.autobuyers.prestige.lastTick)/player.autobuyers.interval)
				if (occurrences>0) {
					player.autobuyers.prestige.lastTick+=occurrences*player.autobuyers.interval
					if (player.destabilization.timeLeft==0) if (getPrestigePower().div(player.prestigePower).gte(player.autobuyers.prestige.times)) checkToReset(1)
				}
			}
			if (!tooMuch&&player.autobuyers.transfer!=undefined?!player.autobuyers.transfer.disabled:false) {
				occurrences=Math.floor((player.playtime-player.autobuyers.transfer.lastTick)/player.autobuyers.interval)
				if (occurrences>0) {
					player.autobuyers.transfer.lastTick+=occurrences*player.autobuyers.interval
					if (getTransferPoints().div(player.transferPoints.max(1)).gte(player.autobuyers.transfer.times.sub(1))) checkToReset(2)
					if (player.autobuyers.transfer.tp!=undefined) if (player.autobuyers.transfer.tpDisabled==undefined?true:!player.autobuyers.transfer.tpDisabled) if (getTransferPoints().gte(player.autobuyers.transfer.tp)) checkToReset(2)
				}
			}
			if (!tooMuch&&player.autobuyers.gens!=undefined) {
				occurrences=Math.floor((player.playtime-player.autobuyers.gens.lastTick)/player.autobuyers.interval)
				if (occurrences>0) {
					player.autobuyers.gens.lastTick+=occurrences*player.autobuyers.interval
					for (a=0;a<(player.currentChallenge==3?9:10);a++) {
						var genTier=player.autobuyerPriorities[a]
						if (player.autobuyers.gens.tiers[genTier]!=undefined?player.autobuyers.gens.tiers[genTier]:false) {
							if (player.highestTierPrestiges[0]>genTier-2) if (isWorthIt(genTier)) {
								buyGen(genTier,occurrences*player.autobuyers.gens.bulk,true)
								player.ach2possible=false
							}
						}
					}
				}
			}
		}
		
		if (player.supernovaTabsUnlocked>4) {
			if (player.destabilization.timeLeft>0) {
				var occurrences=Math.floor((player.playtime-player.destabilization.lastTick)/dsInterval)
				if (occurrences>0) {
					occurrences=Math.min(occurrences,player.destabilization.timeLeft)
					player.destabilization.timeLeft-=occurrences
					player.destabilization.lastTick+=occurrences*dsInterval
					player.destabilization.unstableStars=player.destabilization.unstableStars.times(Decimal.pow(2,occurrences))
				}
			} else {
				unstableStarsAfterActivation=player.stars.pow(dsPercentage*0.01)
			}
		}
			
		if (player.aliens.unlocked) {
			if (player.aliens.amount<60) {
				var occurrences=Math.floor(player.playtime-player.aliens.lastTick)
				player.aliens.lastTick+=occurrences
				player.aliens.progress+=occurrences
				if (player.aliens.progress>99) {
					var alienGain=Math.floor(player.aliens.progress/100)
					player.aliens.progress-=alienGain*100
					player.aliens.amount+=alienGain
					if (player.aliens.amount>59) {
						player.aliens.amount=60
						player.aliens.progress=0
					}
					updateNeutronBoosts()
				}
			}
			totalAliens=player.aliens.amount+player.aliens.kept
		} else {
			totalAliens=player.aliens.amount+player.aliens.kept
		}
	
		notOnShift=1
		if (keysPressed.length>0&&notOnFocus&&player.hotkeys) {
			if (keysPressed.includes(16)) notOnShift=0
			for (a=1;a<11;a++) {
				var keyid=48+(a%10)
				if (keysPressed.includes(keyid)) {
					if (keysPressed.includes(16)) {
						if (isWorthIt(a)) {
							buyGen(a,0,true)
							player.ach2possible=false
						}
					} else if (keysPressed.includes(17)) {
						buyNeutronGen(a)
						keysPressed=[]
					} else {
						if (isWorthIt(a)) {
							buyGen(a,1,true)
							player.ach2possible=false
						}
						keysPressed=[]
					}
				}
			}
			if (keysPressed.includes(68)) {
				if (player.autobuyers.interval!=undefined) {
					var disabled=0
					if (player.autobuyers.upgrade!=undefined) if (player.autobuyers.upgrade.disabled) disabled++
					if (player.autobuyers.transfer!=undefined) if (player.autobuyers.transfer.disabled) disabled++
					if (player.autobuyers.prestige!=undefined) if (player.autobuyers.prestige.disabled) disabled++
					if (player.autobuyers.gens!=undefined) {
						for (a=1;a<11;a++) {
							if (player.autobuyers.gens.tiers[a]!=undefined) if (!player.autobuyers.gens.tiers[a]) disabled++
						}
					}
					if (player.autobuyers.supernova!=undefined) if (player.autobuyers.supernova.disabled) disabled++
					if (disabled==0) {
						if (player.autobuyers.upgrade!=undefined) player.autobuyers.upgrade.disabled=true
						if (player.autobuyers.transfer!=undefined) player.autobuyers.transfer.disabled=true
						if (player.autobuyers.prestige!=undefined) player.autobuyers.prestige.disabled=true
						if (player.autobuyers.gens!=undefined) {
							for (a=1;a<11;a++) {
								if (player.autobuyers.gens.tiers[a]!=undefined) player.autobuyers.gens.tiers[a]=false
							}
						}
						if (player.autobuyers.supernova!=undefined) player.autobuyers.supernova.disabled=true
					} else {
						if (player.autobuyers.upgrade!=undefined) player.autobuyers.upgrade.disabled=false
						if (player.autobuyers.transfer!=undefined) player.autobuyers.transfer.disabled=false
						if (player.autobuyers.prestige!=undefined) player.autobuyers.prestige.disabled=false
						if (player.autobuyers.gens!=undefined) {
							for (a=1;a<11;a++) {
								if (player.autobuyers.gens.tiers[a]!=undefined) player.autobuyers.gens.tiers[a]=true
							}
						}
						if (player.autobuyers.supernova!=undefined) player.autobuyers.supernova.disabled=false
					}
					updateAutobuyers()
				}
				keysPressed=[]
			}
			if (keysPressed.includes(77)) maxAll()
			if (keysPressed.includes(80)) {checkToReset(1);keysPressed=[];}
			if (keysPressed.includes(83)) {checkToReset(3);keysPressed=[];}
			if (keysPressed.includes(84)) {checkToReset(2);keysPressed=[];}
		}
	}
	player.lastUpdate=currentTime
	
	updateElement('stars',tooMuch?'&#x221e;':format(player.stars))
	if (pps[0].eq(0)||tooMuch) {
		updateElement('sPS',0)
		disableTooltip('sPSExplanation')
	} else {
		updateElement('sPS',format(pps[0],(pps[0].gte(1e3))?2:1,0,false))
		enableTooltip('sPSExplanation')
		updateTooltip('sPSExplanation',(player.explanations?explainList.growthRate+'<br>':'')+'Growth rate: '+format(pps[0].div(player.stars).times(100),2,0,false)+'%')
	}
    if (player.supernovaTabsUnlocked>4) {
		showElement('unstableStars','block')
		updateElement('unstableStars','<b>'+format(player.destabilization.unstableStars)+'</b> unstable')
    } else {
		hideElement('unstableStars')
    }
	if (player.prestiges[1]>0||player.transferPoints.gt(0)||player.transferUpgrades.length>0) {
		showElement('transferTabButton','table-cell')
	} else {
		hideElement('transferTabButton')
		if (tab=='transfer') tab='gen'
	}
    var shown = false
    for (i = 2; i >= 0; i--) {
        if (!shown) {
            if (player.prestiges[i + 1] > 0) shown = true
            else switch (i) {
                case 0:
                    if (player.transferPoints.gt(0) || player.transferUpgrades.length > 0) {
                        shown = true
                    };
                    break
                case 1:
                    if (player.neutronStars.gt(0)) {
                        shown = true
                    };
                    break
                case 2:
                    if (player.quarkStars.gt(0)) {
                        shown = true
                    };
                    break
            }
        }
        if (shown) {
            if (i == 0) {
                showElement('prestigePoints', 'table')
                updateTooltipBase('transferPoints', format(player.transferPoints) + ' transfer point' + (player.transferPoints.eq(1) ? '' : 's'))
            } else if (i == 1) {
                showElement('neutronStars', 'table-cell')
                updateTooltipBase('neutronStars', format(player.neutronStars) + ' neutron star' + (player.neutronStars.eq(1) ? '' : 's'))
            } else {
                showElement('quarkStars', 'table-cell')
                updateTooltipBase('quarkStars', format(player.quarkStars) + ' quark star' + (player.quarkStars.eq(1) ? '' : 's'))
            }
        } else {
            if (i == 0) hideElement('prestigePoints')
            else if (i == 1) hideElement('neutronStars')
            else hideElement('quarkStars')
        }
    }
	if (player.prestiges[2]>0||player.neutronStars.gt(0)) {
		showElement('supernovaTabButton','table-cell')
		if (player.supernovaTabsUnlocked==streqs.length) {
			hideElement('requirementChild')
		} else {
			showElement('requirementChild','inline-block')
			moveElement('requirementChild',((player.supernovaTabsUnlocked==3)?'genTabs':'supernovaTabs')+'Row')
			updateElement('requirement','Next requires '+format(streqs[player.supernovaTabsUnlocked])+' NS')
			updateClass('requirement',(player.supernovaTabsUnlocked==3)?'supernovaLockedTab':'lockedUpgrade')
		}
		for (a=1;a<=streqs.length;a++) {
			if (player.supernovaTabsUnlocked>=a) {
				showElement('supernovaLockedTab'+a,'table-cell')
			} else {
				hideElement('supernovaLockedTab'+a)
			}
		}
	} else {
		hideElement('supernovaTabButton')
	}
	if (player.prestiges[3]>0||player.quarkStars.gt(0)) {
		showElement('hypernovaTabButton','table-cell')
	} else {
		hideElement('hypernovaTabButton')
	}
	if (player.prestiges[4]>0||player.particles.gt(0)) {
		showElement('exoticTabButton','table-cell')
	} else {
		hideElement('exoticTabButton')
	}
	if (player.prestiges[5]>0||player.strings.gt(0)) {
		showElement('quantumTabButton','table-cell')
	} else {
		hideElement('quantumTabButton')
	}
	if (player.customScrolling) {
        showElement('tabsCustomScrolling', 'table')
    } else {
        hideElement('tabsCustomScrolling')
    }
	
	if (tab!=oldTab) {
		showElement('tab'+tab,'block')
		hideElement('tab'+oldTab)
		oldTab=tab
		if (tab!='options') {
			hideElement('exportSave')
			hideElement('mixedNotationOptions')
			updateElement('mixedNotationOptions','')
		}
	}
	if (showTooMuch!=showedTooMuch) {
		showedTooMuch=showTooMuch
		if (showedTooMuch) {
			showElement('tooMuch','inline-block')
			setTimeout(function(){if (showedTooMuch) document.getElementById('tooMuch').style.opacity=1},50)
		}
		else {
			document.getElementById('tooMuch').style.opacity=0
			setTimeout(function(){hideElement('tooMuch')},500)
		}
	}
	if (showTooMuch) {
		explainList.supernova='<b>Supernova</b><br>After the layers of reset called prestige and transfer; there is a third layer of reset called supernova.<br>You need to reach '+format(Number.MAX_VALUE)+' stars to get your first supernova. Every time you supernova, you will get a single neutron star which you can buy it for upgrades and more content.'
		if (tooMuch) {
			updateElement('tooMuchMessage','The universe has been destroyed due to a overflow of stars.')
			hideElement('notNow')
		} else {
			updateElement('tooMuchMessage','You are now able to destroy your stars and gain your neutron stars. However, if you reach too many stars, supernova will be forced.')
			showElement('notNow','table-cell')
		}
		if (player.explanations) {
			enableTooltip('supernovaExplanation')
			updateTooltip('supernovaExplanation',explainList.supernova)
		} else {
			disableTooltip('supernovaExplanation')
		}
	}
	if (showTooMuch2!=showedTooMuch2) {
		showedTooMuch2=showTooMuch2
		if (showedTooMuch2) {
			showElement('tooMuch2','inline-block')
			setTimeout(function(){if (showedTooMuch2) document.getElementById('tooMuch2').style.opacity=1},50)
		} else {
			document.getElementById('tooMuch2').style.opacity=0
			setTimeout(function(){hideElement('tooMuch2')},500)
		}
	}
	if (player.layout!=oldLayout) {
		showElement('layout'+player.layout,'table')
		hideElement('layout'+oldLayout)
		oldLayout=player.layout
	}
	if (player.stars.gte(Number.MAX_VALUE)&&!showTooMuch) {
		explainList.supernova='<b>Supernova</b><br>After the layers of reset called prestige and transfer; there is a third layer of reset called supernova.<br>You need to reach '+format(Number.MAX_VALUE)+' stars to get your first supernova. Each time you supernova, you will get a single neutron star which you can buy it for upgrades and more content.'
		showElement('prestige3bl','table-cell')
		updateElement('prestige3bl','Supernova (explode stars) for<br>+'+format(getPostPrestigePoints(3))+' NS.')
		if (player.breakLimit) {
			enableTooltip('p3tt')
			updateTooltip('p3tt',(player.explanations?explainList.supernova+'<br>':'')+'NS gain rate: '+formatRate(gainRate[1],'NS')+'<br>Peak: '+formatRate(player.gainPeak[1],'NS'))
		} else if (player.explanations) {
			enableTooltip('p3tt')
			updateTooltip('p3tt',explainList.supernova)
		} else {
			disableTooltip('p3tt')
		}
	} else {
		disableTooltip('p3tt')
		hideElement('prestige3bl')
	}
	
	if (tab=='gen') {
		if (player.supernovaTabsUnlocked>2) {
			showElement('genTabs','block')
			if (player.customScrolling) {
                showElement('genTabsCustomScrolling', 'table')
            } else {
                hideElement('genTabsCustomScrolling')
            }
		} else {
			hideElement('genTabs')
			hideElement('genTabsCustomScrolling')
		}
		
		if (genTab!=oldGenTab) {
			showElement('gen'+genTab,'block')
			hideElement('gen'+oldGenTab)
			oldGenTab=genTab
		}
		if (genTab=='tiers') {
			for (a=0;a<10;a++) {
				var showGenerator=true
				if (a > 0 && player.layout == 1) {
                    if (player.highestTierPrestiges[0] >= a && (a < 9 || player.currentChallenge != 3)) {
                        showElement('t' + (a + 1) + 'GenRow', 'table-row')
                    } else {
                        hideElement('t' + (a + 1) + 'GenRow')
                        showGenerator = false
                    }
                }
                if (a > 0 && player.layout == 2) {
                    if (player.highestTierPrestiges[0] >= a && (a < 9 || player.currentChallenge != 3)) {
                        visibleElement('t' + (a + 1) + 'GenCell')
                        visibleElement('t' + (a + 1) + 'GenCell2')
                    } else {
                        invisibleElement('t' + (a + 1) + 'GenCell')
                        invisibleElement('t' + (a + 1) + 'GenCell2')
                        showGenerator = false
                    }
                }
				if (showGenerator) {
					var name='t'+(a+1)+'Gen'+(player.layout==2?'2':'')
					var currentText='<b>Tier '+(a+1)+' generator</b><br>'
					var tooltipText=''
					if (player.explanations) tooltipText=explainList.gens
					if (player.currentChallenge==5&&player.highestTierPrestiges[0]>a) {
						currentText=currentText+format(player.generators[a].amount,0,1)+' (x'+format(getGeneratorMultiplier(a,false),2,0,false)+')'
					} else if (player.generators[a].amount.eq(player.generators[a].bought)||a==player.highestTierPrestiges[0]-1||player.currentChallenge==5) {
						currentText=currentText+format(player.generators[a].amount,0,1)
					} else {
						currentText=currentText+format(player.generators[a].amount)+' ('+format(pps[a+1],(pps[a+1].gte(1000))?2:1,0,false)+'/s), '+format(player.generators[a].bought,2,1)+' bought'
						tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Growth rate: '+format(pps[a+1].div(player.generators[a].amount).times(100),2,0,false)+'%'
					}
					if (Decimal.gt(player.generators[a].amount,0)) if (ppsSingles[a]!=undefined) tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Production for 1 generator: '+format(ppsSingles[a],(ppsSingles[a].gte(1000))?2:1,0,false)+'/s'
					if (tooltipText=='') disableTooltip('t'+(a+1)+'Gen'+(player.layout==2?'2':''))
					else {
						enableTooltip('t'+(a+1)+'Gen'+(player.layout==2?'2':''))
						updateTooltip('t'+(a+1)+'Gen'+(player.layout==2?'2':''),tooltipText)
					}
					var lastLine=''
					var cost=costs.tiers[a]
					if (player.milestones==0&&a==0) {
						lastLine='Click here!'
					} else if (keysPressed.includes(16)&&player.highestTierPrestiges[0]>=a&&player.stars.gte(cost)&&player.currentChallenge!=14) {
						var multiplier=getCostMultiplier(a+1)
						var resource=(player.currentChallenge==4&&a>0)?player.generators[a-1].amount:player.stars
						var maxBulk=Math.floor(resource.div(cost).times(multiplier-1).plus(1).max(1).log(multiplier))
						lastLine='Buy '+format(maxBulk,2,1)
						if (Decimal.lte(maxBulk,1000)) lastLine=lastLine+' (x'+format(Decimal.pow(multiplier,maxBulk).sub(1).div(multiplier-1),2,0,false)+')'
					} else if (a>player.highestTierPrestiges[0]) {
						lastLine='Cost: ???'
					} else {
						lastLine='Cost: '+formatCosts(cost)
					}
				    updateTooltipBase(name,currentText)
				    var name='t'+(a+1)+'GenButton'+((player.layout==2)?'2':'')
				    updateElement(name,lastLine)
					if (player.highestTierPrestiges[0]>=a&&isWorthIt(a+1)) {
				        updateClass(name,'longButton')
					} else {
						updateClass(name,'shopUnafford')
					}
				}
			}
			if (player.prestigePower.gt(1)) {
				showElement('tooltipBaseprestigePower','inline')
				updateTooltipBase('prestigePower','<b>x'+format(player.prestigePower,3,0,false)+'</b> (prestige power) for all generator production<br>')
				if (player.explanations) {
					enableTooltip('prestigePower')
					updateTooltip('prestigePower',explainList.prestige)
				} else {
					disableTooltip('prestigePower')
				}
			} else {
				hideElement('tooltipBaseprestigePower')
			}
			var showPrestigeButton=false
			if (!showTooMuch) {
				if (player.destabilization.timeLeft==0||player.destabilization.upgrades[3]==1) {
					if (player.stars.gte(player.transferUpgrades.includes(7)?1e37:1e39)) {
						if (getPrestigePower().gt(player.prestigePower)) showPrestigeButton=true
					}
				}
				if (!showPrestigeButton&&player.showProgress) {
					if (player.destabilization.timeLeft>0&&player.destabilization.upgrades[3]==0) {
						showElement('prestigeProgress','block')
						updateElement('prestigeProgress','<b>Progress to prestige</b>: Wait until destabilization is finished, or transfer!')
					} else {
						var pp=player.prestigePower.log10()
						var gpp=getPrestigePower()
						var gppLog=gpp.log10()
						var gpp10=getPrestigePower(10).log10()
						if (pp>0) {
							var percentage=(gppLog-gpp10)/(pp-gpp10)
						} else {
							var percentage=player.stars.add(1).log10()/(player.transferUpgrades.includes(7)?37:39)
						}
						showElement('prestigeProgress','block')
						if (percentage<0) {
							updateElement('prestigeProgress','<b>Progress to prestige</b>: 0.00%')
						} else if (percentage>0.99995) {
							if (pp>=500) updateElement('prestigeProgress','<b>Progress to prestige</b>: '+format(Decimal.add(player.prestigePower.div(gpp).log10(),0.01),2,0,false)+' OoM left')
							else updateElement('prestigeProgress','<b>Progress to prestige</b>: 99.99%')
						} else {
							updateElement('prestigeProgress','<b>Progress to prestige</b>: '+Decimal.times(percentage,100).toFixed(2)+'%')
						}
					}
				} else {
					hideElement('prestigeProgress')
				}
			} else {
				hideElement('prestigeProgress')
			}
			if (showPrestigeButton) {
				showElement('p1row','table-cell')
				var gpp=getPrestigePower()
				var multi=gpp.div(player.prestigePower)
				updateElement('prestige1','Reset this game and get a boost:<br>x'+format(multi,3,0,false)+' production')
				enableTooltip('p1tt')
				updateTooltip('p1tt',(player.explanations?explainList.prestige+'<br>':'')+'Total multiplier for next prestige: x'+format(gpp,3,0,false)+'<br>Growth rate: '+format(multi.pow(1/player.prestigePlaytime).sub(1).times(100),2,0,false)+'%')
			} else if (!showTooMuch&&(player.currentChallenge==8||player.currentChallenge==13)) {
				showElement('p1row','table-cell')
				updateElement('prestige1','Lose a prestige, but lose 50% of your prestige power.')
				enableTooltip('p1tt')
				updateTooltip('p1tt',(player.explanations?explainList.prestige+'<br>':'')+'If you lose a prestige, you will reduce your prestige power to x'+format(player.prestigePower.div(2).max(1),3,0,false)+'.')
			} else {
				hideElement('p1row')
			}
			if (!showTooMuch&&player.prestigePower.gte(100)) {
				showElement('p2row','table-cell')
				updateElement('prestige2','Transfer prestige power for<br>+'+format(getTransferPoints())+' TP.')
				enableTooltip('p2tt')
				updateTooltip('p2tt',(player.explanations?explainList.transfer+'<br>':'')+'TP gain rate: '+formatRate(gainRate[0],'TP')+'<br>Peak: '+formatRate(player.gainPeak[0],'TP'))
			} else {
				hideElement('p2row')
				disableTooltip('p2tt')
			}
			if (((player.currentChallenge==8||player.currentChallenge==13)&&player.generators[0].amount.gt(0))||player.currentChallenge==11) {
				showElement('challPow','block')
				updateElement('challPow','Challenge '+player.currentChallenge+' power: <b>x'+format(player.challPow,3,0,false)+'</b>')
			} else {
				hideElement('challPow')
			}
			if (!showTooMuch&&player.showProgress&&player.prestigePower.lt(100)) {
				showElement('transferProgress','block')
				var percentage=player.prestigePower.log10()/2
				if (percentage>0.99995) updateElement('transferProgress','<b>Progress to transfer</b>: 99.99%')
				else updateElement('transferProgress','<b>Progress to transfer</b>: '+(percentage*100).toFixed(2)+'%')
			} else {
				hideElement('transferProgress')
			}
			if (!showTooMuch&&player.showProgress&&player.stars.lt(player.overlimit?'5.592438960924321e400':Number.MAX_VALUE)) {
				showElement('supernovaProgress','block')
				if (player.stars.gt(Number.MAX_VALUE)) {
					var percentage=(player.stars.add(1).log10()-maxValueLog)/92.49288569273955
					var type='forced supernova'
				} else {
					var percentage=player.stars.add(1).log10()/maxValueLog
					var type=(player.currentChallenge>0)?'challenge goal':'supernova'
				}
				if (percentage>0.99995) updateElement('supernovaProgress','<b>Progress to '+type+'</b>: 99.99%')
				else updateElement('supernovaProgress','<b>Progress to '+type+'</b>: '+(percentage*100).toFixed(2)+'%')
			} else {
				hideElement('supernovaProgress')
			}
			if (!showTooMuch&&player.showProgress&&player.breakLimit&&player.neutronStars.lt(Number.MAX_VALUE)) {
				showElement('hypernovaProgress','block')
				var percentage=player.neutronStars.add(1).log10()/maxValueLog
				if (percentage>0.99995) updateElement('hypernovaProgress','<b>Progress to hypernova</b>: 99.99%')
				else updateElement('hypernovaProgress','<b>Progress to hypernova</b>: '+(percentage*100).toFixed(2)+'%')
			} else {
				hideElement('hypernovaProgress')
			}
		}
		if (genTab=='neutronTiers') {
			updateElement('neutrons','You have <b>'+format(player.neutrons)+'</b> neutrons, reducing the cost of normal generators by <b>'+format(neutronPower)+'x</b> (neutron power).')
			if (ntpps[0].eq(0)) {
				updateElement('neutronsRate','You are producing <b>0</b> neutrons per second.')
			} else {
				updateElement('neutronsRate','You are producing <b>'+format(ntpps[0],(ntpps[0].gte(1000))?2:1,0,false)+'</b> neutrons per second. ('+format(ntpps[0].div(player.neutrons).times(100),2,0,false)+'%)')
			}
			for (a=0;a<10;a++) {
				var currentText='<b>Neutron tier '+(a+1)+' generator</b><br>'
				if (player.neutronTiers[a].amount.eq(player.neutronTiers[a].bought)||a==9) {
					currentText=currentText+format(player.neutronTiers[a].amount,0,1)
				} else {
					currentText=currentText+format(player.neutronTiers[a].amount)+' ('+format(ntpps[a+1],(ntpps[a+1].gte(1000))?2:1,0,false)+'/s), '+format(player.neutronTiers[a].bought,2,1)+' bought'
				}
				var name='nt'+(a+1)+'Gen'
				var lastLine='Cost: '+formatNSCosts(costs.neutronTiers[a])
				updateTooltipBase(name,currentText)
				updateElement(name+'Button',lastLine)
				var tooltipText=''
				if (player.explanations) tooltipText=explainList.neutronTiers
				if (a==9||player.neutronTiers[a].amount.eq(player.neutronTiers[a].bought)) {
					currentText=currentText+format(player.neutronTiers[a].amount,0,1)
				} else {
					currentText=currentText+format(player.neutronTiers[a].amount)+' ('+format(ntpps[a+1],(ntpps[a+1].gte(1000))?2:1,0,false)+'/s), '+format(player.neutronTiers[a].bought,2,1)+' bought'
					tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Growth rate: '+format(ntpps[a+1].div(player.neutronTiers[a].amount).times(100),2,0,false)+'%'
				}
				if (player.neutronTiers[a].amount.gt(0)) tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Production for 1 generator: '+format(ntppsSingles[a],(ntppsSingles[a].gte(1000))?2:1,0,false)+'/s'
				if (tooltipText=='') disableTooltip('nt'+(a+1)+'Gen')
				else {
					enableTooltip('nt'+(a+1)+'Gen')
					updateTooltip('nt'+(a+1)+'Gen',tooltipText)
				}
				if (player.neutronStars.gte(costs.neutronTiers[a])) {
					updateClass('nt'+(a+1)+'GenButton','supernovaButton')
				} else {
					updateClass('nt'+(a+1)+'GenButton','shopUnafford')
				}
			}
		}
    }
	if (tab=='statistics') {
		var displayType='table-row'
		updateElement('statsPlaytimeValue',formatTime(player.playtime))
		if (player.updateRate==Math.round(1000/tickspeed)) {
			hideElement('statsTPS')
		} else {
			showElement('statsTPS',displayType)
			updateElement('statsTPSValue',format(1000/tickspeed,0,1))
		}
		updateElement('statsTotalValue',format(player.totalStars))
		var shown=false
		if (player.totalNeutrons.gt(0)||shown) {
			shown=true
			showElement('statsTotalNeutrons',displayType)
			updateElement('statsTotalNeutronsValue',format(player.totalNeutrons))
		} else {
			hideElement('statsTotalNeutrons')
		}
		if ((player.rewardBoxes[2]>0&&player.rewardBoxes[2]<12)||shown) {
			shown=true
			showElement('statsRewardBoxes',displayType)
			updateElement('statsRewardBoxesValue',player.rewardBoxes[2])
		} else {
			hideElement('statsRewardBoxes')
		}
		if (player.prestiges[2]>0||shown) {
			shown=true
			
			showElement('statsSupernova',displayType)
			showElement('statsSupernovaTime',displayType)
			showElement('statsSupernovaFastest',displayType)
			showElement('statsNS',displayType)
			updateElement('statsSupernovaValue',format(player.prestiges[2],2,2))
			updateElement('statsSupernovaTimeValue',formatTime(player.supernovaPlaytime))
			updateElement('statsSupernovaFastestValue',formatTime(player.fastestSupernova))
			updateElement('statsLastTransferTimeValue',format(player.lastTransferPlaytime))
			updateElement('statsNSValue',format(player.totalNS))
		} else {
			hideElement('statsSupernova')
			hideElement('statsSupernovaTime')
			hideElement('statsSupernovaFastest')
			hideElement('statsLastTransferTime')
			hideElement('statsNS')
		}
		for (a=0;a<10;a++) {
			if (player.lastSupernovas[a]==undefined||!shown) {
				hideElement('statsPrevSupernova'+(a+1))
			} else {
				showElement('statsPrevSupernova'+(a+1),displayType)
				var message=''
				if (player.lastSupernovas[a][3]>1) {
					message=message+format(player.lastSupernovas[a][3]-1,0,2)+' supernovas and '
				}
				message=message+formatTime(player.lastSupernovas[a][0])
				if (player.lastSupernovas[a][2].gt(1)) {
					message=message+'<br>('+format(player.lastSupernovas[a][1])+' stars, +'+format(player.lastSupernovas[a][2])+' NS; '+formatRate(player.lastSupernovas[a][2].div(player.lastSupernovas[a][0]),'NS')+')'
				}
				updateElement('statsPrevSupernova'+(a+1)+'Value',message)
			}
		}
		if (player.prestiges[1]>0||shown) {
			shown=true
			
			showElement('statsTransfer',displayType)
			showElement('statsTransferTime',displayType)
			showElement('statsTP',displayType)
			showElement('statsTPPeak',displayType)
			updateElement('statsTransferValue',format(player.prestiges[1],2,2))
			updateElement('statsTransferTimeValue',formatTime(player.transferPlaytime))
			updateElement('statsTPValue',format(player.totalTP))
			updateElement('statsTPPeakValue',format(player.prestigePeak[1]))
		} else {
			hideElement('statsTransfer')
			hideElement('statsTransferTime')
			hideElement('statsTP')
			hideElement('statsTPPeak')
		}
		if (player.prestiges[0]>0||shown) {
			showElement('statsPrestige',displayType)
			showElement('statsPP',displayType)
			updateElement('statsPrestigeValue',format(player.prestiges[0],2,2))
			updateElement('statsPPValue','x'+format(player.prestigePeak[0],3,0,false))
		} else {
			hideElement('statsPrestige')
			hideElement('statsPP')
		}
	}
	if (tab=='options') {
		updateElement('saveGame','Save<br>('+(timeSinceSave==1?'1 second':timeSinceSave+' seconds')+' ago)')
		updateElement('notationOption','Notation:<br>'+player.notation)
		if (player.notation=='Mixed') {
			showElement('mixedOptionRow','table-row')
		} else {
			hideElement('mixedOptionRow')
		}
		if (player.updateRate==Number.MAX_VALUE) {
			updateElement('urOption','Update rate:<br>Unlimited')
		} else {
			updateElement('urOption','Update rate:<br>'+player.updateRate+' TPS')
		}
		updateElement('csOption','Mobile scrolling:<br>'+(player.customScrolling?'On':'Off'))
		updateElement('exOption','Explanations:<br>'+(player.explanations?'On':'Off'))
		updateElement('msOption','Use monospaced:<br>'+(player.useMonospaced?'On':'Off'))
		updateElement('opOption','Offline progress:<br>'+(player.offlineProgress?'On':'Off'))
		updateElement('hkOption','Hotkeys:<br>'+(player.hotkeys?'On':'Off'))
		updateElement('spOption','Show progress:<br>'+(player.showProgress?'On':'Off'))
		if (player.supernovaUpgrades.includes(2)||player.supernovaUpgrades.includes(3)) {
			showElement('hsOptionC','table-cell')
			updateElement('hsOption','Headstarts:<br>'+(player.headstarts?'On':'Off'))
		} else {
			hideElement('hsOptionC')
		}
		if (player.supernovaTabsUnlocked>1) {
			showElement('ccOptionC','table-cell')
			updateElement('ccOption','Challenge confirmation:<br>'+(player.challConfirm?'On':'Off'))
		} else {
			hideElement('ccOptionC')
		}
		if (player.supernovaTabsUnlocked>3) {
			showElement('modrow','block')
			showElement('blOptionC','table-cell')
			showElement('psOptionC','table-cell')
			updateElement('blOption',(player.breakLimit?'Fix':'Break')+' limit')
			updateElement('psOption','Pre-supernova mode:<br>'+(player.preSupernova?'On':'Off'))
		} else {
			hideElement('modrow')
			hideElement('blOptionC')
			hideElement('psOptionC')
		}
		updateElement('stOption','Theme:<br>'+player.theme)
		updateElement('slOption','Layout (generators):<br>Two '+(player.layout==1?'columns':'rows'))
	}
	if (tab=='transfer') {
		explainList.tupg7='<b>Transfer upgrade <span style="font-size:66.6%">#7</span></b><br>This upgrade will allow you to be able to prestige with 1% of your stars as without the upgrade, which is equal to '+format(1e37)+' stars.<br>Prestige power gain is increased slighty after buying this upgrade.'
		updateElement('tupg12button','Cost: '+format(1000)+' TP')
		updateElement('tupg13button','Cost: '+format(3000)+' TP')
		updateElement('tupg14button','Cost: '+format(5000)+' TP')
		for (a=1;a<15;a++) {
			var tooltipText=''
			if (player.explanations) tooltipText=explainList['tupg'+a]
			if (player.transferUpgrades.includes(a)) {
				var mult=upgMults['tupg'+a]
				if (mult!=undefined) tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Current multiplier: '+format(mult,2,0,false)+'x'
			}
			if (tooltipText=='') {
				disableTooltip('tupg'+a)
			} else {
				enableTooltip('tupg'+a)
				updateTooltip('tupg'+a,tooltipText)
			}
			if (player.transferUpgrades.includes(a)) {
				updateClass('tupg'+a+'button','boughtUpgrade')
			} else if (a>12&&player.transferUpgrades.length<12) {
				updateClass('tupg'+a+'button','lockedUpgrade')
			} else if (player.transferPoints.gte(costs.tupgs[a-1])) {
				updateClass('tupg'+a+'button','longButton')
			} else {
				updateClass('tupg'+a+'button','shopUnafford')
			}
		}
	}
	if (tab=='supernova') {
		if (player.supernovaUpgrades.length>19) {
			updateClass('supernovaUpgradesTabButton','boughtUpgrade')
		} else {
			updateClass('supernovaUpgradesTabButton','longButton')
		}
		if (player.supernovaTabsUnlocked>0) {
			if (player.buyinshopFeatures.length>5) {
				updateClass('buyinshopTabButton','boughtUpgrade')
			} else {
				updateClass('buyinshopTabButton','longButton')
			}
		}
		if (player.supernovaTabsUnlocked>2) {
			if (player.neutronBoosts.powers[0]==40&&player.neutronBoosts.powers[1]==40&&player.neutronBoosts.powers[2]==60&&player.neutronBoosts.basePower==10&&player.neutronBoosts.ppPower==0.15) {
				updateClass('neutronBoostTabButton','boughtUpgrade')
			} else {
				updateClass('neutronBoostTabButton','evenButton')
			}
		}
		if (player.customScrolling) {
                showElement('supernovaTabsCustomScrolling', 'table')
        } else {
                hideElement('supernovaTabsCustomScrolling')
        }
		
		if (SNTab!=oldSNTab) {
			showElement('supernova'+SNTab,'block')
			hideElement('supernova'+oldSNTab)
			oldSNTab=SNTab
		}
		if (SNTab=='upgrades') {
			if (player.supernovaUpgrades.includes(2)||player.supernovaUpgrades.includes(3)) {
				showElement('headstart','inline-block')
				updateElement('headstart','Headstarts:<br>'+(player.headstarts?'On':'Off'))
			} else {
				hideElement('headstart')
			}
			var disabledUpgrades=[2,3,6,7,8,9,11,12,14]
			for (a=1;a<(player.secondSetUnlocked?27:17);a++) {
				var tooltipText=''
				if (player.explanations) tooltipText=explainList['snupg'+a]
				if (player.supernovaUpgrades.includes(a)) {
					if (a==3) {
						if (player.headstarts&&player.currentChallenge==0&&!player.preSupernova) if (player.supernovaTabsUnlocked<3) tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Start with specified PP: '+format(ppHeadstart)+'x'
					} else {
						var mult=upgMults['snupg'+a]
						if (mult!=undefined) tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Current multiplier: '+format(mult,2,0,false)+'x'
					}
				}
				if (tooltipText=='') {
					disableTooltip('snupg'+a)
				} else {
					enableTooltip('snupg'+a)
					updateTooltip('snupg'+a,tooltipText)
				}
				if (player.supernovaUpgrades.includes(a)) {
					if (disabledUpgrades.includes(a)&&player.currentChallenge>0) {
						updateClass('snupg'+a+'button','lockedUpgrade')
					} else {
						updateClass('snupg'+a+'button','boughtUpgrade')
					}
				} else if (player.neutronStars.gte(costs.snupgs[a-1])) {
					updateClass('snupg'+a+'button','supernovaButton')
				} else {
					updateClass('snupg'+a+'button','shopUnafford')
				}
			}
			hideElement('snupg16row')
			if (player.supernovaUpgrades.includes(3)) if (player.supernovaTabsUnlocked>2) if (player.headstarts&&player.currentChallenge==0&&!player.preSupernova) {
				showElement('snupg16row','table-row')
				var ppHeadstartMessage='You start with <b>x'+format(ppHeadstart)+'</b> prestige power after transferring or supernova.'
				updateElement('ppHeadstartUpg1','<b>Normal subformula</b>: x'+format(player.neutronStars)+'<sup>min(max('+format(player.neutronStars.log10(),2,1,false)+',5),'+(12.5+0.05*player.ppHeadstartUpgrades[0]).toPrecision(4)+')</sup> =<br>x'+format(ppHSValue1))
				updateElement('ppHeadstartUpg2','<b>Pre-break limit</b>: x'+format(ppHSPreBreakLimit))
				updateElement('ppHeadstartUpg3','<b>Post-break subformula</b>: x'+format(player.prestigePeak[0])+'<sup>'+(1-1/(player.ppHeadstartUpgrades[2]+10)).toPrecision(2)+'</sup> = x'+format(ppHSValue2))
				for (a=1;a<4;a++) {
					if ((a==1&&player.ppHeadstartUpgrades[0]==20)||(a==3&&player.ppHeadstartUpgrades[2]==10)) {
						hideElement('ppHeadstartUpg'+a+'button')
					} else {
						showElement('ppHeadstartUpg'+a+'button','inline-block')
						updateElement('ppHeadstartUpg'+a+'button','Cost: '+formatNSCosts(costs.ppHeadstartUpgs[a-1]))
						if (player.neutronStars.gte(costs.ppHeadstartUpgs[a-1])) {
							updateClass('ppHeadstartUpg'+a+'button','supernovaButton')
						} else {
							updateClass('ppHeadstartUpg'+a+'button','shopUnafford')
						}
					}
				}
				if (player.breakLimit) {
					if (ppHSValue1.gt(ppHSValue2)) ppHeadstartMessage=ppHeadstartMessage+' (post-break subformula is chosen)'
					else ppHeadstartMessage=ppHeadstartMessage+' (normal subformula is chosen)'
				} else {
					if (ppHSValue1.gt(ppHSPreBreakLimit)) ppHeadstartMessage=ppHeadstartMessage+' (pre-break limit is chosen)'
					else ppHeadstartMessage=ppHeadstartMessage+' (normal subformula is chosen)'
				}
				updateElement('ppHeadstart',ppHeadstartMessage)
			}
			if (player.secondSetUnlocked) {
				showElement('snupgrow5','table-row')
				showElement('snupgrow6','table-row')
				showElement('snupgrow7','table-row')
				updateElement('snupg17button','Cost: '+formatNSCosts(1e55))
				updateElement('snupg18button','Cost: '+formatNSCosts(1e70))
				updateElement('snupg19button','Cost: '+formatNSCosts(1e85))
				updateElement('snupg20button','Cost: '+formatNSCosts(1e100))
				updateElement('snupg21button','Cost: '+formatNSCosts(1e110))
				updateElement('snupg22button','Cost: '+formatNSCosts(1e120))
				updateElement('snupg23button','Cost: '+formatNSCosts(1e135))
				updateElement('snupg24button','Cost: '+formatNSCosts(1e150))
				updateElement('snupg25button','Cost: '+formatNSCosts(1e165))
				updateElement('snupg26button','Cost: '+formatNSCosts(1e180))
			} else {
				hideElement('snupgrow5')
				hideElement('snupgrow6')
				hideElement('snupgrow7')
			}
			if (player.neutronStars.gte(1e45)) player.secondSetUnlocked=true
			if (!player.secondSetUnlocked&&player.supernovaTabsUnlocked>3) {
				showElement('nextSet','inline-block')
				updateElement('nextSet','Next upgrades unlock at: '+formatNSCosts(1e45)+'.')
			} else {
				hideElement('nextSet')
			}
		}
		if (SNTab=='challenges') {
			if (player.neutronChallengeUnlocked>0||player.neutronChallengesCompleted[1]!=undefined) {
				showElement('challTabs','block')
				if (player.customScrolling) {
					showElement('challTabsCustomScrolling','table')
				} else {
					hideElement('challTabsCustomScrolling')
				}
			} else {
				hideElement('challTabs')
				hideElement('challTabsCustomScrolling')
				challTab='normal'
			}
		
			if (challTab!=oldChallTab) {
				showElement('challenges'+challTab,'block')
				hideElement('challenges'+oldChallTab)
				oldChallTab=challTab
			}
			if (challTab=='normal') {
				if (player.challengeUnlocked<12) {
					showElement('nextChall','inline-block')
					updateElement('nextChall','Next challenge unlock at '+format(challreqs[player.challengeUnlocked])+' NS')
				} else {
					hideElement('nextChall')
				}
				if (player.currentChallenge==0) {
					hideElement('exitChall')
				} else {
					showElement('exitChall','inline-block')
				}
				for (a=1;a<16;a++) {
					if (a>player.challengeUnlocked&&a<13) {
						hideElement('chall'+a)
					} else {
						showElement('chall'+a,'table-cell')
						var timesCompleted=(player.challengesCompleted[a]==undefined)?0:player.challengesCompleted[a]
						if (player.currentChallenge==a) {
							updateElement('chall'+a+'button','Running')
							updateClass('chall'+a+'button','shopUnafford')
						} else if (timesCompleted>0) {
							updateElement('chall'+a+'button','Completed')
							updateClass('chall'+a+'button','boughtUpgrade')
						} else {
							updateElement('chall'+a+'button','Start')
							updateClass('chall'+a+'button','longButton')
						}
						updateElement('chall'+a+'comp',(timesCompleted==0)?'':'Completed '+format(timesCompleted)+' time'+((timesCompleted==1)?'':'s'))
					}
				}
			}
			if (challTab=='neutron') {
				if (player.currentNeutronChallenge==0) {
					hideElement('exitNeutronChall')
				} else {
					showElement('exitNeutronChall','inline-block')
				}
				for (a=1;a<2;a++) {
					var timesCompleted=(player.neutronChallengesCompleted[a]==undefined)?0:player.neutronChallengesCompleted[a]
					if (timesCompleted==0&&player.neutronChallengeUnlocked!=a) {
						hideElement('neutronChall'+a)
					} else {
						showElement('neutronChall'+a,'table-cell')
						if (player.currentChallenge==a) {
							updateElement('neutronChall'+a+'button','Running')
							updateClass('neutronChall'+a+'button','shopUnafford')
						} else if (timesCompleted>0) {
							updateElement('neutronChall'+a+'button','Completed')
							updateClass('neutronChall'+a+'button','boughtUpgrade')
						} else {
							updateElement('neutronChall'+a+'button','Start')
							updateClass('neutronChall'+a+'button','longButton')
						}
						updateElement('neutronChall'+a+'comp',(timesCompleted==0)?'':'Completed '+format(timesCompleted)+' time'+((timesCompleted==1)?'':'s'))
					}
				}
			}
		}
		if (SNTab=='autobuyers') {
			var currentText='Interval: '+formatTime(player.autobuyers.interval)+'<br>'
			updateElement('interval',currentText)
			currentText=''
			if (player.autobuyers.interval>0.05) {
				showElement('intervalReduction','block')
				updateElement('intReduceCost',currentText+((player.autobuyers.interval==0.05)?'':'Cost: '+formatNSCosts(costs.intReduceCost)))
				if (player.autobuyers.interval==0.05) {
					updateClass('intReduceCost','boughtUpgrade')
				} else if (player.neutronStars.gte(costs.intReduceCost)) {
					updateClass('intReduceCost','supernovaButton')
				} else {
					updateClass('intReduceCost','shopUnafford')
				}
			} else {
				hideElement('intervalReduction',currentText)
			}
			if (player.rewardBoxes[0]>0) {
				showElement('rewardBoxes','inline-block')
				currentText='You have <b>'+player.rewardBoxes[0]+'</b> unopened reward boxes'
				updateElement('rewardBoxAmount',currentText)
				currentText=''
				if (player.rewardBoxes[1]>0) {
					updateClass('openRewardBox','shopUnafford')
					updateElement('openRewardBox',currentText+'Opening in '+formatTime(player.rewardBoxes[1]))
				} else {
					updateClass('openRewardBox','supernovaButton')
					updateElement('openRewardBox',currentText+'Open')
				}
			} else {
				hideElement('rewardBoxes')
			}
			if (player.autobuyers.transfer==undefined) {
				hideElement('autotransfer')
			} else {
				showElement('autotransfer','table-cell')
				if (player.buyinshopFeatures.includes(4)) {
					showElement('bisTransferOptions','inline-block')
				} else {
					hideElement('bisTransferOptions')
				}
				if (player.buyinshopFeatures.includes(5)) {
					showElement('bisTransferOptions2','inline-block')
					if (player.buyinshopFeatures.includes(8)) {
						showElement('bisTransferOptions3','inline-block')
					} else {
						hideElement('bisTransferOptions3')
					}
				} else {
					hideElement('bisTransferOptions2')
					hideElement('bisTransferOptions3')
				}
			}
			if (player.autobuyers.prestige==undefined) {
				hideElement('autoprestige')
			} else {
				showElement('autoprestige','table-cell')
				if (player.buyinshopFeatures.includes(3)) {
					showElement('bisPrestigeOptions','inline-block')
				} else {
					hideElement('bisPrestigeOptions')
				}
			}
			if (player.autobuyers.gens==undefined) {
				hideElement('autogenerator')
			} else {
				showElement('autogenerator','table-cell')
			}
			if (player.buyinshopFeatures.includes(1)) {
				showElement('bisBulkBuy','table-cell')
				currentText='Bulk: '+format(player.autobuyers.gens.bulk)+'x<br>'
				updateElement('bulkBuy',currentText)
				currentText=''
				if (player.autobuyers.gens.bulk==256&&!player.breakLimit) {
					hideElement('bulkBuyIncrease')
				} else {
					showElement('bulkBuyIncrease','block')
					updateElement('bbIncreaseCost',currentText+((player.autobuyers.gens.bulk==256&&!player.breakLimit)?'':'Cost: '+formatNSCosts(costs.bbCost)))
					if (player.neutronStars.gte(costs.bbCost)) {
						updateClass('bbIncreaseCost','supernovaButton')
					} else {
						updateClass('bbIncreaseCost','shopUnafford')
					}
				}
			} else {
				hideElement('bisBulkBuy')
			}
			if (player.buyinshopFeatures.includes(2)) {
				showElement('bisPriorities','table-cell')
			} else {
				hideElement('bisPriorities')
			}
			if (player.buyinshopFeatures.includes(6)) {
				showElement('autonova','table-cell')
			} else {
				hideElement('autonova')
			}
			if (player.buyinshopFeatures.includes(7)) {
				showElement('preBreakAutonovaOptions','table-cell')
				updateElement('preBreakAutonovaTime','Occurs '+((player.preBreakAutonovaOptions.time==Number.MAX_VALUE)?'frequently':(player.preBreakAutonovaOptions.time==0)?'never':' in sub-'+player.preBreakAutonovaOptions.time+'s supernova'))
				updateElement('preBreakAutonovaOverlimit','Occurs in '+format(player.preBreakAutonovaOptions.overlimit?'5.592438960924321e400':Number.MAX_VALUE)+' stars')
			} else {
				hideElement('preBreakAutonovaOptions')
			}
		}
		if (SNTab=='buyinshop') {
			var descriptions={1:'Autogenerator bulk buy',2:'Autogenerator priorities',3:'Autoprestige options',4:'Autotransfer options',5:'Autotransfer options II',6:'Autonova',7:'Pre-break autonova options',8:'Autotransfer options III'}
			for (a in descriptions) {
				updateElement('bisfeature'+a+'button','Cost: '+formatNSCosts(costs.bisfeatures[a-1]))
			}
			for (a=1;a<9;a++) {
				if (player.explanations) {
					enableTooltip('bisfeature'+a)
					updateTooltip('bisfeature'+a,explainList['bisfeature'+a])
				} else {
					disableTooltip('bisfeature'+a)
				}
				if (player.buyinshopFeatures.includes(a)) {
					updateClass('bisfeature'+a+'button','boughtUpgrade')
				} else if (player.neutronStars.gte(costs.bisfeatures[a-1])) {
					updateClass('bisfeature'+a+'button','supernovaButton')
				} else {
					updateClass('bisfeature'+a+'button','shopUnafford')
				}
			}
		}
		if (SNTab=='neutronboosts') {
			updateElement('breakLimit',(player.breakLimit?'Fix':'Break')+' limit')
			updateElement('preSupernova','Pre-supernova:<br>'+(player.preSupernova?'On':'Off'))
			updateTooltipBase('neutronboost','x'+(Math.round(1e3+100*Math.sqrt(player.neutronBoosts.basePower))/100)+'<sup>'+format(Decimal.add(player.neutronBoosts.powers[0],player.neutronBoosts.powers[1]).add(player.neutronBoosts.powers[2]),2,1)+(totalAliens>0?' (+ '+totalAliens+')':'')+'</sup> = <b>x'+format(neutronBoost)+'</b> for all production')
			
			var items=['powerStars','powerTP','powerNS','basePower','ppPower']
			var boostType=['stars','transfer points','neutron stars']
			
			for (a=0;a<5;a++) {
				var currentText=''
				switch (a) {
					case 0: currentText='Power (stars): +'+player.neutronBoosts.powers[0]+(player.neutronBoosts.powers[0]<40?' (+1)':'')
					break
					
					case 1: currentText='Power (transfer points): +'+format(player.neutronBoosts.powers[a],2,1)+(player.neutronBoosts.powers[1]<40?' (+1)':'')
					break
					
					case 2: currentText='Power (neutron stars): +'+format(player.neutronBoosts.powers[a],2,1)+(player.neutronBoosts.powers[2]<60?' (+1)':'')
					break
					
					case 3: currentText='Base: '+(Math.round(1e3+100*Math.sqrt(player.neutronBoosts.basePower))/100)+((player.neutronBoosts.basePower<10)?' (+'+(Math.round(100*(Math.sqrt(player.neutronBoosts.basePower+1)-Math.sqrt(player.neutronBoosts.basePower)))/100)+')':'')
					break
					
					case 4: currentText='<b>x'+format(neutronBoostPP)+'</b> for PP gain increase<br>Power (prestige): '+player.neutronBoosts.ppPower+((player.neutronBoosts.ppPower<0.15)?' (+0.0375)':'')
					break
				}
				updateElement(items[a],currentText)
				currentText=''
				if ((a==2)?(player.neutronBoosts.powers[2]<60):(a==3)?(player.neutronBoosts.basePower<10):(a==4)?(player.neutronBoosts.ppPower<0.15):(player.neutronBoosts.powers[a]<40)) {
					showElement(items[a]+'Cost','inline-block')
					if ((a==2)?(player.neutronBoosts.powers[2]<60):(a==3)?(player.neutronBoosts.basePower<10):(a==4)?(player.neutronBoosts.ppPower<0.15):(player.neutronBoosts.powers[a]<40)) currentText=currentText+'Cost: '+((a==0)?formatCosts(costs.neutronBoosts[a]):(a==1)?(format(costs.neutronBoosts[a])+' TP'):formatNSCosts(costs.neutronBoosts[a]))
					updateElement(items[a]+'Cost',currentText)
					if ((a==2)?(player.neutronBoosts.powers[2]==60):(a==3)?(player.neutronBoosts.basePower==10):(a==4)?(player.neutronBoosts.ppPower==0.15):(player.neutronBoosts.powers[a]==40)) {
						updateClass(items[a]+'Cost','boughtUpgrade')
					} else if ((a==0)?player.stars.gte(costs.neutronBoosts[0]):(a==1)?player.transferPoints.gte(costs.neutronBoosts[1]):player.neutronStars.gte(costs.neutronBoosts[a])) {
						updateClass(items[a]+'Cost','supernovaButton')
					} else {
						updateClass(items[a]+'Cost','shopUnafford')
					}
				} else {
					hideElement(items[a]+'Cost','block')
				}
			}
			updateElement('neutronBoostPower','<b>Neutron boost power</b>: '+format(Decimal.add(player.neutronBoosts.powers[0],player.neutronBoosts.powers[1]).add(player.neutronBoosts.powers[2]),2,1))
		}
		if (SNTab=='destabilization') {
			if (player.destabilization.activated) {
				if (player.destabilization.timeLeft>0) {
					updateElement('destabilizationStatus','<b>Status</b>: Running')
					showElement('destabilizationInfo','inline-block')
					updateElement('destabilizationInfo','Destabilization will duplicate stars in '+formatTime(dsInterval)+'/tick<br><b>Time left</b>: '+(player.destabilization.timeLeft==1?'1 tick':player.destabilization.timeLeft+' ticks')+'<br>('+formatTime(player.destabilization.timeLeft*dsInterval-player.playtime+player.destabilization.lastTick)+')')
					updateElement('destabilizationWarning','<b>WARNING</b>: If you transfer or supernova now, destabilization will be interrupted!')
				} else {
					updateElement('destabilizationStatus','<b>Status</b>: Activated')
					hideElement('destabilizationInfo')
					updateElement('destabilizationWarning','<b>WARNING</b>: If you prestige, transfer, or supernova now, all of your unstable stars will reset!')
				}
				hideElement('destabilizationActivation')
				hideElement('destabilizationUpgrades')
			} else {
				updateElement('destabilizationStatus','<b>Status</b>: Not activated')
				showElement('destabilizationActivation','inline-block')
				hideElement('destabilizationInfo')
				showElement('destabilizationUpgrades','table')
				updateElement('destabilizationActivation','Activate Destabilization!<br>('+format(unstableStarsAfterActivation)+' unstable stars)')
				updateElement('destabilizationWarning','<b>WARNING</b>: If you destabilize stars, you will lose all your generators!')
				updateElement('destabilizationInterval','Interval: '+formatTime(dsInterval)+'/tick')
				updateElement('destabilizationTime','Time: '+format(dsTime,2,1)+' ticks')
				updateElement('destabilizationPercentage','Logarithmically percentage of unstable stars after activation: '+dsPercentage.toPrecision(4)+'%')		
				for (a=1;a<5;a++) {
					if ((a<3&&player.destabilization.upgrades[a-1]==20)||(a==4&&player.destabilization.upgrades[3]==1)) {
						if (a==4) {
							updateClass('destabilizationUpg4button','boughtUpgrade')
							updateElement('destabilizationUpg4button','Cost: '+formatNSCosts(1e45))
						} else {
							hideElement('destabilizationUpg'+a+'button')
						}
					} else {
						showElement('destabilizationUpg'+a+'button','inline-block')
						updateElement('destabilizationUpg'+a+'button','Cost: '+formatNSCosts(costs.destabilization[a-1]))
						if (player.neutronStars.gte(costs.destabilization[a-1])) {
							updateClass('destabilizationUpg'+a+'button','supernovaButton')
						} else {
							updateClass('destabilizationUpg'+a+'button','shopUnafford')
						}
					}
				}
			}
		}
		if (SNTab=='aliens') {
			updateElement('aliens','You have <b>'+player.aliens.amount+'</b>'+(player.aliens.kept>0?' (+'+player.aliens.kept+')':'')+' aliens, translated to <b>'+totalAliens+'</b> free neutron boost power')
			if (player.aliens.amount<60) {
				showElement('alienProgress','inline')
				showElement('aliensLeft','inline-block')
				updateElement('alienProgress','Progress for next alien: '+player.aliens.progress+'%')
				updateElement('aliensLeft','Time left till '+(60+player.aliens.kept)+' aliens: '+formatTime((6000-player.aliens.amount*100-player.aliens.progress)/Math.pow(2,player.aliens.resets)))
			} else {
				hideElement('alienProgress')
				hideElement('aliensLeft')
			}
			updateElement('prestigeAliens','Explode your stars but free NB power instead<br>'+player.aliens.resets+'/5')
		}
	}
	if (tab=='hypernova') {
        if (player.customScrolling) {
            showElement('hypernovaTabsCustomScrolling','table')
        } else {
            hideElement('hypernovaTabsCustomScrolling')
        }
		
		if (HNTab!=oldHNTab) {
			showElement('hypernova'+HNTab,'block')
			hideElement('hypernova'+oldHNTab)
			oldHNTab=HNTab
		}
		if (HNTab=='stellarpillars') {
			updateElement('stellarPillarsNeutrons','You have <b>'+format(player.neutrons)+'</b> neutrons which reduced the cost of normal generators by <b>'+format(neutronPower)+'x</b> (neutron power)')
			if (ntpps[0].eq(0)) {
				updateElement('stellarPillarsNeutronsRate','<b>0</b> neutrons/s')
			} else {
				updateElement('stellarPillarsNeutronsRate','<b>'+format(ntpps[0],(ntpps[0].gte(1000))?2:1,0,false)+'</b> neutrons/s ('+format(ntpps[0].div(player.neutrons).times(100),2,0,false)+'%)')
			}
		}
	}
	if (tab=='exotic') {
		updateElement('particles','You have <b>'+format(player.particles)+'</b> particles')
	}
	if (tab=='quantum') {
		updateElement('strings','You have <b>'+format(player.strings)+'</b> strings')
	}
	if (tab=='cheat') {
		updateElement('breakLimitCheat',(player.breakLimit?'Fix':'Break')+' limit')
		updateElement('breakLimitNS',(player.cheatOptions.breakLimitNS?'Fix ':'Bypass ')+format(Number.MAX_VALUE)+' NS limit')
	}
}
function gameLoop() {
	if (updated) {
		updated=false
		setTimeout(function(){
			var startTime=new Date().getTime()
			try {
				gameTick()
			} catch (e) {
				console.log('A game error has occured:')
				console.error(e)
			}
			tickspeed=Math.max((new Date().getTime()-startTime)*0.2+tickspeed*0.8,1000/player.updateRate)
			startTime=new Date().getTime()
			updated=true
		},tickspeed-1000/player.updateRate)
	}
}

function gameInit() {
	initTooltips()
	updateCosts()

	var tempSave=localStorage.getItem('save2')
	if (tempSave==null) {
		tempSave=localStorage.getItem('savemgn')
		if (tempSave==null) {
			tempSave=localStorage.getItem('save2')
		}
	}
	updated=true
	tickspeed=0
	load(tempSave)
}

window.addEventListener('keydown', function(event) {
    var key = event.keyCode || event.which;
	if (!keysPressed.includes(key)) keysPressed.push(key)
}, false);

window.addEventListener('keyup', function(event) {
    var key = event.keyCode || event.which;
	var newKeysPressed=[]
	for (i=0;i<keysPressed.length;i++) {
		if (keysPressed[i]!=key) newKeysPressed.push(keysPressed[i])
	}
	keysPressed=newKeysPressed
}, false);
