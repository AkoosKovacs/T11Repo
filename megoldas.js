<script>
/*Kovács Ákos, Junior Frontend, #Team11*/
document.write("1.Feladat: Keszito()<br>");
function keszito(){
	document.write("Kovács Ákos, Junior Frontend, #Team11<hr>");
}
keszito()
/*------------------------------------------------------------------------------------*/
document.write("2.Feladat: Hatvanyozo()<br>");
function hatvanyozo(szam,hatvany){
	return Math.pow(szam,hatvany);
}
document.write("A függvény visszatérési értéke: "+hatvanyozo(2,3)+"<hr>");
/*------------------------------------------------------------------------------------*/
document.write("3.Feladat: parosLetrehoz()<br>");
function parosLetrehoz(also,felso){
	let generaltSzam=(Math.round(Math.random()*felso-also))+also;
    if(generaltSzam%2==0){return generaltSzam}
    else if(generaltSzam!=felso){return generaltSzam+1}
	else{return generaltSzam-1}
}
document.write("A függvény visszatérési értéke: "+parosLetrehoz(1,100)+"<hr>")
/*------------------------------------------------------------------------------------*/
document.write("4.Feladat: testTomegIndex()<br>");
function testTomegIndex(suly,magassag){
	let TTI=suly/(magassag*magassag); 
	if(TTI<16){return document.write("A függvény visszatérési értéke: súlyos soványság<hr>");}
	else if(TTI<17){return document.write("A függvény visszatérési értéke: mérsékelt soványság<hr>");}
	else if(TTI<18.5){return document.write("A függvény visszatérési értéke: enyhe soványság<hr>");}
	else if(TTI<25){return document.write("A függvény visszatérési értéke: normális testsúly<hr>");}
	else if(TTI<30){return document.write("A függvény visszatérési értéke: túlsúlyos<hr>");}
	else if(TTI<35){return document.write("A függvény visszatérési értéke: I. fokú elhízás<hr>");}
	else if(TTI<40){return document.write("A függvény visszatérési értéke: II. fokú elhízás<hr>");}
	else{return document.write("A függvény visszatérési értéke: III. fokú (súlyos) elhízás<hr>");}
}
testTomegIndex(200,2);
/*------------------------------------------------------------------------------------*/
document.write("5.Feladat: egeszOsztoE()<br>");
function egeszOsztoE(szam,oszto){
	return szam%oszto==0
}
document.write("A függvény visszatérési értéke: "+egeszOsztoE(25,5)+"<hr>")
</script>