$(document).ready(function(){
    if($('.carousel-inner #txt1').attr('class',"carousel-item active"))
    {
        $('.carousel-inner #img1').attr('class',"carousel-item active");
    }

    else if($('.carousel-inner #txt2').attr('class',"carousel-item active"))
    {
        $('.carousel-inner #img2').attr('class',"carousel-item active");
    }

    else($('.carousel-inner #txt3').attr('class',"carousel-item active"))
    {
        $('.carousel-inner #img3').attr('class',"carousel-item active");
    }

    $('html,body').animate({
        scrollTop:$('class' ,'.header').fadeIn()
    },1000)
    
    $('.inner').animate({  borderSpacing: 90 }, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate('+now+'deg)'); 
          $(this).css('-moz-transform','rotate('+now+'deg)');
          $(this).css('transform','rotate('+now+'deg)');
          $(this).css('box-shadow','none');
        },
        duration:'slow'
    },'linear');

    setTimeout(function(){
        $('.popup').fadeOut();
    },1000)

    $('.search').on('click',function(){
        $('.products').animate({
            right:0
        });
    })

    $('.fa-close').on('click',function(){
        $('.products').animate({
            right:'-1370px'
        });
    })

    $('.store li a').hover(function(){
        $(this).find('hr').eq(0).animate({
            width: '70%'
           
        },200)
    },function(){
        $(this).find('hr').eq(0).animate({
            width:'0'
        },200)
    })

    $('.media li').hover(function(){
        $(this).find('span').eq(0).animate({
            'font-size':'16px'
           
        },200)
    },function(){
        $(this).find('span').eq(0).animate({
            'font-size':'0'
        },200)
    })

    $('.langue span #haut').on('click',function(){
        $('.flag').animate({
            bottom:'52px'
        });
    })

    $('.langue span #bas').on('click',function(){
        $('.flag').animate({
            bottom:'-168px'
        });
    })

    $('#haut').on('click',function(){
        $('.prup').animate({
            'height': '100%'
        },10),
        $('#bas').animate({
            'font-size':'16px'
         }),

         $('#haut').animate({
             'font-size':'0'
         })
    })

    $('#bas').on('click',function(){
        $('.prup').animate({
            'height': '0'
        }),
        $('#bas').animate({
            'font-size':'0'
         }),
         $('#haut').animate({
             'font-size':'16px'
         })
       
    }),

    $('#show').on('click',function(){
        $('.footer_flag').animate({
            'bottom':'54px'
        })
        $('#show').hide();
        $('#hide').show();
        $('.prup').animate({
            'height': '100%'
        },10)
       
    })

    $('#hide').on('click',function(){
        $('.footer_flag').animate({
            'bottom':'-170px'
        })
        $('#show').show();
        $('#hide').hide();
        $('.prup').animate({
            'height': '0'
        })
        
    })

    $(window).on('scroll',function(){
        var sc=$(window).scrollTop();

        if(sc>=340){
            console.log(sc);
            $('.paragraphe').show(3000)
        }
        else if(sc>=1000 && sc<=1500){
            $('.kits').fadeIn(500);
        }
        else if(sc>=1600 && sc<=2000){
            $('.Speakers').fadeIn(500);
        }
        else if(sc>=2500 && sc<=3000){
            $('.produit').fadeIn(500);
        }
        else if(sc>=3500 && sc<=4000){
            $('.music').fadeIn(500);
        }
         if(sc>4500 && sc<=4850){
            $('.footer').fadeIn(500);
        }
        
    
    })

});