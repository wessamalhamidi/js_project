const navigation = document.querySelector('.navigation');
const list = document.querySelectorAll('.navigation ul li a')
const par = document.querySelector('.paragraph');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > par.offsetTop -50){
        navigation.style.backgroundColor = 'black';
        list.forEach((element)=>{
            element.style.color = 'white';
        })
    }else{
        navigation.style.backgroundColor = 'white';
        list.forEach((element)=>{
            element.style.color = 'black'
        })
    }
})
