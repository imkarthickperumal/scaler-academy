// setInteral

function hello(){
    console.log('This is setInterval function');
}

let timer = setInterval(hello, 2000);

setTimeout(function(){
    clearInterval(timer)
},3000)