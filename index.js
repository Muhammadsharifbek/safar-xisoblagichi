const ONE_DOLLAR = 11500;
const ONE_EURO = 12615;

let dollarToSum = 500 * ONE_DOLLAR;
let dollatToMuseum = 250 * ONE_DOLLAR;
let euroToSum = 100 * ONE_EURO;

let soum = dollarToSum + dollatToMuseum + euroToSum;
let elText = document.querySelector(".js_text");

let kalkulate = +prompt("shaxsiy mablag'ingizni kiriting ");

if (kalkulate >= soum) {
  elText.textContent = "Oq yo'l";
} else if (soum >= kalkulate) {
  elText.textContent = "yetarlicha pulingiz yoq";
}
