function PhErtek(vizsgaltErtek) {
    if (vizsgaltErtek > 7) {
        return "lugos";
    }
    else if (vizsgaltErtek < 7) {
        return "savas";
    }
    else {
        return "semleges";
    }
}
function PrimekSzama(vizsgaltTomb) {
    var osztokSzama = 0;
    var primekSzama = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        for (var j = 0; j < vizsgaltTomb[i] + 1; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                osztokSzama++;
            }
            if (osztokSzama == 2) {
                primekSzama++;
            }
        }
    }
    return primekSzama;
}
function MaganHangzokSzama(vizsgaltSzoveg) {
    var maganHangzok = [
        "a",
        "á",
        "e",
        "é",
        "i",
        "í",
        "o",
        "ó",
        "ö",
        "ő",
        "u",
        "ú",
        "ü",
        "ű",
    ];
    var maganhangzokSzama = 0;
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < maganHangzok.length; j++) {
            if (vizsgaltSzoveg[i].toLowerCase() == maganHangzok[j]) {
                maganhangzokSzama++;
            }
        }
    }
    return maganhangzokSzama;
}
