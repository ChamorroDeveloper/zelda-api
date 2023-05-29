function getCharacters(done) {
    const results = fetch("https://zelda.fanapis.com/api/characters");

    results
        .then(response => response.json())
        .then(data => {
            console.log(data);
            done(data);
        });
}

getCharacters(data => {

    data.data.forEach(personajes => {
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="image-container">
                <img src="${personajes.appearances}" alt="character">
            </div>

            <h2>${personajes.name}</h2>
            <span>${personajes.description}</span>
        
        </article>
        `);

        const main = document.querySelector("main");

        main.append(article);
    });
})