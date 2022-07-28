declare const container: HTMLElement;
declare const numOfPokemonInput: HTMLInputElement;
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
declare const fetchData: (numOfPokemon: number) => void;
