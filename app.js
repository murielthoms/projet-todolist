alert("Bienvenue sur votre to do list");

$(document).ready();

$("#add").click(function() {
	var input = $('input').val();
	var check = $('ul').append('<li><input type="checkbox">'+ input +'</li>' );
});

$( "ul" ).on('click','li',function() {
	$( this ).toggleClass('done');  

});

$('#mesNotes').click(function() {

	$("li").show();
	$("li.done").show();
	
});

$('#notesFaites').click(function() {

	$("li").hide();
	$("li.done").show();
});

$('#faire').click(function() {

	$("li").show();
	$("li.done").hide();
});