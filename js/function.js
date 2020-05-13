$(function(){
	var sw= false; //클릭했을떄 들어가고 나오는 것을 하기 위해 변수 선언
	$('#menu').click(function(){
		if(sw == false){
			$('.main').animate({
				left:"500px"
			});
			sw= true;
		}else{
			$('.main').animate({
				left:"-500px"
			});
			sw = false;
		}
	});
});
