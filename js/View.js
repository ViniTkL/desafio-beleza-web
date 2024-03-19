class View{
    constructor(dado){
        this.dado = dado;
    }


    render(){
            return`
            <div>
                <img src="${this.dado.photo}" />
                <p>${this.dado.description}</p>
                <p>${this.dado.price}</p>
                <p>${this.dado.discount}</p>
            </div>
                `
       
    }
}