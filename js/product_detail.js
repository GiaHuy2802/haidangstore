$(document).ready(function(){
  // Thẻ slide chính
  var sync1 = $("#sync1");
  sync1.owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    loop:false,
    responsive: {
      430: {
        autoplay:false,
      },
      0: {
        autoplay:true,
      }
    }
  });

  // Thẻ slide-for
  var sync2 = $("#sync2");
  sync2.owlCarousel({
    items: 4,
    dots: false,
    nav: false,
    stagePadding: 50,
    autoplay:false,
    margin:10,
    loop:true,
    responsive: {
      0: {
        items: 1,
      },

      430: {
        items:3,
      },
      780: {
        items: 4,
        loop:true,
      },
      1200: {
        items:6,
      }
    }
  });

  // Kết nối thẻ slide chính và thẻ slide-for
  sync2.on('click', '.owl-item', function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.trigger('to.owl.carousel', [number, 300, true]);
  });

  // Tính năng nhấp vào slide-for để hiển thị tương ứng trên slide chính
  sync1.on('changed.owl.carousel', function (event) {
    if (!event.namespace || event.property.name === 'position') {
      var current = sync1.find(".owl-item.active").index();
      sync2.find('.owl-item').removeClass('active').eq(current).addClass('active');
    }
  });

  sync2.on('changed.owl.carousel', function (event) {
    if (!event.namespace || event.property.name === 'position') {
      var current = sync2.find(".owl-item.active").index();
      sync2.find('.owl-item').removeClass('active').eq(current).addClass('active');
    }
  });

  // Click event cho nút prev và next
  $('.owl-prev').click(function() {
    sync1.trigger('prev.owl.carousel');
  });

  $('.owl-next').click(function() {
    sync1.trigger('next.owl.carousel');
  });
});

$(document).ready(function(){
  $('.group_items').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      responsive:{
          0:{
              items:1
          },
          431:{
            items:3,
            dots:false,
            nav:false
        },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })
});
document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.lv');

  menuItems.forEach(function(item) {
    const subMenu = item.querySelector('.sub_menu');
    if (subMenu) {
      item.addEventListener('mouseover', function() {
        // Loại bỏ tất cả các lớp active trước khi thêm mới
        const activeSubMenus = document.querySelectorAll('.sub_menu.active');
        activeSubMenus.forEach(function(menu) {
          menu.classList.remove('active');
        });

        // Thêm lớp active vào sub_menu của lv đang hover
        subMenu.classList.add('active');

        // Loại bỏ lớp active của tất cả các op2
        const op2Items = document.querySelectorAll('.op2');
        op2Items.forEach(function(op2) {
          op2.classList.add('active');
        });
      });
    }else{
      item.addEventListener('mouseover', function() {
          // Loại bỏ tất cả các lớp active trước khi thêm mới
          const activeSubMenus = document.querySelectorAll('.sub_menu.active');
          activeSubMenus.forEach(function(menu) {
            menu.classList.remove('active');
          });
          const op2Items = document.querySelectorAll('.op2');
          op2Items.forEach(function(op2) {
            op2.classList.remove('active');
          });
        });
    }
  });

  // Xử lý khi hover vào các phần tử op2
  const op2Items = document.querySelectorAll('.op2');
  op2Items.forEach(function(op2) {
    op2.addEventListener('mouseover', function() {
      const activeSubMenus = document.querySelectorAll('.sub_menu.active');
      activeSubMenus.forEach(function(subMenu) {
        subMenu.classList.remove('active');
      });
      op2Items.forEach(function(item) {
        item.classList.remove('active');
      });
    });
  });


});