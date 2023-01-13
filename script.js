

function intToNum(num) {
    if (typeof num !== 'number') 
    return false; 
    
    const digits = String(+num).split(""),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"],

    romNum = "",
    i=3;
    while (i--) {
        romNum = (key[+digits.pop() + (i*10)] || "") + romNum
    }
    return Array(+digits.join("")+1).join("M") + romNum;
}