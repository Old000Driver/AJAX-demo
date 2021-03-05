console.log(`Hi! I'm main.js!`)

AJAX = (method, FileUrl, func) => {
    const request = new XMLHttpRequest()
    request.open(method, FileUrl)
    request.onreadystatechange = () =>{
        if (request.readyState === 4 && request.status === 200) {
            func(request)
        }
    }
    request.send()
}

CSSfunc = (request) =>{
    // 创建 style 标签
    const style = document.createElement('style')
    // 写入 style 内容
    style.innerHTML = request.response
    // 插入 style 到 head
    document.head.appendChild(style)
}
getCSS.onclick = () => AJAX("GET", "./style.css", CSSfunc)

JSfunc = (request) =>{
    console.log(request.response)
            const script = document.createElement("script")
            script.innerHTML = request.response
            document.body.appendChild(script)
}
getJS.onclick = () => AJAX("GET", "./main.js", JSfunc)

HTMLfunc = (request) =>{
    const div = document.createElement('div')
    div.innerHTML = request.response
    document.body.appendChild(div)
}
getHTML.onclick = () => AJAX("GET", "./2.html", HTMLfunc)

XMLfunc = (request) =>{
    console.log(request.responseXML)
    const dom = request.responseXML
    const text = dom.getElementsByTagName('warning')[0].textContent
}
getXML.onclick = () => AJAX("GET", "./3.xml", XMLfunc)

JSONfunc = (request) =>{
    const abool = JSON.parse(request.response)
    myName.textContent = abool.name
}
getJSON.onclick = () => AJAX("GET", "./4.json", JSONfunc)

let n = 1
Pagefunc = (request) =>{
    const array = JSON.parse(request.response)
    array.forEach(item => {
        const Li = document.createElement("li")
        Li.textContent = item.id
        xxx.appendChild(Li)
    })
    n++
}
getPage.onclick = () => AJAX("GET", `./page${n + 1}`, Pagefunc)