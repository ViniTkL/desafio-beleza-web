class Controller{ 
    constructor(){
        console.log("hahahahah");
        this.infos = new Model();

        this.show();
    }

    show(){
        this.infos.getData();
    }
}