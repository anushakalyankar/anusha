$(document).ready(function(){
    $(".btn1").click(function(){
        $("p").hide();
    });
    $(".btn2").click(function(){
        $("p").show();
    });
    $("#btn").click(function() {
        $(this).closest('form').find("input[type=text], textarea").val("");
    });
});