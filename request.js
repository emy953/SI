 const request = require('request');

exports.get = async (req, res) => {
    console.log(req.query.name);
    const name=req.query.name;
    const val=parseInt(req.query.value);
    console.log(name);
 console.log(val);
request.patch(
    //First parameter API to make post request
    'https://arduino-test-e96d3-default-rtdb.firebaseio.com/arduinoApp.json',
    //The second parameter, DATA which has to be sent to API
        { json: {
                [name]: val
              }
            },

    //The third parameter is a Callback function
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            console.log(response.statusCode);
        }
    }
);
        res.status(200).json(req.body);
};
