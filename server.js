const express = require ("express");
const res = require ('express/lib/response');
const app = express();
const addTwoNumber = (n1, n2 ) => {
    return n1+n2;
}

console.log("hello")

const port=3000;
app.listen(port,()=> {
    console.log("Hello I'm listening to port"+port);
})
