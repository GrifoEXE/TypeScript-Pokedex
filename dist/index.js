"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var container = document.getElementById("app");
var numOfPokemonInput = document.getElementById("numOfPokemon");
var selectType = document.getElementById("TypeFilter");
selectType.addEventListener("change", function () {
    container.innerHTML = "";
    var numOfPokemon = Number(numOfPokemonInput.value);
    var selectedType = selectType.value;
    if (selectedType !== "null") {
        fetchDataByType(numOfPokemon);
    }
    else {
        fetchData(numOfPokemon);
    }
});
numOfPokemonInput.addEventListener("change", function () {
    var numOfPokemon = Number(numOfPokemonInput.value);
    container.innerHTML = "";
    fetchData(numOfPokemon);
});
var showPokemon = function (pokemon) {
    var output = "\n        <a class=\"card\" href = \"https://www.pokemon.com/br/pokedex/".concat(pokemon.name, "\" target=\"_blank\">\n            <span class=\"card--id\">#").concat(pokemon.id, "</span>\n            <img class=\"card--image\" src=").concat(pokemon.image, " alt=").concat(pokemon.name, " />\n            <h1 class=\"card--name\">").concat(pokemon.name, "</h1>\n            <span class=\"card--type--").concat(pokemon.type1, "\">").concat(pokemon.type1, "</span>\n\t\t\t<span class=\"card--type--").concat(pokemon.type2, "\">").concat(pokemon.type2, "</span>\n\t\t\t<span class=\"card--type--").concat(pokemon.move1.type, "\">").concat(pokemon.move1.power, "</span>\n        </a>\n    ");
    container.innerHTML += output;
};
var getPokemon = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var data, pokemon, pokemonType1, pokemonType2, pokemonMove, selectedType, dadosPokemon, dadosPokemon;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/".concat(id))];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                pokemon = _a.sent();
                pokemonType1 = pokemon.types[0].type.name;
                pokemonType2 = pokemon.types[1]
                    ? pokemon.types[1].type.name
                    : "";
                pokemonMove = {
                    name: "attack",
                    type: pokemonType1,
                    power: Math.round(Math.random() * 100)
                };
                selectedType = selectType.value;
                if (pokemonType2 != null) {
                    dadosPokemon = {
                        id: pokemon.id,
                        name: pokemon.name,
                        image: "".concat(pokemon.sprites.front_default),
                        type1: pokemonType1,
                        type2: pokemonType2,
                        url: "".concat(pokemon.species.url),
                        move1: pokemonMove
                    };
                    showPokemon(dadosPokemon);
                }
                else {
                    dadosPokemon = {
                        id: pokemon.id,
                        name: pokemon.name,
                        image: "".concat(pokemon.sprites.front_default),
                        type1: pokemonType1,
                        url: "".concat(pokemon.species.url),
                        move1: pokemonMove
                    };
                    showPokemon(dadosPokemon);
                }
                return [2 /*return*/];
        }
    });
}); };
var getPokemonByType = function (id, pokemonType) { return __awaiter(void 0, void 0, void 0, function () {
    var data, pokemon, pokemonType1, pokemonType2, pokemonMove, selectedType, dadosPokemon;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/".concat(id))];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                pokemon = _a.sent();
                pokemonType1 = pokemon.types[0].type.name;
                pokemonType2 = pokemon.types[1]
                    ? pokemon.types[1].type.name
                    : "";
                pokemonMove = {
                    name: "attack",
                    type: pokemonType1,
                    power: Math.round(Math.random() * 100)
                };
                selectedType = pokemonType;
                if (selectedType !== "null") {
                    if (pokemonType1 === selectedType || pokemonType2 === selectedType) {
                        dadosPokemon = {
                            id: pokemon.id,
                            name: pokemon.name,
                            image: "".concat(pokemon.sprites.front_default),
                            type1: pokemonType1,
                            type2: pokemonType2,
                            url: "".concat(pokemon.species.url),
                            move1: pokemonMove
                        };
                        showPokemon(dadosPokemon);
                    }
                }
                return [2 /*return*/];
        }
    });
}); };
var fetchData = function (numOfPokemon) {
    for (var i = 1; i <= numOfPokemon; i++) {
        getPokemon(i);
    }
};
var fetchDataByType = function (numOfPokemon) {
    for (var i = 1; i <= numOfPokemon; i++) {
        getPokemonByType(i, selectType.value);
    }
};
//# sourceMappingURL=index.js.map