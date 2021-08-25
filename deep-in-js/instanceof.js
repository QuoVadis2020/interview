function instanceOf(child, parent) {
    let prototype = child.__proto__
    // 新增构造函数的判断 如 Dog 在 Animal 的原型链上
    if (child.prototype) prototype = child.prototype.__proto__
    while (prototype) {
        if (prototype === parent.prototype) return true
        prototype = prototype.__proto__
    }
    return false
}
