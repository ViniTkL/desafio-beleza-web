class Model{
    constructor(){
        this.dados = [];
    }

    async getData(){
       const infos = await fetch('https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/cart');
       const dadosJson = await infos.json();

       this.dados = dadosJson;

       console.log(this.dados, "deois", dadosJson);
    }

}