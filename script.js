document.addEventListener('DOMContentLoaded', function(){
  var header = document.getElementById('siteHeader');
  if(header){
    window.addEventListener('scroll', function(){
      if(window.scrollY > 8){ header.classList.add('scrolled'); } else { header.classList.remove('scrolled'); }
    });
  }

  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mobileNav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
  }

  if('IntersectionObserver' in window){
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }
      });
    }, {threshold:0.12});
    document.querySelectorAll('.reveal').forEach(function(el){ obs.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
});
