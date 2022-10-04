function requestValidator(obj) {

    checkMethod(obj);
    checkUrl(obj);
    checkVersion(obj);
    checkMessage(obj);

    function checkMethod(obj) {
        const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        if (!obj.hasOwnProperty('method') || !validMethods.includes(obj.method)) {
            throw new Error('Invalid request header: Invalid Method');
        }
    }
    function checkUrl(obj) {
        if (!obj.hasOwnProperty('uri') || !obj.uri.match(/^([\w\d\.]+|\*)$/)) {
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function checkVersion(obj) {
        const validVersions = ['HTTP/0.9', ' HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
        if (!obj.hasOwnProperty('version') || !validVersions.includes(obj.version)) {
            throw new Error('Invalid request header: Invalid Version');
        }

    }
    function checkMessage(obj) {
        if (!obj.hasOwnProperty('message') || obj.message.match(/[<>\\&'"]/)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return obj;
}



console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
// console.log(requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }));
console.log(requestValidator({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}));