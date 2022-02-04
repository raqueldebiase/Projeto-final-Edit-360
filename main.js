/*
$("#aumentarDiv").hover (
    function (){
        $(this).find("a").addClass("divDestaque");
    }, function (){
        $(this).find("a").removeClass("divDestaque");
    }
);

$(".eventos").hover (
    function (){
        $(this).find("a").addClass("divDestaque");
    }, function (){
        $(this).find("a").removeClass("divDestaque");
    }
);

$(".standUp").hover (
    function (){
        $(this).find("a").addClass("divDestaque");
    }, function (){
        $(this).find("a").removeClass("divDestaque");
    }
);

$(".workshops").hover (
    function (){
        $(this).find("a").addClass("divDestaque");
    }, function (){
        $(this).find("a").removeClass("divDestaque");
    }
);
*/




function aumenta(obj){
    obj.height=obj.height*1.1;
    obj.width=obj.width*1.1;
}

function diminui(obj){
    obj.height=obj.height/1.1;
    obj.width=obj.width/1.1;
}


