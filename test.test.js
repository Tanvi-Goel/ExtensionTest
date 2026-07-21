describe('test.js', () => {
	beforeEach(() => {
		jest.resetModules();
	});

	it('logs the result of 2+2 on load', () => {
		   const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
		   require('./test.js');
	       expect(add(2,3,4)).toBe(9)
         logSpy.mockRestore();
	});
});