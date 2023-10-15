//celsius to fahrenheight

function calcfah(num) {
    return num * 1.8 + 32;
    
}

let value = calcfah(100);
console.log(value);


// fahrenheigt to celsius//

// function calcelsius(num) {
//     return (num-32)/1.8;
// }

// let value = calcelsius(10)
// console.log(value);


// calculate product of array//

// let arr = [1,2,3,4,5,6,7]

// function prodOfArray(arr) {
//     let prod = 1;
//     for (let i = 1; i < arr.length; i++) {
//         prod =prod*arr[i];
        
//     }
//     console.log(prod);
// }

// prodOfArray([1,2,3,4,]);



// sum of Array//

// function sumOfArray(arr) {
//     let sum = 1;
//     for (let i = 0; i < arr.length; i++) {
//         sum =sum+arr[i];
        
//     }
//     console.log(sum);
// }

// sumOfArray([1,2,3,4,5,6,7,8,9]);


// Avrage of a number........//

// function AvgOfArray(arr) {
//     let sum = 0;
//     let n = arr.length
//     for (let i = 0; i < n; i++) {
//         sum =sum+arr[i];
        
//     }
//     console.log(sum/n);
    
// }

// AvgOfArray([1,2,3,4,5]);


// get only positive number of givin Array............//


// function positive(arr) {
//     let arrr =[];
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr [i];
//         if (element >= 0) {
//             arrr.push(element);
            
//         }

        
//     }
//     return arrr;
    
// }

// let value = positive([1,2,3,-3,-5,5,6]);
// console.log(value);



// ***... get positive value using Filter...//


// function GetpositiveByFilter(arr) {
//     return arr.filter(value => value>=0);
// }

// let Arrars = GetpositiveByFilter([-1,-2,1,2,3,4,,5,,6,7,8]);
// console.log(Arrars);

// /Return max.........//

// function Maxvalue(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let arrvalu = arr[i];
//         if (arrvalu > max) {
//             max = arrvalu;
            
//          } 
//         return max;
//     }
    
// }

// let finalvalue = Maxvalue([1,2,3,4,5,6,7]);
// console.log(finalvalue);


// cheak the reminder//

// cheakReminder=(num,div)=>{
//     if(num%div==0){
//         return true;

//     }
//     return false;
// }

// let value = cheakReminder(100,7);
// console.log(value);


    
// cheak user login......./

//  const User = (username,password)=>{
//     if (username=== Aarav) {
//         return 'Ram Ram Aarav';
//     }
//     return  tryAgain;
//     if (username==='Rakesh'&&password==='mahakaal' ) {
//        return 'welcome rakesh';
        
//     }
//     return 'invalid';
    
//    }

// let greet = User('Rakesh','mahakaal');
// console.log(greet);//


// /HIGH ORDER FUNCCTION.....////

// (SU AND SQARE)


// const square = (num)=>{
//     return num**2;
// }
// let sov = square(5)
// console.log(sov);
// const sumofsquare = (num1,num2)=>{
//     return square(num1)+square(num2);
// }

// let sum1 = sumofsquare(2,4);
// console.log(sum1);



// REVERSE AN ARRAY...../////

// function reverse(arr) {
//   let arr2 = [];
//   for (let i = arr.length-1; i >= 0; i--) {
//     arr2.push(arr[i]);
    
//   }
//   return arr2
  
// }

// let value = reverse([1,2,3,4,5,6])
// console.log(value);


// REVERSE A STRING....///

// const revstr =(str)=>{
//   let str2 = "";
//   for (let i = str.length -1; i >=0; i--) {
//     let char = str[i];
//     str2 += char;
    
//   }
//   return str2;

// }

// let reverse = revstr("javascript");
// console.log(reverse);


// MERGE ARRAYS.........//

// function merge(arr1,arr2) {
//   let arr = [];
//   for (const element of arr1) {
//     arr.push(element);
    
//   }
//   for (const element of arr2) {
//     arr.push(element);
    
//   }
//   return arr;
  
// }
// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9];
// let merge_value = merge(arr1,arr2);
// console.log(merge_value);


// /MERGE TWO ARRAY AND DO NOT MERGE COMMON ELIMENTS...///

// function merge(arr1,arr2) {
//   let arr = [];

//   for (const element of arr1) {
//     arr.push(element);
//   }
//   for (const element of arr2) {
//     arr.push(element);

//   }
//   return arr;

  
// }
// let arr1 = [1,2,3,2,3,2,4,5];
// let arr2 = [5,7,8,9,8,7,6];

// let mervalue = merge(arr1,arr2);
// console.log(mervalue);

 


