var objCal1 = new AMIB.persianCalendar('pcal1');
anElement = new AutoNumeric('#DEMO', {
    decimalCharacter: ',',
    decimalPlacesShownOnFocus: 0,
    decimalPlaces: 0
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', ];

    return n
        .toString()
        .split('')
        .map(x => farsiDigits[x]


        )
        .join('');
}


function toPersianwithcomma(x) {
    newarry = []
    splitarry = x.toString().split('')
    for (i = 0; i < splitarry.length; i++) {
        if (Number.isInteger(parseInt(splitarry[i]))) {
            newarry.push(toFarsiNumber(splitarry[i]))
        } else {
            splitarry[i] = ","
            newarry.push(splitarry[i])
        }
    }
    return newarry.join('')

}
var form = document.getElementById("check-form");
form.onsubmit = function(e) {
    e.preventDefault();
    rawval = document.getElementById("DEMO").value
    num = rawval.replace(/\./g, "");
    console.log(num.toPersianLetter() + " ریال");
    console.log(document.getElementById("pcal1").value.toLocaleString('ar-EG'))
    console.log(document.getElementById("reciver").value)


    document.getElementById("price-val-sentence").innerHTML = num.toPersianLetter() + ' ریال'
    document.getElementById("price-val-num").innerHTML = "/" + toPersianwithcomma(rawval) + "/"
    document.getElementById("date-val").innerHTML = document.getElementById("pcal1").value
    document.getElementById("reciver-val").innerHTML = document.getElementById("reciver").value
    console.log(rawval)
    console.log(toFarsiNumber(rawval))
    console.log(toPersianwithcomma(rawval))


};