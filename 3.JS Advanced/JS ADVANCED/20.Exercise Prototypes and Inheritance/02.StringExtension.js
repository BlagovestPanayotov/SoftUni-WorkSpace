(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }
        return str.concat(this);
    };
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }
        return this.concat(str);
    };
    String.prototype.isEmpty = function () {
        return (this.length === 0);
    };
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        }

        const lastIndex = this.toString().substring(0, n - 2).lastIndexOf(' ');
        if (lastIndex !== -1) {
            return this.toString().substring(0,lastIndex)+'...';
        }

    };
    String.format = function (str, ...params) {

        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;

    };
})();