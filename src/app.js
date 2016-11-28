
/*ES6*/

var Vermelho = () => console.log("vermelho");
Vermelho();


/**********************************************************************************************************/

/* Arrow Function */
console.log('---------------------------------------------');
var bob = {
	_name:"Dudu",
	_friends: ["Guilherme","Camila","Murilo"],
	printFriends: function printFriends(){
		this._friends.forEach(f => console.log(this._name + " conhece " + f));
		/*
		Antigamente

		var self = this;
		this._friends.forEach(function(f){
			return console.log(self._name + " Conhece " + f);
		});
		*/
	}
}

bob.printFriends();

/**********************************************************************************************************/

/* Definindo Class */
console.log('---------------------------------------------');
class Color{
    constructor(codeColor,nameColor){
        this.codeColor = codeColor;
        this.nameColor = nameColor;
    };
    getColor(){
        return {codeColor:this.codeColor,nameColor:this.nameColor};
    };
}

let red = new Color("red","Red");
console.log(red.getColor());


/* String Template */

let name = "Eduardo Kawassaki";
let age = 27;
let text = `
        name: ${ name }
        age: ${age }`;

console.log(text);


/**********************************************************************************************************/

/*Valores Default*/

/*
function test(valueA){
    var valueB = arguments.length <=1 || arguments[1] === undefined ? 4 : arguments[1];
    return valueA + valueB;
}

console.log(test(2));

    */

function test(valueA,valueB = 4){
    return valueA + valueB;
}

console.log(test(1));


/**********************************************************************************************************/


/*Listar registros com For OF*/
console.log('---------------------------------------------');
var list = ["test",27,{name:"Eduardo"}];

for(let i of list){
    console.log(i);
}



/**********************************************************************************************************/

/*Herança*/
console.log('---------------------------------------------');
class Pessoa{
    constructor(name,email,phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    toString(){
        return `Name: ${ this.name}
        Email: ${ this.email}
        Phone: ${ this.phone}
        `;
    }
}

class Cliente extends Pessoa{
    constructor(id,name,email,phone){
    	//super pega do constructor
        super(name,email,phone);
        this.id = id;
    };
    toString(){
        return `
        id: ${this.id}
        ${super.toString()}`;
    }
}
var v = new Cliente(0,"Eduardo","eduardo@mail.com","999999999");
console.log(v.toString());


/**********************************************************************************************************/

/*Set Date*/
console.log('---------------------------------------------');
let cor = new Set();
cor.add("Vermelho").add("Azul").add("preto");

if(cor.size === 3 && cor.has("preto")){
    for(let key of cor.values()){
        console.log(key);
    }
}

/**********************************************************************************************************/

/*Formatar Número*/

console.log('---------------------------------------------');

var number = 123456.34;
var En = new Intl.NumberFormat('en-US').format(number);
var Br = new Intl.NumberFormat('pt-BR').format(number);
var Jp = new Intl.NumberFormat('ja-JP').format(number);
console.log(En);
console.log(Br);
console.log(Jp);



var USD = new Intl.NumberFormat("en-US", { style:"currency", currency:"USD"}).format(56545654.40);
var BRL = new Intl.NumberFormat("pt-BR", { style:"currency", currency:"BRL"});
var JAP = new Intl.NumberFormat("ja-JP", { style:"currency", currency:"JPY"}).format(965656.40);;

console.log(USD);
console.log(BRL.format(7910109291.40));
console.log(JAP);




/**********************************************************************************************************/

/*Formatar Datas*/

console.log('---------------------------------------------');

var date = new Date(Date.UTC(2016, 11, 20, 3, 0, 0));

var JP2 = new Intl.DateTimeFormat("ja-JP-u-ca-japanese");
var US2 = new Intl.DateTimeFormat("en-US");
var DE2 = new Intl.DateTimeFormat("de-DE");
var BR2 = new Intl.DateTimeFormat("pt-BR");


console.log(US2.format(new Date(date)));
console.log(BR2.format(new Date("2016-05-10")));
console.log(DE2.format(new Date("2016-11-20")));
console.log(JP2.format(new Date(date)));
console.log(new Intl.DateTimeFormat('ja-JP-u-ca-japanese').format(date));


/**********************************************************************************************************/

/*Formatar Datas*/

console.log('---------------------------------------------');

console.log("hello".indexOf("ello") === 1);
console.log("hello".startsWith("ello",1));
console.log("hello".endsWith("hello",5));
console.log("hello".includes("o",1));
console.log("hello".includes("e",3));

