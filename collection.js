use sandbox

db.getCollectionNames()
db.createCollection('orders')
db.getCollection('orders')
db.orders
db.getCollectionInfos()

db.orders.findOne({_id: 2})
db.orders.findOne({status: 'COMPLETED'})
