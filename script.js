// BMI = kg/m2
// BMI< 18.5=underweight 
// BMI= 18.5 - 24.9=e Healthy Weight range
// BMI= 25.0 - 29.9= overweight range
// BMI > 30.0= obese range.
let input1 = document.querySelector("[name = 'weight']")
let input2 = document.querySelector("[name = 'height']")
let calc = document.querySelector('button')
let subtext = document.querySelector('#Description')
let result = document.querySelector('#resultsCont')

calc.addEventListener('click', ()=>{
    let numberResult = parseFloat((+input1.value/(+input2.value)**2).toString()).toFixed(2)

    console.log(numberResult)
    if (numberResult < 18.5) {
        result.style.color = 'yellow'
        subtext.style.color = 'yellow'
        subtext.textContent = "Underweight"
        }else if (numberResult>=18.5 && numberResult<=24.9) {
        result.style.color = 'green'
        subtext.style.color = 'green'
        subtext.textContent = "Healthy Weight"
        }else if (numberResult>24.9 && numberResult<29.9) {
        result.style.color = 'orange'
        subtext.style.color = 'orange'
        subtext.textContent = "Overweight"
        }else {
        result.style.color = 'red'
        subtext.style.color = 'red'
        subtext.textContent = "Obese"}
result.textContent = numberResult;
 
})


