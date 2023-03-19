<script>
//Kovács Ákos #Team11

/*----------------------------------1.Feladat: hosszEllenor()-----------------------------*/
document.write("1.Feladat: hosszEllenor()<br>");

function hosszEllenor(szoveg){
	return szoveg.length>=8
}

document.write(hosszEllenor("teszt")+"<br>")
document.write(hosszEllenor("feladatteszt")+"<hr>")


/*--------------------------------2.Feladat: tajSzamEllenor()-----------------------------*/
document.write("2.Feladat: tajSzamEllenor()<br>");

function tajSzamEllenor(szamsor){
    let parosOsszeg=0;
    let paratlanOsszeg=0;
    
    for(let i=1; i<=szamsor.length-1; i+=2){
    	parosOsszeg+=Number(szamsor[i])
        
    }
    
    for(let i=0; i<=szamsor.length-2; i+=2){
    	paratlanOsszeg+=Number(szamsor[i])
    }
    
    return ((parosOsszeg*7)+(paratlanOsszeg*3))%10==szamsor[8]
}

document.write(tajSzamEllenor("040655330")+"<br>")
document.write(tajSzamEllenor("111111111")+"<br>");
document.write(tajSzamEllenor("037687210")+"<br>");
document.write(tajSzamEllenor("019536646")+"<hr>");


/*--------------------------------3.Feladat: tombTerjedelem()---------------------------*/
document.write("3.Feladat: tombTerjedelem()<br>");

function tombTerjedelem(tomb){
	let min=tomb[0];
    let max=0;
    
    for(let i=0; i<tomb.length; i++){
    	if(tomb[i]>max){max=tomb[i]}
        if(tomb[i]<min){min=tomb[i]}
    }
    return max-min;
}

document.write(tombTerjedelem([3, 5, 10, 16, 9])+"<hr>")


/*------------------------------4.Feladat: legidosebbDolgozo()--------------------------*/
document.write("4.Feladat: legidosebbDolgozo()<br>");

const Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
]

function legidosebbDolgozo(dolgozok){
	let maxIndex=0;
	for(let i=0; i<dolgozok.length; i++){
    	if(dolgozok[i].kor>dolgozok[maxIndex].kor){maxIndex=i}
    }
    return "A legidősebb objektum elem indexe: "+maxIndex
}

document.write(legidosebbDolgozo(Dolgozok)+"<hr>")


/*------------------------------5.Feladat: fizetesEmeles()------------------------------*/
document.write("5.Feladat: fizetesEmeles()<br>");

function fizetesEmeles(dolgozok){
	let fizetesekOsszege=0;
    
	for(let i=0; i<dolgozok.length; i++){
    	fizetesekOsszege+=dolgozok[i].fizetes;
    }
    
    let atlagFizetes=fizetesekOsszege/dolgozok.length;
    
    for(let i=0; i<dolgozok.length; i++){
    	if(dolgozok[i].fizetes<atlagFizetes){dolgozok[i].fizetes*=1.1}
    }
    
    return dolgozok
}

document.write(fizetesEmeles(Dolgozok))
console.log(fizetesEmeles(Dolgozok))
</script>