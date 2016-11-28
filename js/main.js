"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*ES6*/

var Vermelho = function Vermelho() {
    return console.log("vermelho");
};
Vermelho();

/**********************************************************************************************************/

/* Arrow Function */
console.log('---------------------------------------------');
var bob = {
    _name: "Dudu",
    _friends: ["Guilherme", "Camila", "Murilo"],
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + " conhece " + f);
        });
        /*
        Antigamente
        		var self = this;
        this._friends.forEach(function(f){
        	return console.log(self._name + " Conhece " + f);
        });
        */
    }
};

bob.printFriends();

/**********************************************************************************************************/

/* Definindo Class */
console.log('---------------------------------------------');

var Color = function () {
    function Color(codeColor, nameColor) {
        _classCallCheck(this, Color);

        this.codeColor = codeColor;
        this.nameColor = nameColor;
    }

    _createClass(Color, [{
        key: "getColor",
        value: function getColor() {
            return { codeColor: this.codeColor, nameColor: this.nameColor };
        }
    }]);

    return Color;
}();

var red = new Color("red", "Red");
console.log(red.getColor());

/* String Template */

var name = "Eduardo Kawassaki";
var age = 27;
var text = "\n        name: " + name + "\n        age: " + age;

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

function test(valueA) {
    var valueB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    return valueA + valueB;
}

console.log(test(1));

/**********************************************************************************************************/

/*Listar registros com For OF*/
console.log('---------------------------------------------');
var list = ["test", 27, { name: "Eduardo" }];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        console.log(i);
    }

    /**********************************************************************************************************/

    /*Herança*/
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log('---------------------------------------------');

var Pessoa = function () {
    function Pessoa(name, email, phone) {
        _classCallCheck(this, Pessoa);

        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    _createClass(Pessoa, [{
        key: "toString",
        value: function toString() {
            return "Name: " + this.name + "\n        Email: " + this.email + "\n        Phone: " + this.phone + "\n        ";
        }
    }]);

    return Pessoa;
}();

var Cliente = function (_Pessoa) {
    _inherits(Cliente, _Pessoa);

    function Cliente(id, name, email, phone) {
        _classCallCheck(this, Cliente);

        var _this2 = _possibleConstructorReturn(this, (Cliente.__proto__ || Object.getPrototypeOf(Cliente)).call(this, name, email, phone));
        //super pega do constructor


        _this2.id = id;
        return _this2;
    }

    _createClass(Cliente, [{
        key: "toString",
        value: function toString() {
            return "\n        id: " + this.id + "\n        " + _get(Cliente.prototype.__proto__ || Object.getPrototypeOf(Cliente.prototype), "toString", this).call(this);
        }
    }]);

    return Cliente;
}(Pessoa);

var v = new Cliente(0, "Eduardo", "eduardo@mail.com", "999999999");
console.log(v.toString());

/**********************************************************************************************************/

/*Set Date*/
console.log('---------------------------------------------');
var cor = new Set();
cor.add("Vermelho").add("Azul").add("preto");

if (cor.size === 3 && cor.has("preto")) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = cor.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            console.log(key);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
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

var USD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(56545654.40);
var BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
var JAP = new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(965656.40);;

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
console.log("hello".startsWith("ello", 1));
console.log("hello".endsWith("hello", 5));
console.log("hello".includes("o", 1));
console.log("hello".includes("e", 3));
