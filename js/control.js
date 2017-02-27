/*头部广告*/
$(function(){
	//alert($)
	var topBan = $("#header_wrap div.top_banner");
	var aClose = $("#header_wrap div.top_banner a.close");
	var banHide = $("#header_wrap div.top_banner div.banner_hide");
	
	$("#header_wrap div.top_banner div.banner_show").click(function(){
		//alert("展开")
		topBan.animate({"height":"300px"},400);
		aClose.css("display","none");
		banHide.css("display","block");		
	});
	$("#header_wrap div.top_banner div.banner_hide").click(function(){
		//alert("收起")
		topBan.animate({"height":"60px"},400);
		aClose.css("display","block");
		$(this).css("display","none");		
	})	
});
/*搜索框*/
$(function(){
	var sKeyword = $(".search_input div.search_history");
	$(".search_input input.search_txt").click(function( ){		
		sKeyword.show( );		
	});		
	$(document).mouseout(function( ){		
		sKeyword.hide( );
	});	
});
/*一二级菜单*/
$(function(){
	var oLi = $(".all_items .all_sort div.sort_menu li");
	var index = 0;
	oLi.hover(function(){
		//alert("选择")
		$(this).addClass("sor h3").siblings().removeClass("sor h3");
		i = $(this).index();
		//alert(i)
		$(".sort_detail_list").eq(i).show();
	
	},function(){
		$(".sort_detail_list").eq(i).hide();
		$(this).removeClass("sor h3");
	})	
})

/*首页轮播*/
$(function(){
	 var index = 0;	 
	 $('#banner ul li').hover(function(){
		 index = $(this).index();
		 var color = $('.pic img').eq(index).attr('data_color');
		 $('#banner').css('background',color);
		 $(this).addClass('on').siblings().removeClass('on');		 
		 $('.pic img').eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	 });
	 
	 var play = function(){
		$('.pic img').eq(index).fadeIn().siblings().fadeOut();
		$("#banner ul li").eq(index).addClass('on').siblings().removeClass('on');
		color = $('.pic img').eq(index).attr('data_color');
		$('#banner').css('background',color);
		index = (index + 1) % 8;
		myTime = setTimeout(play,4000);
	 }
	 myTime = setTimeout(play,4000);

	 $("#banner").hover(function(){
		clearTimeout(myTime);
	 },function(){
		setTimeout(play,4000);
	 });
	 
 })

 /*tab选项卡*/
 $(function(){
	var index = 0;
	$(".content_tab p.tabs a").hover(function(){
		//alert("点卡充值")
		$(this).addClass("tor").siblings().removeClass("tor");
		i = $(this).index();
		//alert(i)
		$(".tab").eq(i).show().siblings().hide();
	})
	
 })

/*商品海购的轮播--红色加载条待解决*/
$(function(){
	var i = 0;
	var auto = null;
	$("ul.slider_ch li").hover(function(){
		//alert("开始海购了！")
		$(this).addClass("sai").siblings().removeClass("sai");
		i = $(this).index();
		//alert(i)
		$("ul.slider_box").animate({left:-330*i+"px"},300);		
	})
	$("ul.slider_ch").hover(function(){
		clearInterval(auto);
	},function(){
		play();
	})
	function play(){
		auto = setInterval(function(){
			i++;
			if(i>2) i=0;
			$("ul.slider_ch li").eq(i).addClass("sai").siblings().removeClass("sai");
			$("ul.slider_box").animate({left:-330*i+"px"},300);	
		},2000)
	}
	play();
})