
function alterar_texto() {
    // var objeto = document.getElementsByTagName("p")[0];
    // objeto.innerText = "Olá DOM";

    // document.getElementById("hello").innerHTML = "Hello ID";
    // document.getElementsByClassName("dom")[0].innerHTML = "Hello Class";

  document.querySelector("p").innerHTML = "Query Selector"
  document.querySelector("#hello").innerHTML = "Query Selector ID"
  document.querySelector(".dom").innerHTML = "Query Selector Class"

  var novo = document.createElement("p");
  novo.textContent = "Novo parágrafo";
  novo.style.backgroundColor = "#00FF00";
  novo.style.fontFamily = "Comic Sans MS"
  document.body.appendChild(novo);

  var ntabela = document.createElement("table");
  var linha1 = document.createElement("tr");
  var l1col1 = document.createElement("td");
  var l1col2 = document.createElement("td");
  var linha2 = document.createElement("tr");
  var l2col1 = document.createElement("td");
  var l2col2 = document.createElement("td");

  var cel11 = document.createTextNode("ID");
  var cel12 = document.createTextNode("Name");
  var cel21 = document.createTextNode("1");
  var cel22 = document.createTextNode("Carlos Alberto");

  l1col1.appendChild(cel11);
  l1col2.appendChild(cel12);
  l2col1.appendChild(cel21);
  l2col2.appendChild(cel22);

  linha1.appendChild(l1col1);
  linha1.appendChild(l1col2);
  linha2.appendChild(l2col1);
  linha2.appendChild(l2col2);

  ntabela.appendChild(linha1);
  ntabela.appendChild(linha2);

  l1col1.style.border = "1px solid #000";
  l1col2.style.border = "1px solid #000";
  l2col1.style.border = "1px solid #000";
  l2col2.style.border = "1px solid #000";
  ntabela.style.border = "1px solid #000";

  document.body.appendChild(ntabela);


  var tabela  = "<table border='1'>";
      tabela +=  "<tr>";
      tabela +=   "<td>ID</td>";
      tabela +=   "<td>Name</td>";
      tabela +=  "</tr>";
      tabela +=  "<tr>";
      tabela +=   "<td>1</td>";
      tabela +=   "<td>Carlos Alberto</td>";
      tabela +=  "</tr>";
      tabela += "</table>";

  // tr = linha da tabela
  // td = célula
  var span = document.createElement("span");
  span.innerHTML = tabela;
  document.body.appendChild(span);
}