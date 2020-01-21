// Your code goes here

// 1st event 
let navhovereffect=document.querySelectorAll('.nav-link')[0];
navhovereffect.addEventListener('mouseenter', element=> {
    element.preventDefault();
    element.target.style.color="red";
});

// 2nd event
let navhovereffect1=document.querySelectorAll('.nav-link')[1];
navhovereffect1.addEventListener('click', element=> {
    element.stopImmediatePropagation();
    element.target.style.color="green";});

//stopropagation
let navParent=document.querySelector('.nav-container');
navParent.addEventListener('click', ()=>{
    navParent.style.background='red';
})


//3rd event 
let dragThisOne=document.querySelectorAll('.nav-link')[2];
dragThisOne.addEventListener('drag',element=>{element.target.textContent="I'm being dragged";});

//4th event
dragThisOne.addEventListener('dragend', element=>{element.target.textContent="Blog";});

//5th event 
let funbusimg=document.querySelector('.intro img');
funbusimg.addEventListener('wheel', () => {
    funbusimg.style.transform = "scale(1.4)";
    funbusimg.style.transition = "all 0.3s";
  })


// 6th 
funbusimg.addEventListener('dblclick', () => {funbusimg.style.transform='scale(1)';})

// 7th
navhovereffect.addEventListener('mouseleave', ()=> {
    navhovereffect.style.color='black';
})

// 8th
let highlightText=document.querySelector('.text-content p');
highlightText.addEventListener('copy', () => {
  highlightText.style.background ='yellow';
})



// 9th
highlightText.addEventListener('cut', () => {
    highlightText.style.background ='white';})

 // 10th
let highlightText1=document.querySelector('.content-destination h2');
highlightText1.addEventListener('mousedown', ()=> {
    highlightText1.style.fontSize ='5rem';
})

