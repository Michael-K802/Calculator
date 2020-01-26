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
    mem: {
        dataSet1: [0,0,0,1,1,2],
        digits: 6,
        powerBy: 6,
        numberOfZ: 0,
        first: '',
        second: '',
        stop: false,
        operationType: '',
    },
    func: {
        writeToOutput(input){
            if (input){
                calc.output.innerHTML = input;
            } else {
                let power = 10**calc.mem.powerBy/10;
                let number = 0;
                let final = 0;
                for (let i =0; i < calc.mem.digits; i++){
                    ind = i -1
                    if (calc.mem.dataSet1[i] === 0 && calc.mem.dataSet1[ind]){
                        calc.mem.numberOfZ += 1;
                    }
                    number = calc.mem.dataSet1[i]*power;
                    power = power/10;
                    final += number;
                }
                if (calc.mem.numberOfZ < 0){
                    let x = final.toString;
                    for (let i = 0; i < calc.mem.numberOfZ; i++){
                        x = '0' + x;
                    }
                    calc.output.innerHTML = x
                } else if( calc.mem.second !== '') {
                    calc.output.innerHTML = final
                } else {
                    calc.output.innerHTML = final
                }
                calc.mem.dataSet1 = [];
                calc.mem.digits = 0;
                calc.mem.powerBy = 0;
                calc.mem.numberOfZ = 0;
                calc.mem.stop = false
            }
        },
        tripleFunction(inputNumber, inputOpertion, sovle){
            
        }
    },
}

calc.func.writeToOutput();