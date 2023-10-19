use sandbox

db.customers.find()
db.products.findOne({_id: 2})
db.customers.find({type: 'PREMIUM', gender: 'female'})
db.customers.find({"addresses.city": 'Gresik'})

db.orders.count()
db.orders.drop()
db.orders.totalSize()
db.orders.stats()
db.orders.dataSize()
