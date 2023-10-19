// Index
db.products.createIndex({
    category: 1, // ascending
    price: -1 // descending
})
db.customers.createIndexes([
    {
        name: 1
    },
    {
        name: 1,
        type: -1
    }
])

// wildcard index
db.products.createIndex({
    "specifications.$**": 1 // wildcard index for embeded document field "specifications"
})

// index by expired
db.sessions.createIndex({
    createdAt: 1,
}, {
    expireAfterSeconds: 10 // auto remove after field createdAt larger than 10 seconds (mongodb run job every 60 seconds)
})

// index unique
db.sessions.createIndex({
    username: 1,
}, {
    unique: true,
    sparse: true // apply only document has the field
})

// index text
db.products.createIndex({
    product_name: 'text', // text-based search
    category: 'text'
}, {
    weights: {
        product_name: 10,
        category: 5
    }
})
db.products.find({
    $text: {
        $search: 'iphone assus' // iphone or assus
    }
})

db.products.find({
    $text: {
        $search: '"iphone pro"' // exact iphone pro
    }
})

db.products.find({
    $text: {
        $search: 'iphone -pro' // find iphone but not contains pro
    }
}, {
    searchScore: {
        $meta: 'textScore' // add meta data search score
    }
})

// case sensitive index
db.customers.createIndex({
    username: 1
}, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

db.customers.find({
    username : "angga.ari"
}).collation({
    locale: 'en',
    strength: 2 // select using collation strength 2
});

// partial index
db.products.createIndex({
    price: 20000
}, {
    partialFilterExpression: {
        stock: {
            $gt: 1000 // index only applied to document that has stock field larger than 1000
        }
    }
})
