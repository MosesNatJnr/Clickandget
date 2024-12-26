const containerEl = DocumentFragment.querySelector(".container")

const Deals = ["Below 50k", "Below 120k","Below 300k"];

let dealsIndex = 0;

updateText();

function updateText() {
    characterIndex++
    containerEl.innerHTML = ' <h1> Our Best Deals ${deals[DealsIndex].slice(0,characterIndex)} </h1>';
    
    if (characterIndex === Deals[dealsIndex].length){
        dealsIndex++;
        characterIndex = 0;
    }
    if (dealsIndex === deals.length) {dealsIndex = 0;
        
    }
    setTimeout(updateText,400);
}