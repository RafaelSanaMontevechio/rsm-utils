import { unMaskCEP } from '../functions/cep';
import { maskCEP } from '../index';

describe('Should test CEP functions', () => {
    it('Add mask to CEP', () => {
        expect(maskCEP('12345678')).toBe('12345-678');
    });

    it('Remove mask from CEP', () => {
        expect(unMaskCEP('12345-678')).toBe('12345678');
    });
});
