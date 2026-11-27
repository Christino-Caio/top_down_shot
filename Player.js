class Player{

    #Px;
    #Py;
    cor;



    constructor(Px,Py,cor){

        this.#Px = Px;
        this.#Py = Py;
        this.cor =cor;

    }


    show(){

        fill(this.cor);
        square(this.#Px,this.#Py,50);

        cursor(CROSS)

    }

    movimento(){
        let speed =3;

        

        if(keyIsDown(UP_ARROW)){

            this.#Py = this.#Py - speed;
        }

        if(keyIsDown(DOWN_ARROW)){

            this.#Py = this.#Py + speed;
        }

        if(keyIsDown(LEFT_ARROW)){

            this.#Px = this.#Px - speed;
        }
        
        if(keyIsDown(RIGHT_ARROW)){

            this.#Px = this.#Px + speed;
        }

        //se for pra direita, volta pela esquerda;
        if(this.#Px>755){

            this.#Px = 1;
        }

        //se for pra direita, volta pela esquerda;
        if(this.#Px<1){

            this.#Px = 755;
        }

        //se for pra direita, volta pela esquerda;
        if(this.#Px>755){

            this.#Px = 1;
        }

        //se for pra cima, volta por baixo;
        if(this.#Py<1){

            this.#Py = 547;
        }

        if(this.#Py>547){

            this.#Py = 1;
        }

    }

}