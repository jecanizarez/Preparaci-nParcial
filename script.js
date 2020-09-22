

mydata = ['{"last_lane": "Daws","first_name": "Nari","email": "ndaws0@dell.com","photo": "http://dummyimage.com/155x119.jpg/ff4444/ffffff"}',
           '{"last_lane": "Withams","first_name": "Winona","email": "wwithams1@ibm.com","photo": "http://dummyimage.com/161x166.bmp/cc0000/ffffff"}',
           '{"last_lane": "Streatfield","first_name": "Northrup","email": "nstreatfield2@macromedia.com","photo": "http://dummyimage.com/195x201.png/ff4444/ffffff"}'];
function getDataFromJson(){
    tablebody = document.getElementById("tablebody");
    for(let i = 0; i < mydata.length; i++){
        obj = JSON.parse(mydata[i]);
        fila = tablebody.insertRow(i);
        apellido = fila.insertCell(0);
        nombre = fila.insertCell(1);
        correo = fila.insertCell(2);
        foto = fila.insertCell(3);
        eliminar = fila.insertCell(4);
        actualizar = fila.insertCell(4);
        apellido.innerHTML = obj.last_lane;
        nombre.innerHTML = obj.first_name;
        correo.innerHTML = obj.email;
        foto.innerHTML = '<img class = "fotos" src= "' +obj.photo+'">';
        eliminar.innerHTML = '<button id="fila" class="btn btn-danger" onclick="deleteRow(this)">Eliminar</button>';
        actualizar.innerHTML = '<button id="fila"class= "btn btn-primary" onclick="updateRow(this)">Actualizar</button>';
    }   
}
function toCards(){
  console.log("wtf");
  deleteTable();
  var cardgroup = document.getElementById("card-group");
  for(let i = 0; i < mydata.length; i++){
    obj = JSON.parse(mydata[i]);

    var div = document.createElement("DIV");
    div.classList.add("card");

    var img = document.createElement("IMG");
    img.setAttribute("src",obj.photo);
    img.setAttribute("alt","Foto del cliente tal"); 

    div.appendChild(img);

    var divcontent = document.createElement("DIV");
    divcontent.classList.add("card-body"); 

    var title = document.createElement("H5");
    title.classList.add("card-title");
    title.innerHTML=obj.first_name;

    var apellido = document.createTextNode("Apellido: " + obj.last_lane + "\n");
    var correo = document.createTextNode("Correo: "+ obj.email );

    divcontent.appendChild(title);
    divcontent.appendChild(apellido);
    divcontent.appendChild(correo);

    div.appendChild(divcontent);

    cardgroup.appendChild(div);
  }



}


function deleteRow(btn){
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function ordenar(number){
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tablebody");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[number];
      y = rows[i + 1].getElementsByTagName("TD")[number];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


function openModal(){
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("openM");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
  
    modal.style.display = "block";
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}

function updateRow(btn)
{
    apellido = window.prompt("Ingrese el apellido");
    nombre = window.prompt("Nombre");
    correo = window.prompt("Correo");
    foto = window.prompt("URL imagen");
    newRow = document.createElement("TR");
    newRow.insertCell(0).innerHTML = apellido;
    newRow.insertCell(1).innerHTML = nombre;
    newRow.insertCell(2).innerHTML = correo;
    newRow.insertCell(3).innerHTML = foto;
    newRow.insertCell(4).innerHTML = '<button id="fila" class="btn btn-danger" onclick="deleteRow(this)">Eliminar</button>';;
    newRow.insertCell(5).innerHTML = '<button id="fila"class= "btn btn-primary" onclick="updateRow(this)">Actualizar</button>';
    row = btn.parentNode.parentNode;
    row.parentNode.replaceChild(newRow,row);
}


    
    
function closeModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

}
function deleteTable(){
    table = document.getElementById("table");
    table.innerHTML = "";
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

}

alert("que belleza papi");
getDataFromJson();
const handleSubmit = (evt) => {
    evt.preventDefault();
    var apellido = document.getElementById("inputApellido").value;
    var nombre = document.getElementById("inputNombre").value;
    var correo = document.getElementById("inputEmail").value;
    var foto = document.getElementById("inputFoto").value;

    var table = document.getElementById("tablebody");
    newRow = document.createElement("TR");
    newRow.insertCell(0).innerHTML = apellido;
    newRow.insertCell(1).innerHTML = nombre;
    newRow.insertCell(2).innerHTML = correo;
    newRow.insertCell(3).innerHTML = '<img class = "fotos" src= "' +foto+'">';;
    newRow.insertCell(5).innerHTML = '<button id="fila" class="btn btn-danger" onclick="deleteRow(this)">Eliminar</button>';;
    newRow.insertCell(4).innerHTML = '<button id="fila"class= "btn btn-primary" onclick="updateRow(this)">Actualizar</button>';
    table.appendChild(newRow);
  };
  
  const form = document.getElementById("form");
  form.addEventListener("submit", handleSubmit);