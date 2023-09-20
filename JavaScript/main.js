//Show and hide FAQ answers
const faqBars = document.getElementsByClassName("faqBar");
const faqBars_Arr = [...faqBars];

faqBars_Arr.forEach((bar)=>{
    bar.childNodes[1].addEventListener("click", ()=>{
        bar.childNodes[3].classList.toggle("displayOnOff");
    })
});

