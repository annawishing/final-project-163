
getData("http://study.163.com/webDev/couresByCategory.htm?pageNo=1&psize=20&type=10",renderTabPanels);

function renderTabPanels (panels) {
	console.log(panels);
	var tabcourse = document.getElementById("tabcoures");
	var sum ="";
	var list = panels.list;	
	for (var i = 0; i <= list.length-1; i++) {
		var course = list[i]; 
		var itemHtml = 		['<div class="column">',
								'<div class="tab-panel">' ,
									'<img src="' + course.middlePhotoUrl +'">',
									'<div class="tab-panel-content">',
										'<p>' + course.name +'</p>',
										'<div class="channel">' + course.provider +'</div>',
										'<div class="learner">',
											'<span class="icon-listener"></span>',
											course.learnerCount,
										'</div>',
										'<div class="price">￥ ' + course.price +'</div>',
									'</div>',
								'</div>',
							'</div>'
							].join('');
		sum += itemHtml;

	};

	tabcourse.innerHTML = sum;
}


