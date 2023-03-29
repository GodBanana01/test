var bullet = ['HOME', 'PROFILE', 'PROJECT', 'CONTACT'];

new Swiper(".index", {
  effect: "cube",
  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 60,
    shadowScale: 1,
  },
  allowTouchMove: false,
  observer: true,
  observeParents: true,
  // grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    invent: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type : 'bullets',
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
    }
  },
});