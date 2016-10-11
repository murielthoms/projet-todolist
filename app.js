//alert("Bienvenue sur votre to do list");
// console.log('hello');


// var todo = [];
// console.log(todo);
$(document).ready();

$("button").click(function() {
	var input = $('input').val();
	var check = $('ul').append('<li><input type="checkbox">'+ input +'</li>' );
	console.log(check);

});

$( "ul" ).on('click','li',function() {
	 $( this ).toggleClass('done');  

	});

