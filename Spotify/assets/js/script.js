document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Alice in Chains', image: './imgs/dirt.jpg' },  
        { name: 'Nirvana', image: './imgs/in utero.jpg' },       
        { name: 'Korn', image: './imgs/korn.jpg' },              
        { name: 'SOAD', image: './imgs/soad.jpg' },              
        { name: 'Radiohead', image: './imgs/radiohead.jpg' },    
        { name: 'Pink Floyd', image: './imgs/tdsom.jpg' }        
    ];

    const albumsData = [
        { name: 'Facelift', artist: 'Alice in Chains', image: './imgs/facelift.jpg' },  
        { name: 'In Utero', artist: 'Nirvana', image: './imgs/in utero.jpg' },          
        { name: 'Issues', artist: 'Korn', image: './imgs/korn.jpg' },                  
        { name: 'Toxicity', artist: 'SOAD', image: './imgs/soad.jpg' },                
        { name: 'Pablo Honey', artist: 'Radiohead', image: './imgs/radiohead.jpg' },    
        { name: 'The Dark Side of the Moon', artist: 'Pink Floyd', image: './imgs/tdsom.jpg' }  
    ];

    const artistasGrid = document.querySelector('.artistas-grid')
    const albuns = document.querySelector('.albuns-grid')

    artistsData.forEach(artist => {
        const artistcard = document.createElement('div')
        artistcard.classList.add('artista-card')

        artistcard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
        `;

        artistasGrid.appendChild(artistcard)
    })

    albumsData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt="${album.name}">
            
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `;

        albuns.appendChild(albumCard)
    })
});
