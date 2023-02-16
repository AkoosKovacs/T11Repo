<script>
const csapatAdat = [
"Anglia;4;0;1662", 
"Argentína;10;0;1614", 
"Belgium;1;0;1752", 
"Brazília;3;-1;1719", 
"Chile;17;-3;1576", 
"Dánia;14;-1;1584", 
"Franciaország;2;1;1725", 
"Hollandia;13;3;1586", 
"Horvátország;8;-1;1625", 
"Kolumbia;9;-1;1622", 
"Mexikó;12;0;1603", 
"Németország;16;-1;1580", 
"Olaszország;15;1;1583", 
"Peru;19;0;1551", 
"Portugália;5;1;1643", 
"Spanyolország;7;2;1631", 
"Svájc;11;0;1604", 
"Svédország;18;0;1560", 
"Szenegál;20;0;1546", 
"Uruguay;6;-1;1639"
];

//Objektum típusú tömb készítése
function ObjektumFeltoto(feltoltendoElem){
	const beolvasottAdat=[];
    for(let i=0;i<feltoltendoElem.length;i++){
    	let objektum={};
        let daraboltAdatSor=feltoltendoElem[i].split(';');
        objektum.nev=daraboltAdatSor[0];
        objektum.helyezes=daraboltAdatSor[1];
        objektum.valtozas=daraboltAdatSor[2];
        objektum.pontszam=daraboltAdatSor[3];
        beolvasottAdat.push(objektum);
    }
    return beolvasottAdat;
}
const fifaAdatok=ObjektumFeltoto(csapatAdat);


/*----------1.Feladat: Adja meg aktuálisan hány csapat szerepel a ranglistán------------*/
document.write("1.Feladat: Adja meg aktuálisan hány csapat szerepel a ranglistán")
document.write("<br>A ranglistán jelenleg "+fifaAdatok.length+"db csapat szerepel<hr>")


/*-------------2.Feladat: Írja ki mennyi a résztvevő csapatok átlagpontszáma------------*/
document.write("2.Feladat: Írja ki mennyi a résztvevő csapatok átlagpontszáma")

function AtlagPontszamKiszamitas(adatok){
	let pontszamokOsszege=0;
	for(let i=0; i<adatok.length; i++){
		pontszamokOsszege=pontszamokOsszege+Number(adatok[i].pontszam)
	}
	return Math.round(pontszamokOsszege/adatok.length);
}

let atlagPontszam=(AtlagPontszamKiszamitas(fifaAdatok));
document.write("<br>A résztvevő csapatok átlagpontszáma: "+atlagPontszam+"<hr>")


/*--3.Feladat: Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!--*/
document.write("3.Feladat: Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!<br>")

function AtlagFolottiPontszamosCsapatokKiirasa(adatok,atlagPontszam){
	let atlagFolottiPontszamosCsapatok=[]
    for(let i=0; i<adatok.length; i++){
    	if(adatok[i].pontszam>atlagPontszam){
        	atlagFolottiPontszamosCsapatok.push(adatok[i].nev)
        }
    }
    return atlagFolottiPontszamosCsapatok
}

document.write("<br>Az átlagpontszámnál több pontot elérő csapatok: "+AtlagFolottiPontszamosCsapatokKiirasa(fifaAdatok,atlagPontszam))


/*--4.Feladat: Írja ki a legtöbbet javító csapat adatait!(Helyezés,csapat,pontszám)--*/
document.write("4.Feladat: Írja ki a legtöbbet javító csapat adatait!(Helyezés,csapat,pontszám)")

function LegtobbetJavitoCsapatKereses(adatok){
	let max=0;
    let maxIndex=0;
    for(let i=0; i<adatok.length; i++){
    	if(adatok[i].valtozas>max){max=adatok[i].valtozas; maxIndex=i}
    }
    return "A legtöbbet javító csapat: "+adatok[maxIndex].nev+", helyezés: "+adatok[maxIndex].helyezes+", pontszám: "+adatok[maxIndex].pontszam
}

document.write("<br>"+LegtobbetJavitoCsapatKereses(fifaAdatok))


/*5.Feladat: Mondja meg, hogy Magyarország szerepel-e a ranglistán!Legyen univerzális!*/
document.write("5.Feladat: Mondja meg, hogy Magyarország szerepel-e a ranglistán!Legyen univerzális!")

let megadottOrszag=prompt("Adjon meg egy országot");

function OrszagSzerepelE(adatok,orszag){
	let szerepelE=false;
	for(let i=0; i<adatok.length; i++){
    	if(adatok[i].nev==orszag){szerepelE=true}
    }
    if(szerepelE==true){return "<br>A megadott ország("+orszag+") szerepel a listán"}
    else{return "<br>A megadott ország("+orszag+") NEM szerepel a listán"}
}

document.write(OrszagSzerepelE(fifaAdatok,megadottOrszag)+"<hr>")
</script>