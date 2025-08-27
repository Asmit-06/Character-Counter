const container = document.querySelector('.container');
const heading = document.querySelector('.heading');
const textArea = document.querySelector('textarea');

const show =document.querySelector('.show');

const tc = document.querySelector('.tc')
const r = document.querySelector('.r');
textArea.addEventListener('input',()=>{
    const totalLength = textArea.value.length;
    tc.innerHTML = totalLength;
    let remaining = 50 - totalLength;
        r.innerHTML =remaining;

        if(totalLength === 50){
            tc.style.color ="green";
        }else{
            tc.style.color ="black";
        }

        if(remaining ===0){
            r.style.color = "red";
        }else{
            r.style.color = "black";
        }
    

   
})