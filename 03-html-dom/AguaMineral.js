class AguaMineral extends Bebida{
    #origen;

    constructor(identificador,litros,precio,marca,origen){
        super(identificador,litros,precio,marca);

        this.#origen = origen;
    }

    get origen(){
        return this.#origen;
    }
    set origen(nuevoOrigen){
        this.#origen = nuevoOrigen;
    }

    toString(){
        const texto = super.toString();
        return `${texto}\nOrigen: ${this.#origen}`;
    }
}