$(document).ready(function () {
  $(".thankto .slide").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      430: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  const menuItems = document.querySelectorAll(".lv");
  const op2Items = document.querySelectorAll(".op2");
  const searchBtn = document.getElementById("search_btn");
  const searchBarRow = document.querySelector(".search_bar_row");

  let searchBarActive = false; 


  menuItems.forEach(function (item) {
    const subMenu = item.querySelector(".sub_menu");
    item.addEventListener("mouseover", function () {
      const activeSubMenus = document.querySelectorAll(".sub_menu.active");
      activeSubMenus.forEach(function (menu) {
        menu.classList.remove("active");
      });


      if (!searchBarActive && subMenu) {
        subMenu.classList.add("active");
        op2Items.forEach(function (op2) {
          op2.classList.add("active");
        });
      } else if (searchBarActive) {
        op2.classList.add("active");
      } else {
        op2Items.forEach(function (op2) {
          op2.classList.remove("active");
        });
      }
    });
  });


  op2Items.forEach(function (op2) {
    op2.addEventListener("mouseover", function () {
      const activeSubMenus = document.querySelectorAll(".sub_menu.active");
      activeSubMenus.forEach(function (subMenu) {
        subMenu.classList.remove("active");
      });
      op2Items.forEach(function (item) {
        item.classList.remove("active");
      });


      if (searchBarActive) {
        op2.classList.add("active");
      }
    });
  });


  if (searchBtn && searchBarRow) {
    searchBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      searchBarRow.classList.toggle("active");
      searchBarActive = searchBarRow.classList.contains("active"); // Cập nhật trạng thái searchBarActive

      if (searchBarActive) {
        op2Items.forEach(function (op2) {
          op2.classList.add("active");
        });
      } else {
        op2Items.forEach(function (op2) {
          op2.classList.remove("active");
        });
      }
    });


    document.addEventListener("click", function (event) {
      if (
        !searchBarRow.contains(event.target) &&
        !searchBtn.contains(event.target)
      ) {
        searchBarRow.classList.remove("active");
        searchBarActive = false; 
        op2Items.forEach(function (op2) {
          op2.classList.remove("active");
        });
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const lvElements = document.querySelectorAll('.lv');

  lvElements.forEach(function(lv) {
      lv.addEventListener('click', function(event) {
          event.preventDefault();

          // Lấy các phần tử liên quan cho mỗi .lv
          const img = lv.querySelector('img');
          const subMenu = lv.querySelector('.sub_menu');

          // Kiểm tra xem subMenu có class 'active' không
          const isActive = subMenu.classList.contains('active');

          // Đóng tất cả các subMenu khác và thay đổi hình ảnh
          lvElements.forEach(function(otherLv) {
              if (otherLv !== lv) {
                  const otherImg = otherLv.querySelector('img');
                  const otherSubMenu = otherLv.querySelector('.sub_menu');
                  
                  if (otherSubMenu) {
                      otherSubMenu.classList.remove('active');
                  }
                  if (otherImg) {
                      otherImg.src = './icon/add.svg';  // Đổi về ảnh gốc khi đóng
                  }
              }
          });

          // Mở hoặc đóng subMenu của lv hiện tại và thay đổi hình ảnh
          if (subMenu) {
              if (!isActive) {
                  subMenu.classList.add('active');
                  img.src = './icon/remove.svg';  // Đổi sang ảnh mới khi mở
              } else {
                  subMenu.classList.remove('active');
                  img.src = './icon/add.svg';  // Đổi về ảnh gốc khi đóng
              }
          }
      });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var menuSub = document.getElementById('menu_sub');
  var menuCategory = document.querySelector('.menu_category');
  var menuClose = document.getElementById('menu_close');

  if (menuSub && menuCategory && menuClose) 
      menuSub.addEventListener('click', function() {
          menuCategory.style.display = 'flex';
          menuClose.style.display = 'flex';
          menuSub.style.display = 'none';
      });
      menuClose.addEventListener('click', function() {
          menuCategory.style.display = 'none';
          menuClose.style.display = 'none';
          menuSub.style.display = 'flex';
      });

});
