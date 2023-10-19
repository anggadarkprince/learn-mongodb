# Mongodb
Download mongodb https://www.mongodb.com/try/download/community

## Setup mongodb
### Running mongodb
- `./bin/mongod --dbpath=./data`
- Run with security enable `./bin/mongod --auth --dbpath=./data`

### Mongodb client with MongoShell / Compass
https://www.mongodb.com/try/download/shell
https://www.mongodb.com/try/download/compass
- `./bin/mongosh "mongodb://localhost:27017/dbname"`
- `./bin/mongosh "mongodb://user:password@localhost:27017/dbname?adminSource=admin"`

## Create database
```mongodb
use [dbname]
db.dropDatabase('dbname')
db.getName()
db.hostInfo()
db.version()
db.stats()
```

- Per document max 16MB
- Nested document 100 level

## Backup & Restore
https://www.mongodb.com/try/download/database-tools
- mongodump: backup binary (bson)
- mongoexport: export json/csv per collection
- mongorestore: restore binary (bson)
- mongoimport: import json/csv per collection

### Backup
- ./bin/mongodump --uri="mongodb://user:password@localhost:27017/sandbox?authSource=admin" --out=backup-dump
- ./bin/mongoexport --uri="mongodb://user:password@localhost:27017/sandbox?authSource=admin" --collection=orders --out=orders.json

### Restore
- ./bin/mongorestore --uri="mongodb://user:password@localhost:27017/sandbox_restore?authSource=admin" --dir=backup-dump/sandbox
- ./bin/mongoimport --uri="mongodb://user:password@localhost:27017/sandbox_restore?authSource=admin" --collection=orders --file=orders.json
