	$( document ).ready(function() {

		$('#verb').click(function() {
			newVerb();
		})

		$('#noun').click(function() {
			newNoun();
		})

     $('#save').click(function() {
     	makeIMG();
     });

     $('#color').click(function () {
     	$('.sp-container').toggle();
     });

	  $('.sp-choose').click(function () {
	 		var color = document.getElementById('picker').value;
	 		$('#verb').css("color", color);
	 		$('#noun').css("color", color);
	 		$('p').css("color", color);
	 		$('.sp-container').toggle();
		});
	  $('#noun, #verb').click(function () {

	  	var fontCount = $('#dropdown ul li').length;

	  	$('ul li').html($('#verb').text()+" the "+$('#noun').text());

	  });
	  $('li').click(function () {
	  	var font = $(this).css("font-family");
	  	$('#verb').css("font-family", font);
 			$('#noun').css("font-family", font);
 			$('p').css("font-family", font);
 			$('#dropdown').toggle();
	  });
});

	$("#flat").spectrum({
    flat: true,
    showInput: true
});
$("#flatClearable").spectrum({
    flat: true,
    showInput: true,
    allowEmpty:true
});

function newVerb(){
	var verbs = new Array(
		"Fight", "Destroy", "Pierce",
		"Tear", "Carry", "Entomb",
		"Reclaim", "Release", "Attack",
		"Raid", "Feed", "Harass", "Devour",
		"Surround", "Jump", "Disembowel",
		"Create", "Bring", "Take", "Stab",
		"Demolish", "Reveal", "Terminate",
		"Strengthen", "Charge", "Protest",
		"Rush", "Betray", "Raise", "Corrode",
		"Disfigure", "Darken", "Slaughter",
		"Torture", "Torment", "Kill",
		"Escape", "Gut", "Suffocate",
		"Survive", "Crown", "Bury",
		"Follow", "I Am", "We Are",
		"Conquer", "Disrespect",
		"Dismantle", "Decay", "Incinerate",
		"Control", "Embrace", "Contort",
		"Rupture", "Raise", "Enter",
		"Burn", "Pillage", "I,");
	var v = verbs[Math.floor(Math.random()*(verbs.length))];
	$('#verb').fadeOut(0);
	$('#verb').html(v);
	$('#dropdown li').html(v);
	$('#verb').fadeIn(300);
};

function newNoun(){
	var nouns = new Array(
		"Bear", "Demon", "Menace",
		"Dragon", "Night", "Darkness",
		"Enemy", "Monster", "System",
		"Refuge", "Power", "Pit", "Stage",
		"Establishment", "Crowd",
		"Day", "Hour", "Music", "Sound",
		"Memory", "Protest", "Opposition",
		"Resistance", "Blackness", "Pain",
		"Dead", "Stone", "Fate", "People",
		"Forgotten", "World", "Silence",
		"City", "Ocean", "Fire",
		"Affliction", "Sky", "Broken",
		"Castle", "Veil", "Living",
		"Creature", "Creator", "Dawn",
		"Samurai", "Divide", "Void", "Empire");
	var randno = Math.floor(Math.random()*(nouns.length));
	$('#noun').fadeOut(0);
	$('#noun').html(nouns[randno]);
	$('#noun').fadeIn(300);
};

function makeIMG() {
	 		var audio = [
	  	"audio/guitar1.mp3", "audio/guitar2.mp3",
	  	"audio/guitar3.mp3", "audio/guitar4.mp3",
	  	"audio/guitar5.mp3", "audio/guitar6.mp3",
	  	"audio/guitar7.mp3", "audio/guitar8.mp3",
	  	"audio/guitar9.mp3"
	  	];
	  	var rand = Math.floor(Math.random()*audio.length);
	  	var player = new Audio(audio[rand]);
	  	player.play();

			html2canvas(document.getElementById("makeImage"), {
				background:'#undefined',
			  onrendered: function(canvas) {
			  	document.body.appendChild(canvas);
			  	var DataURL = canvas.toDataURL("image/png");
			  	var image = document.getElementById('finalImage');
			  	var link = document.getElementById('imageDownload');
			  	var verb = $('#verb').html();
			  	var noun = $('#noun').html();
			 		$('#imageDownload').attr('download', verb+"the"+noun+".png");
			  	image.src = DataURL;
			  	link.href = DataURL;
			  	$('#finalImage').trigger("click");
			  }
			});
	 	}
