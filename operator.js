use sandbox

// Operator
// comparison: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
db.products.find({price: {$gte: 3000000, $lte: 18000000}})
db.products.find({category: {$in: ['Laptop', 'Handphone']}})

// logical: $and, $or, $nor
db.products.find({
    $or: [
        {category: 'Handphone'},
        {price: {$gte: 10_000_000}}
    ]
})

// logical: $not (operator used similar to comparison operator)
db.products.find({
    category: {$not: {$in: ['Laptop', 'Handphone']}}
})


// element operator
db.products.find({colors: {$exists: false}}) // sql-like: colors is not null
db.products.find({colors: {$type: 'string'}})
db.products.find({colors: {$type: ['int', 'string']}})

// evaluation operator: $exp, $jsonSchema, $mod, $regex, $text
db.customers.find({
    $expr: {
        $eq: ['$_id', '$name'] // sql-like: where id = name (compare column)
    }
})
// jsonSchema operator
db.products.find({
    $jsonSchema: {
        required: ['name', 'category'],
        properties: {
            colors: {
                type: 'array'
            },
            price: {
                type: 'number'
            }
        }
    }
})
// modulo operator
db.products.find({
    price: {$mod: [100000, 0]}
})

// regex operator
db.products.find({name: {$regex: /^in/, $options: 'i'}})


// Array operator: $all, $elemMatch, $size
db.products.find({colors: {$all: ['red', 'white']}}) // should exist red and white in colors field
db.products.find({colors: {$elemMatch: {$in: ['green', 'white']}}}) // element match green OR white
db.products.find({colors: {$size: 4}})


// Projection operator (show or hide field)
db.products.find({colors: {$size: 4}}, {name: 1, colors: 1}) // select name and color
db.products.find({colors: {$size: 4}}, {category: 0}) // select all but category
db.products.find({}, {
    name: 1,
    colors: {
        $elemMatch: {$in: ['green', 'white']} // only get element green and white (if exist in array)
    }
})

db.products.find({colors: {$exists: true}}, {name: 1, "colors.$": 1}) // select field in n element of array
db.products.find({colors: {$exists: true}}, {name: 1, colors: {$slice: 3}}) // select 3 first element in field
db.products.find({colors: {$exists: true}}, {name: 1, colors: {$slice: -3}}) // select 3 last element in field


