class Controller{ 
    constructor(){
        console.log("hahahahah");
        this.infos = new Model();
        this.infos.getData();
        console.log(this.infos.dados);

        this.lista = document.querySelector(".itens-list")

        this.listing();
    }

   
    listing(){


        for(const [index, item] of this.infos.dados.entries()){
            const view = new View(item);

            this.lista.innerHTML += view.render();
        }
    }
}