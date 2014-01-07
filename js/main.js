// JavaScript Document

// variables
var audio = new Audio();
var i= 0;



// two Single objects
var single1 = new Single("Elvis Presley", "In the ghetto", "audio/elvis.mp3", "img/elvis.jpg");
var single2 = new Single("Adele", "Rolling in the deep", "audio/adele.mp3", "img/adele.jpg"); 
 
// make singlelist
var SingleList = new Array();
SingleList[0] = single1;
SingleList[1] = single2;


// Singe class
function Single(artist, song, audio, picture){
	this.artist = artist;
	this.song = song;
	this.audio = audio;	
	this.picture = picture;
}

// Single class methods
Single.prototype.artistSong = function(){
	return this.artist + " - " + this.song;	
}


// Methods

// Change picture, audiofile and text 
function getAll(){
	var pictures = document.getElementById("picture");
	audio.src = SingleList[i].audio;
	pictures.src = SingleList[i].picture;
	$('#nowplay').html(SingleList[i].artistSong());
	
	audio.play();

}

//----------------------------------------------------------------

// JQuery
$(document).ready(function() {
	
	
	// PLAY BUTTON ACTION
	$('#play').on('click', function(){
		if(i <= SingleList.length){
			
				getAll();			
				
		}else{
			i = 0;
			getAll();
		}

		});
		
		// STOP BUTTON ACTION
		
	$('#stop').on('click', function(){
			
			audio.pause();
		});

		// NEXT BUTTON ACTION
		$('#next').on('click', function(){
			i++;
			if(i<=SingleList.length -1 ){
				getAll();

			}else{
				i = 0;
				getAll();

			}

		});

});




