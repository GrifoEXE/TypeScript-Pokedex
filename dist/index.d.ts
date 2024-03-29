declare const container: HTMLElement;
declare const numOfPokemonInput: HTMLInputElement;
declare const selectType: HTMLSelectElement;
interface IPokemon {
    id: number;
    name: string;
    image: string;
    type1: string;
    type2?: string;
    url: string;
    move1: pokemonMove;
}
interface pokemonMove {
    name: string;
    type: string;
    power: number;
}
declare const showPokemon: (pokemon: IPokemon) => void;
declare const getPokemon: (id: number) => Promise<void>;
declare const getPokemonByType: (id: number, pokemonType: string) => Promise<void>;
declare const fetchData: (numOfPokemon: number) => void;
declare const fetchDataByType: (numOfPokemon: number) => void;
