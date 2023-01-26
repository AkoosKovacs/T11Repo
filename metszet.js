<script>
let tomb1=[];
let tomb2=[];
let metszet=[];
/*-------------------------------A tömbök feltöltése és kiíratása-----------------------*/
for(let i=0;i<10;i++){
	tomb1.push(Math.round(Math.random()*100));
}
for(let i=0;i<10;i++){
	tomb2.push(Math.round(Math.random()*100));
}
document.write("A tomb1 elemei: ");
for(let i=0;i<tomb1.length;i++)
{
	document.write(tomb1[i]+", ");
}
document.write("<br>A tomb2 elemei: ");
for(let i=0;i<tomb2.length;i++)
{
	document.write(tomb2[i]+", ");
}
/*------------------------------------Metszet vizsgálat--------------------------------*/
for(let i=0; i<tomb1.length; i++){
	let szerepelE=true;
	for(let j=0; j<tomb2.length; j++){
    	if(tomb1[i]==tomb2[j]){szerepelE=false;}
    }
    for(let k=0; k<metszet.length; k++){
    	if(tomb1[i]==metszet[k]){szerepelE=true}
    }
    if(szerepelE==false){metszet.push(tomb1[i])}
    }
/*-----------------------------------Metszet kiíratás-----------------------------------*/
document.write("<br>A metszet elemei: ");
for(let i=0;i<metszet.length;i++)
{
	document.write(metszet[i]+", ");
}
</script>