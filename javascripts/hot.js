
getData("http://study.163.com/webDev/hotcouresByCategory.htm",renderHotList);


function renderHotList(hotList){
	var hot = document.getElementById("hot-panel-body");
	var sum ="";	
	for (var i = 0; i <= hotList.length-1; i++) {
		var course = hotList[i];
		var imgUrl = course.smallPhotoUrl;
		var name = course.name;
		var learnerCount = course.learnerCount;
		var itemHtml = '<div class="item clearfix"><div class="item-photo"><img src="' + imgUrl + '"></div>' +
						'<div class="item-content"><div class="item-name">' + name + '</div>' +
						'<div class="listener"><span class="icon-listener"></span><span class="li-num">' + learnerCount +'</span></div></div></div>';
		sum += itemHtml;

	};

	hot.innerHTML = sum;

	var intervalID = setInterval(scollHot,2000);
	var marginTop = hot.style.marginTop;
	var i = 0;

     function scollHot(){
		hot.style.marginTop = marginTop;
		marginTop -= 70; 
		i++;
		if (i>10){
			clearInterval(intervalID);
		}
	}
}

