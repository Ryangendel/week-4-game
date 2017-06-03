//varables


// $('#randomTargetNumber').text(Random);
var Random=0;
var cry1=Math.floor(Math.random()*11+1)
var cry2=Math.floor(Math.random()*11+1)
var cry3=Math.floor(Math.random()*11+1)
var cry4=Math.floor(Math.random()*11+1)

var wins=0;
var losses=0;
var currentScore=0;


//events

$(document).ready(function(){
	var Random=Math.floor(Math.random()*101+19);
	$('#randomTargetNumber').html("Number To Match:" + Random);

})

$('#totalWins').text(wins);
$('#totalLosses').text(losses);

var reset = function(){
	var Random=Math.floor(Math.random()*101+19);
	console.log(Random)
	$('#randomTargetNumber').text(Random);
	cry1=Math.floor(Math.random()*11+1);
	cry2=Math.floor(Math.random()*11+1);
	cry3=Math.floor(Math.random()*11+1);
	cry4=Math.floor(Math.random()*11+1);
	currentScore===0;
	$('#usersCurrentScore').text(currentScore);
}

	var win =function(){
		console.log('test');
		alert('Way to go!');
		wins++;
		$('#totalWins').text(wins);
		reset();
	}

	var lost= function (){
		console.log("text");
		alert('too bad');
		losses++;
		$('#totalLosses').text(losses);
		reset();
	}

// //jewel click set up

$("#crystal1").on('click',function(){
	currentScore= currentScore + cry1;
	console.log("new usertotal = " + currentScore);
	$('#totalScore').text(currentScore);
		if (currentScore===Random){
			win();
		}
		else if(currentScore<Random){
			lost();
		}	
	})

$("#crystal2").on('click',function(){
	currentScore= currentScore + cry2;
	console.log("new usertotal = " + currentScore);
	$('#totalScore').text(currentScore);
		if (currentScore===Random){
			win();
		}
		else if(currentScore<Random){
			lost();
		}	
	})

$("#crystal3").on('click',function(){
	currentScore= currentScore + cry3;
	console.log("new usertotal = " + currentScore);
	$('#totalScore').text(currentScore);
		if (currentScore===Random){
			win();
		}
		else if(currentScore<Random){
			lost();
		}	
	})

$("#crystal4").on('click',function(){
	currentScore= currentScore + cry4;
	console.log("new usertotal = " + currentScore);
	$('#totalScore').text(currentScore);
		if (currentScore===Random){
			win();
		}
		else if(currentScore<Random){
			lost();
		}	
	})


