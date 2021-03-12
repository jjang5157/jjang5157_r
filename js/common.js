

$(function(){

	

    /* top 이동버튼 */
    var Top = $('#top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            Top.addClass('on');
        } else {
            Top.removeClass('on');
        }
    })
    Top.bind('click', function (e) {
        e.preventDefault();
        $("html, body").animate({scrollTop : 0});
    })

    /* main paging 이동버튼 */
    $('.main-paging a').click( function(i){
        var trg = $(this).attr("data-target");
        var moveTo = $(trg).offset().top;
        $("html, body").animate({scrollTop : moveTo}, 700);
    }); 

    
    
    

    $(window).scroll( function(){
        
		$('#sectiondv201').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + 880;

            if( bottom_of_window > bottom_of_object ){
                $(this).addClass("motion");
            }
        }); 

		$('#sectiondv301').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + 900;

            if( bottom_of_window > bottom_of_object ){
                $(this).addClass("motion");
            }
        });

        $('#sectiondv401').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + 900;

            if( bottom_of_window > bottom_of_object ){
                $(this).addClass("motion");
            }
        }); 

        $('#sectiondv501').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + 900;

            if( bottom_of_window > bottom_of_object ){
                $(this).addClass("motion");
            }
        }); 

        $('.article-title').each( function(i){
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + 900;

            if( bottom_of_window > bottom_of_object ){
                $(this).addClass("motion");
            }
        }); 

        $('.container').find('.paging-indicator').each( function(i){
            var bottom_of_object = $(this).offset().top - 81;
            var bottom_of_window = $(window).scrollTop();
            var trgId = String($(this).attr("id"));
            
            if( bottom_of_window > bottom_of_object ){
                $('.main-paging a').removeClass("on");
                // $('.main-paging').find('li').eq(i).find('a').addClass("on");
                $('a[data-target="#'+ trgId +'"').addClass("on");
            }
        }); 
                
    });


    

});  




$(document).ready(function(){
    var fileTarget = $('.filebox .upload-hidden');
 
     fileTarget.on('change', function(){
         if(window.FileReader){
             // 파일명 추출
             var filename = $(this)[0].files[0].name;
            }
 
         else {
             // Old IE 파일명 추출
             var filename = $(this).val().split('/').pop().split('\\').pop();
         };
 
         $(this).siblings('.upload-name').val(filename);
        }); 
        
     //preview image 
     var imgTarget = $('.preview-image .upload-hidden');
 
     imgTarget.on('change', function(){
         var parent = $(this).parent();
         parent.children('.upload-display').remove();

         if(window.FileReader){
             //image 파일만
             if (!$(this)[0].files[0].type.match(/image\//)) return;

             var reader = new FileReader();
             reader.onload = function(e){
                 var src = e.target.result;
                 parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img src="'+src+'" class="upload-thumb"></div></div>');
             }
             reader.readAsDataURL($(this)[0].files[0]);
         }
    
         else {
             $(this)[0].select();
             $(this)[0].blur();
             var imgSrc = document.selection.createRange().text;
             parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');

             var img = $(this).siblings('.upload-display').find('img');
             img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";        
         }
     });
});  
