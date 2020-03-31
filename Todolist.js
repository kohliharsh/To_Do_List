//to chnge list on click
var input = false;
$("ul").on("click","li",function(){
    $(this).toggleClass("clicked");
})
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(250,function(){
        $(this).remove();
    }) 
    event.stopPropagation();
})

$("input").keypress(function(event){
 if(event.which===13)
    {
        var todo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + todo + "</li>");
        
    }
})

$(".fa-plus").click(function(){
    $("input").fadeToggle();
})



