class Almacen{
    #bebidas;

    constructor(){
        this.#bebidas = [];
    }

    // Método que agrega una bebida al almacen
    // Vamos a tener en cuenta que no hay dos bebidas
    // con el mismo identificador
    agregarProducto(bebida){
        // Guardo el identificador de la bebida que voy a buscar
        // si existe en el almacen
        const id = bebida.identificador;

        let encontrado = false;
        // Recorro todas las bebidas
        // for (let i = 0;i < this.#bebidas.length;i++){
        //     const liquido = this.#bebidas[i];

        //     if (liquido.identificador === id){
        //         encontrado = true;
        //         break;
        //     }
        // }
        // for (const liquido of this.#bebidas) {
        //     if (liquido.identificador === id){
        //         encontrado = true;
        //         break;
        //     }
        // }

        // if (!encontrado){
        //     this.#bebidas.push(bebida);
        // }

        const bebidasEncontrar = this.#bebidas.filter(function(liquido){
            return liquido.identificador === id;
        });

        if (bebidasEncontrar.length === 0){
            this.#bebidas.push(bebida);
        }
        console.log("Bebidas: ", this.#bebidas);
    }

    eliminarProducto(identificador){
        for (let i = 0;i < this.#bebidas.length;i++){
            const bebida = this.#bebidas[i];

            if (bebida.identificador === identificador){
                this.#bebidas.splice(i,1);   
                break;
            }
        }
    }

    mostrarInformacion(){
        for (const bebida of this.#bebidas) {
            console.log(bebida.toString());
        }
    }

    calcularPrecioTotal(){
        let precioTotal = 0;
        
        for (const bebida of this.#bebidas) {
            precioTotal = precioTotal + bebida.precio;
        }

        return precioTotal;
    }

    calcularPrecioTotalPorMarca(marca){
        let precioTotal = 0;
        
        for (const bebida of this.#bebidas) {
            if (bebida.marca === marca){
                precioTotal = precioTotal + bebida.precio;
            }
        }

        return precioTotal;
    }

    get bebidas(){
        return this.#bebidas;
    }    
}