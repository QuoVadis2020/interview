function Person(name, age) {
    this.name = name
    this.age = age
}

const mirror = new Person('mirror', 26)

function create() {
    const obj = {}

    // 获取构造函数
    const Constructor = [].shift.call(arguments)

    // 原型指向
    obj.__proto__ = Constructor.prototype

    // 绑定this
    const result = Constructor.apply(obj, arguments)

    return typeof result === 'object' ? result : obj
}

const _mirror = create(Person, 'mirror', 26)

console.log(_mirror)
