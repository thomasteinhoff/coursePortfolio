// Navigators
function gotoPage1(){window.location.href = "math.html";}
function gotoPage2(){window.location.href = "inss.html";}
function gotoPage3(){window.location.href = "scripts.html";}
function gotoPageBMI(){window.open("../assets/imc/imc.html")}
function gotoPageCRUD(){window.open("../assets/crud/crud.html")}
function gotoPageInfixCalc(){window.open("../assets/calc/calc.html")}

function inssCalc(event) {
    const income = document.getElementById('income').value;
    const children = document.getElementById('children').value;
    let vinss = 0;
    let taxRenda = 0;
    let lsalario = income;
    
    // inss
    if (income <= 1412.00) {
        vinss = income * 0.075;
    } else if (income <= 2666.68) {
        vinss = income * 0.09;
    } else if (income <= 4000.03) {
        vinss = income * 0.12;
    } else if (income <= 7786.02) {
        vinss = income * 0.14;
    } else {
        vinss = income * 0;
    }
    
    // imposto de renda
    if (income <= 2259.20) {
        taxRenda = income * 0;
    } else if (income <= 2828.65) {
        taxRenda = income * 0.075;
    } else if (income <= 3751.05) {
        taxRenda = income * 0.15;
    } else if (income <= 4664.68) {
        taxRenda = income * 0.225;
    } else {
        taxRenda = income * 0.275;
    }

    taxRenda -= (children*189.59);
    lsalario -= (taxRenda+vinss);

    // update
    document.getElementById('inss').value = vinss.toFixed(2) + " (" + (vinss*100/income).toFixed(1) + "%)";
    document.getElementById('irrf').value = taxRenda.toFixed(2) + " (" + (taxRenda*100/income).toFixed(1) + "%)";
    document.getElementById('lincome').value = lsalario.toFixed(2) + " (" + (lsalario*100/income).toFixed(1) + "%)";
}

function updateOutput() {
    const htmlCode = document.getElementById('htmlinput').value;
    const cssCode = document.getElementById('cssinput').value;
    const jsCode = document.getElementById('jsinput').value;

    const outputDiv = document.getElementById('code-output');

    outputDiv.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'solid 2px #000';

    outputDiv.appendChild(iframe);

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}</script>
        </body>
        </html>
    `);
    doc.close();
}

document.getElementById('htmlinput').addEventListener('input', updateOutput);
document.getElementById('cssinput').addEventListener('input', updateOutput);
document.getElementById('jsinput').addEventListener('input', updateOutput);
onload