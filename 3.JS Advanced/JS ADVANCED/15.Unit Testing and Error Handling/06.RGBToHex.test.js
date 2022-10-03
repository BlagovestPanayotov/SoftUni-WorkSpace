const rgbToHexColor = require('./06.RGBToHex.js');
const { expect } = require('chai');

describe('Test RGB - Hex convertor', () => {
    it('check borderline cases', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
    it('check if param is out of boundries', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
    it('check if is missing param', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(255)).to.be.undefined;
    });
    it('check if is wrong type input', () => {
        expect(rgbToHexColor('0', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(255, '255', 255)).to.be.undefined;
        expect(rgbToHexColor(255, '255', 'banana')).to.be.undefined;
    });
    it('check for special value',()=>{
        expect(rgbToHexColor(255,0,0)).to.be.equal('#FF0000');
    })

})