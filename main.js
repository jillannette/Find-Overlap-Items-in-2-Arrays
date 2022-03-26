let array1 = ['a', 'b', 'z', 'z', 'c', 'c', 'banana', 'a', 'a', 'b', 'd'];
let array2 = ['a', 'z', 'z', 'z', 'z', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];

let result= [];

//Attempt 2
// build count objects for each array 

// count1 = {
//   'a': 3,
//   'b': 2,
//   'c': 1,
//   'd': 1
// }

let count1 = {};
array1.forEach(function (item) {
  if(count1.hasOwnProperty(item)) {
    count1[item] += 1;
  } else {
    count1[item] = 1;
  }
});

let count2 = {};
array2.forEach(function (item) {
  if(count2.hasOwnProperty(item)) {
    count2[item] += 1;
  } else {
    count2[item] = 1;
  }
 
});
for (prop1 in count1) {
  
  for (prop2 in count2) {
  
    // console.log(prop2);
    // console.log('---');
    if (prop1 === prop2) {
         let frequency = Math.min(count1[prop1], count2[prop2]);

        for (let i = 0; i < frequency; i++) {
          result.push(prop1);
          console.log(result);
        }
    };
  }
}
//Atempt 1 did not work, it only listed ANY items which were duplicated in both arrays
// let result = [];
  
//   array1.forEach(function (item1) {
      
//   array2.forEach(function (item2) {
//     // console.log(item1);  
//     // console.log(item2)
//     // console.log('---');

//     if (item1 === item2) {
//         result.push(Math.min(item1));
//     };
//   });
// });

// console.log(result);
