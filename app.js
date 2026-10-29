
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button")
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (let select of dropdowns){
for (currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if(select.name === "from" && currCode === "USD"){
        newOption.selected = true;      
      }
    else if(select.name === "to" && currCode === "INR"){
        newOption.selected = true;      
      }
    select.append(newOption);  
  }
  select.addEventListener("change",(evt) =>{
    updateFlag(evt.target);
  });
}

const updateFlag = (element) =>{
   let currCode = element.value;
   let countryCode = countryList[currCode];
   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
   let img = element.parentElement.querySelector("img");
   img.src = newSrc;
};


btn.addEventListener("click",async (evt) =>{
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if(amtVal === "" || amtVal < 1){
    amtVal = 1;
    amount.value = "1"
  }
  const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}.json`;
   let Response = await fetch(URL);
   let data = await Response.json();
   let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];

   let finalAmount = amtVal * rate;
   msg.innerHTML = `${amtVal} ${fromcurr.value} = ${finalAmount} ${tocurr.value}`;

});