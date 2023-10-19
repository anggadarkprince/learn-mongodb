<?php

use MongoDB\Driver\Manager;

$client = new Manager();
$db = $client->selectDB('orion');
$collection = $db->selectCollection('users');

$userData = [
    [
        'name' => 'Angga Ari Wijaya',
        'email' => 'anggadarkprince@gmail.com',
        'username' => 'anggadarkprince',
        'password' => password_hash('secret', PASSWORD_BCRYPT),
        'roles' => ['admin', 'author', 'customer']
    ], [
        'name' => 'Alexa Yoga',
        'email' => 'alexa@gmail.com',
        'username' => 'alexa45',
        'password' => password_hash('alexa1234', PASSWORD_BCRYPT),
        'roles' => []
    ]
];
$collection->batchInsert($userData);

$query = ['roles' => ['$exists' => 1]];
foreach ($collection->find($query) as $item) {
    var_dump($item) . PHP_EOL;
}