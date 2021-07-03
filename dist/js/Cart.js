inputSpinner();
function inputSpinner() {
    // var incre = document.querySelector('.parent > .child');
        // console.log('Chiều dài : '+incre.length);
        var incrementButton = document.getElementsByClassName('inc');
        console.log('Tang : '+incrementButton.length);
        var decrementButton = document.getElementsByClassName('dec');
        console.log('Giam : '+decrementButton.length);
     
        //INCREASE
        for(var i =0;  i< incrementButton.length; i++) {
            var button = incrementButton[i];
            button.addEventListener('click',function(event){
                var buttonClicked = event.target;
                var input = buttonClicked.parentElement.children[2];
                var inputValue = input.value;
                var newValue = parseInt(inputValue) + 1;
                if(newValue <= 100) {
                    input.value = newValue;
                }
                else {
                    input.value = 100;
                }
            })
        }
          //DECREASE
          for(var i =0;  i< decrementButton.length; i++) {
            var button = decrementButton[i];
            button.addEventListener('click',function(event){
                var buttonClicked = event.target;
                var input = buttonClicked.parentElement.children[2];
                var inputValue = input.value;
                var newValue = parseInt(inputValue) - 1;
                if(newValue >= 1) {
                    input.value = newValue;
                }
                else {
                    input.value = 1;
                }
            })
        }
}


function xoaItemDSGioHang() {
    setTimeout(function done(){
        document.querySelector('.delete-item-cart').style.display = 'none';
        // localStorage.removeItem('gioHang'); 
        // location.reload();
    },1000);
    document.querySelector('.delete-item-cart').style.display = 'block';
}

function orderSuccess() {
    setTimeout(function done(){
        document.querySelector('.order-success').style.display = 'none';
        // localStorage.removeItem('gioHang'); 
        // location.reload();
    },1000);
    document.querySelector('.order-success').style.display = 'block';
}

showCategory();
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
             if($('.category-child>.item').hasClass('active')){
                $('.category-child>.item').children('.sub-menu').slideUp();
                $('.category-child>.item').removeClass('active');
            }
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