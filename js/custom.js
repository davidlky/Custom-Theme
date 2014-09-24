$(window).load(function(){
       // init Isotope
  var $container = $('.info');
  $container.imagesLoaded( function(){
  $container.isotope({
    filter: '.home',
    animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        },
        masonry: {
    columnWidth: 10
  },

    cellsByRow: {
      columnWidth: 430,
    },
    masonryHorizontal: {
      rowHeight: 215
    },
  });
  });

  $('.container .box').click(function(){
        $('.container .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
  $('#thumbs').isotope('reLayout');
});