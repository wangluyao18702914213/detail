$(function(){
	$(window).on("resize",function(){
		var winWidth = $(window).width();
		console.log(winWidth);
		var size;
		if(winWidth<414){
			size = (winWidth/360)*100;
			console.log(size)
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
	$("#num").on("click",function(e){
		var list=$("#num").find("img")
		console.log(list)
		for(var i=0;i<list.length;i++){
			list[i].data_index=i+1;
		}
		//点击的星星的index
		var num=e.target.data_index;
		//前面的变色
		for(var j=0;j<num;j++){
			list[j].setAttribute("src","./img/xingxing-dianji@2x.png");
		}
		//后面的变回来
		for(var k=list.length;list>num;k--){
			list[k].setAttribute("src","./img/xingxing--moren@2x.png");
		}
		
	})
	


})