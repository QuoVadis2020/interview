/**
 * 防抖和节流都是在指定时间间隔内防止函数多次调用
 */

// 防抖：动作发生后一定时间后触发事件，在这段时间内，如果该动作又发生，则重新等待一定时间再触发事件。
// 回城
const debounce = (fn, delay = 300) => {
    let timer
    return () => {
        clearTimeout(timer)
        timer = setTimeout((...args) => {
            fn.apply(this, args)
        })
    }
}

// 节流：动作发生后一段时间后触发事件，在这段时间内，如果动作又发生，则无视该动作，直到事件执行完后，才能重新触发
// 技能CD
const throttle = (fn, delay = 300) => {
    let start = Date.now()
    let now
    let timer
    return (...args) => {
        now = Date.now()
        clearTimeout(timer)
        if (now - start >= cycle) {
            fn.apply(this, args)
            start = now
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }
    }
}
