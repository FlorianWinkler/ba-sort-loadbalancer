const express = require('express');
const router = express.Router();
const Request = require('request');

router.get('/:id', handleItem);

function handleItem(req, res) {
    let partition = req.params.id[0]; // <- Routing Logik
    let url = "http://"+partition+":3000/sort";
    //let url = "http://127.0.0.1:300"+partition+"/sort";

    console.log("Request absetzen: "+req.method+" "+url);
    Request({
        url: url,
        method: req.method
    }, handleResponse);

    function handleResponse(error, response, body){
        console.log("Antwort erhalten");
        res.status(response.statusCode).end();
    }
}

module.exports = router;
