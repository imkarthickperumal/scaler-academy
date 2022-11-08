console.log(this) // Empty obj

function displayThis(){
    console.log(this); // function obj
}
displayThis()


let myObj1={
    name : 'karthi',
    age : 24,
    myFn1: function(){
        console.log(this.name); // obj function
    }
} 

myObj1.myFn1()


let myObj2 = {
    name : 'karthi',
    age : 24,
    myFn2 : function(){
        function myFn3(){
            console.log(this); //   obj fn fn
        }
        return myFn3
    }
}

myObj2.myFn2()