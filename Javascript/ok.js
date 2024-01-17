// Fungsi untuk menghitung luas persegi
function hitungLuas() {
    var sideLength = document.getElementById('sideLength').value;
    var luas = sideLength * sideLength;
    document.getElementById('result').innerHTML = 'Luas Persegi: ' + luas;
}

// Fungsi untuk menghitung keliling persegi
function hitungKeliling() {
    var sideLength = document.getElementById('sideLength').value;
    var keliling = 4 * sideLength;
    document.getElementById('result').innerHTML = 'Keliling Persegi: ' + keliling;
}
