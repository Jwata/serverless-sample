module.exports.world = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({ message: 'world' })
    };
    callback(null, response);
};

module.exports.everybody = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({ message: 'everybody' })
    };
    callback(null, response);
};
