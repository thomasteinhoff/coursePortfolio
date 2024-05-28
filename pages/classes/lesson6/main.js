const tableContainer = document.getElementById('tableContainer');
let span = document.createElement("span");

function submit(){
    // gets the data
    email = document.getElementById("email").value;
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;

    //checks if its missing something
    /*
    if(email == "" || user == "" || password == ""){
        alert("Fill all fields")
        return;
    }
    */
   
    var newRow = tableContainer.insertRow();
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);
    
    cell0.innerHTML = email;
    cell1.innerHTML = user;
    cell2.innerHTML = password;
    cell3.innerHTML = "<td> <button onclick='change()'> EDIT </button> </td>";

    // clears the input camp after submiting
    document.getElementById("email").value="";
    document.getElementById("user").value="";
    document.getElementById("password").value="";
}

function change() {
    const linha = event.target.closest('tr');
    const cells = linha.querySelectorAll('td');
    
    email = document.getElementById("email").value = cells[0].textContent;
    user = document.getElementById("user").value = cells[1].textContent;
    password = document.getElementById("password").value = cells[2].textContent;

    linha.remove();
}