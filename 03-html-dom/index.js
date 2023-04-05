function generarTabla(almacen) {
    const tablaAnterior = document.getElementById("tablaBebidas");

    if (tablaAnterior !== null ){
        document.body.removeChild(tablaAnterior);
    }


    const tablaAlmacen = document.createElement("table");
    tablaAlmacen.id = "tablaBebidas"
    
    const filaNombres = document.createElement("tr");
    
    const cabeceraId = document.createElement("th");
    cabeceraId.innerHTML = "Identificador";

    const cabeceraLitros = document.createElement("th");
    cabeceraLitros.innerHTML = "Litros";

    const cabeceraPrecio = document.createElement("th");
    cabeceraPrecio.innerHTML = "Precio";

    const cabeceraMarca = document.createElement("th");
    cabeceraMarca.innerHTML = "Marca";

    const cabeceraOrigen = document.createElement("th");
    cabeceraOrigen.innerHTML = "Origen";

    const cabeceraPorcentajeAzucar = document.createElement("th");
    cabeceraPorcentajeAzucar.innerHTML = "Porcentaje de azucar";

    const cabeceraPromocion = document.createElement("th");
    cabeceraPromocion.innerHTML = "Promocion";

    // Rellenar con los siguientes campos de la cabecera
    
    filaNombres.appendChild(cabeceraId);
    filaNombres.appendChild(cabeceraLitros);
    filaNombres.appendChild(cabeceraPrecio);
    filaNombres.appendChild(cabeceraMarca);
    filaNombres.appendChild(cabeceraOrigen);
    filaNombres.appendChild(cabeceraPorcentajeAzucar);
    filaNombres.appendChild(cabeceraPromocion);

    tablaAlmacen.appendChild(filaNombres);

    for (const bebida of almacen.bebidas) {
        const filaBebida = document.createElement("tr");

        const columnaId = document.createElement("td");
        columnaId.innerHTML = bebida.identificador;

        const columnaLitros = document.createElement("td");
        columnaLitros.innerHTML = bebida.litros;

        const columnaPrecio = document.createElement("td");
        columnaPrecio.innerHTML = bebida.precio;

        const columnaMarca = document.createElement("td");
        columnaMarca.innerHTML = bebida.marca;
        
        
        const columnaOrigen = document.createElement("td");
        if (bebida instanceof AguaMineral){
            columnaOrigen.innerHTML = bebida.origen;
        }
        else{
            columnaOrigen.innerHTML = "X";
        }


        const columnaPorcentajeAzucar = document.createElement("td");
        const columnaPromocion = document.createElement("td");
        
        if (bebida instanceof BebidaAzucarada){
            columnaPorcentajeAzucar.innerHTML = bebida.porcentajeAzucar;
            columnaPromocion.innerHTML = bebida.promocion;
        }
        else{
            columnaPorcentajeAzucar.innerHTML = "X";
            columnaPromocion.innerHTML = "X";
        }

        const columnaEliminar = document.createElement("td");

        const botonEliminar = document.createElement("button");
        botonEliminar.innerHTML = "Eliminar";
        botonEliminar.addEventListener("click",function(){
            almacen.eliminarProducto(bebida.identificador);
            generarTabla(almacen);
        });

        columnaEliminar.appendChild(botonEliminar);
        

        filaBebida.appendChild(columnaId);
        filaBebida.appendChild(columnaLitros);
        filaBebida.appendChild(columnaPrecio);
        filaBebida.appendChild(columnaMarca);

        filaBebida.appendChild(columnaOrigen);
        filaBebida.appendChild(columnaPorcentajeAzucar);
        filaBebida.appendChild(columnaPromocion);

        filaBebida.appendChild(columnaEliminar);

        tablaAlmacen.appendChild(filaBebida);
    }


    
    
    document.body.appendChild(tablaAlmacen);
}

const almacen = new Almacen();

// Obtengo una referencia a un elemento HTML mediante el identificador
const botonAgregarAgua      = document.getElementById("btnAgregarAgua");
const botonAgregarRefresco  = document.getElementById("btnAgregarRefresco");

generarTabla(almacen);


