const lib = require('../lib');
const db = require('../db');

describe('absolute',() => {
    it('given positive, outer positive', () => {
        let result = lib.absolute(1);
        expect(result).toBe(1);
    });
    
    it('given negative, outer positive', () => {
        let result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    it('given zero, outer zero', () => {
        let result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet', ()=>{
    it('return welcome + name',() =>{
        let result = lib.greet('ebram');
        expect(result).toMatch(/ebram/);    
    });
});

describe('getCurrency', () => {
    it('return supported currency', () => {
        let result = lib.getCurrencies();
        //Specify way
        expect(result.length).toBe(3);

        //Proper way
        expect(result).toContain('USD');
        
        //Ideal way
        expect(result).toEqual(expect.arrayContaining(['AUD', 'USD', 'EUR']));
    });
});

describe('getProduct', () => {
    it('should return object ', () => {
        let result = lib.getProduct(1);

        //this will match object with its property
        expect(result).toEqual({ id: 1, price: 10 });

        expect(result).toHaveProperty('id',1);

        //this will compare object with the latest property given
        expect(result).toMatchObject({ id: 1, price: 10});
    })
});

describe('registerUser', () => {
    it('throw error if user is false', () => {
        let errorArray = [null, NaN, 0, '', undefined, false];
        errorArray.forEach(a => {
            expect(() => { lib.registerUser(a) }).toThrow();
        });
    });
    it('return user object if user valid', () => {
        let result = lib.registerUser('ebram');
        expect(result).toMatchObject({ username: 'ebram' });
        expect(result.id).toBeGreaterThan(0);
    });
});

describe('applyDiscount', () => {
    it('apply 10% discount if customer has 20points', () => {
        db.getCustomerSync = function(customerId){
            console.log('fake reading customer');
            return { id: customerId, points: 20}
        }

        const order = { customerId: 1, totalPrice: 10 };
        lib.applyDiscount(order);
        expect(order.totalPrice).toBe(9);
    });
});