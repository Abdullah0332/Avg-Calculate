const billButton= document.getElementById('bill-button')
const display=document.getElementById('h1')
const totalbill=document.getElementById('input-bill')
const persons=document.getElementById('input-persons')

billButton.addEventListener('click',calculate)  

function calculate(event){
    event.preventDefault();
    
    if(persons.value<=0){
        display.innerText="Number of persons can't be less than 1"
    }else{
        const bill = (totalbill.value) / (persons.value);
        display.innerText=`Each Person Bill : ${bill}`
    }
}

