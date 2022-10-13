function extensibleObject() {

    const obj = {};
    Object.getPrototypeOf(obj).extend = function (template) {
        Object.assign(this,template);
        Object.assign(Object.getPrototypeOf(obj),template);
    }

    return obj;
}
