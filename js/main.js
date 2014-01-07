// JavaScript Document






function Single(artist, song, audio, picture){
	this.artist = artist;
	this.song = song;
	this.audio = audio;	
	this.picture = picture;
}

// two Single objects
var single1 = new Single("Elvis Presley", "In the ghetto", "audio/elvis.mp3", "img/elvis.jpg");
var single2 = new Single("Adele", "Rolling in the deep", "audio/adele.mp3", "img/adele.jpg"); 
 
// make singlelist
var SingleList = new Array();
SingleList[0] = single1;
SingleList[1] = single2;


// variables
var audio = new Audio();
var i= 0;
var nowplay = document.getElementById("nowplay");

$(document).ready(function() {
	
	$('#play').on('click', function(){
		

		if(i <= SingleList.length){
				audio.src = SingleList[i].audio;
				audio.play();
				var nowplay = document.getElementById("nowplay");
				nowplay.innerHTML = SingleList[i].artist + " - " + SingleList[i].song ;
				
				var picture = document.getElementById("picture");
				picture.src = SingleList[i].picture;
				
		}else{
			i = 0;
			audio.src = SingleList[i].audio;
			audio.play();
			var nowplay = document.getElementById("nowplay");
			nowplay.innerHTML = SingleList[i].artist + " - " + SingleList[i].song ;
			
			var picture = document.getElementById("picture");
				picture.src = SingleList[i].picture;
		}

			
		});
		
		$('#stop').on('click', function(){
			
			audio.pause();
		});
		
		$('#next').on('click', function(){
			i++;
			if(i<=SingleList.length -1 ){
				audio.src = SingleList[i].audio;
				audio.play();
				var nowplay = document.getElementById("nowplay");
				nowplay.innerHTML = SingleList[i].artist + " - " + SingleList[i].song ;
				
				var picture = document.getElementById("picture");
				picture.src = SingleList[i].picture;
				
				
			}else{
				i = 0;
				audio.src = SingleList[i].audio;
				audio.play();
				var nowplay = document.getElementById("nowplay");
				nowplay.innerHTML = SingleList[i].artist + " - " + SingleList[i].song ;
				
				var picture = document.getElementById("picture");
				picture.src = SingleList[i].picture;
				
			}
			
			
		});
	
	
	
	
	

    
});


