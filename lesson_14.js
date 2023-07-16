const result = (a,b,operation) => {
    switch(operation){
        case '+': {
            return a+b;
            break;
        }
        case '-': {
            return a-b;
            break;
        }
        case '*': {
            return a*b;
            break;
        }
        case '/': {
            return a/b;
            break;
        }
        default: {
            return 'Operation invalid!';
        }
    }
}
let arr = [];
for(let i = 0;i<10;i++) {
    arr.push(result(i*5,i**2,'+'));
}
console.log(arr);
(()=>{console.log('hello');})(); //immediately invoked function expression (function)(parametres);
((a,b)=> console.log(a+b))(1,2);

//task 6.5
let variable = 1000;
(()=> {variable=129;})();
const result_ = () => {return (variable=888);}
console.log(result_());

//recursion
(function checkRec(nr) {
    console.log(`Started function nr=${nr}`);
    if(nr> 0) {
        checkRec(nr-1);
    }
    else {
        console.log("Ended recursion");
    }
    console.log(`Ended nr=${nr}`);
})(5);



function recursive(n) {
    if(n===0) {return 1;}
    else {
        return n*recursive(n-1);
    }
}
for(let i = 0;i<=10;i++) {
    console.log(recursive(i));
}

