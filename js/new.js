
		$(".met-scroll-top").click(function(){
				$('html,body').animate({'scrollTop':0},300);
			});
			//
			var wh = $(window).height();
			$(window).scroll(function (){
				if($(this).scrollTop()>wh){
					$(".met-scroll-top").removeClass('hide').addClass("animation-slide-bottom");
				}else{
					$(".met-scroll-top").addClass('hide').removeClass('animation-slide-bottom');
				}
			});
		
			new WOW().init();
			$(".ewm").hover(function(){$(this).find("img").show()},function(){$(this).find("img").hide()});
			
			
			
			
			