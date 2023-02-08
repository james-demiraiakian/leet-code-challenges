const canConstruct = function (ransomNote, magazine) {
  const ransDict = new Map();
  const magDict = new Map();

  const ransArr = ransomNote.split('');
  const magArr = magazine.split('');

  ransArr.forEach((e) => {
    if (ransDict.has(e)) {
      const value = ransDict.get(e);
      ransDict.set(e, value + 1);
    } else {
      ransDict.set(e, 1);
    }
  });

  magArr.forEach((e) => {
    if (magDict.has(e)) {
      const value = magDict.get(e);
      magDict.set(e, value + 1);
    } else {
      magDict.set(e, 1);
    }
  });

  return 'hmmm';
};

const ransom1 = 'a';
const mag1 = 'b';
const ransom2 = 'aa';
const mag2 = 'ab';
const ransom3 = 'aa';
const mag3 = 'aab';

console.log(canConstruct(ransom1, mag1));
console.log(canConstruct(ransom2, mag2));
console.log(canConstruct(ransom3, mag3));
