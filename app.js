//alert("Bienvenue sur votre to do list");
// console.log('hello');


// var todo = [];
// console.log(todo);
$(document).ready();



$("button").click(function() {
	var  recup = $('input').val();
	$('ul').append('<li>' + recup + '</li>');
	//console.log(recup);
	//console.log(list);
	
});

