const axios = require('axios')
const {expect} = require('chai')
const jokeSchema = require('../testData/jokeSchema');
const { Validator } = require('jsonschema');


    describe('Random', async function () {

    it('should return random joke', async function () {
        const firstJoke = await axios.get('https://api.chucknorris.io/jokes/random');
        const secondJoke = await axios.get('https://api.chucknorris.io/jokes/random');
        expect(firstJoke.data.value).not.to.equal(secondJoke.data.value)
        console.log(firstJoke)
    });
    it.only('should validate json schema', async function () {
        const firstJoke = await axios.get('https://api.chucknorris.io/jokes/random');
        var v = new Validator();
        console.log(v.validate(firstJoke.data, jokeSchema));
    });

    it('should have a 200 status code', async function () {
        const response = await axios.get('https://api.chucknorris.io/jokes/random')
        expect (response.status).equals(200);
    }) 
    it('should contain in response base url', async function () {
        const response = await axios.get('https://api.chucknorris.io/jokes/random')
        expect(response.data.url).to.contain('https://api.chucknorris.io/jokes')
    })
  })