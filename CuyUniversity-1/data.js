const namaSaya = "RamaBoy";
let usia = 19;

let biodata = document.getElementById('Biodata');
console.log(Biodata);

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    }
    else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa";
    }
    else if (usia >= 30) {
        generasi = "generasi tua";
    }
    else if (usia > 2 && usia < 10) {
        generasi = "generasi bocil";
    }
    else {
        generasi = "lu baru lahir ya ?";
    }
    return biodata.innerHTML = generasi;
}

console.log(namaSaya);
console.log(usia);

generateBiodata();