function calc(a, b) {
    return numberOne(a) - numberTwo(b);
}

function numberOne(a){
  if(a < 0){
    return 0;
  }
  return a;
}

function numberTwo(b){
  if(b < 0){
    return 0;
  }
  return b;
}
// this is a comment
module.exports = calc;
