function parseError(error) {
    if (error.name === 'ValidationError') {
        //TODO if we need to light up the fields we neet the name of the field!
        return Object.values(error.errors).map(v => v.message);
    } else if (Array.isArray(error)) {
        return error.map(x => x.msg);
    } else {
        return error.message.split('\n');
    }
}

module.exports = {
    parseError
};