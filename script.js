// BMI = kg/m2
let input1 = document.querySelector("[name = 'weight']")
let input2 = document.querySelector("[name = 'height']")
let calc = document.querySelector('button')
let result = document.querySelector('#resultsCont')

calc.addEventListener('click', ()=>{
    let numberResult = parseFloat((+input1.value/(+input2.value)**2).toString()).toFixed(2)

    console.log(numberResult)
result.textContent = numberResult;
 
})


