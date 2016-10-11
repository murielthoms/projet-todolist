//alert("Bienvenue sur votre to do list");
// console.log('hello');


// var todo = [];
// console.log(todo);
$(document).ready();

$("button").click(function() {
	var recup = $('input').val();
	var t = $('ul').append('<li><input type="checkbox">'+ recup +'</li>' );
	console.log(t);

});

$( "ul" ).on('click','li',function() {
	 $( this ).toggleClass('done');  

	});

