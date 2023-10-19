use sandbox

// Delete document
db.products.deleteOne({_id: 5});
db.products.deleteMany({category: 'Uncategorized'});


