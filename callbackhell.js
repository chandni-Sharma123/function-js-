function myname(){
    setTimeout(() => {
        console.log("my name is chandni");
        setTimeout(() => {
            console.log("i am from punjab")
            setTimeout(() => {
                console.log("i am in banglore")
            }, 1000);
        }, 1000);
    }, 200);
}
myname()