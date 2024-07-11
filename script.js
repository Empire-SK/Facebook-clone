
$(document).ready(function(){

    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            phoneEmailAddress:{
                required:true,
                customEmailOrPhone: true
            },
            password:{
                required:true,
                minlength:8,
                maxlength:12
            },
            Cpassword:{
                required:true,
                minlength:6,
                maxlength:12,
                equalTo: "#password_validation"
            },
            day:{
               required:true, 
            },
            month:{
                required:true, 
             },
             year:{
                required:true, 
             },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Enter atleast 4 characters",
                maxlength:"Enter maximum 6 characters"
            },
            sname:{
                required:"Enter surname",
                minlength:"Enter atleast 4 characters",
                maxlength:"Enter maximum 6 characters"
            },
            phoneEmailAddress:{
                required:"Enter a valid email id or number"
            },
            password:{
                required:"Enter password",
                minlength:"Enter atleast 8 characters",
                maxlength:"Enter maximum 12 characters"
            },
            Cpassword:{
                required:"Enter correct password"
            }
        }
        
    })
    
})

$("#password_validation").on("focus",function(){
    $(".password_required").slideDown()
})
$("#password_validation").on("blur",function(){
    $(".password_required").slideUp()
})

$("#password_validation").on("keyup",function(){
    passValue = $(this).val();

    if(passValue.match(/[a-z]/g)){
        $(".lowercase").addClass("active");
    }else{
        $(".lowercase").removeClass("active");
    }

    if(passValue.match(/[A-Z]/g)){
        $(".capital").addClass("active");
    }else{
        $(".capital").removeClass("active");
    }
 
    if(passValue.match(/[0-9]/g)){
        $(".number").addClass("active");
    }else{
        $(".number").removeClass("active");
    }

    if(passValue.match(/[!@#$%^&*]/g)){
        $(".special").addClass("active");
    }else{
        $(".special").removeClass("active");
    }

    if(passValue.length == 8 || passValue.length > 8 ){
        $(".limit").addClass("active");
    }else{
        $(".limit").removeClass("active");
    }

    $(".password_required ul li").each(function(_index){
        if(!$(this).hasClass("active")){
         $(".sign-btn").removeClass("active")
        }else{
         $(".sign-btn").addClass("active")
        }
     });

})
