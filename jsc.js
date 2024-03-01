const exp = require("constants");

var c = 0;
function input() {
    var p1 = document.getElementById("p1");
    e = document.getElementById("name").value;
    a = document.getElementById("pass").value;
    if (e == "hello" && a == "hello" && c <= 3) {
        alert("nice");
        return;
    } if (c >= 3) {
        alert("too many tries");
        return;
    } else {
        c++
        alert("nope");
    }
    p1.innerHTML = c;
}


function retirement() {
    alert("hello")
    var p1 = document.getElementById("p1");
    age = document.getElementById("age").value;
    expen = document.getElementById("expen").value;
    save = document.getElementById('save').value;
    bonus = document.getElementById('bonus').value;
    if (age) {
        if (age > 85){
            year = 100 - age;
            var life = 100;

        }else{
            year = 85 - age;
            var life = 85;
        }
    }
    if (age && expen && save && bonus) {
        let PMT = expen * 12;
        let r = 0.02; // Assuming a real rate of return of 2%
        let n = year;
        let PV = PMT * (1 - Math.pow(1 + r, -n)) / r;
        let money = PV - bonus - save;
        money = money + money * 10 / 100;
        money = parseInt(money);
        if (money > 0) {
            p1.innerHTML="with life expectancy of " + life + "you will need" + money + "to retire from this moment with 6% inflation rate";
        }else{
            p1.innerHTML="with the life expectancy of " + life + " you're currently fine with the current money saved and bonus judging by you monthly expenses with 6% inflation rate";
        }
    }
}