// ./js/banner.js
const tbR = document.getElementById('tbR');
const fixedBtn = document.getElementById('fixedBtn');

window.addEventListener('scroll', () => {
    const rect = tbR.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
        fixedBtn.classList.add('show');   // tbR 離開畫面 → 顯示右下角按鈕
    } else {
        fixedBtn.classList.remove('show'); // tbR 在畫面內 → 隱藏右下角按鈕
    }
});
