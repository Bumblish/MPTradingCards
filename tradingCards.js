 

window.onload = function(){
	
	var d1Val = 0;
	var d2Val = 0;
	var totalVal = 3;
	var	rarity = 0;
	var cardDraw = 0;

	var cardNameCommon = ["Pattern 24 rifle", "pattern 5 rain gear", "pulvian destroyer", "pulvian tugboat", "pulvian patrol boat", "marines barge", "merchant marines", "domestic salamander", "garret", "marine", "felnid seaman", "seaman", "naval NCO", "pattern 208 officer cutlass", "admiral thompson", "join today", "chain of command", "pattern 105 infantry cannon", "pattern 56 light mortar", "steam train", "refuel and reload", "replenishment at sea", "special delivery", "ships store", "ships gally", "c-rats", "repair forge", "maintence crew", "machinists's mate", "goblin", "goblin crewmember", "why we fight", "for them", "watch tower", "mess tent", "commisary", "GAMBLING IS PROHIBITED", "Felinid 1", "felinid 2", "felinid 3", "the trades", "first aid", "detention"];
	var cardFlavorCommon = ["", "", "", "", "", "", "", "", "a garret sitting on a beach", "", "", "", "", "a cheaper looking blade around a marine's hip", "admiral thompson's fancy portrate surrounded by fruit", "civilians sign up for service", "a detailed diagram of the chain of command", "", "", "", "cranes hoist a crate into a ship", "two ships exchange goods on the waves", "a cargo ship delivers crates of goods to the base", "", "", "standard canned meal", "a forge where repair crews forge and repair parts for the ships", "soldiers hammer away at a part", "a sailor throws a garret in the boiler", "anatomical diagram of a goblin", "a goblin working the deck of a ship", "goblins chain up felnid slaves who are crying", "cats paint flowers on the hull of a ship", "", "", "", "soldiers gather around a scorpian fight", "", "", "", "one sailor hammers in a nail as another applies oil to a brace", "a fox applies medical strips to a wounded soldier", "the goblin cage"];
	var cardImageCommon = [0]

	var	cardFlavorUncommon = ["", "", "", "", "", "", "", ""];
	var	cardFlavorUncommon = ["", "", "", "", "", "", "", ""];

	var cardNameRare = ["", "", "", "", "", "", "", ""];
	var cardFlavorRare = ["", "", "", "", "", "", "", ""];

	var cardNameVeryRare = ["", "", "", "", "", "", "", ""];
	var cardFlavorVeryRare = ["", "", "", "", "", "", "", ""];

	var cardNameLegendary = ["", "", "", "", "", "", "", ""];
	var cardFlavorLegendary = ["", "", "", "", "", "", "", ""];


	var bodyClickHandler = function(event){
		console.log('clicked real good :)');

		if(cardDraw == 0){
			document.getElementById('card').id = "cardFlip";
			setTimeout(function(){
				//document.getElementById('cardFlip').src = "images/" + (cardImageCommon[d2Val]) + ".png";				document.getElementById('cardFlip').src = "images/" + (cardImageCommon[d2Val]) + ".png";
				document.getElementById('cardFlip').src = "images/" + 0 + ".png";
				cardDraw = 1;
			}, 1770);


			d1Val = parseInt(Math.random() * 101);
			console.log(d1Val);
			

		
			if(d1Val >= 0 && d1Val <= 50){
				rarity = 1; //common
				console.log("common");
			}
			else if(d1Val >= 51 && d1Val <= 70){
				rarity = 2; //uncommon
				console.log("uncommon");
			}
			else if(d1Val >= 71 && d1Val <= 80){
				rarity = 3; //rare
				console.log("rare");
			}
			else if(d1Val >= 81 && d1Val <= 93){
				rarity = 4; //very rare
				console.log("very rare");
			}
			else if(d1Val >= 94 && d1Val <= 100){
				rarity = 5; //legesndary 
				console.log("legendary");
			}



			if (rarity == 1) {
				d2Val = parseInt(Math.random() * 44);
				console.log(d2Val);
				document.getElementById('cardText').innerHTML = "You Drew A Common Card: \"" + (cardNameCommon[d2Val]) + "\"";
			}
			else if (rarity == 2) {
				d2Val = parseInt(Math.random() * 30);
				console.log(d2Val);
				document.getElementById('cardText').innerHTML = "You Drew An Uncommon Card: \"" + (cardNameUncommon[d2Val]) + "\"";
			}
			else if (rarity == 3) {
				d2Val = parseInt(Math.random() * 20);
				console.log(d2Val);
				document.getElementById('cardText').innerHTML = "You Drew A Rare Card:  \"" + (cardNameRare[d2Val]) + "\"";
			}
			else if (rarity == 4) {
				d2Val = parseInt(Math.random() * 10);
				console.log(d2Val);
				document.getElementById('cardText').innerHTML = "You Drew A Very Rare Card: \"" + (cardNameVeryRare[d2Val]) + "\"";
			}
			else if (rarity == 5) {
				d2Val = parseInt(Math.random() * 5);
				console.log(d2Val);
				document.getElementById('cardText').innerHTML = "You Drew A Legendary Card: \"" + (cardNameLegendary[d2Val]) + "\"";
			}


		}
		else if (cardDraw == 1) {
			document.getElementById('cardFlip').id = "card";
			document.getElementById('card').src = "images/defaultCard.png";
			document.getElementById('cardText').innerHTML = "Click The Card To Reveal";
			cardDraw = 0;
		}

	
		//card.src = 'images/card'+ d2Val+ '.png';
		//card.src = 'images/cardback'+ d2Val+ '.png';
		

	};

	var bodyClick = document.getElementsByTagName('img');
	var bodyElement = bodyClick[0];


	bodyElement.addEventListener('click',bodyClickHandler);
}

