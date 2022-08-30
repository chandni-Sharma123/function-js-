// var readlineSync=require('readline-sync');
// var num = readlineSync.questionInt("enter number")
// var n= readlineSync.questionInt("enter number")
// v=num+n
// console.log(v);





function sum(){
    var readlineSync=require('readline-sync');
    var d = readlineSync.questionInt("enter number")
    var e= readlineSync.questionInt("enter number")
    var n= readlineSync.question("enter +,-,*,/,......")
    function calculator(){
        if (n=="+"){
            console.log(d+e,"total")
        }
        else if(n=="-"){
           console.log(d-e,"sub")
        }
        else if(n=="*"){
            console.log(d*e,"multiply")
        }
        else if (n=="%"){
            console.log(d%e,"modules")
        }
        else if (n=="/"){
            console.log(d/e,"divide")
        }
    }
    calculator() 
}
sum()
