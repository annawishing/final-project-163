	var intervalID = setInterval(slide,5000);

	var list = document.querySelectorAll(".slider ul li");
	var cur = 0;
	function slide(){

		var next ;

		list[cur].style.opacity = 0;
		
		if(cur == list.length -1){
			next = 0;
			cur = 0;
		}else{
			next = cur + 1 ;
			cur = next;

		}

		list[next].style.opacity = 1;
		
		
	}