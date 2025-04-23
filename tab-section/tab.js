const steps = document.querySelectorAll('.step');
const content = document.querySelectorAll('.content')

steps.forEach((element, index)=>{
    element.onclick = ()=>{
        steps.forEach((element)=>{
            element.classList.remove('active');
        })
        content.forEach((contenetEl)=>{
            contenetEl.classList.remove('active');
        });
        
        element.classList.add('active');
        content[index].classList.add('active') 
    }
    
})