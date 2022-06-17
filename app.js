const cont = document.querySelector('.container');
const btn = document.querySelector('.btn');
const paragraf = document.querySelector('.paragraf');
const span = document.querySelector('.span');
const input = document.querySelector('.input');

cont.addEventListener('click', (e)=>{
    // console.log(e.target)
    if(e.target.classList.contains('btn')){
                
        if(e.target.previousElementSibling.value == ''){
            alert('Lütfen geçerli bir metin yazınız.')
        }
        else{
            e.target.nextElementSibling.firstElementChild.innerText =cumleFunction();
            e.target.previousElementSibling.value == '';  
        }    
    }
})

const cumleFunction = () => {
    
    let cumle = input.value;
    
    let counter = 0;
    
    cumle = cumle.toLowerCase().split('');
    
    let cum2 = cumle.map((e) => {
        if (e == 'a'){
            counter +=1;
        } else if(e== 'e'){
            counter +=1;
        } else if(e== 'i'){
            counter +=1;
        } else if(e== 'o'){
            counter +=1;
        } else if(e== 'u'){
            counter +=1;
        }
        // console.log(counter)
    })
    
    let sonuc = counter;
    return sonuc;
    
}




