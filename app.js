//ES6 Version Code
const addElement= name => document.querySelector(name);

const btnCalculate = addElement("#btn-calculate");
const returnStat = addElement("#return-stat");

const body= addElement("html");

const img = addElement("#img")



btnCalculate.addEventListener("click", _=>{

    let initialPrice = Number(addElement("#stock-initial").value);
    let quantity = Number(addElement("#stock-quantity").value);
    let currentPrice = Number(addElement("#stock-current").value);
    console.log(initialPrice);
    if(initialPrice === 0 || quantity === 0 ){
        returnStat.innerText = '“You have a grand gift for silence, Watson. It makes you quite invaluable as a companion.”' + "\n" + "Now, give me the information I need!";
       return;
    }

    let stockReturns = getReturns(initialPrice, quantity, currentPrice);
    let difference = stockReturns.difference;
    let percentage = stockReturns.percentage;
    
    if(difference === 0){
        returnStat.innerHTML = "No changes in stock price, <span class='trial'>try again tomorrow!</span>"
        return;
    }

    if(Math.sign(difference) === -1){

        returnStat.innerHTML = `Unfortunately, you're making a loss of <span class='trial1'>₹${Math.abs(difference)}</span>, Loss Percentage: <span class='trial1'> ${percentage}% </span>`; 
        body.setAttribute("style", "background-color:#A1A1AA;")
        img.setAttribute("style","transform: scaleX(-1); ")
    }else{
        returnStat.innerHTML = `Woohoo! you're making a profit of <span class='trial'>₹${Math.abs(difference)}</span>, Profit Percentage: <span class='trial'>${percentage}%</span>`;
        body.setAttribute("style", "background-color:#FDE68A;")
        img.setAttribute("style","transform: scaleX(1); ")
    }
    

});




const getReturns=(initialPrice, quantity, currentPrice)=>{
    let initialValue = initialPrice * quantity;
    let currentValue = currentPrice * quantity;
    let difference = currentValue - initialValue;
    
    let percentage = Math.floor(difference/initialValue * 100);
   
    return {
        difference, percentage
    };



}