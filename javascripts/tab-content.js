
getData("http://study.163.com/webDev/couresByCategory.htm?pageNo=1&psize=20&type=10",renderTabPanels);


var tabProgram = document.getElementById("programming");
tabProgram.addEventListener("click", function(){
	getData("http://study.163.com/webDev/couresByCategory.htm?pageNo=1&psize=20&type=20",renderTabPanels);
	tabProgram.className += " active";
	tabProducts.className -= " active";
},false);

var tabProducts = document.getElementById("products");
tabProducts.addEventListener("click", function(){
	getData("http://study.163.com/webDev/couresByCategory.htm?pageNo=1&psize=20&type=10",renderTabPanels);
	tabProducts.className += " active";
	tabProgram.className -= " active";
},false);

var tabcourse = document.getElementById("tabcoures");

function showFloat(t){
	t.parentNode.getElementsByClassName('tab-float')[0].style.display = "block";
}
	


function hideFloat(t){
	t.parentNode.getElementsByClassName('tab-float')[0].style.display = "none";
}



function renderTabPanels (panels) {
	console.log(panels);
	var sum ="";
	var list = panels.list;	
	for (var i = 0; i <= list.length-1; i++) {
		var course = list[i]; 
		var itemHtml = 		['<div id="column" class="column">',
								'<div class="tab-panel" onmouseover="showFloat(this)" >' ,
									'<img src="' + course.middlePhotoUrl +'">',
									'<div class="tab-panel-content">',
										'<p>' + course.name +'</p>',
										'<div class="channel">' + course.provider +'</div>',
										'<div class="learner">',
											'<span class="icon-listener"></span>',
											course.learnerCount,
										'</div>',
										'<div class="price">' + ( course.price == 0 ? "免费" : '￥ ' + course.price.toFixed(2) )  +'</div>',
									'</div>',
								'</div>',
								'<div class="tab-float" onmouseleave="hideFloat(this)">',
									'<div class="tab-float-content clearfix">',
										'<div class="image">',
											'<img src="'+ course.middlePhotoUrl +'" width="228px" height="120px">',
										'</div>	',
										'<div class="info">',
											'<h5 class="title">'+ course.name +'</h5>',
											'<div class="learn">',
												'<span class="icon-listener"></span>',
												course.learnerCount + '人在学',
											'</div>',
											'<div class="publisher"> 发布者： '+ course.provider +'</div>',
											'<div class="category">分类： '+ course.categoryName +'</div>',
										'</div>',
									'</div>',
									'<p class="tab-float-footer">',
										course.description,
									'</p>',
								'</div>',
							'</div>'
							].join('');
		sum += itemHtml;

	};

	tabcourse.innerHTML = sum;


}


// 	var tabcolumn = document.getElementById("column");
// 	tabcolumn.addEventListener("mouseover",function(){

// 	},false);




// function mouseleave(){
// //取消mouseover事件的效果
// }