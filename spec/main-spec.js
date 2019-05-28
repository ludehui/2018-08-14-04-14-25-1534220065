const main = require('../main/main');

describe('main()', () => {

    it('should return 910', () => {
        let actual = main("910");
        expect(actual).toBe(
            "._. ... ._.\n"+
            "|_| ..| |.|\n"+
            "..| ..| |_|\n");
    });

    it('should return 256', () => {
        let actual = main("256");
        expect(actual).toBe(
            "._. ._. ._.\n"+
            "._| |_. |_.\n"+
            "|_. ._| |_|\n");
    });
	it('should return 9', () => {
	let actual = main("9");
	expect(actual).toBe(
		"._.\n"+
		"|_|\n"+
		"._|\n");
    });
	
	it('should return 8', () => {
	let actual = main("8");
	expect(actual).toBe(
		"._.\n"+
		"|_|\n"+
		"|_|\n");
    });

    it('should return 7', () => {
        let actual = main("7");
        expect(actual).toBe(
            "._.\n"+
            "..|\n"+
            "..|\n");
    });
	
	it('should return 6', () => {
	let actual = main("6");
	expect(actual).toBe(
		"._.\n"+
		"|_.\n"+
		"|_|\n");
    });
	it('should return 5', () => {
	let actual = main("5");
	expect(actual).toBe(
		"._.\n"+
		"|_.\n"+
		"._|\n");
    });
	it('should return 4', () => {
	let actual = main("4");
	expect(actual).toBe(
		"...\n"+
		"|_|\n"+
		"..|\n");
    });
	
	it('should return 3', () => {
	let actual = main("3");
	expect(actual).toBe(
		"._.\n"+
		"._|\n"+
		"._|\n");
    });
	
	it('should return 2', () => {
	let actual = main("2");
	expect(actual).toBe(
		"._.\n"+
		"._|\n"+
		"|_.\n");
    });
	it('should return 1', () => {
	let actual = main("1");
	expect(actual).toBe(
		"...\n"+
		"..|\n"+
		"..|\n");
    });
	
});
