document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var miAside = document.getElementById('aside');

    toggleButton.addEventListener('click', function () {
        if (miAside.style.display === 'none') {
            miAside.style.display = 'block';
            toggleButton.classList.remove('closed');
            toggleButton.classList.add('opened');
        } else {
            miAside.style.display = 'none';
            toggleButton.classList.remove('opened');
            toggleButton.classList.add('closed');
        }
    });
});


function añadirRegistro() {
    var tabla = document.getElementById("datos");

    var nuevaCelda = tabla.insertRow(tabla.rows.length);

    for (var i = 0; i < tabla.rows[0].cells.length; i++) {
        var nueva = nuevaCelda.insertCell(i);

        if (i === 0) {
            var btnEnviar = document.createElement('button');
            var iconEnviar = document.createElement('img');
            iconEnviar.src = 'img/añadir.png';
            iconEnviar.className = "bg-green-300";
            iconEnviar.className = "w-[21px] h-[19px] ml-[5px] mt-[4px]";

            var btnEliminar = document.createElement('button');
            var iconEliminar = document.createElement('img');
            iconEliminar.src = 'img/cancelar.png';
            iconEliminar.className = "w-[21px] h-[19px] ml-[5px] mt-[4px]";

            btnEnviar.appendChild(iconEnviar);
            btnEnviar.addEventListener('click', function () {});
            
            btnEliminar.appendChild(iconEliminar);
            btnEliminar.addEventListener('click', function () {
                tabla.deleteRow(nuevaCelda.rowIndex);
            });

            nueva.appendChild(btnEliminar);
            nueva.appendChild(btnEnviar);
        } else {
            var nombreCelda = tabla.rows[0].cells[i].textContent.toLowerCase();

            if (nombreCelda.includes('fecha')) {
                var fechaInput = document.createElement('input');
                fechaInput.type = 'date';
                fechaInput.className = "border border-solid border-gray-300 text-center px-2 py-1 w-full h-full box-border";
                nueva.appendChild(fechaInput);
            } else {
                var registro = document.createElement('input');
                registro.type = "text";
                registro.className = "border border-solid border-gray-300 text-center px-2 py-1 w-full h-full box-border";
                nueva.appendChild(registro);
            }
        }
    }

    nuevaCelda.cells[0].querySelector('input').focus();
}


