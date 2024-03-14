class View{
    constructor(dados){
        this.dados = dados;
    }


    render(){
        return`
        <tr>
            <td>${this.dados.price}</td>
            <td>${this.dados.discont}</td>
            <td>${this.dados.description}</td>
            <td>${this.dados.id}</td>
        </tr>
            `
    }
}