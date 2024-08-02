function updateMilestones() {
	updateElement('milestones',player.milestones+'/'+milestoneRequirements.length)
	updateElement('storyOption',(player.storyEnabled.original ? 'Disable' : 'Enable') + ' story')
	var temp=1
	updateElement('milestoneCounter', "Your " + player.milestones + " milestones allow you to start resets of any kind with " + calculateMilestoneStarReward() + " stars.")
	if (player.achievements.length > 0) {
		updateElement('milestoneCounter2', "Your fragmented achievements contribute to a 1.00x multiplier on all Normal Generators")
	} else {
		updateElement('milestoneCounter2', "Unlock fragmented achievements after your first Prestige")
	}
	while (document.getElementById('milestone'+temp)) {
		if (temp>player.milestones+1) {
			hideElement('milestone'+temp)
		} else {
			var message=''
			showElement('milestone'+temp,'table-row')
			updateElement('ms'+temp+'requirement','<b>Milestone #'+temp+'</b>:<br>'+milestoneRequirements[temp-1])
			var msCompletion='ms'+temp+'completion'
			if (player.milestones>=temp) {
				updateElement(msCompletion,message+'Completed'+((player.storyEnabled.original && storyMessages.length>=temp)?'<br><b>Story</b>: '+storyMessages[temp-1]:''))
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
// eyJ2ZXJzaW9uIjowLjcxLCJiZXRhIjoyMC40MSwiYWxwaGEiOjAsInBsYXl0aW1lIjo0NTg3NDc5LjQwNDg4MDk4NSwidXBkYXRlUmF0ZSI6MjAsImxhc3RVcGRhdGUiOjE3MjI2MjkyMTc0MTUsIm5vdGF0aW9uIjoiU2NpZW50aWZpYyIsImN1c3RvbU1peGVkIjpbWyJTdGFuZGFyZCIsMF0sWyJMZXR0ZXJzIiwzMDZdLFsiU2NpZW50aWZpYyIsMjEwOV0sWyJMb2dhcml0aG0iLDEwMDAwXV0sImxheW91dCI6MSwib2ZmbGluZVByb2dyZXNzIjp0cnVlLCJleHBsYW5hdGlvbnMiOnRydWUsInVzZU1vbm9zcGFjZWQiOmZhbHNlLCJob3RrZXlzIjp0cnVlLCJ0aGVtZSI6Ik5vcm1hbCIsInNob3dQcm9ncmVzcyI6dHJ1ZSwiY3VzdG9tU2Nyb2xsaW5nIjpmYWxzZSwibWlsZXN0b25lcyI6MjMsInN0b3J5RW5hYmxlZCI6eyJvcmlnaW5hbCI6ZmFsc2UsInRydWUiOmZhbHNlfSwic3RhcnMiOiIyNDkiLCJ0b3RhbFN0YXJzIjoiNy42Mjg3OTUyMjE0MzQ0NmUrMzA0Iiwic3RhclJlcyI6eyJhbW91bnQiOiIxIiwiaGlnaGVzdCI6IjgzNzM3Ny4yMTg4MTE5MjciLCJ1cGdyYWRlcyI6eyJjb25kZW5zZSI6eyJ0aW1lcyI6MCwibW9zdENvbmRlbnNlcyI6MH19fSwiZ2VuZXJhdG9ycyI6W3siYW1vdW50IjoiMCIsImJvdWdodCI6MH0seyJhbW91bnQiOiIwIiwiYm91Z2h0IjowfSx7ImFtb3VudCI6IjAiLCJib3VnaHQiOjB9LHsiYW1vdW50IjoiMCIsImJvdWdodCI6MH0seyJhbW91bnQiOiIwIiwiYm91Z2h0IjowfSx7ImFtb3VudCI6IjAiLCJib3VnaHQiOjB9LHsiYW1vdW50IjoiMCIsImJvdWdodCI6MH0seyJhbW91bnQiOiIwIiwiYm91Z2h0IjowfSx7ImFtb3VudCI6IjAiLCJib3VnaHQiOjB9LHsiYW1vdW50IjoiMCIsImJvdWdodCI6MH1dLCJwcmVzdGlnZXMiOlsyMiwxMCwwLDAsMCwwXSwicHJlc3RpZ2VQZWFrIjpbIjQ4MjQ5NjA1NTgzMzgzNS4yNSIsIjMyNTYyIiwiMCIsIjAiLCIwIl0sImhpZ2hlc3RUaWVyUHJlc3RpZ2VzIjpbMCwxMCwxMCwxMCwxMCwxMF0sInByZXN0aWdlUGxheXRpbWUiOjMuMjU0OTk5OTk5OTk5OTk4NiwicHJlc3RpZ2VQb3dlciI6IjQ4MjQ5NjA1NTgzMzgzNS4yNSIsInRyYW5zZmVyUGxheXRpbWUiOjU5OC4wOTY5OTk5OTk5ODQ5LCJ0cmFuc2ZlclBvaW50cyI6IjMyNTYyIiwidG90YWxUUCI6IjM2OTg2IiwiZ2FpblBlYWsiOlsiMjc2LjQ2NjMzMjYyNzc0MzQiLCIwIl0sInRyYW5zZmVyVXBncmFkZXMiOlsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMl0sInF1YXNhciI6eyJhY3RpdmUiOnRydWUsImxpZ2h0bmVzcyI6IjIuODQ2ODIzNzQ4MzQyNDciLCJkYXJrbmVzcyI6IjAuMjIwMDAwMDAwMDAwMDAwMDMiLCJ1cGdyYWRlcyI6W10sInJlYnV5YWJsZVVwZyI6W251bGwsNiwzLDMsMCw0LDIsMiwwXX0sIm92ZXJsaW1pdCI6ZmFsc2UsInN1cGVybm92YVBsYXl0aW1lIjoyMzE5ODc4LjE5ODk0MDIwNzMsImZhc3Rlc3RTdXBlcm5vdmEiOjEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4LCJsYXN0U3VwZXJub3ZhcyI6W10sIm5ldXRyb25TdGFycyI6IjAiLCJ0b3RhbE5TIjoiMCIsInN1cGVybm92YVVwZ3JhZGVzIjpbXSwiaGVhZHN0YXJ0cyI6dHJ1ZSwic3VwZXJub3ZhSGVhZHN0YXJ0Ijp0cnVlLCJzdXBlcm5vdmFUYWJzVW5sb2NrZWQiOjAsImFjaGlldmVtZW50cyI6W10sImFjaDJwb3NzaWJsZSI6ZmFsc2UsImNoYWxsZW5nZVVubG9ja2VkIjowLCJjdXJyZW50Q2hhbGxlbmdlIjowLCJjaGFsbFBvdyI6IjEiLCJjaGFsbDE0U3R1ZmYiOltdLCJjaGFsbGVuZ2VzQ29tcGxldGVkIjp7fSwiY2hhbGxDb25maXJtIjp0cnVlLCJyZXdhcmRCb3hlcyI6WzAsMCwwXSwiYXV0b2J1eWVycyI6e30sImJ1eWluc2hvcEZlYXR1cmVzIjpbXSwiYXV0b2J1eWVyUHJpb3JpdGllcyI6WzEsMiwzLDQsNSw2LDcsOCw5LDEwXSwicHJlQnJlYWtBdXRvbm92YU9wdGlvbnMiOnsidGltZSI6NjAsIm92ZXJsaW1pdCI6dHJ1ZX0sInByZVN1cGVybm92YSI6ZmFsc2UsImJyZWFrTGltaXQiOmZhbHNlLCJwcEhlYWRzdGFydFVwZ3JhZGVzIjpbMCwwLDBdLCJuZXV0cm9uQm9vc3RzIjp7ImJhc2VQb3dlciI6MCwicG93ZXJzIjpbMCwwLDBdLCJwcFBvd2VyIjowfSwibmV1dHJvbnMiOiIwIiwibmV1dHJvblRpZXJzIjpbeyJhbW91bnQiOiIwIiwiYm91Z2h0IjowfSx7ImFtb3VudCI6IjAiLCJib3VnaHQiOjB9LHsiYW1vdW50IjoiMCIsImJvdWdodCI6MH0seyJhbW91bnQiOiIwIiwiYm91Z2h0IjowfSx7ImFtb3VudCI6IjAiLCJib3VnaHQiOjB9LHsiYW1vdW50IjoiMCIsImJvdWdodCI6MH0seyJhbW91bnQiOiIwIiwiYm91Z2h0IjowfSx7ImFtb3VudCI6IjAiLCJib3VnaHQiOjB9LHsiYW1vdW50IjoiMCIsImJvdWdodCI6MH0seyJhbW91bnQiOiIwIiwiYm91Z2h0IjowfV0sInRvdGFsTmV1dHJvbnMiOiIwIiwiZGVzdGFiaWxpemF0aW9uIjp7InVuc3RhYmxlU3RhcnMiOiIwIiwidGltZUxlZnQiOjAsImFjdGl2YXRlZCI6ZmFsc2UsImxhc3RUaWNrIjowLCJ1cGdyYWRlcyI6WzAsMCwwLDBdfSwic2Vjb25kU2V0VW5sb2NrZWQiOmZhbHNlLCJhbGllbnMiOnsibGFzdFRpY2siOjAsImFtb3VudCI6MCwicHJvZ3Jlc3MiOjAsInJlc2V0cyI6MCwia2VwdCI6MCwidXBncmFkZXMiOlswLDAsMCwwLDAsMF19LCJxdWFya1N0YXJzIjoiMCIsInBlcmtzIjp7InRvdGFsUXVhcmtTdGFycyI6IjAiLCJwZXJrU2hhcmRzIjowLCJ1cGdyYWRlcyI6e30sImxldmVscyI6e30sInJlc3BlYyI6ZmFsc2V9LCJzdGVsbGFyUGlsbGFycyI6eyJ1cGdyYWRlcyI6W10sInBpbGxhclVzZWQiOjAsInJlc2V0IjpmYWxzZX0sInVubG9ja2FibGVzIjp7fSwibmV1dHJvbkNoYWxsZW5nZVVubG9ja2VkIjowLCJjdXJyZW50TmV1dHJvbkNoYWxsZW5nZSI6MCwibmV1dHJvbkNoYWxsZW5nZXNDb21wbGV0ZWQiOnt9LCJzdGVsbGFyQm90cyI6e30sInBhcnRpY2xlcyI6IjAiLCJzdHJpbmdzIjoiMCIsImNoZWF0T3B0aW9ucyI6eyJicmVha0xpbWl0TlMiOmZhbHNlfSwibWF4QWxsTGV2ZXIiOmZhbHNlfQ==
function calculateMilestoneStarReward() {
	var reward;
	if (player.milestones < 24) {
		reward = Decimal.round(10 * (Math.pow(player.milestones, 1.025)))
	} else {
		reward = Decimal.round(1000 * (Math.pow(player.milestones - 23, 1.5)))
	}
	return reward
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
		updateElement('milestoneMessage','Milestone complete!')
		updateElement('milestoneRequirement',milestoneRequirements[id-1])
		updateElement('milestoneCheck','Check the milestones tab.')
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

function updateCosts(id='all') {
	if (id=='gens'||id=='all') {
		for (i=1;i<Math.min(player.highestTierPrestiges[0]+2,(player.currentChallenge==3)?10:11);i++) {
			var multiplier=getCostMultiplier(i)
			var cost=Decimal.pow(10,(player.currentChallenge==4&&i>1)?1:i*(0.9+0.1*i)).times(Decimal.pow(multiplier,player.generators[i-1].bought))
			if (player.supernovaUpgrades.includes(11)&&!player.preSupernova&&player.currentChallenge==0&&!player.prestigePower.eq(0)) cost=cost.div(Decimal.pow(multiplier,player.prestigePower.log10()).pow(0.1))
			if (player.currentChallenge==12) cost=cost.times(Decimal.pow(multiplier,(player.generators[0].bought+player.generators[1].bought+player.generators[2].bought+player.generators[3].bought+player.generators[4].bought+player.generators[5].bought+player.generators[6].bought+player.generators[7].bought+player.generators[8].bought+player.generators[9].bought)/250))
			if (player.quasar.active) cost = cost.div(fetchQuasarUpgEffect(3))
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

function challengeUpdate() {
	if (player.currentChallenge==8 &&ppsSingles[0].gt(0)) player.challPow=player.challPow.times(Decimal.pow(0.99,diff*2))
	if (player.currentChallenge==11) player.challPow=player.challPow.times(Decimal.pow(1.03,diff)).min(1)
	if (player.currentChallenge==13&&ppsSingles[0].gt(0)) player.challPow=player.challPow.times(Decimal.pow(0.99,diff*(player.prestigePower.log10()/2+1)))
}

function updateMaxLeverToggle() {
	getElement("maxAllLever").textContent = "Lever: " + ((player.maxAllLever) ? "ON" : "OFF")
}