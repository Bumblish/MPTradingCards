

window.onload = function(){
	
	var d1Val = 0;
	var d2Val = 0;
	var totalVal = 3;
	var	rarity = 0;
	var cardDraw = 0;

	var cardNameCommon = ["Pattern 24 Rifle", "Pattern 5 Rain Gear", "Pulvian Destroyer", "Pulvian Patrol Boat", "Merchant Marines", "Domestic Salamander", "Garret", "Marine", "Felnid Seaman", "Seaman", "Naval Nco", "Pattern 208 Officer Cutlass", "Admiral Thompson", "Join Today", "Chain Of Command", "Pattern 105 Infantry Cannon", "Pattern 56 Light Mortar", "Steam Train", "Replenishment At Sea", "Special Delivery", "C-Rats", "Repair Forge", "Maintence Crew", "Goblin", "Goblin Crewmember", "Why We Fight", "For Them", "Gambling Is Prohibited", "The Trades", "First Aid", "Detention", "Constable", "Type 6 Naval Combat Equipment", "Jungle", "Crew Tent", "Signalman's Mate: Flags", "Signalman'S Mate: Birds", "Signalman'S Mate: Lamp", "Pidgegull", "Lifeboat", "Bayonet", "Canteen", "Felinid Canoe", "Marine Boat"];
	var cardFlavorCommon = ["", "A Felinid, Happy To Be Wearing Rain Gear", "", "", "Merchant Marines Fill The Gap Between Civilian Transport And Naval Operations", "", "A Garret Sitting On A Beach", "", "", "", "", "A Cheaper Looking Blade Around A Marine'S Hip", "Admiral Thompson'S Fancy Portrate Surrounded By Fruit", "Civilians Sign Up For Service", "A Detailed Diagram Of The Chain Of Command", "", "", "Steam Powered Locomotives Are The Backbone Of In-Country Logistics", "Two Ships Exchange Goods On The Waves", "A Cargo Ship Delivers Crates Of Goods To The Base", "Standard Canned Meal", "A Forge Where Repair Crews Forge And Repair Parts For The Ships", "Soldiers Hammer Away At A Part", "Anatomical Diagram Of A Goblin", "A Goblin Working The Deck Of A Ship", "Goblins Chain Up Felnid Slaves Who Are Crying", "Cats Paint Flowers On The Hull Of A Ship, Unaware Of The Threat The Goblins Pose To Them", "Soldiers Gather Around A Scorpian Fight All Clutching Naval Script", "One Sailor Hammers In A Nail As Another Applies Oil To A Brace", "A Fox Applies Medical Strips To A Wounded Soldier", "The Goblin Cage", "A Constable Walks Down A Street With A Lantern", "A Sailor Wearing The Helmet And Floatation Device", "", "", "Sailor Uses Semiphore Flags", "Sailor Prepares A Pidgull", "A Signalman Uses A Flashing Light", "A Pidgegull, Standing Happily On A Ship", "", "", "", "", "Marine Rowboat"];
	var cardImageCommon = ["common.png", "2.png", "https://www.marinersmuseum.org/wp-content/uploads/2021/08/CSS_Arkansas_2.jpg?w=1024", "https://www.thoughtco.com/thmb/wBBX0iaMqhiFtQswTWC5OtIJyys=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/uss-monitor-large-56a61c385f9b58b7d0dff705.jpg", "8.png", "9.png", "10.png", "11.png", "common.png", "common.png", "common.png", "https://cdn.shopify.com/s/files/1/0514/6935/3132/files/display_1267_US_NAVY_M1852_OFFICERS_SWORD_CA_1852-1858_634383134946146721.jpg?v=1615636141", "common.png", "https://editions.covecollective.org/sites/default/files/styles/gallery_zoom/public/gallery/recruit.jpeg?itok=C_L010Ve", "common.png", "https://upload.wikimedia.org/wikipedia/commons/d/d0/CW_Arty_Whitworth.jpg", "https://www.ima-usa.com/cdn/shop/products/ONSV6977__10.jpg?v=1594454740", "https://www.trains.com/wp-content/uploads/2020/10/trn-a0311_05.jpg", "common.png", "common.png", "https://www.kration.info/_Media/cration-b-unit-cocoa-open-b_med_hr.jpeg", "common.png", "common.png", "https://i.etsystatic.com/8364761/r/il/19580c/2268991506/il_570xN.2268991506_jwij.jpg", "common.png", "common.png", "common.png", "common.png", "common.png", "common.png", "common.png", "common.png", "common.png", "common.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn01uzBcEanWMgLntV5y-JG-tYpgquoxwMFxUqC3IvSA&s", "common.png", "common.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Signal_lamp_training.jpg/640px-Signal_lamp_training.jpg", "common.png", "https://www.historicships.com/wp-content/uploads/2017/11/p_4_3_9_2_4392-Titanics-Lifeboat.jpg", "https://emuseum.history.org/internal/media/dispatcher/220361/preview", "https://www.larpdistribution.com/wp-content/uploads/2020/05/HW-700356.png", "https://engines.egr.uh.edu/sites/engines/files/images/page/canoe_0.jpg", "https://heartheboatsing.com/wp-content/uploads/2021/04/ascot-lifeboat-in-awm.jpg"];

	var	cardNameUncommon = ["The Cutlass", "Merchant Marine Shore Party", "Marine Sargent", "Felnid Naval Nco", "Felnid Naval Officer", "Naval Officer", "Naval Captain", "Swab The Deck", "Gunnery Crew", "Man The Guns", "Pattern 106 Naval Cannon", "Pattern 207 Officer Cutlass", "Training", "Paw Island", "Calvary", "Pattern 800 Artillery Tractor", "Quartermaster", "Inspection", "Dinner", "Maintenance Officer", "Engineering Officer", "Goblin Captain", "Justice Ii", "Gift Of Appreciation", "Fox Pirates", "Unholy Alliance", "Corpsman", "General Quarters", "Military Police", "Pattern 50 Flintlock", "Pattern 55 Caplock Pistol", "Signalman's Mate: Telegraph", "Officer'S Cap", "Bayonet Charge", "Dinner In The Bush", "Hunting Trip",];
	var	cardFlavorUncommon = ["The Cutlass Is The Namesake Of The Cutlass Class Destroyer", "Merchant Marines Are Always Ready For A Fight", "A Heroic Looking Marine Nco Resting His Palm On His Sword", "", "", "", "", "Seamen Swab The Deck Clean", "A Gun Team", "A Navy Gun Crew Gather Around An Imposing Naval Cannon", "The Standard Naval Arment For Pulvian Ships", "A Sturdy Looking Blade In A Scabbard Around Halsey'S Hip", "Pulvian Training Camp", "Still Life Of The Beach", "A Soldier Rides A Salamander", "", "A Quartermaster Checks His Books", "A Quartermaster Checks A Line Of Rifles", "A Bowl Of Watery Soup On A Ship", "A Maintenance Officer Stands At The Gate For The Forge, Palm Extended And Finger Pointed At It", "A Dirty Looking Officer Inspects The Boiler", "A Goblin Waving His Sword Around Ordering Others", "Three Cats With Rifles Hold A Goblin At Bayonet Point", "A Cat Offers Some Juicy Meat To A Pleased Looking Marine", "A Fox Pirate Scans The Horizon", "A Fox Pirate And A Goblin Slaver Shake Hands", "A Corpsman Wearing A Red Cross On His Helmet Waits For Wounded", "Sailors Sprint To Their Battle stations", "An Mp Guards A Door To The Command Tent", "", "", "Signalman Uses A Telegraph", "", "Marines Charge A Goblin Position", "Soldiers Grill Some Animal Over A Fire", "Marines And Felnids Stalk Through The Woods In Search Of A Meal"];
	var cardImageUncommon = ["https://warfarehistorynetwork.com/wp-content/uploads/2016/08/NH-84512-KN-crop2-scaled.jpg", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "https://qph.cf2.quoracdn.net/main-qimg-ef58f3a4f8c96720e6274f71f4f4d84e-lq", "https://bpldcassets.blob.core.windows.net/derivatives/images/commonwealth:rv043b65f/image_thumbnail_300.jpg", "https://www.battlefields.org/sites/default/files/styles/wysiwyg_75/public/thumbnails/image/Kearsarge%20Sinking%20the%20Alabama%20Square.jpg?itok=bkVCEXFM", "https://360view.3dmodels.org/zoom/Tanks/Naval_Cannon_1000_0001.jpg", "uncommon.png", "https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/3QAKGBKBXBEMTGJ4MKAK4NA6R4.JPG", "uncommon.png", "uncommon.png", "https://live.staticflickr.com/8682/16626036011_861b162921_b.jpg", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d291210b-8967-4812-ade6-a10b6c3a0748/ddc98iq-9f8d4e1f-4707-4535-bdb9-f31986296976.png/v1/fill/w_1024,h_1024,q_80,strp/goblate__the_goblin_pirate_captain_by_bearlyheroic_ddc98iq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2QyOTEyMTBiLTg5NjctNDgxMi1hZGU2LWExMGI2YzNhMDc0OFwvZGRjOThpcS05ZjhkNGUxZi00NzA3LTQ1MzUtYmRiOS1mMzE5ODYyOTY5NzYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3OxlTAZsowZHIcMPNqc7g-qABsYkyoze8A9aLtQU69k", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "uncommon.png", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixg3_dSo8zI4IVDhbGYgt35Vs1xOko0HcnYWpNJvOWtfM0dM_COfGbjV3q7q6REI_safig9fiWxEpbF0npALWkbaBcvF2vHUj4e2-XdG2XtDSCSpmRo27tdW6pZj0M8_B1WTbURExXvHOY/s1600/French-soldiers.gif", "uncommon.png"];

	var cardNameRare = ["Pattern 24 Scoped", "Brace To Ram!!!", "Warfleet", "Merchant Marines Save The Day", "Merchant Marine Gally", "Marine Boarding Party", "Captain Cutter", "Discipline", "Ship's Quartermaster", "Admiral Halsey", "Paw Island Map", "Tribe Mother", "Federal Commandos", "Railway Artillery", "Botched Delivery", "Harbor Master", "Goblin Blaster Boy", "The Rescue", "Reunited", "Justice", "Small Body, Immense Spirit", "Ship's Surgeon", "Federal Courier", "Karnot Bust", "The Command Tent", "Holographic Salute", "Mortal Enemies", "Pattern 60 Revolver", "Love In Adverse Conditions", "Heros Lost", "Heros Found", "Abandon Ship", "Forgiving", "The Brave Few Do So Much", "Dream Journey", "Artillery Is King", "Nobody Likes A Thief", "Supply Mafia", "Grimboland", "Grimbo's Daughters"];
	var cardFlavorRare = ["", "A Destroyer Steams Right Through A Goblin Ship As Timbers Fly Out In Every Direction", "Pulvian Ships Engage In Battle With The Enemy", "Merchant Marines Carry A Stretcher With A Wounded Pulvian", "The Merchant Marines New Ship", "Marines On The Deck Of A Goblin Gunboat", "Captain Cutter Leans Over A Map, Discussing With His Officers", "An Nco Shouts At A Group Of Enlisted Drinking On The Deck", "The Ships Quartermaster Inspects A Cannon", "Halsey Smiles, Holding A Male Felnid In A Naval Uniform", "A Detailed Map Of The Base", "", "Four Federal Commandos Walk Through A Crowded Street", "These Heavy Guns Are Positioned By Rail And Can Deliver Terrifying Ordinance.", "A Quartermaster Punches A Delivery Man As A Tooth Flies Out", "The Harbor Master Looks Through Binoculars Down The Beach", "Goblin With A Blunderbuss", "Marines Cradle An Injured Cat Person On The Deck Of A Ship As Another Ship Burns Behind Them", "A Merchant Marine Holds Another Felnid's Head Against His, They Cry With Joy At Their Reunion", "A Firing Squad Opens Fire On A Goblin", "A Cat Sailor Can Be Seen Swimming With A Ships Bell In Rough Weather", "The Ship'S Doctor Stands With A Surgical Saw Menacingly", "See Art", "Three Constables Pin A Goblin Down. They Are Surrounded By Karnot Paraphernalia", "External View Of The Command Tent", "When Tilted, A Marine Salutes", "Holo Card. Cat Turns Into A Wolf", "", "A Human Bride And A Cat Groom Stand On The Deck Of A Ship As A Captain Marries Them", "Caskets Covered In Pulvian Flags Aboard A Ship", "A Cat Has An Officer'S Cap Placed Upon Their Head", "Sailors Pile Onto A Lifeboat As Water Crests Over The Ship", "One Cat Goes To Stab A Goblin, Another Stops Him", "A Marine And A Navy Captain Shake Hands", "A Marine Lays On The Floor Frothing At The Mouth", "A Battery Of Ground Cannons Bombard A Goblin Bunker", "A Group Of Marines Kick Another Marine Within An Inch Of His Life", "Yo Mikey- Melt Dis Ere Coppah. You Got It Boss", "", ""];
	var cardImageRare = ["rare.png", "https://qph.cf2.quoracdn.net/main-qimg-3a6cf999fc38c7324ee2e832eb113884-lq", "https://www.usni.org/sites/default/files/styles/hero_image/public/magazine_uploads/images/Symonds2F0MA11.jpg?itok=Ny_ltwT7", "rare.png", "https://discord.com/channels/@me/746748736436437033/1244719268365602868", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "https://www.usni.org/sites/default/files/styles/hero_image/public/Caiella-NH-SO-21%201.jpg?itok=0j-AFbF5", "rare.png", "rare.png", "https://static.wikia.nocookie.net/bloodbattaliongame/images/c/c1/Goblin_Gunner_II_Figure.png/revision/latest?cb=20130705214216", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "rare.png", "https://garyguerrero.com/wp-content/uploads/2021/12/Malvern_Hill_Artillery_at_Dusk.jpg", "rare.png", "rare.png", "rare.png", "rare.png"];

	var cardNameVeryRare = ["Pattern 77 Repeating Rifle", "Felinid Naval Captain", "Tribe Mother Heals The Sick", "Socwarcom", "Boilerplate", "Nice And Easy", "Intelligence Officer", "Interogation", "Depravity", "On The Clock", "Synchronize", "Federal Geology Service", "Chemical Warfare Corps", "Admr Halsey'S Office", "Holographic Musket", "Join The Corps", "Crew Chief Vasques", "Airship", "Alexander Hawthorn, Engineer", "Pattern 60 Revolver, Federal", "Love In Adverse Conditions Holo", "Ancient Spires", "High Class Entertainment", "Fox Adjunct", "Heros Found Holo", "Grimbo, Amusment Park Owner", "Grimboland Sweepstake Ticket"];
	var cardFlavorVeryRare = ["The Most Advanced Pulvian Rifle Given To Federal Rangers And Comandos", "A Heroic Looking Felnid Captain Stands Behind The Wheel Of Her Ship, Determination In Her Eyes", "A Concerned Tribemother Stands Over Wounded Soldiers And Provides Aid", "What They Dont Know Can Hurt Them...", "Boilerplate Stands At Attention", "Harbor Master Watches A Ship Dock Through Binoculars, Closely Giving Commands", "", "An Intelligence Officer Questions A Goblin", "A Photo Of Cat Tails Laid On A Table", "A Federal Courier Sprints Down A Road Leaving A Trail Of Dust", "Two Couriers Inspect Each Other'S Watches", "Rock Jock Brock", "", "Halsey's Treehouse", "When The Card Is Tilted, The Musket Fires", "Holo Card, Civilian Turns Into A Marine", "Serena Shyly Stands In Her Airship", "A Pulvian Airship", "Hawthorn Stands Calmly As A Ship Is Being Assembled Behind Him", "", "A Human Bride And A Cat Groom Stand On The Deck Of A Ship As A Captain Marries Them. When Tilted, They Kiss", "Deep In The Jungle, A Mysterious Stone Spire Pierces The Sky", "Val's Sister In Lingerie", "Thompson'S Fox Assistant", "A Cat Has An Officer'S Cap Placed Upon Their Head", "", ""];
	var cardImageVaryRare = ["https://image.invaluable.com/housePhotos/simpsongalleries/65/744465/H2355-L329745332.JPG", "veryRare.png", "veryRare.png", "veryRare.png", "https://timetunnel.bigredhair.com/boilerplate/soldier/bp.sol.gif", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png", "veryRare.png",];

	var cardNameLegendary = ["Admiral Thompson Eats Shit", "Beautiful Adjunct", "Cracked Rowboat", "Halsey, Urchin", "Halsey, A Naval Beauty", "Captain Halsey Naval Ace", "Boilerplate", "Man Or Machine", "Holographic Broadside", "Holographic Duel", "Holographic Cannon", "Holographic Battle", "Holographic Ship", "Aces", "Suki Von Richtoffen", "Bombs Away Holo", "Bombs Away", "Sweepstakes 50 Gold Voucher"];
	var cardFlavorLegendary = ["Thompson Has Fallen Through The Latrine Floor. Officially Recalled And Banned On Naval Installations", "Nude Fox Art", "", "A Scruffy Looking Admiral Halsey Holding Her Father'S Sword. The Fire Of Desire For A Better Life Burns In Her Eyes", "", "An Outdated Card Depicting Halsey As A Captain, Raising Her Sword In Defiance At The Enemy. A Heart Pin Is On Her Uniform", "Boilerplate Holds A Mirror To Himself", "When Tilted, A Ship Broadsides", "Halsey Parrys A Blow With Her Sword When The Card Is Tilted", "When Tilted, A Cannon Fires", "When Tilted, A Green Landscape Changes Into A Cratered Waste Inhabited By Marines", "When Tilted, A Goblin Ship Is Transformed Into A Smoldering Wreck", "Rictoffen, Halsey And Two Other Shadowed Figures Stand Together", "Suki Poses With Hero Wind", "Richtoffen Drops Ordinance On A Goblin Town. Holo", "Richtoffen Drops Ordinance On A Goblin Town", "Valid For 50 Gold If Turned Into Martin'S Cigerett Company In Magnapulvum"];
	var cardImageLegendary = ["legendary.png", "legendary.png", "https://thumbs.dreamstime.com/b/broken-boat-16995691.jpg", "legendary.png", "legendary.png", "legendary.png", "legendary.png", "legendary.png", "legendary.png", "legendary.png", "legendary.png", "legendary.png", "legendary.png", "legendary.png", "legendary.png", "legendary.png", "legendary.png",];

	var bodyClickHandler = function(event){
		console.log('clicked real good :)');

		if(cardDraw == 0){
			document.getElementById('card').id = "cardFlip";
			d1Val = parseInt(Math.random() *100);
			console.log(d1Val);
		
			if(d1Val >= 0 && d1Val <= 40){
				rarity = 1; //common
				console.log("common");
			}
			else if(d1Val >= 41 && d1Val <= 70){
				rarity = 2; //uncommon
				console.log("uncommon");
			}
			else if(d1Val >= 71 && d1Val <= 86){
				rarity = 3; //rare
				console.log("rare");
			}
			else if(d1Val >= 87 && d1Val <= 97){
				rarity = 4; //very rare
				console.log("very rare");
			}
			else if(d1Val >= 98 && d1Val <= 100){
				rarity = 5; //legesndary 
				console.log("legendary");
			}
			//
			if (rarity == 1) {
				d2Val = parseInt(Math.random() * 57);
				console.log(d2Val);
				document.getElementById('cardText').innerHTML = "You Drew A Common Card: " + (cardNameCommon[d2Val]) + "";
				setTimeout(function(){
					document.getElementById('cardFlip').src = (cardImageCommon[d2Val]);	
					document.getElementById('flavorTextOut').id = "flavorText";
					document.getElementById('flavorText').innerHTML = "<em>" + (cardFlavorCommon[d2Val]) + "</em>";		
					document.getElementById('hide').id = "show";
				}, 1770);
				cardDraw = 1;
				console.log("card drawn");
			}
			else if (rarity == 2) {
				d2Val = parseInt(Math.random() * 45);
				console.log(d2Val);
				document.getElementById('cardText').innerHTML = "You Drew An Uncommon Card: " + (cardNameUncommon[d2Val]) + "";
				setTimeout(function(){
					document.getElementById('cardFlip').src = (cardImageUncommon[d2Val]);
					document.getElementById('flavorTextOut').id = "flavorText";
					document.getElementById('flavorText').innerHTML =  "<em>" + (cardFlavorUncommon[d2Val]) + "</em>";
					document.getElementById('hide').id = "show";
				}, 1770);		
				cardDraw = 1;
				console.log("card drawn");
			}
			else if (rarity == 3) {
				d2Val = parseInt(Math.random() * 41);
				console.log(d2Val);
				document.getElementById('cardText').innerHTML = "You Drew A Rare Card:  " + (cardNameRare[d2Val]) + "";
				setTimeout(function(){
					document.getElementById('cardFlip').src = (cardImageRare[d2Val]);
					document.getElementById('flavorTextOut').id = "flavorText";
					document.getElementById('flavorText').innerHTML = "<em>" + (cardFlavorRare[d2Val]) + "</em>";		
					document.getElementById('hide').id = "show";
				}, 1770);	
				cardDraw = 1;	
				console.log("card drawn");	
			}
			else if (rarity == 4) {
				d2Val = parseInt(Math.random() * 24);
				console.log(d2Val);
				document.getElementById('cardText').innerHTML = "You Drew A Very Rare Card: " + (cardNameVeryRare[d2Val]) + "";
				setTimeout(function(){
					document.getElementById('cardFlip').src = (cardImageVaryRare[d2Val]);	
					document.getElementById('flavorTextOut').id = "flavorText";
					document.getElementById('flavorText').innerHTML = "<em>" + (cardFlavorVeryRare[d2Val]) + "</em>";		
					document.getElementById('hide').id = "show";
				}, 1770);
				cardDraw = 1;
				console.log("card drawn");			
			}
			else if (rarity == 5) {
				d2Val = parseInt(Math.random() * 9);
				console.log(d2Val);
				document.getElementById('cardText').innerHTML = "You Drew A Legendary Card: " + (cardNameLegendary[d2Val]) + "";
				setTimeout(function(){
					document.getElementById('cardFlip').src = (cardImageLegendary[d2Val]);
					document.getElementById('flavorTextOut').id = "flavorText";
					document.getElementById('flavorText').innerHTML = "<em>" + (cardFlavorLegendary[d2Val]) + "</em>";			
					document.getElementById('hide').id = "show";
				}, 1770);	
				cardDraw = 1;
				console.log("card drawn");
			}
		}
		else if (cardDraw == 1) {
			document.getElementById('cardFlip').id = "card";
			document.getElementById('card').src = "defaultCard.png";
			document.getElementById('cardText').innerHTML = "Click The Card To Reveal";
			document.getElementById('flavorText').id = "flavorTextOut";
			setTimeout(function(){
				document.getElementById('flavorTextOut').innerHTML = "";
			}, 1500);
			cardDraw = 0;
		}
	};
	var bodyClick = document.getElementsByTagName('img');
	var bodyElement = bodyClick[0];

	bodyElement.addEventListener('click',bodyClickHandler);
}

