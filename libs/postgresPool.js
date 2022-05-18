const { Pool } = require('pg');


const pool = new Pool({
        host: 'http://pruebast2022.cypym5wo7yt3.us-east-1.rds.amazonaws.com/',
        port: 5432,
        user: 'servici1',
        password: 'rdsAdmin*tiv2',
        database: 'testProject'
    });
    
    
   

module.exports = pool;