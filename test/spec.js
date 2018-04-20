console.log(`process.env.NODE_PATH: ${process.env.NODE_PATH}`);
const { expect } = require('chai');
const { shared } = require('shared');
describe('shared', () => {
    it('should be true', () => {
        expect(shared).ok;
    });
});