const firstUniqChar = function (s) {
  if (!s || s.length === 0) return -1;
  if (s.length === 1) return 0;

  let i = 0;
  let unique = false;

  for (index in s) {
    // if (i === index) continue;
    if (s[i] === s[index]) {
      i++;
      unique = false;
    } else {
      unique = true;
    }
  }

  return i;
};

const test1 = 'leetcode';
const test2 = 'loveleetcode';
const test3 = 'aabb';
const test4 = 'a';
const test5 = '';
let test6;

console.log(firstUniqChar(test1));
console.log(firstUniqChar(test2));
console.log(firstUniqChar(test3));
console.log(firstUniqChar(test4));
console.log(firstUniqChar(test5));
console.log(firstUniqChar(test6));
