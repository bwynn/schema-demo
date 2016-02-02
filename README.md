# Mongoose Schema Practical Application
This repo is a back-end schema application, with the intention of applying a schema within another schema. This is loosely based on another schema I'm currently planning and outlining, but this will serve as the practical example of that schema. This example is, as stated earlier, built with the back end in mind, and front end routes are not defined as I want the focus of this example to be specifically the schema architecture.

// find items based on multiple conditions:
// db.bikes.find({$and: [{wheel_size: "650B"}, {brand: "Trek"}]});

// update item with array items
// db.brands.update({name: "Specialized"}, { $push: { categories: { $each: ["Mountain", "Road"]}}});
