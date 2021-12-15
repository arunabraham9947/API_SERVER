/* eslint-disable prettier/prettier */
module.exports = function () {
    const faker = require("faker");
    const _ = require("lodash");
    return{
        deals:_.times(4, function(n){
            
            n=n+13
            
            return{
                display_name:"Best in the month!",
                type:"Life Style",
                main:{
                    id:n,
                    image:faker.image.image(),
                    name: faker.system.fileName(),
                    route_type: 'category',
                },
                sub:_.times(4, function(d){
                    d=d+1
                    return{
                        id:d,
                        type:"Life Style",
                        route_type: 'category',
                        image: faker.image.image(),
                        name: faker.system.fileName(),
                    }
                })
            }
        }),
    }
}