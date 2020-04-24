$(document).ready(function($) {
	$('a.popup').live('click', function(){
		newwindow=window.open($(this).attr('href'),'','height=300,width=500,left=140,top=500,');
		if (window.focus) {newwindow.focus()}
		return false;
	});

	$('a.popup2').live('click', function(){
		newwindow=window.open($(this).attr('href'),'','height=240,width=350,left=850,top=260,');
		if (window.focus) {newwindow.focus()}
		return false;
	});

	$('a.popup3').live('click', function(){
		newwindow=window.open($(this).attr('href'),'','height=700,width=500,left=850,top=260,');
		if (window.focus) {newwindow.focus()}
		return false;
	});
});