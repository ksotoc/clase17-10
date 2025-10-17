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

