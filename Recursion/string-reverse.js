const reverseString = (str) => {
    //const firstChar = str[0];
   // const rest = str.splice(1);

   //if (str.length <= 1) {

   if (str.length === 0 || str.length === 1) {
       return str;
   }

    const [firstChar, ... rest] = str;
    const reversed = reverseString(rest) + firstChar;

    return reversed;
};

console.log(reverseString('ala bala nica'));
//console.log(1 + '-'.repeat(1 << 10) + 2);


// ala bala nica
// (la bala) nica) a