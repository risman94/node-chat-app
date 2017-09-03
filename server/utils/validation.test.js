const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		var res = isRealString(98);
		expect(res).toBe(false);
	});
	it('should reject string with only space', () => {
		var res = isRealString('      ');
		expect(res).toBe(false);
	});
	it('should allow string with non-space characters', () => {
		var res = isRealString(' risman ');
		expect(res).toBe(true);
	});
});