function getNumber(num){
    var result = document.getElementById('result')
    result.value += num;
}

function clearResult(){
    var result = document.getElementById('result')
    result.value = ''
}

function getresult(){
    var result = document.getElementById('result')
    result.value = eval(result.value)
}

function backSpace(){
    var result = document.getElementById('result')
    result.value = result.value.slice(0, -1);
}











// saylani assignment calculator


// function inputNumber(num){
//     let result = document.getElementById('input');
//     result.value += num;
// }

// function clearAll(){
//     let result = document.getElementById("input");
//     result.value = ""
// }

// function calculate(){
//     let result = document.getElementById("input");
//     result.value = eval(result.value)
// }

// function backspase(){
//     let result = document.getElementById("input");
//     result.value = result.value.slice(0, -1);
// }