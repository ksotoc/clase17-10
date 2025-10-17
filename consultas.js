const grid = document.querySelector('#grid')

// await
async function Mostrar() {
    try {
        const r = await fetch('https://pokeapi.co/api/v2/pokemon')
        const d = await r.json()

        const promesas = d.results.map(p =>
            fetch(p.url).then(r1 => r1.json())
        );
        const detalles = await Promise.all(promesas);

        for(const p of detalles){
            const card = document.createElement('article');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = p.sprites.front_default;

            const nombre = document.createElement('div')
            nombre.className = 'nombre';
            nombre.textContent = p.name;

            const tipo = document.createElement('div')
            tipo.className = 'tipo';
            tipo.textContent = p.types[0].type.name;

            const stats = document.createElement('div')
            tipo.className = 'stats';
            tipo.textContent = `Altura: ${p.height} - Peso: ${p.weight}`;

            card.append(img, nombre, tipo, stats);
            grid.appendChild(card);
        }
         

    } catch (error) {
        console.error('ERROR: ', error)
        grid.textContent(error)
    }


}

Mostrar()