/**
 * Created by saber on 2016/4/23.
 */
$(document).ready(function(){
    $("#toggle").click(function(){
        $(".sx_button").toggle(500);
    });
    $("#tagfirst li").each(function(index){
        $(this).mouseover(function(){
            $("div.tag_content").removeClass("tag_content");
            $("#tagfirst li.tag").removeClass("tag");
            $(".contentfirst").eq(index).addClass("tag_content");
            $(this).addClass("tag");
        })
    });
    var scrollImages = function(start){
        var numOfImage = $(".contentfirst").length;
        var i=start;
        for(var j =0; j<numOfImage;j++){
            if($(".contentfirst").eq((i+j)%numOfImage).css("display")=="block"){
                i=(i+j)%numOfImage;
                break;
            }
        }
        setTimeout(function(){
            $(".contentfirst").eq(i).removeClass("tag_content");
            $(".contentfirst").eq((i+2)%numOfImage).removeClass("tag_content");
            $(".contentfirst").eq((i+1)%numOfImage).addClass("tag_content");
            scrollImages(i+1);
        },2000);
    };
    scrollImages(0);
})