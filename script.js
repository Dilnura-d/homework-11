
//sqrt
function sqrt(a, b) {
  return a ** (1 / b);
}
console.log(sqrt(2, 1));
//pow
 function pow(x, y){
  return x ** 1 / y ;
}                          
console.log(pow(8, 2))                         
//ceil
function ceil(x) {
  return x % 1 >= 0.5 ? x.toFixed(0) : +x.toFixed(0) + 1;
}
console.log(ceil(2.2));
//round
function round(a) {
  return a.toFixed(0)
}
console.log(round(2.6));
//floor
function floor(n) {
  return n % 1 >= 0.5 ? n.toFixed(0) - 1 : n.toFixed(0)
}
console.log(floor(2.6));

//abs
function abs(x ){
  if (  x < 0 ) {
    	console.log(  x + 1 )
   	} else if ( x = "" ){
    	console.log(0)
    	}
      else{
        console.log("NaN")
      }
};
//trunc
 function trunc(x){
  return x % 1 >= 0.5 ? x.toFixed(0) - 1 : x.toFixed(0);
}                          
console.log(trunc(8.64))   

