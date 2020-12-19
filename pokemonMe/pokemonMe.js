getPokemon('https://pokeapi.co/api/v2/pokemon?limit=151');
// const pokemonMeBtn = document.getElementById('pokemonMe');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
// const pokemonBtn = document.getElementById('pokemonBtn');

async function getPokemon(url){
    try {
        const response = await fetch (url);
        if (!response.ok){
            throw Error(response.statusText)
        } else{
        const fetchJson = await response.json();
        renderPokemon(fetchJson)
        console.log('Fetch: ', fetchJson)
        }
    } catch (error){
        console.log(error);

    }
}

function renderPokemon(data) {

    const pokemonContainer = document.getElementById('pokemonList');

    // if (data.next) {
    //     //console.log(pokemonMeBtn);
    //     console.log(nextBtn);
    //     nextBtn.classList.add("visible");
    //     //pokemonBtn.classList.add("hidden");
    //     nextBtn.setAttribute('onclick', `getPokemon('${data.next}')`);
    // } else {
    //     nextBtn.classList.add("hidden");
    // }
    // if (data.previous) {
    //     prevBtn.classList.add("visible");
    //     //pokemonBtn.classList.add("hidden");
    //     prevBtn.setAttribute('onclick', `getPokemon('${data.previous}')`);
    // } else {
    //     prevBtn.classList.add("hidden");
    // }

    data.results.forEach( (pokemon, index) => {
        const listItem = document.createElement('div');
        //listItem.classList.add("grid-container");
        //listItem.textContent = pokemon.name;
        listItem.innerHTML = 
            `
            <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <img alt="Pokemon image" 
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png"/>
                    </div>
                    <div class="card-back">
                        <h2>${pokemon.name}</h2>
                        <div class="cardDetails"></div>
                    </div>
                </div>
            </div>
            
            `
        listItem.id = pokemon.name;
        
        //console.log(`${listItem.id}`);
        pokemonContainer.appendChild(listItem);

        listItem.addEventListener('click', function(event) {
        event.preventDefault();
        getPokemonDetails(listItem.id, pokemon.url);
        });
    })
}

function getPokemonDetails(id, url) {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log('DETAILS: ', json);
            const li = document.getElementById(id);
            console.log(li);
            const details = document.querySelector(`#${id} .cardDetails`);
            //details.classList.add("grid-container");
            details.innerHTML =
                `
                <p>Base Experience: ${json.base_experience}</p>
                <p>Height: ${json.height}</P>
                Weight: ${json.weight}
                `    
        })
}