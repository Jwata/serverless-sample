module.exports.show = (event, context, callback) => {
    const token = (event && event.path && event.path.token)|| '';
    const response = {
        statusCode: 200,
        body: JSON.stringify({ token })
    };
    callback(null, response);
};
