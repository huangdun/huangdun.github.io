$(function(){
  var accessToken = '196042102.cdef1c9.0e8cbd0ceb11460688cb240309cd5b0e';
  $.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token='+accessToken+'&callback=?',function (insta) {
    $.each(insta.data,function (photos,src) {
      if ( photos === 8 ) { return false; }
      $('<a href="'+src.link+'" class="post" target="_blank">'+
        '<div class="image" style="background-image:url('+src.images.standard_resolution.url+');"></div>'+
        '<ul>'+
        '<li><i class="fa fa-heart"></i> '+src.likes.count+'</li>'+
        '</ul></a>').appendTo('#instagram');
    });
  });
});