var objCal1 = new AMIB.persianCalendar('pcal1');
anElement = new AutoNumeric('#DEMO', {
    decimalCharacter: ',',
    decimalPlacesShownOnFocus: 0,
    decimalPlaces: 0
});

function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', ];

    return n
        .toString()
        .split('')
        .map(x => farsiDigits[x]


        )
        .join('');
}
var form = document.getElementById("check-form");
form.onsubmit = function(e) {
    e.preventDefault();
    rawval = document.getElementById("DEMO").value
    num = rawval.replace(/\./g, "");
    console.log(num.toPersianLetter() + " ریال");
    console.log(document.getElementById("pcal1").value)
    console.log(document.getElementById("reciver").value)


    document.getElementById("price-val-sentence").innerHTML = num.toPersianLetter() + ' ریال'
    document.getElementById("price-val-num").innerHTML = "/" + rawval + "/"
    document.getElementById("date-val").innerHTML = document.getElementById("pcal1").value
    document.getElementById("reciver-val").innerHTML = document.getElementById("reciver").value
    console.log(rawval)
    console.log(toFarsiNumber(rawval))
};