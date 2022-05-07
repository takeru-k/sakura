$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.header__menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});