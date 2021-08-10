/**
 * 防抖和节流都是在指定时间间隔内防止函数多次调用
 */

// 只执行一次任务
function throttle(fn, delay = 300) {
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

// 将多次执行变为最后一次执行
const debounce = (fn, delay = 300) => {
    let timer
    return () => {
        clearTimeout(timer)
        timer = setTimeout((...args) => {
            fn.apply(this, args)
        })
    }
}
