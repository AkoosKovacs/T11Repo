jatekosDobasGomb.addEventListener("click", JatekosDobas);

function JatekosDobas() {
  let korSzam = Number(document.querySelector("#korSzamlalo").innerHTML);
  if (korSzam == 0) {
    document.querySelector("#korSzamlalo").innerHTML = korSzam + 1;
  }

  document
    .querySelector("#jatekosDobasGomb")
    .setAttribute("disabled", "disabled");

  document.querySelector("#jatekosDobasGomb").style.backgroundColor =
    "rgb(190,190,190)";

  setTimeout(function () {
    document.querySelector("#jatekosDobasGomb").style.backgroundColor =
      "rgb(255,255,255)";
  }, 100);
  if (korSzam < 10) {
    document.querySelector("#jatekosTarolo").style.backgroundColor = "red";
    document.querySelector("#jatekosTarolo").style.backgroundColor = "green";
    setTimeout(function () {
      let elsoDobas = Math.floor(Math.random() * 6) + 1;
      let masodikDobas = Math.floor(Math.random() * 6) + 1;

      document.querySelector("#jatekosElsoKocka").style.backgroundImage =
        "url('imgg/" + elsoDobas + ".png')";

      document.querySelector("#jatekosMasodikKocka").style.backgroundImage =
        "url('imgg/" + masodikDobas + ".png')";

      let dobasOsszeg = elsoDobas + masodikDobas;

      document.querySelector("#jatekosDobasOsszeg").innerHTML = dobasOsszeg;

      document.querySelector("#jatekosDobasTarolo").style.display = "block";

      let pontszam = Number(
        document.querySelector("#jatekosPontszam").innerHTML
      );

      if (elsoDobas == masodikDobas) {
        document.querySelector("#jatekosPontszam").innerHTML =
          pontszam + dobasOsszeg * 2;
      } else {
        document.querySelector("#jatekosPontszam").innerHTML =
          pontszam + dobasOsszeg;
      }
    }, 1000);
  }
}
/*------------------------------------------------------------------------------------------------------------------------------------*/
jatekosDobasGomb.addEventListener("click", GepDobas);
let korSzam = 0;
let vege = false;

function GepDobas() {
  setTimeout(function () {
    if (korSzam < 10) {
      document.querySelector("#jatekosDobasTarolo").style.display = "none";

      document.querySelector("#gepDobasGomb").removeAttribute("disabled");

      setTimeout(function () {
        document.querySelector("#jatekosTarolo").style.backgroundColor = "red";

        document.querySelector("#gepTarolo").style.backgroundColor = "green";

        document.querySelector("#gepDobasGomb").style.backgroundColor =
          "rgb(190,190,190)";

        setTimeout(function () {
          document.querySelector("#gepDobasGomb").style.backgroundColor =
            "rgb(255,255,255)";
        }, 100);

        document.querySelector("#gepTarolo").style.backgroundColor = "green";

        let elsoDobas = Math.floor(Math.random() * 6) + 1;
        let masodikDobas = Math.floor(Math.random() * 6) + 1;

        document.querySelector("#gepElsoKocka").style.backgroundImage =
          "url('imgg/" + elsoDobas + ".png')";

        document.querySelector("#gepMasodikKocka").style.backgroundImage =
          "url('imgg/" + masodikDobas + ".png')";

        let dobasOsszeg = elsoDobas + masodikDobas;

        document.querySelector("#gepDobasOsszeg").innerHTML = dobasOsszeg;

        document.querySelector("#gepDobasTarolo").style.display = "block";

        let pontszam = Number(document.querySelector("#gepPontszam").innerHTML);

        if (elsoDobas == masodikDobas) {
          document.querySelector("#gepPontszam").innerHTML =
            pontszam + dobasOsszeg * 2;
        } else {
          document.querySelector("#gepPontszam").innerHTML =
            pontszam + dobasOsszeg;
        }
      }, 1000);
      korSzam = korSzam + 1;
    } else {
      korSzam = korSzam + 1;
    }
    console.log(korSzam);
    document.querySelector("#gepTarolo").style.backgroundColor = "green";
    document.querySelector("#jatekosTarolo").style.backgroundColor = "red";
  }, 4000);
  setTimeout(function () {
    if (korSzam < 10) {
      document.querySelector("#gepTarolo").style.backgroundColor = "red";
      document.querySelector("#gepDobasGomb").removeAttribute("disabled");
      document
        .querySelector("#gepDobasGomb")
        .setAttribute("disabled", "disabled");
      document.querySelector("#jatekosTarolo").style.backgroundColor = "green";
      document.querySelector("#jatekosDobasGomb").removeAttribute("disabled");

      document.querySelector("#gepDobasTarolo").style.display = "none";

      document.querySelector("#korSzamlalo").innerHTML = korSzam + 1;
    }
  }, 8000);
}
/*------------------------------------------------------------------------------------------------------------------------------------*/
jatekosDobasGomb.addEventListener("click", EredmenyHirdetes);
function EredmenyHirdetes() {
  if (document.querySelector("#korSzamlalo").innerHTML == 9) {
    setTimeout(function () {
      document.querySelector("#jatekosDobasTarolo").style.display = "none";
      document.querySelector("#gepDobasTarolo").style.display = "none";
      document.querySelector("#gepTarolo").style.backgroundColor = "red";
      document.querySelector("#jatekosTarolo").style.backgroundColor = "red";

      document
        .querySelector("#jatekosDobasGomb")
        .setAttribute("disabled", "disabled");
      document
        .querySelector("#gepDobasGomb")
        .setAttribute("disabled", "disabled");

      setTimeout(function () {
        if (
          document.querySelector("#jatekosPontszam").innerHTML >
          document.querySelector("#gepPontszam").innerHTML
        ) {
          document.querySelector("#jatekosNyertesFelirat").style.display =
            "inline";
          document.querySelector("#jatekosNyertesFelirat").className =
            "nyertesFeliratok nyertesFelirat";
        } else if (
          document.querySelector("#jatekosPontszam").innerHTML <
          document.querySelector("#gepPontszam").innerHTML
        ) {
          document.querySelector("#gepNyertesFelirat").style.display = "inline";
          document.querySelector("#gepNyertesFelirat").className =
            "nyertesFeliratok nyertesFelirat";
        }
      }, 1000);
    }, 8000);
  }
}
