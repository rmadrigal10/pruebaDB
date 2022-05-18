const getConnection = require("../libs/postgres");

const pool = require('./../libs/postgresPool');

class usersService {

    constructor(){
        this.pool = pool;
        this.pool.on('error', (err) => console.error(err));
    }

    create(){

    }

    async find(){
        const query = 'SELECT * FROM users';
        const rta = await this.pool.query(query);
        return rta.rows;
    }

    findOne(id){
        // return this.us
    }

    update(){

    }

    delete(){

    }

}

module.exports = usersService;