//const express = require("express");
import Express from "express";
import customers_api from "./customers.api.js";

// middlewares
const server = Express();
server.use(Express.urlencoded({ extended: true }));
server.use(Express.json());

// connect customer api
server.use('/customers', customers_api);  

// sign route
server.post("/sign-in", (req, res) => {
  let {userName, password} = req.body;

  if (userName !== "minnthetkoko" || password !== "123456789") 
    return res.status(401).send({
      meta: {status: "error", status_code: 401},
      message: 'sign in error',
      detail: 'username and password is incorrect',
      solution: 'change userneme or password try agin....'
    });
  



  res.send({
    meta: {status: "success", status_code: 200 },
    message: 'sign in success',
    data: {
      user_name: 'minnthetkoko'
    }
  });
});

// listsing port
server.listen(3000, console.log("Server listing port 3000.... "));

/*  {
      "meta": {
        "status": "success",
        "status_code": 200
      },

      "message": "Sign in admin success.",
     "data": {
        "_id": "62b2ce5c9282f939b4f09297",
        "name": "Mg Wunna",
        "role": "admin",
        "user_name": "mgwunna"
      },

      "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmIyY2U1YzkyODJmOTM5YjRmMDkyOTciLCJyZWZyZXNoX3Rva2VuIjoyOTE2OTE0OSwiaWF0IjoxNjU2NTEwMTAwfQ.C0wMdOko6QQz2ReDz5vxBDZO2rfov-GhFlEIo1sE1oE"
    }
    */










