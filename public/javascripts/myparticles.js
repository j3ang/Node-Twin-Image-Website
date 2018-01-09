
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: 'white',
    lineColor: '#1d2748',
    particleRadius:3,
    proximity: 130,
    parallaxMultiplier: 7,
    density: 15000

  });
  var intro = document.getElementById('intro');
}, false);
