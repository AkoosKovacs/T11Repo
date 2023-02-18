<script>
/*---------------------------------1.Feladat: Csak a fele---------------------------------*/
document.write("1.Feladat: Csak a fele<br>");

function CsakFele(szoveg){
	let ujSzoveg=[];
    
	for(let i=0; i<szoveg.length; i++){
    	ujSzoveg.push(szoveg.substring(i, i+1));
  		i++;
    }
    return ujSzoveg.join('');
}

document.write(CsakFele("randomszöveg")+"<hr>")


/*-----------------------------------2.Feladat: Tabusító--------------------------------*/
document.write("2.Feladat: Tabusító<br>");

function Tabusito(szoveg,karakter){
	return szoveg.replaceAll(karakter,"")
}

document.write(Tabusito("Egy kalap alatt van egy alma","a")+"<hr>")


/*------------------------------3.Feladat: Magánhangzó tabusító-------------------------*/
document.write("3.Feladat: Magánhangzó tabusító<br>");

function MaganhangzoTabusito(szoveg){
	let szuro=["a","á","e","é","i","í","o","ó","ö","ő","u","ú","ü","ű",
    			"A","Á","E","É","I","Í","O","Ó","Ö","Ő","U","Ú","Ü","Ű"];
    
    for(let i=0; i<szuro.length; i++){
    	for(let j=0; j<szoveg.length; j++){
        	if(szuro[i]==szoveg[j]){szoveg=szoveg.replace(szuro[i],"");}
        }
    }
    return szoveg;
}

document.write(MaganhangzoTabusito("Árvíztűrőtükörfúrógép")+"<hr>")
</script>