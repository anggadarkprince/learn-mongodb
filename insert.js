use sandbox


// insert single document
db.customers.insertOne({
    name: "Angga Ari Wijaya",
    type: 'REGULAR',
    gender: 'male',
    addresses: [
        {
            city: 'Surabaya',
            address: 'Jl Arjuna 34'
        },
        {
            city: 'Gresik',
            address: 'Jl Sumatra 23'
        },
    ]
})
db.customers.find()

// insert multiple document
db.customers.insertMany([
    {
        name: "Diana",
        type: 'PREMIUM',
        gender: 'female'
    },

    {
        name: "Keenan Evander Alastair",
        type: 'REGULAR',
        gender: 'male'
    }
])
db.customers.find()

// insert with custom id and define type
db.products.insertMany([
    {
        _id: 1,
        name: "Mac Book Pro M2 1GB",
        price: new NumberLong(23000000)
    },
    {
        _id: 2,
        name: "iPad 6 256GB",
        price: 14560000
    },
])

// Bulk writes
db.products.bulkWrite([
    {
        insertOne: {
            document: {
                _id: 5,
                product_name: 'Iphone 13',
                category: 'HP'
            }
        }
    },
    {
        updateMany: {
            filter: {
                colors: {$exists: false}
            },
            update: {
                $set: {
                    colors: ['default']
                }
            }
        }
    }
])
