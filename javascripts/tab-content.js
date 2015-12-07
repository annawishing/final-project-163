
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


function renderTabPanels (panels) {
	console.log(panels);
	var tabcourse = document.getElementById("tabcoures");
	var sum ="";
	var list = panels.list;	
	for (var i = 0; i <= list.length-1; i++) {
		var course = list[i]; 
		var itemHtml = 		['<div id="column" class="column">',
								'<div class="tab-panel">' ,
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