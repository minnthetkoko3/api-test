import { Router } from "express";

const customers_api = Router();

/*  CRUB
        CREATE => POST
        READ   => GET
        UPDATE => PUT
        DELETE => DELETE
*/

// ('/customers') => /customers/customers 

// CREATE

customers_api.post('/', (req,res) => {
    // validate request
    let { name, age } = req.body;

    if (!name && !age)
        return res.status(400).send({
            meta: {status: 'error', status_code: 400 },
            message: 'customers api error',
            detail: 'name is age requited',
            solution: 'add name and age try again'
        });
    // check data in database
    // respone

        res.send({
            meta: { status: 'success', status_code: 200},
            message: 'create cutomers api success',
            data:{ id: 123, name, age } 
        });



});

export default customers_api ;