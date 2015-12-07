	var intervalID = setInterval(slide,2000);

	var pause = false;
	var list = document.querySelectorAll(".slider ul li");
	var cur = 0;
	function slide(){
		if( pause != true){
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
		
	}

	var ulSlider = document.getElementById("slider")

	ulSlider.addEventListener("mouseover",pauseSlide,false);
	ulSlider.addEventListener("mouseleave",go_on,false);
	function pauseSlide(){
		pause = true;
	}

	function go_on(){
		pause = false;

	}