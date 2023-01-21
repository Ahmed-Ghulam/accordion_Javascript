const item = document.querySelectorAll('.item')




// item[0].addEventListener('click',function(){
//     item[0].classList.toggle('active')
// })
// item[1].addEventListener('click',function(){
//     item[1].classList.toggle('active')
// })
// item[2].addEventListener('click',function(){
//     item[2].classList.toggle('active')
// })

item.forEach((i) =>{
    i.addEventListener('click',function(){
        i.classList.toggle("active");
        
    })

})


