//renverse string


function Reverse(chaine) {
    let arr_chaine = Array.from(chaine);
    let size = arr_chaine.length;
    let chaine_caractere = ""

    for (let lettre = size - 1; lettre >= 0; lettre--) {
        chaine_caractere += arr_chaine[lettre]
    }

    return chaine_caractere;
}

function main() {
   let chaine = document.getElementById("input_chaine").value; 

   let reverse = Reverse(chaine);

   document.getElementById("reverse_ajout").innerHTML = reverse

}