
function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(index);
    }
  })
}

function actionWhenFound(foundIndex) {
  console.log("Found Waldo at index " +  foundIndex + "!");
}

findWaldo(["Daniel", "Bob", "Waldo", "Winston"], actionWhenFound);

