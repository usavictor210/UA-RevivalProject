function getElement(elementID) {
	return document.getElementById(elementID);
}

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
		return '∞'
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
	number = new Decimal(number);
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
