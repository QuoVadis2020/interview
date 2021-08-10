/**
 *  一. 实现flat
 */

const arr = [1, [2, [3, 4, [5, 6, 7]], 8], 9, '10', { name: 'mirror' }]

reduce
const flat = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
    }, [])
}

// 栈
const flat = (arr) => {
    const result = []
    const stack = [...arr]
    while (stack.length !== 0) {
        const val = stack.pop()
        if (Array.isArray(val)) {
            stack.push(...val) //如果是数组再次入栈，并且展开了一层
        } else {
            result.unshift(val) //如果不是数组就将其取出来放入结果数组中
        }
    }
    return result
}

// reduce + 控制层级
const flat = (arr, num = 1) => {
    return num > 0
        ? arr.reduce((pre, cur) => {
              return pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur)
          }, [])
        : arr.slice()
}
