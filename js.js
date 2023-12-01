function enviar(){
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var curso = document.getElementById("curso").value;
    var materia = document.getElementById("materia").value;
    var calificaciones = document.getElementById("calificaciones").value;

    var tabla= document.getElementById("tbody");

    var fila= tabla.insertRow()
    var colum1= fila.insertCell(0);
    var colum2= fila.insertCell(1);
    var colum3= fila.insertCell(2);
    var colum4= fila.insertCell(3);
    var colum5= fila.insertCell(4);
    var colum6= fila.insertCell(5);

    colum1.innerHTML= nombre;
    colum2.innerHTML= fecha;
    colum3.innerHTML= curso;
    colum4.innerHTML= materia;
    colum5.innerHTML= calificaciones;
    colum6.innerHTML= `<input type="button" value="editar" onclick=editar(this)><input type="button" value="Eliminar" onclick=eliminar(this)>`;
    
    if (parseInt(calificaciones)<7){
        colum1.style.background="red"
        colum2.style.background="red"
        colum3.style.background="red"
        colum4.style.background="red"
        colum5.style.background="red"
        colum6.style.background="red"}
    
        if (parseInt(calificaciones)>=7){
            colum1.style.background="green"
            colum2.style.background="green"
            colum3.style.background="green"
            colum4.style.background="green"
            colum5.style.background="green"
            colum6.style.background="green"}
}
function editar(button){
    var row=button.parentNode.parentNode;
    nota=prompt("ingrese un nueva calificacion");
    row.cells[0].innerHTML=prompt("ingrese un nuevo nombre y apellido")
    row.cells[1].innerHTML=prompt("ingrese nueva fecha")
    row.cells[2].innerHTML=prompt("ingrese un nuevo curso")
    row.cells[3].innerHTML=prompt("ingrese un nueva materia")
    row.cells[4].innerHTML=nota
    if (parseInt(nota)<7){
        row.cells[0].style.background="red"
        row.cells[1].style.background="red"
        row.cells[2].style.background="red"
        row.cells[3].style.background="red"
        row.cells[4].style.background="red"
    }
    if (parseInt(nota)>=7){
        row.cells[0].style.background="green"
        row.cells[1].style.background="green"
        row.cells[2].style.background="green"
        row.cells[3].style.background="green"
        row.cells[4].style.background="green"
    }


}
function eliminar(button){
    var fila= button.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}
function listo(){
    document.getElementById("a").style.display="block";
}

