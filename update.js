use sandbox

// Update
// update existing field, if condition result multiple row, update only first document
db.products.updateOne({_id: 3}, {
    price: 7500000
})

// add new field on existing document
db.products.updateOne({_id: 3}, {
    $set: {colors: ['red', 'green', 'black', 'white']}
})

// same like update one but apply to all result
db.products.updateMany({category: {$exists: false}}, {category: 'Uncategorized'})
db.products.updateMany({category: {$exists: false}}, {$set: {category: 'Uncategorized'}}) // if field is not exist before

// replace document
db.products.replaceOne({_id: 4}, {
    name: 'iPhone 5 Pro',
    price: 23_000_000,
    colors: ['red', 'white'],
    category: 'HP'
});

// increment field
db.products.updateMany({_id: 1}, {$inc: {stock: 10}})

// rename field name
db.products.updateMany({}, {$rename: {name: 'product_name'}})

// remove field
db.products.updateMany({}, {$unset: {name: 1}})

// add attribute current date
db.products.updateMany({}, {$currentDate: {lastUpdatedAt: {$type: 'date'}}})

// Array update
db.products.updateOne({_id: 4}, {$set: {'colors.$': 'green'}}) // change first element
db.products.updateOne({_id: 4}, {$set: {'colors.$[]': 'green'}}) // replace all element to green
db.products.updateOne({_id: 4}, {$set: {'colors.$[element]': 'green'}}, {arrayFilters: [{element: {$eq: 'red'}}]}) // replace element red to green
db.products.updateOne({_id: 4}, {$set: {'colors.1': 'red'}}) // update n element of array by index
db.products.updateOne({_id: 4}, {$addToSet: {colors: 'red'}}) // add but not duplicate
db.products.updateOne({_id: 4}, {$push: {colors: 'white'}}) // always add the item
db.products.updateOne({_id: 4}, {$pop: {colors: 1}}) // pop element from behind
db.products.updateOne({_id: 4}, {$pop: {colors: -1}}) // remove element from ahead
db.products.updateOne({_id: 4}, {$pull: {colors: {$in: ['red', 'green']}}}) // remove item by condition
db.products.updateOne({_id: 4}, {$push: {colors: {$each: ['yellow', 'pink', 'orage'], $sort: -1, $slice: 10}}}) // add item and sort and take 10 from ahead

