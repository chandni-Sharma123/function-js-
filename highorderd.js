function outer(){
    function inner(){
        console.log("inners");

    return inner;
    }
inner()
}
outer()
