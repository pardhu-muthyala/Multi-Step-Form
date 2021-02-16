const next1 = document.getElementById('next1')
const next2 = document.getElementById('next2')
const back1 = document.getElementById('back1')
const back2 = document.getElementById('back2')
const form1 = document.getElementById('form1')
const form2 = document.getElementById('form2')
const form3 = document.getElementById('form3')
const progress = document.getElementById('progress')

next1.addEventListener('click', () =>{

    form1.style.left = "-460px"
    form2.style.left = "40px"
    progress.style.width = "240px"
})
back1.addEventListener('click', () =>{
    form2.style.left = "460px"
    form1.style.left = "40px"
    progress.style.width = "120px"

})

next2.addEventListener('click', () =>{

    form2.style.left = "-460px"
    form3.style.left = "40px"
    progress.style.width = "360px"
})
back2.addEventListener('click', () =>{
    form2.style.left = "40px"
    form3.style.left = "460px"
    progress.style.width = "240px"

})

