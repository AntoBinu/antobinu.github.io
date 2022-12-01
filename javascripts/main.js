

const portfolio =  {
    init : function (){
        console.log('Dont look here :)');
        this.generate()
    },
    generate: function(){
        $(".contents").text('null')
        $(".next").on("click",function(){
            portfolio.nextContent()
        })
        $(".prev").on("click",function(){
            portfolio.prevContent()
        })
    },
    nextContent:function(){
        $(".contents").text("next")
    },
    prevContent:function(){
       $(".contents").text("prev")
    }



}

$(document).ready(
    portfolio.init()
)
