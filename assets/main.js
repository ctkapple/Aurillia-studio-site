// Studio Gibbles — shared site JS
(function(){
  // mobile nav toggle
  var toggle=document.querySelector('.navtoggle');
  var links=document.querySelector('.navlinks');
  if(toggle&&links){
    toggle.addEventListener('click',function(){
      var open=links.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open?'true':'false');
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){links.classList.remove('open');toggle.setAttribute('aria-expanded','false');});
    });
  }
})();
