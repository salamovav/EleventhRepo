//Задание 1

// let a= new Set();
// a.add('e')
// a.add('r')
// a.add('i')
// a.add('k')
// a.add('t')
// a.add('h')
// a.add('e')
// a.add('b')
// a.add('e')
// a.add('s')
// a.add('t')
// console.log(a);

//Задание 2

// let text=document.querySelector('.text');
// let btn=document.querySelector('.btn');
// let a=new Set();
// a.add('e')
// a.add('r')
// a.add('i')
// a.add('k')
// a.add('t')
// a.add('h')
// a.add('e')
// a.add('b')
// a.add('e')
// a.add('s')
// a.add('t')

// btn.onclick= function(){
//     a.add(text.value)
//     console.log(a);
// }

// Задание 3

    
// let text=document.querySelector('.text');
// let btn=document.querySelector('.btn');
// let arr=[24,32,67,568,234,12,2457]
// console.log(arr);
// btn.onclick=function() {

// if(arr[0] == (text.value) || arr[1] == (text.value) || arr[2] == (text.value) || arr[3] == (text.value) || arr[4] == (text.value) || arr[5] == (text.value) || arr[6] == (text.value)){
//     document.querySelector('.one').innerHTML=true;
// }
// else{
//     document.querySelector('.one').innerHTML=false;
// }
//  }

//  Задание 4

let arr = [3,4,5,2,1,7,8,2,4,6,8,11,23,17];
let btn=document.querySelector('.btn');
btn.onclick=function() {
    for(let i of arr){
        if( i>5){
            console.log(i);
        }
    }
}