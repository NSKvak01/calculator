let firstNumber = ''
let operation = '';
let secondNumber = '';


let number = document.querySelectorAll('.number')
let buttonfun = document.querySelectorAll('.buttonfun')
let result = document.querySelector('#result')
let screen = document.querySelector('#screen')
let c = document.querySelector('#c')


for (const num of number){
    num.addEventListener('click', function (){
        if (operation ===''){
            if (num.innerText==='1'){
                screen.innerText += '1'
                firstNumber+='1'
            } else if (num.innerText==='2'){
                screen.innerText += '2'
                firstNumber+='2'
            } else if (num.innerText==='3'){
                screen.innerText += '3'
                firstNumber+='3'
            } else if (num.innerText==='4'){
                screen.innerText += '4'
                firstNumber+='4'
            } else if (num.innerText==='5'){
                screen.innerText += '5'
                firstNumber+='5'
            } else if (num.innerText==='6'){
                screen.innerText += '6'
                firstNumber+='6'
            } else if (num.innerText==='7'){
                screen.innerText += '7'
                firstNumber+='7'
            } else if (num.innerText==='8'){
                screen.innerText += '8'
                firstNumber+='8'
            } else if (num.innerText==='9'){
                screen.innerText += '9'
                firstNumber+='9'
            } else if (num.innerText==='0'){
                screen.innerText += '0'
                firstNumber+='0'
            } else if (num.innerText === '.'){
                screen.innerText +='.'
                firstNumber+='.'
            } 
        } else {
            if (num.innerText==='1'){
                screen.innerText += '1'
                secondNumber+='1'
            } else if (num.innerText==='2'){
                screen.innerText += '2'
                secondNumber+='2'
            } else if (num.innerText==='3'){
                screen.innerText += '3'
                secondNumber+='3'
            } else if (num.innerText==='4'){
                screen.innerText += '4'
                secondNumber+='4'
            } else if (num.innerText==='5'){
                screen.innerText += '5'
                secondNumber+='5'
            } else if (num.innerText==='6'){
                screen.innerText += '6'
                secondNumber+='6'
            } else if (num.innerText==='7'){
                screen.innerText += '7'
                secondNumber+='7'
            } else if (num.innerText==='8'){
                screen.innerText += '8'
                secondNumber+='8'
            } else if (num.innerText==='9'){
                screen.innerText += '9'
                secondNumber+='9'
            } else if (num.innerText==='0'){
                screen.innerText += '0'
                secondNumber+='0'
            } else if (num.innerText === '.'){
                screen.innerText +='.'
                secondNumber+='.'
            }

        }
    })
}

for (const op of buttonfun){
    op.addEventListener('click', function(){
        if (firstNumber !=='' && secondNumber === '' && operation ===''){
            if (op.innerText === '+'){
                operation = '+'
                screen.innerText += '+'
            } else if (op.innerText === '-'){
                operation = '-'
                screen.innerText += '-'
            } else if (op.innerText === 'x'){
                operation = 'x'
                screen.innerText += 'x'
            } else if (op.innerText === '÷'){
                operation = '÷'
                screen.innerText += '÷'
            } 
        } else if (firstNumber !=='' && secondNumber !=='' && operation !==''){
            calcResult()
            if (op.innerText === '+'){
                operation = '+'
                screen.innerText += '+'
            } else if (op.innerText === '-'){
                operation = '-'
                screen.innerText += '-'
            } else if (op.innerText === 'x'){
                operation = 'x'
                screen.innerText += 'x'
            } else if (op.innerText === '÷'){
                operation = '÷'
                screen.innerText += '÷'
            }
        }
    })
}



// let wholeThing = screen.innerText
// let first = true
// for (const digit of wholeThing){
//     if(parseFloat(digit) && first === true){
//         firstNumber+=digit
//     } else if (!parseFloat(digit)){
//         first = false
//     } else if (first === false && parseFloat(digit)){
//         secondNumber+=digit
//     }
// }

function calcResult() {
    if (firstNumber !=='' && secondNumber !==''){
        if (operation === '+'){
            firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
        } else if (operation ==='-'){
            firstNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
        } else if (operation === 'x'){
            firstNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
        } else if (operation === '÷'){
            firstNumber = parseFloat(firstNumber) / parseFloat(secondNumber);
        }
        operation = ''
        secondNumber=''
        screen.innerText = firstNumber.toString()
    }
}

// Clears the screen
function clearScreen() {
    screen.innerText = ''
    firstNumber = ''
    operation = ''
    secondNumber = ''
}

// Event listeners
c.addEventListener('click', clearScreen)
result.addEventListener('click', calcResult)
