/* eslint-disable prettier/prettier */
module.exports = function () {
    const faker = require("faker");
    const _ = require("lodash");
    return{
        banner:{
            status: "success",
            response_code: "200",
            data:_.times(4, function(n){
                n=n+1
                return{
                    id: 18,
                    display_name: "apple",
                    image: faker.image.image(),
                    parent: null,
                    section_type: "essential",
                    priorty: 2,
                    mptt_level: 0,
                    redirect_type: "group",
                    redirecturl: "offer",
                    redirect_id: 1,
                    child: []
                }
            })
        }
    }
}