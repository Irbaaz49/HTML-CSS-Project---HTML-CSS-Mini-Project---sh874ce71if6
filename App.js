const counter = document.querySelectorAll('.counter');


console.log(counter)
counter.forEach((element)=>{
console.log(element);
element.innerHTML = '0';

const updateCounter =()=>{
const targetCount = +element.getAttribute('data-target');
const startingCount = Number(element.innerHTML); 
const incr = targetCount/10;
if(startingCount<targetCount){
    element.innerHTML = startingCount + incr;
setTimeout(updateCounter,500);
}else{
    element.innerHTML = targetCount;
}

}


updateCounter();
})

