const container: HTMLElement = document.getElementById("app")!;
const numOfPokemonInput: HTMLInputElement = document.getElementById("numOfPokemon")! as HTMLInputElement;

numOfPokemonInput.addEventListener("change", (): void => {
	const numOfPokemon = Number(numOfPokemonInput.value);
	container.innerHTML = "";
	fetchData(numOfPokemon);
});

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

const showPokemon = (pokemon: IPokemon): void => {
	let output: string = `
        <a class="card" href = "https://www.pokemon.com/br/pokedex/${pokemon.name}" target="_blank">
            <span class="card--id">#${pokemon.id}</span>
            <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
            <h1 class="card--name">${pokemon.name}</h1>
            <span class="card--type--${pokemon.type1}">${pokemon.type1}</span>
			<span class="card--type--${pokemon.type2}">${pokemon.type2}</span>
			<span class="card--type--${pokemon.move1.type}">${pokemon.move1.power}</span>
        </a>
    `;
	container.innerHTML += output;
};

const getPokemon = async (id: number): Promise<void> => {
	const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const pokemon: any = await data.json();
	const pokemonType1: string = pokemon.types[0].type.name;
	const pokemonType2: string = pokemon.types[1]
		? pokemon.types[1].type.name
		: "";
	const pokemonMove: pokemonMove = {
		name: 'attack',
		type: pokemonType1,
		power: (Math.round(Math.random()*1000))
	};

	if (pokemonType2 != null) {
		const dadosPokemon = {
			id: pokemon.id,
			name: pokemon.name,
			image: `${pokemon.sprites.front_default}`,
			type1: pokemonType1,
			type2: pokemonType2,
			url: `${pokemon.species.url}`,
			move1: pokemonMove,
		};
		showPokemon(dadosPokemon);
	} else {
		const dadosPokemon = {
			id: pokemon.id,
			name: pokemon.name,
			image: `${pokemon.sprites.front_default}`,
			type1: pokemonType1,
			url: `${pokemon.species.url}`,
			move1: pokemonMove,
		};
		showPokemon(dadosPokemon);
	}
};

const fetchData = (numOfPokemon : number): void => {
	for (let i = 1; i <= numOfPokemon; i++) {
		getPokemon(i);
	}
};


