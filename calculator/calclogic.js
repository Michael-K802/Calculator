let calc = {
    output: document.getElementById("output"),
    keys: {
        one: document.getElementById("1"),
        two: document.getElementById("2"),
        three: document.getElementById("3"),
        four: document.getElementById("4"),
        five: document.getElementById("5"),
        six: document.getElementById("6"),
        seven: document.getElementById("7"),
        eight: document.getElementById("8"),
        nine: document.getElementById("9"),
        zero: document.getElementById("0"),
        //
        add: document.getElementById("add"),
        sub: document.getElementById("sub"),
        multi: document.getElementById("multi"),
        divi: document.getElementById("divi"),
        deci: document.getElementById("deci"),
        clear: document.getElementById("clear"),
        equal: document.getElementById("equal"),
    },
    mem:{
        // write to output
        dataSet1: [],
        powerBy: 0,
        digits: 0,
        x: 0, // used in both output and solve
        y: 0, // used in both output and solve
        // used in operator part of the trifunc
        isOperator: false,
        operationType: '',
        // used for solving in the solve part of the trifunc
        isAnswer: false,
    },
    writeToOutput(input){
        if (input){
            // if there are messages that shouldn't be put through the dataSet
            calc.output.innerHTML = input;
        } else {
            let power = 10**calc.mem.powerBy /10;
            let number = 0;
            let final = 0;
            for (let i = 0; i < calc.mem.digits; i++){
                number = calc.mem.dataSet1[i] * power;
                power = power/10;
                final += number;
            }
            console.log(`value of is operator: ${calc.mem.isOperator}`)
            if (calc.mem.isOperator === false){
                calc.mem.x = final;
                console.log(`The x value is ${calc.mem.x}`);
                console.log(`value of is operator: ${calc.mem.isOperator}`)
                
            } else {
                console.log(`value of is operator: ${calc.mem.isOperator}`)
                calc.mem.y = final;
                console.log(`The y value is ${calc.mem.y}`);
            }
            calc.output.innerHTML = final;
        }
    },
    trifunc(inputNumber,inputOperation,solve){
        if (typeof inputNumber === 'number'){
            if (calc.mem.isAnswer === true){
                if (isOperator === false){
                    calc.mem.isAnswer = false;
                    calc.mem.x = '';
                }
            }
            calc.mem.dataSet1.push(inputNumber);
            if (calc.mem.isDecimal === true){
                calc.mem.digits += 1;
            } else {
                calc.mem.digits += 1;
                calc.mem.powerBy +=1;
            }
            calc.writeToOutput();
        } else if (typeof inputOperation === 'string'){
            if (inputOperation === 'add'){
                console.log("input - add accepted")
                calc.mem.operationType = inputOperation
                console.log(` operation type is ${calc.mem.operationType}`)
                calc.mem.isOperation = true;
                console.log(`isOperation is ${calc.mem.isOperation}`)
                calc.mem.dataSet1 = [];
                calc.mem.powerBy = 0;
                calc.mem.digits = 0;
            } else if(inputOperation === 'sub'){
                calc.mem. operationType = inputOperation
                calc.mem.isOperation = true
                calc.mem.dataSet1 = [];
                calc.mem.powerBy = 0;
                calc.mem.digits = 0;
            } else if (inputOperation === 'multi'){
                calc.mem.operationType = inputOperation
                calc.mem.isOperation = true
                calc.mem.dataSet1 = [];
                calc.mem.powerBy = 0;
                calc.mem.digits = 0;
            } else if (inputOperation === 'divi'){
                calc.mem.operationType = inputOperation
                calc.mem.isOperation = true
                calc.mem.dataSet1 = [];
                calc.mem.powerBy = 0;
                calc.mem.digits = 0;
            } else {
                console.log(`invalid operation: ${inputOperation}`);
            }
            calc.mem.isOperation = true;
        } else if (solve === true){
            console.log('solve ran');
            if (calc.mem.operationType === 'add'){
                console.log('add ran');
                console.log(`value of x: ${calc.mem.x}`);
                console.log(`value of y: ${calc.mem.y}`);
                let answer = calc.mem.x + calc.mem.y;
                console.log(answer);
                calc.writeToOutput(answer);
                calc.mem.isAnswer = true;
                calc.mem.x = answer;
                calc.mem.isOperation = false;
                calc.mem.dataSet1 = [];
                calc.mem.powerBy = 0;
                calc.mem.digits = 0;
                calc.mem.y = 0;
            } else if( calc.mem.operationType === 'sub'){
                let answer = calc.mem.x - calc.mem.y;
                calc.writeToOutput(answer);
                calc.mem.isAnswer = true;
                calc.mem.x = answer;
                calc.mem.isOperation = false;
                calc.mem.dataSet1 = [];
                calc.mem.powerBy = 0;
                calc.mem.digits = 0;
                calc.mem.y = '';
            } else if (calc.mem.operationType === 'multi'){
                let answer = calc.mem.x * calc.mem.y;
                calc.writeToOutput(answer);
                calc.mem.isAnswer = true;
                calc.mem.x = answer;
                calc.mem.isOperation = false;
                calc.mem.dataSet1 = [];
                calc.mem.powerBy = 0;
                calc.mem.digits = 0;
                calc.mem.y = '';
            } else if (calc.mem.operationType === 'divi'){
                let answer = calc.mem.x / calc.mem.y;
                calc.writeToOutput(answer);
                calc.mem.isAnswer = true;
                calc.mem.x = answer;
                calc.mem.y = '';
                calc.mem.isOperation = false;
                calc.mem.dataSet1 = [];
                calc.mem.powerBy = 0;
                calc.mem.digits = 0;
            } else {
                console.log('nothing ran');
            }
        }
    }
}
calc.keys.one.onclick = function(){
    calc.trifunc(1);
}
calc.keys.two.onclick = function(){
    calc.trifunc(2)
}
calc.keys.add.onclick = function(){
    calc.trifunc('','add');
}
calc.keys.equal.onclick = function(){
    calc.trifunc('',0,true);
}
