$(document).ready( function(){
     //function for task complete, a line through
    $("ul").on("click","li",function(){
        $(this).toggleClass("Completed");
    });
     //function for remove task of the unordered list 
    $("ul").on("click","span", function(event)
                                {
                                    $(this).parent().fadeOut(500,function()
                                                                    {
                                    $(this).remove();
                                    });

                                     event.stopPropagation(); 
                                }); 
    // 
    $("input[type='text']").keypress( function(event)
                                      {
                                          if(event.which === 13)
                                          {
                                           let todoText = $(this).val();
                                           $(this).val("");
                                           for (i = 0; i < 32; i++) {
                                            random = Math.random() * 59 | 0;
                                            console.log(random);
                                           }
                                           $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"</li>");
  
                                                               
                                          }
                                        }
                                    );
                                    $(".fa-plus").click(function(){
                                        $("input[type='text']").fadeToggle();
                                        });                                  
    $(".filters").on("click","li",function(){
        $("ul").css("background","#ffff");

    });
});