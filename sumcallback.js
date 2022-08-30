function sum(){
    var readlineSync=require('readline-sync');
    var d = readlineSync.questionInt("enter number")
    var e= readlineSync.questionInt("enter number")
    var n= readlineSync.question("enter +,-,*,/,......")
    function calculator(){
        if (n=="+"){
            setTimeout(() =>{
            console.log(d+e,"total")
            },1000)
        }
        else if(n=="-"){
            setTimeout(() => {
            console.log(d-e,"sub") 
            }, 2000);
        }
        else if(n=="*"){
            setTimeout(() => {
                console.log(d*e,"multiply") 
                }, 3000);
        }
        else if (n=="%"){
            setTimeout(() => {
                console.log(d%e,"modules")
                }, 4000);
        }
        else if (n=="/"){
            setTimeout(() => {
            console.log(d/e,"divide")
                }, 4000);
        }
    }
    calculator() 
}
sum()
