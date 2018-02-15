(function($) {

  $('#header__lien').click(function(e){
    e.preventDefault();
    $('body').toggleClass('with--sidebar');
  })

})(jQuery);
