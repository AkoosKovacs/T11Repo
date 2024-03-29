function PhErtek(vizsgaltErtek: number): string {
  if (vizsgaltErtek > 7) {
    return "lugos";
  } else if (vizsgaltErtek < 7) {
    return "savas";
  } else {
    return "semleges";
  }
}

function PrimekSzama(vizsgaltTomb: number[]): number {
  let osztokSzama: number = 0;
  let primekSzama: number = 0;
  for (let i: number = 0; i < vizsgaltTomb.length; i++) {
    for (let j: number = 0; j < vizsgaltTomb[i] + 1; j++) {
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

function MaganHangzokSzama(vizsgaltSzoveg: string): number {
  let maganHangzok = [
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
  let maganhangzokSzama: number = 0;
  for (let i: number = 0; i < vizsgaltSzoveg.length; i++) {
    for (let j: number = 0; j < maganHangzok.length; j++) {
      if (vizsgaltSzoveg[i].toLowerCase() == maganHangzok[j]) {
        maganhangzokSzama++;
      }
    }
  }
  return maganhangzokSzama;
}
