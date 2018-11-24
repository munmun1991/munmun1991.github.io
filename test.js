/*ハンバーガー*/
$(document).ready(function(){
  $("#sp_menu_btn").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});

/*カルーセル---今後portfolioサイトに実装予定*/
$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});


/*サムネイルの画像入れ替え*/
$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});
