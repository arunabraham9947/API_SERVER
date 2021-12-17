/* eslint-disable prettier/prettier */
module.exports = function () {
    const faker = require("faker");
    const _ = require("lodash");
    return{
        Products:{
            status: "success",
            response_code: "200",
            data:_.times(1, function(n){
                n=n+1
                return{
                    Display_name: "Top Deals",
                    products:_.times(2, function(d){
                        d=d+1
                        return{
                            id:d,
                            selling_price: 20,
                            has_offer: false,
                            offer_price: null,
                            offer_based_on: null,
                            offer_percentage_price: null,
                            is_stock: false,
                            inventory_id: 1,
                            name: "AVOCADO KENIYA BOX 3.5KG APROX",
                            display_name: "AVOCADO KENIYA BOX 3.5KG APROX",
                            image_1: faker.image.image(),
                            max_sales_order: 50,
                            min_sales_order: 10,
                            conversion_factor: "3.5KG",
                            uom_name: "BOX",
                            brand_name: "UNB",
                            category_name: "FRESH FRUITS",
                            Priorty: 1,
                            section_type: "essential"
                        }
                    })
                }
            })
        }
    }
}