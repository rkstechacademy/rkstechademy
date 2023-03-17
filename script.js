function show() {
    document.querySelector('.slidebar-container').classList.toggle('active');
    document.querySelector('.pic10').classList.toggle('active');
    document.querySelector('.wrapper-text').classList.toggle('active');
    document.querySelector('.header-text').classList.toggle('active');
    document.querySelectorAll('.image').forEach(el => el.classList.toggle('active'));
    document.querySelectorAll('.p').forEach(el => el.classList.toggle('active'));
    document.querySelector('.mid-section').classList.toggle('active');
    document.querySelector('.last-section').classList.toggle('active');
    document.querySelectorAll('.hr').forEach(el => el.classList.toggle('active'));
    
}
