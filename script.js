const countValue = document.querySelector(".counter-value");
const decreaseBtn = document.querySelector(".decrease-btn");
const resetBtn = document.querySelector(".reset-btn");
const increaseBtn = document.querySelector(".increase-btn");
const saveBtn = document.querySelector(".save-btn");
const reportHistory = document.querySelector(".report");

let count = 0;

increaseBtn.addEventListener("click", () => {
    count++;
    countValue.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
    count--;
    countValue.textContent = count;
});

resetBtn.addEventListener("click", () => {
    countValue.textContent = 0;
    count = 0;
});

saveBtn.addEventListener("click", () => {
    reportHistory.textContent += count + " - ";
});
