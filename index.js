/**
 * Created by ZTHK10 on 2016/9/18.
 */
$(function(){
    $(".banner4").hover(function(){
        $(".carousel-control").show()
    },function(){
        $(".carousel-control").hide()
    }).trigger("mouseleave");


    function goTop(){
        $(window).on("scroll",function(){
            var $scrollTop=$(window).scrollTop();
            if($scrollTop>300){
                $(".goTop").show()
            }else{
                $(".goTop").hide();
            }
        }).trigger("scroll");

        $(".goTop").click(function(){
            $(".goTop a").attr("href","#")
        });
    }
    goTop();

    function showCata(){
        $("header .nav .search .h").click(function(){
            $(".frame2").removeClass("hide");
            $(".frame1").addClass("hide");
            $(".frame2 ul span:first").css({color:"red",cursor:"pointer"})
        });
        $(".frame2 ul span:first").click(function(){
            $(".frame2").addClass("hide");
            $(".frame1").removeClass("hide");
        });


        $("li.field").click(function(){
            if($(".inner").hasClass("hide")){
                $(".inner").removeClass("hide");
                $(".frame2 ul span").eq(4).attr("class","glyphicon glyphicon-chevron-up");
            }
            else{
                $(".inner").addClass("hide");
                $(".frame2 ul span").eq(4).attr("class","glyphicon glyphicon-chevron-down")
            }
        })
    }
    showCata();

    function onlineConsult(){
        $(".consult-wrap .consult").click(function(){
            var marginR=parseInt($(this).parent().css("marginRight"));
            if(marginR<0){
            $(".consult-wrap").stop(true,false).animate({
                marginRight:"0"
            },500)}else{
                $(this).parent().stop(true,false).animate({marginRight:"-200"},500)
            }
        })
    }
    onlineConsult();


   
});