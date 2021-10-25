/*window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
      setting-name: setting-value
    })
  })*/

  var glider = new Glider(document.getElementById('glider'), {
    slidesToShow: 2,
  slidesToScroll: 1,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});
  
  /*glider.setOption({
    arrows: {
      prev: '#glider-prev',
      next: '#glider-next'
    }
  });
  
  // a refresh may need to be called depending
  // upon the options passed to setOptions
  glider.refresh(true);
  
  // adding or removing items automatically calls refresh()
  //glider.removeItem(4);
  
  // death to smoochy!
  //glider.destroy();*/