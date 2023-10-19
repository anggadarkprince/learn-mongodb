// User

// Create admin user (primary)
use admin // best practice to keep user in "admin" database
db.createUser({
    user: 'angga',
    pwd: 'anggaari',
    roles: [
        'userAdminAnyDatabase',
        'readWriteAnyDatabase',
    ]
})

// Create user with custom role per db
db.createUser({
    user: 'keenan',
    pwd: 'keenanevander',
    roles: [
        {role: 'read', db: 'sandbox'},
        {role: 'readWrite', db: 'test'}
    ]
})

db.getUsers()
db.getUser('keenan')
db.dropUser('keenan')

db.changeUserPassword('keenan', 'keenan123')
db.updateUser('keenan', {
    roles: [
        {role: 'readWrite', db: 'sandbox'},
    ]
})

// Role
// Create custom role
// https://www.mongodb.com/docs/manual/reference/privilege-actions/
db.createRole({
    role: 'userApp',
    roles: [
        {role: 'read', db: 'sandbox'}
    ],
    privileges: [
        {
            resource: {
                db: 'sandbox',
                collection: 'orders'
            },
            actions: ['find', 'insert']
        },
        {
            resource: {
                db: 'warehouse',
                collection: 'work_orders'
            },
            actions: ['find', 'remove', 'update', 'createCollection']
        },
    ]
})
db.getRoles({showPrivileges: true})
db.getRole('userApp')
db.updateRole({

})
db.dropRole('userApp')

