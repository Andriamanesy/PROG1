function getMostPopularPlaces(...quartiers) {
    let Compte = {};

    quartiers.forEach(quartier => {
        Compte[quartier] = (Compte[quartier] || 0) + 1;
    });


    let filtreDeQuartier = Object.keys(Compte).sort((a, b) => Compte[b] - Compte[a]);

    return `${filtreDeQuartier[0]} ${filtreDeQuartier[1]}`;
}