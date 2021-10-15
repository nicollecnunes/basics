// boolean (true | false)
let isOpen : boolean;
isOpen = true;

// string ('a' | "a" | `a`)
let message : string;
message = `Aberto ${isOpen}`;

// number 
let total : number;
total = 0xff0;
total  = 20;
total = 20.2;

// array (type[])
let items: number[];
items = [1,2,3];
items = [1.2, 1, 0xff5] ;

let items2: string[];
items2 = ["oi", "oi"];

let values: Array<number>; // generic notation
values = [1,2,3];

// tuple -> array que se sabe a quantidade de itens e o tipo deles
let title: [number, string];
title = [1, "oi"];

// enum
enum Colors
{
    white = '#fff',
    black = '#000'
}

// any -> qualquer coisa
let coisa: any;
coisa = true;
coisa = [1, "ola"];
coisa = 8;

// void
function logger() : void
{
    console.log("ola");
}

// null & undefined
type Bla = string | undefined

// never
function error(): never{
    throw new Error("error");
}

// object
let cart: object
cart = {
    key: "fi",
    ola: true
};

// Type Inference
let message2 = "mensagem"; // nao precisa por message2 : string

window.addEventListener("click", (e) =>{ // nao precisa por (e : MouseEvent)
    console.log(e.target);
});


