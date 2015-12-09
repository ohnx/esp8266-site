var elementPosition = $('#navigation').offset();
$(window).load(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > elementPosition.top) {
			$('#navigation').css('position','fixed').css('top','5px');
		} else {
			$('#navigation').css('position','static');
		}
	});
	elementPosition.top = 583;
	if($(window).scrollTop() > elementPosition.top){
		$('#navigation').css('position','fixed').css('top','5px');
	} else {
		$('#navigation').css('position','static');
	}
	var animWindow = window.location.hash.substr(1);
	if(animWindow == "anim") {
		$('html, body').animate({
			scrollTop: $("#content").offset().top
		}, 500);
	}
});