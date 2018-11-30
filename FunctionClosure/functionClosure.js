function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

  var c = 0;
  return function() {

    return list[c++];

  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


// c++
This is called as postfix notation. Means firstly evaluate the
value of C and then increment the value of C by 1


// ++c
This is called PreFix notation. Means firstly increment the value by
1 and then use that value of c



var countdownGenerator = function (x) {
    var newCount = x;

    return function() {

      if(newCount > 0){

        console.log("T-minus "+newCount);
        --newCount;
      } else if(newCount === 0) {
        console.log("Blast Off!");
        --newCount;
      } else {
        console.log("Rockets already gone, bub!");
        --newCount;
      }
    }
  console.log(newCount)
};

var countdown = countdownGenerator(3);
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();