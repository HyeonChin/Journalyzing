var meun_open=-1;

$(document).ready(function(){

    //메뉴 열기
    $('.keywordSearchMenu').hide();
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


    //주제검색/키워드검색 전환
    $(".searchMode>div:first-child").click(function(){
        $(".themeSearchMenu").css({"display":"flex"});
        $(".keywordSearchMenu").css({"display":"none"});

        $(".subjectTitle").text("주제검색");
    });
    $(".searchMode>div:last-child").click(function(){
        $(".themeSearchMenu").css({"display":"none"});
        $(".keywordSearchMenu").css({"display":"flex"});

        $(".subjectTitle").text("키워드검색");
    });
    
    //검색창 열기/닫기
    $(".newsLists>div").click(function(){
        $(".themeSearchMenu").css({"height":"0"});
        $(".keywordSearchMenu").css({"height":"0"});
        $(".analysisMenu>div>div").css({"top":"384px"});
        $("header").css({"height":"425px"});
    });
    $(".searchMode>div").click(function(){
        $(".themeSearchMenu").css({"height":"60px"});
        $(".keywordSearchMenu").css({"height":"60px"});
        $(".analysisMenu>div>div").css({"top":"444px"});
        $("header").css({"height":"485px"});
    });

    //헤드라인
    $(".newsLists>div:nth-child(1)").click(function(){
        $(".latestArticle").css({"display":"none"});

        $(".subjectTitle").text("헤드라인");
    });
    $(".newsLists>div:nth-child(2)").click(function(){
        $(".latestArticle").css({"display":"block"});

        $(".subjectTitle").text("최신기사");
    });

    //입력된 주제 추가
    $(".addButton").click(function(){
        if($(".addBar").val()!=''){
            $(".themeSearchBar").append("<p>"+$(".addBar").val()+"</p>");
            $(".addBar").val('');
        }
    });

    //주제검색 예시
    $(".themeSearchButton").click(function(){
        console.log($(".themeSearchBar>p:nth-child(1)").text());
        if($(".themeSearchBar>p:nth-child(1)").text()=="포항 지진"){
            $(".content1").css({"display":"block"});
            $(".headline").css({"display":"none"});
            $(".latestArticle").css({"display":"none"});
        }
        if($(".themeSearchBar>p:nth-child(1)").text()=="수낵 총리"){
            $(".content3_1").css({"display":"block"});
            $(".headline").css({"display":"none"});
            $(".latestArticle").css({"display":"none"});
        }
    });

    //헤드라인 예시
    $(".headline>section:nth-child(3)").click(function(){
        $(".content2").css({"display":"block"});
        $(".headline").css({"display":"none"});
        $(".latestArticle").css({"display":"none"});
    });

    //타임라인 예시
    $(".content3_1>section:nth-child(5)").click(function(){
        $(".content3_2").show();
        $(".content3_1").css({"display":"none"});
    });
    $(".content3_2>div").click(function(){
        $(".content3_2").css({"display":"none"});
        $(".timeline").css({"display":"block"});
    });
});
