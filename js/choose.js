document.addEventListener('DOMContentLoaded', function() {
    const spans = document.querySelectorAll('.memory_choose .op1');
  
    spans.forEach(span => {
      span.addEventListener('click', function() {
        spans.forEach(s => s.classList.remove('active')); // Loại bỏ class active khỏi tất cả các span
        this.classList.add('active'); // Thêm class active vào span được click
      });
    });
  });