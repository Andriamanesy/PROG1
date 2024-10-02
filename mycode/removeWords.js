function removeWords(original, wordsToRemove) {
    let mots = original.split(' ');

    let filtreMots = mots.filter(mot => !wordsToRemove.includes(mot));

    return filtreMots.join(' ');
}

