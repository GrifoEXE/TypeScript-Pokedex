declare const container: HTMLElement;
declare const numOfPokemon: number;
interface IPokemon {
    id: number;
    name: string;
    image: string;
    type: string;
    url: string;
}
declare const showPokemon: (pokemon: IPokemon) => void;
declare const getPokemon: (id: number) => Promise<void>;
declare const fetchData: () => void;
