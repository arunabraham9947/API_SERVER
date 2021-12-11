/* eslint-disable prettier/prettier */
module.exports = function () {
    const faker = require("faker");
    const _ = require("lodash");
    return{
        director:_.times(20, function(n){
            n=n+1
            return {
                id:n,
                code: '#D00'+n,
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                role:"Director"
            }
        }),
        employee:_.times(20, function(n){
            return {
                id:n,
                code: '#E00'+n,
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                email: faker.internet.email(),
                role:"Employee"
            }
        })
    }
}