document.addEventListener('DOMContentLoaded', function() {
    const colorItems = document.querySelectorAll('.color_choose .color_items');
  
    colorItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
        colorItems.forEach(i => i.classList.remove('active')); // Loại bỏ class active khỏi tất cả các thẻ a
        this.classList.add('active'); // Thêm class active vào thẻ a được click
      });
    });
  });
  