// AddEventListener escucha cuando se produce un evento
// y recibe dos argumentos:
// El primero es el evento que quiero escuchar
// El segundo es la funcion con lo que quiero que haga
// al producirse el evento asociado
botonAgregarAgua.addEventListener("click",function() {
    const divAgregarAgua = document.createElement("div");
    divAgregarAgua.classList.add('formulario');
    document.body.appendChild(divAgregarAgua);
    
    
    const divIdentificador = document.createElement("div");
    divIdentificador.classList.add("fila-formulario");
    divAgregarAgua.appendChild(divIdentificador);
    
    const labelIdentificador     = document.createElement("label");
    labelIdentificador.innerHTML = "<b>Identificador</b>";
    labelIdentificador.classList.add("etiqueta-campo");
    divIdentificador.appendChild(labelIdentificador);


    const inputIdentificador = document.createElement("input");
    inputIdentificador.id = "identificador";
    divIdentificador.appendChild(inputIdentificador);
    
    const divLitros = document.createElement("div");
    divLitros.classList.add("fila-formulario");
    divAgregarAgua.appendChild(divLitros);

    const labelLitros = document.createElement("label");
    labelLitros.innerHTML = "<b>Litros</b>";
    labelLitros.classList.add("etiqueta-campo");
    divLitros.appendChild(labelLitros);

    const inputLitros = document.createElement("input");
    inputLitros.id = "litros";
    divLitros.appendChild(inputLitros);

    const divPrecio = document.createElement("div");
    divPrecio.classList.add("fila-formulario");
    divAgregarAgua.appendChild(divPrecio);

    const labelPrecio = document.createElement("label");
    labelPrecio.innerHTML = "<b>Precio</b>";
    labelPrecio.classList.add("etiqueta-campo");
    divPrecio.appendChild(labelPrecio);

    const inputPrecio = document.createElement("input");
    inputPrecio.id = "precio";
    divPrecio.appendChild(inputPrecio);

    const divMarca = document.createElement("div");
    divMarca.classList.add("fila-formulario");
    divAgregarAgua.appendChild(divMarca);

    const labelMarca = document.createElement("label");
    labelMarca.innerHTML = "<b>Marca</b>";
    labelMarca.classList.add("etiqueta-campo");
    divMarca.appendChild(labelMarca);

    const inputMarca = document.createElement("input");
    inputMarca.id = "marca";
    divMarca.appendChild(inputMarca);

    const divOrigen = document.createElement("div");
    divOrigen.classList.add("fila-formulario");
    divAgregarAgua.appendChild(divOrigen);

    const labelOrigen = document.createElement("label");
    labelOrigen.innerHTML = "<b>Origen</b>";
    labelOrigen.classList.add("etiqueta-campo");
    divOrigen.appendChild(labelOrigen);

    const inputOrigen = document.createElement("input");
    inputOrigen.id = "origen";
    divOrigen.appendChild(inputOrigen);

    // document.body.removeChild(botonAgregarAgua);
    botonAgregarAgua.style.display     = "none";
    botonAgregarRefresco.style.display = "none";

    const botonGuardarDatosAgua = document.createElement("button");
    botonGuardarDatosAgua.innerHTML = "Guardar Datos";
    divAgregarAgua.appendChild(botonGuardarDatosAgua);

    // Eventos de recoger datos del agua
    // y añadir el agua al almacen
    botonGuardarDatosAgua.addEventListener("click",function(){
        const identificadorAgua = document.getElementById("identificador").value;
        const litrosAgua        = document.getElementById("litros").value;
        const precioAgua        = document.getElementById("precio").value;
        const marcaAgua         = document.getElementById("marca").value;
        const origenAgua        = document.getElementById("origen").value;

        const agua = new AguaMineral(identificadorAgua,litrosAgua,precioAgua,marcaAgua,origenAgua);

        almacen.agregarProducto(agua);

        console.log(almacen);

        document.body.removeChild(divAgregarAgua);

        botonAgregarAgua.style.display     = "inline";
        botonAgregarRefresco.style.display = "inline";
        generarTabla(almacen);
    });

});

