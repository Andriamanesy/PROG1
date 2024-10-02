import { expect } from "chai";
import { describe } from "mocha";
import { removeWords } from "../mycode/removeWords";

describe('removeWords', () => {
    it('devrait supprimer les mots spécifiés', () => {
        expect.equal(removeWords('Hello, ceci est un test', ['ceci', 'un']), 'Hello, est test');
    });

    it('devrait conserver les mots sensibles à la casse', () => {
        expect.equal(removeWords('Hello Java', ['java']), 'Hello Java');
    });

    it('devrait renvoyer la chaîne origine si aucun mot ne correspond', () => {
        expect.equal(removeWords('Hello World', ['test']), 'Hello World');
    });
});