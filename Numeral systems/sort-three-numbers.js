const fNum = +gets();
const sNum = +gets();
const tNum = +gets();

let res = '';

if (fNum >= sNum && sNum >= tNum) {
    res = fNum +' '+sNum+' '+tNum;
    print(res);
} else if (sNum > fNum && fNum >= tNum) {
    res = sNum +' '+fNum+' '+tNum;
    print(res);
} else if (tNum > sNum && sNum >= fNum) {
    res = tNum +' '+sNum+' '+fNum;
    print(res);
}