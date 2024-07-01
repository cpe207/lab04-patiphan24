function arrayStringify(a) {
  let t = "";
for (let i = 0; i < a.length; i++) {
      typeof a[i] === "string";
      t += a[i];
}
return t;
}

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;

//รหัส นศ.: 660610771
//ชื่อ-สกุล : ปฏิพันธ์ เลขนอก