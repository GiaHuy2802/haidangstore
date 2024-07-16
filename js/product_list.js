document.querySelector('.toggle').addEventListener('click', function(e) {
    e.preventDefault();
    const para = document.querySelector('.para');
    para.classList.toggle('expanded');
    if (para.classList.contains('expanded')) {
        this.textContent = 'Thu gọn';
    } else {
        this.innerHTML = 'Xem thêm <img src="icon/keyboard_arrow_down (1).svg" alt="">';
    }
});