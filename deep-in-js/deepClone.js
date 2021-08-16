/**
 * 满足大部分场景的深拷贝
 */
const symbolName = Symbol()
const obj = {
    objNumber: new Number(1),
    number: 1,
    objString: new String("ss"),
    string: "stirng",
    objRegexp: new RegExp("\\w"),
    regexp: /w+/g,
    date: new Date(),
    function: function () {},
    array: [{ a: 1 }, 2, true],
    objBool: new Boolean(true),
    bool: true,
    [symbolName]: 111,
    error: new Error("error"),
}
obj.d = obj

const isObject = (obj) =>
    obj !== null && (typeof obj === "object" || typeof obj === "function")

function deepClone(target, map = new WeakMap()) {
    if (map.get(target)) {
        return map.get(target)
    }

    if (!isObject(target)) {
        return target
    }

    let cloneObj

    const Constructor = target.constructor
    switch (Constructor) {
        case Date:
            return new Date(+target)
        case Boolean:
        case Number:
        case String:
        case RegExp:
        case Error:
            return new Constructor(target)
        case Function:
            return new Function(`return (${target})()`)
        default:
            cloneObj = new Constructor()
            map.set(target, cloneObj)
    }

    ;[
        ...Object.getOwnPropertyNames(target),
        ...Object.getOwnPropertySymbols(target),
    ].forEach((k) => {
        cloneObj[k] = deepClone(target[k], map)
    })
    return cloneObj
}

const o = deepClone(obj)
console.log(o)
console.log("objNumber", o.objNumber === obj.objNumber)
console.log("number", o.number === obj.number)
console.log("objString", o.objString === obj.objString)
console.log("string", o.string === obj.string)
console.log("objRegexp", o.objRegexp === obj.objRegexp)
console.log("regexp", o.regexp === obj.regexp)
console.log("date", o.date === obj.date)
console.log("function", o.function === obj.function)
console.log("array", o.array[0] === obj.array[0])
console.log("symbolName", o[symbolName] === obj[symbolName])
console.log("objBoolean", o.objBoolean === obj.objBoolean)
console.log("bool", o.bool === obj.bool)
console.log("error", o.error === obj.error)
