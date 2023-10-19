use sandbox

// Query modifier
db.products.find({category: 'Electronic'}).count();
db.products.find({category: 'Electronic'}).limit(20);
db.products.find({}).limit(10).skip(20);
db.products.find({}).limit(10).skip(20);
db.products.find({}).sort({category: 1, price: -1})
