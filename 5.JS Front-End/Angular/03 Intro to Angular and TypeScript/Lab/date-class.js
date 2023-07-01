var HTTPRequest = /** @class */ (function () {
    function HTTPRequest(method, uri, version, message) {
        this.response = undefined;
        this.fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    return HTTPRequest;
}());
var myData = new HTTPRequest("GET", "http://google.com", "HTTP/1.1", "");
console.log(myData);
