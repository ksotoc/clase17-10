// Consumir de una API endpoint
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log('Datos: ', data))
    .catch(e => console.error('Error: ', e))

// Filtrando datos
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const filtrado = data.map(post => ({
            cuerpo: post.body,
            titulo: post.title
        }))
        console.log('Filtrado: ', filtrado)
    })
    .catch(e => console.error('Error: ', e))

// Con fetch anidado
//height, id, sprites.front_default, weight
fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
        const promesas = r.results.map(poke => 
            fetch(poke.url)
            .then(r2 = r2.json())
        )
        Promise.all(promesas)
            .then(d => {
                const filtrado = data.map(pk => ({
                nombre: pk.name,
                id: pk.id,
                altura: pk.height,
                peso: pk.weight
            }))
            console.log(d)
        })
        
    })
    .catch(e => console.error('Error: ', e)) 
