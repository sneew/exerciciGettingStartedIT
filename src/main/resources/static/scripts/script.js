$(function(){
	var $insert = $('#insert');
	var $n1 = $('#n1')
	$.ajax({
		type: 'GET',
		url:'/greetings',
		success: function(item){
			console.log('success', item);
			$insert.append(item.content);
		},
		error: function(){
			alert('error loading');
		}
	});
	
	$('#add-item').on('click', function(){
		var item = {
			name: $n1.val(),
		};
		$.ajax({
			type: 'POST',
			url: '/greetings',
			data: item,
			success: function(item){
				$insert.append("</br>" + item.content);
			},
			error: function(){
				alert('error saving item');
			}
		});
	});
});