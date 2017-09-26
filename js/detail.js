$(function(){
	$(window).on("resize",function(){
		var winWidth = $(window).width();
		var size;
		if(winWidth<414){
			size = (winWidth/360)*100;
			document.documentElement.style.fontSize = size + 'px';
		}else{
			size=414/360*100;
			document.documentElement.style.fontSize = size + 'px';
		}
	}).trigger("resize");


	//点击弹出遮罩
	$(".satis").on("click",function(){
		$(".mask").css("display","block");
	})
	//去除遮罩
	$(".cross").on("click",function(){
		$(".mask").css("display","none");
	})
	//评分
	var num = 4;
	function setScore(){
		$("#score").html(num+".0分")
	}
	setScore();
	$("#num img").on("click",function(e){
		var list=$("#num").find("img")
		for(var i=0;i<list.length;i++){
			list[i].data_index=i+1;
		}
		//点击的星星的index
		 num=e.target.data_index;
		setScore();
		//前面的变色
		for(var k=0;k<list.length;k++){
			list[k].setAttribute("src", "./img/xingxing--moren@2x.png")
		}
		for(var j=0;j<num;j++){
			list[j].setAttribute("src","./img/xingxing-dianji@2x.png");
		}
	})

	$(".btn").on("click",function(){
		alert('您的打分为'+num+".0分");
	})
	


})