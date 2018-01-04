let AWS=require('aws-sdk');
const ddb = AWS.DynamoDB();
exports.handler = function (event, context, callback) {
    ddb.put({
        TableName: 'School',
        Item: { id: 1, name: 'Chathura' }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });

}