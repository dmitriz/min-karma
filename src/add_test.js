// add_test.js

describe('Testing addition', function(){
	it('should add', function(){
		expect(add(2,4)).toBe(6);
		expect(add(2,4)).not.toBe(2);
	});
});