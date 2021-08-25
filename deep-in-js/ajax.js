const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        // console.log(xhr.responseText)
    } else {
        // console.log(xhr.status, xhr.responseText)
    }
}
xhr.open('Get', 'xxx?yy')
xhr.send()
