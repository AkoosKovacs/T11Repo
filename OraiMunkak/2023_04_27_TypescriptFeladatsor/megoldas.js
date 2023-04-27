//1.Feladat
function DiakInfo(nev, csoport, tipus) {
    var ujCsoport = csoport.toString();
    if (csoport < 10) {
        ujCsoport = "0" + ujCsoport;
    }
    var diakInfo = nev + " [Team" + ujCsoport + "] -";
    if (tipus == true) {
        return diakInfo + " Junior Frontend";
    }
    else {
        return diakInfo + " Webprogramozó";
    }
}
console.log("1.Feladat");
console.log("--------------------------");
console.log(DiakInfo("Minta Márton", 8, true));
console.log(DiakInfo("Kovács Ákos", 12, false));
//2.Feladat
function SzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return ["Példás", "Példás"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 3) {
        return ["Változó", "Változó"];
    }
    else if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
    else {
        return ["hibás adat", "hibás adat"];
    }
}
console.log("2.Feladat");
console.log("--------------------------");
console.log(SzovegesErtekeles(2));
//3.Feladat
function HarommalOszthatokSzama(tomb) {
    var szamlalo = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            szamlalo++;
        }
    }
    return szamlalo;
}
console.log("3.Feladat");
console.log("--------------------------");
console.log(HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]));
//4.Feladat
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var tomb = [];
    for (var i = 0; i < mennyiseg; i++) {
        var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        if (!tomb.includes(generaltSzam)) {
            tomb.push(generaltSzam);
        }
        else {
            i--;
        }
    }
    return tomb;
}
console.log("4.Feladat");
console.log("--------------------------");
console.log(Nyeroszamok(5, 1, 90));
