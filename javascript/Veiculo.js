class Veiculo{
    constructor(marca, modelo, ano){
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
    }
    /**
     * 
     */
    get exibirDados() {
        return ` Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano: ${this.ano}.`;
    }
    set setMarca(marca){
        this.marca=marca;
    }
    set setModelo(modelo){
        this.modelo=modelo;
    }
    set setAno(ano){
        this.ano=ano;
    }
}
export{Veiculo};