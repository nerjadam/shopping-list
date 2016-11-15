$(document).ready(function(){
	
	$('#get_button').on('click' , function(){ // GET per te derguar nje te dhene
		console.log('get button tapped');
		$.ajax({
			url:'/get_arr',
			type:'GET' ,
			success: function(arr) {
				$('#get').html(arr);
			}
		});
	});
	
	$('#post_button').on('click' , function(){
		console.log('post button tapped');
		$.ajax({
			url:'/post_arr' ,
			type: 'POST' ,
			dataType :'json' ,
			data: {
				item:$('#item').val()
			},
			success: function(){
				console.log('elementi u shtua me sukses');
			}
		});
		
	});
	
	$('#put_button').on('click' , function(){ // POST dhe PUT mund te maresg dge japesh tedhena
		console.log('put button tapped');
		$.ajax({
			url:'/put_arr' ,
			type: 'PUT' ,
			dataType: 'json' ,
			data : {
				update: $('#update').val()
			
			},
			success: function(){
				console.log('el u ndryshua me sukses');
			}
		});
		
	});
	
	$('#delete_button').on('click' , function(){
		console.log('delete button tapped');
		$.ajax({
			url:'/delete_arr' ,
			type : 'DELETE'
		});
	});
})
	