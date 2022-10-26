var meun_open=-1;


$(document).ready(function(){
    $('.analysisMenu>div>div').css({'height':'0'});
    $('.analysisMenu>div').hover(function(){
        if(meun_open==-1){
            $(this).css({'background-color':'#0544a3'});
            $(this).find('div').css({'height':'50px'});
        }
        else{
            $(this).css({'background-color':'#1863cc'});
            $(this).find('div').css({'height':'0px'});
        }
        meun_open*=-1;
    });
});