botonAgregarRefresco.addEventListener("click",function() {
    const divAgregarRefresco = document.createElement("div");
    divAgregarRefresco.classList.add('formulario');
    document.body.appendChild(divAgregarRefresco);
    
    
    const divIdentificador = document.createElement("div");
    divIdentificador.classList.add("fila-formulario");
    divAgregarRefresco.appendChild(divIdentificador);
    
    const labelIdentificador     = document.createElement("label");
    labelIdentificador.innerHTML = "<b>Identificador</b>";
    labelIdentificador.classList.add("etiqueta-campo");
    divIdentificador.appendChild(labelIdentificador);


    const inputIdentificador = document.createElement("input");
    inputIdentificador.id = "identificador";
    divIdentificador.appendChild(inputIdentificador);
    
    const divLitros = document.createElement("div");
    divLitros.classList.add("fila-formulario");
    divAgregarRefresco.appendChild(divLitros);

    const labelLitros = document.createElement("label");
    labelLitros.innerHTML = "<b>Litros</b>";
    labelLitros.classList.add("etiqueta-campo");
    divLitros.appendChild(labelLitros);

    const inputLitros = document.createElement("input");
    inputLitros.id = "litros";
    divLitros.appendChild(inputLitros);

    const divPrecio = document.createElement("div");
    divPrecio.classList.add("fila-formulario");
    divAgregarRefresco.appendChild(divPrecio);

    const labelPrecio = document.createElement("label");
    labelPrecio.innerHTML = "<b>Precio</b>";
    labelPrecio.classList.add("etiqueta-campo");
    divPrecio.appendChild(labelPrecio);

    const inputPrecio = document.createElement("input");
    inputPrecio.id = "precio";
    divPrecio.appendChild(inputPrecio);

    const divMarca = document.createElement("div");
    divMarca.classList.add("fila-formulario");
    divAgregarRefresco.appendChild(divMarca);

    const labelMarca = document.createElement("label");
    labelMarca.innerHTML = "<b>Marca</b>";
    labelMarca.classList.add("etiqueta-campo");
    divMarca.appendChild(labelMarca);

    const inputMarca = document.createElement("input");
    inputMarca.id = "marca";
    divMarca.appendChild(inputMarca);

    const divPorcentajeAzucar = document.createElement("div");
    divPorcentajeAzucar.classList.add("fila-formulario");
    divAgregarRefresco.appendChild(divPorcentajeAzucar);

    const labelPorcentajeAzucar = document.createElement("label");
    labelPorcentajeAzucar.innerHTML = "<b>% Azucar</b>";
    labelPorcentajeAzucar.classList.add("etiqueta-campo");
    divPorcentajeAzucar.appendChild(labelPorcentajeAzucar);

    const inputPorcentajeAzucar = document.createElement("input");
    inputPorcentajeAzucar.id = "porcentaje-azucar";
    divPorcentajeAzucar.appendChild(inputPorcentajeAzucar);

    const divPromocion = document.createElement("div");
    divPromocion.classList.add("fila-formulario");
    divAgregarRefresco.appendChild(divPromocion);

    const labelPromocion = document.createElement("label");
    labelPromocion.innerHTML = "<b>Promocion</b>";
    labelPromocion.classList.add("etiqueta-campo");
    divPromocion.appendChild(labelPromocion);

    const inputPromocion = document.createElement("input");
    inputPromocion.id = "promocion";
    divPromocion.appendChild(inputPromocion);

    // document.body.removeChild(botonAgregarAgua);
    botonAgregarAgua.style.display     = "none";
    botonAgregarRefresco.style.display = "none";

    const botonGuardarDatosRefresco = document.createElement("button");
    botonGuardarDatosRefresco.innerHTML = "Guardar Datos";
    divAgregarRefresco.appendChild(botonGuardarDatosRefresco);

    // Eventos de recoger datos del agua
    // y añadir el agua al almacen
    botonGuardarDatosRefresco.addEventListener("click",function(){
        const identificadorRefresco     = document.getElementById("identificador").value;
        const litrosRefresco            = document.getElementById("litros").value;
        const precioRefresco            = document.getElementById("precio").value;
        const marcaRefresco             = document.getElementById("marca").value;
        const porcentajeAzucarRefresco  = document.getElementById("porcentaje-azucar").value;
        const promocionRefresco         = document.getElementById("promocion").value;

        const refresco = new BebidaAzucarada(identificadorRefresco,litrosRefresco,precioRefresco,marcaRefresco,porcentajeAzucarRefresco,promocionRefresco);

        almacen.agregarProducto(refresco);

        console.log(almacen);

        document.body.removeChild(divAgregarRefresco);

        botonAgregarAgua.style.display     = "inline";
        botonAgregarRefresco.style.display = "inline";

        generarTabla(almacen);
    });

});