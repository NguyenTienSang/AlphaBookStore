$(document).ready(function () {

    showCategory();

    $('.owl_manager').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
        responsiveClass:true,
        responsive: {
            0: {
                items:1,
            },
            440: {
                items: 2,
            },
            635: {
                items: 3,
            },
            840: {
                    items: 4 ,
            },
            1025: {
                items: 3,
            },
            1130: {
                items: 4,
            },
        }
    })
    
});


function onFormLogin() {
    var CorrectEmail = 'tiensang07@gmail.com'
    var CorrectPassword = '123';
    var Email = document.getElementById('email').value;
    var Password = document.getElementById('password').value;

    if(Email == "" && Password == "")
    {
        document.getElementById('error').innerHTML  = 'Vui lòng nhập thông tin đăng nhập 🙃';
    }
    else if (Email == "" && Password != "")
    {
        document.getElementById('error').innerHTML  = 'Vui lòng nhập Email 😔';
    }
    else if (Email != "" && Password == "")
    {
        document.getElementById('error').innerHTML  = 'Vui lòng nhập Mật khẩu 😵';
    }
    else if (Email != "" && Password != "")
    {
        if(Email != CorrectEmail || Password != CorrectPassword)
        {
            document.getElementById('error').innerHTML  = 'Sai thông tin đăng nhập 😢';
        }
        else {
                window.location="HomePage.html";
        }
       
    }
}

function onFormSignUp() {
    var Ho = document.getElementById('ho').value;
    var Ten = document.getElementById('ten').value;
    var Email = document.getElementById('email').value;
    var Password = document.getElementById('password').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 

    if(Ho == "" && Ten == "" && Email == "" && Password == "")
    {
        document.getElementById('error').innerHTML  = 'Vui lòng nhập thông tin đăng ký 🙃';
    }
    else if (Ho == "" && Ten != "" && Email != "" && Password != "")
    {
        document.getElementById('error').innerHTML  = 'Vui lòng nhập Họ 😔';
    }
    else if (Ho != "" && Ten == "" && Email != "" && Password != "")
    {
        document.getElementById('error').innerHTML  = 'Vui lòng nhập Tên 😔';
    }
    else if (Ho != "" && Ten != "" && Email == "" && Password != "")
    {
        document.getElementById('error').innerHTML  = 'Vui lòng nhập Email 😵';
    }
    else if (Ho != "" && Ten != "" && Email != "" && Password == "")
    {
        document.getElementById('error').innerHTML  = 'Vui lòng nhập Mật khẩu 😢';
    }
    else if (Ho != "" && Ten != "" && Email != "" && Password != "")
    {

        if (!filter.test(Email)) {
            document.getElementById('error').innerHTML  = 'Vui lòng nhập Email hợp lệ.\nExample@gmail.com';
        }
        else {
            document.getElementById('error').innerHTML  = 'Đăng ký thành công 😍';
            setTimeout(function(){ window.location="\Login.html"; }, 1000);
        }
    }
    else {
        document.getElementById('error').innerHTML  = 'Thông tin trống 🙃';
    }
}


function onSubmitContact() {
 
    var Hoten = document.getElementById('hoten').value;
    var Email = document.getElementById('email').value;
    var Binhluan = document.getElementById('binhluan').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if(Hoten == "" && Email == "" && Binhluan == "")
    {
        document.getElementById('error').innerHTML  = 'Vui lòng nhập thông tin 🙃';
    }
    else if (Hoten == "" && Email != "" && Binhluan != "")
    {
        document.getElementById('error').innerHTML  = 'Vui lòng nhập họ tên 😔';
    }
    else if (Hoten != "" && Email == "" && Binhluan != "")
    {
        document.getElementById('error').innerHTML  = 'Vui lòng nhập Email 😵';
    }
    else if (Hoten != "" && Email != "" && Binhluan == "")
    {
        document.getElementById('error').innerHTML  = 'Vui lòng nhập bình luận 😢';
    }
    else if (Hoten != "" && Email != "" && Binhluan != "")
    {
        if (!filter.test(Email)) {
            document.getElementById('error').innerHTML  = 'Vui lòng nhập Email hợp lệ.\nExample@gmail.com';
        }
        else {
            document.getElementById('error').innerHTML  = 'Đã gửi bình luận 😍';
        }
    }
    else {
        document.getElementById('error').innerHTML  = 'Thông tin còn trống 🙂';
    }
}

function showCategory() {
    $('.icon-bar>.menu').click(function(){
        if($(this).hasClass('active')){
            $('.menu-child').slideUp();
             $(this).removeClass('active');
        }else {
            $('.menu-child').slideDown();
             $('.icon-bar>.menu').removeClass('active');
             $(this).addClass('active');
        }
     });


    $('.icon-bar>.danhmuc').click(function(){
        if($(this).hasClass('active')){
            $('.category-child').slideUp();
             $(this).removeClass('active');
        }else {
            $('.category-child').slideDown();
             $('.icon-bar>.danhmuc').removeClass('active');
             $(this).addClass('active');
        }
     });

     //Đóng khi click bên ngoài
     $(document).on("click", function(event){
        if(!$(event.target).closest(".icon-bar>.menu").length && !$(event.target).closest(".menu-child>ul>li").length){
            $(".menu-child").slideUp();
            $(".icon-bar>.menu").removeClass('active');
        }
    });

    $(document).on("click", function(event){
        if(!$(event.target).closest(".icon-bar>.danhmuc").length 
        && !$(event.target).closest(".category-child>.item>.category").length
        && !$(event.target).closest(".category-child>.item>.sub-menu>li").length
        ){
            $(".category-child").slideUp();
            $(".icon-bar>.danhmuc").removeClass('active');
            if($('.category-child>.item').hasClass('active')){
                $('.category-child>.item').children('.sub-menu').slideUp();
                $('.category-child>.item').removeClass('active');
            }
        }
    });
 

    $('.category-child>.item').click(function(){
       if($(this).hasClass('active')){
            $(this).children('.sub-menu').slideUp();
            $(this).removeClass('active');
       }else {
            $('.sub-menu').slideUp();
            $(this).children('.sub-menu').slideDown();
            $('.category-child>.item').removeClass('active');
            $(this).addClass('active');
       }
    });

   
}