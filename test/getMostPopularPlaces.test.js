import { expect } from "chai";
import { describe } from "mocha";
import { getMostPopularPlaces } from "../mycode/getMostPopularPlaces";


describe('getMostPopularPlaces', () => {
    it('devrait renvoyer les deux endroits les plus populaires', () => {
        expect.equal(getMostPopularPlaces('Analamahitsy', 'Analamahitsy', 'Itaosy', 'Behoririka', 'Itaosy', 'Itaosy'), 'Itaosy Analamahitsy');
    });

    it('devrait gérer différentes entrées', () => {
        expect.equal(getMostPopularPlaces('A', 'B', 'A', 'C', 'C', 'C'), 'C A');
    });
});
