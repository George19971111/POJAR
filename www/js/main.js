
$(document).ready(function(){
	$('#turw div').click(function(event){
		event.preventDefault();
		$('#turw div').css('border','2px solid red').not(this).css('border','2px solid #eedbdb')
	})
})