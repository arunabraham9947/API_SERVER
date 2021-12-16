/* eslint-disable prettier/prettier */
module.exports = function () {
    const faker = require("faker");
    const _ = require("lodash");
    return{
        deals:{
            status: "success",
            response_code: "200",
            data:_.times(2, function(n){
                n=n+1
                return{
                    section_type:"essential",
                    Display_name:"Best in the month !",
                    parent:[
                        {
                            id:n,
                            image:faker.image.image(),
                            redirect_type: "group",
                            redirecturl: "OFFER",
                            redirect_id: 1
                        }
                    ],
                    child:_.times(4, function(d){
                        d=d+1
                        return{
                            id:d,
                            image:faker.image.image(),
                            redirect_type: "group",
                            redirecturl: "OFFER",
                            redirect_id: d
                        }
                    })
                }
            })
        }
    }
}