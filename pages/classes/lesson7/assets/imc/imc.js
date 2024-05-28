function calculate(){
    var n1 = parseFloat(document.getElementById('weight').value);
    var n2 = parseFloat(document.getElementById('height').value);
    var n3 = n1/(n2*n2);
    var icm;

    if (isNaN(n1) || isNaN(n2)) {
        resultDiv.textContent = '';
        icm = '';
        return;
    }

    if (n3 <= 18.5) {
        icm = "Abaixo do peso";
    } else if (n3 <= 24.9) {
        icm = "Intervalo normal";
    } else if (n3 <= 29.9) {
        icm = "Acima do peso";
    } else if (n3 <= 34.9) {
        icm = "Obesidade tipo I";
    } else if (n3 <= 39.9) {
        icm = "Obesidade tipo II";
    } else {
    icm = "Obesidade tipo III";
    }

    document.getElementById('result').textContent = n3.toFixed(2);
    document.getElementById('bmi').textContent = icm;
}
    
document.getElementById('weight').addEventListener('input', calculate);
document.getElementById('height').addEventListener('input', calculate);