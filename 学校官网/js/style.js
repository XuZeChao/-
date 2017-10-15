$(function() {
	var timer = null;
	var index = 0;
	var arr = ["东华理工大学","东华理工大学","东华理工大学","南昌校区.二叠湖风光","抚州校区.西湖风光"];
    
    changePic();
	timer = setInterval(autoplay,3000);

    function autoplay() {
		index++;
		$("#banner_list").animate({marginLeft : -1100 * (index + 1)},function() {
				if(index == 5) {
					$(this).css("marginLeft",-1100);
					index = 0;
				} else if(index < 0) {
					$(this).css("marginLeft",-1100 * 5);
					index = 4;
				}
			})
			var arrIndex = index;
			if (arrIndex == 5) {
				arrIndex = 0;
			} else if (arrIndex < 0) {
				arrIndex = 4;
			}

			$("#tag").children("a").attr("href",arr[arrIndex]).text(arr[arrIndex]);
	}
    
	function changePic() {
		$("#banner").mouseover(function() {
			$("#banner").children(".change").css("display","block");
			clearInterval(timer);
		}).mouseout(function() {
			$("#banner").children(".change").css("display","none");	
			clearInterval(timer);
			timer = setInterval(autoplay,3000);		
		}).find(".change").mouseover(function() {
			$(this).css("color","red");
		}).mouseout(function() {
			$(this).css("color","#fff");
		}).click(function () {
			if($(this).index() == 0) {
				index--;
			} else{
				index++;
			}
			$("#banner_list").animate({marginLeft : -1100 * (index + 1)},function() {
				if(index == 5) {
					$(this).css("marginLeft",-1100);
					index = 0;
				} else if(index < 0) {
					$(this).css("marginLeft",-1100 * 5);
					index = 4;
				}
			})
			var arrIndex = index;
			if (arrIndex == 5) {
				arrIndex = 0;
			} else if (arrIndex < 0) {
				arrIndex = 4;
			}

			$("#tag").children("a").attr("href",arr[arrIndex]).text(arr[arrIndex]);
		});
	}

	$("#nav").find("li").mouseenter(function() {
		console.log($(this).index());
		$(".xiala").eq($(this).index()).stop().slideDown();
	}).mouseleave(function() {
		$(".xiala").eq($(this).index()).stop().slideUp();
	})
})
