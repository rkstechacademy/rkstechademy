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
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});