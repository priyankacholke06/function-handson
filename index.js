// Print output: 
// var x = 21;
// var girl = function () {
//     // console.log(x);
//     var x = 20;
// };
// girl ();
//2nd output

// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };
// var x = 21;
//             a();
//             b();
            
//               function a() {
                
//                x = 20;
//               console.log(x);
//             };
//              function b() {
                
//                 x = 40;
//                console.log(x);
//             };
// function FindSum(a, b){
//     return a + b;
// }

// function DisplayData(data, batch){
//     console.log(`i am from ${data} and My batch is EA${batch}`)
// }

// DisplayData("PrepBytes", FindSum(20, 4));

// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }

var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")
