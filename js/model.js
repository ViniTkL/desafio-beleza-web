class Model{
    constructor(){
        this.dados = [];
       
    }

    async getData(){
       const infos = await fetch('https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/cart');
       this.dados = await infos.json();

       console.log(this.dados);
    }

}