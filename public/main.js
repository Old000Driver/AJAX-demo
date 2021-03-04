console.log(`Hi! I'm main.js!`)

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "./style.css")
    request.onreadystatechange = () => {
        // 判断是否下载完成，是否状态码为 200
        if (request.readyState === 4 && request.status === 200) {
            // 创建 style 标签
            const style = document.createElement('style')
            // 写入 style 内容
            style.innerHTML = request.response
            // 插入 style 到 head
            document.head.appendChild(style)
        }
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "./main.js")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const script = document.createElement("script")
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "./2.html")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200){
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "./3.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status == 200){
            console.log(request.responseXML)
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "./4.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200){
            const abool = JSON.parse(request.response)
            myName.textContent = abool.name
        }
    }
    request.send()
}

let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `./page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status == 200){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const Li = document.createElement("li")
                Li.textContent = item.id
                xxx.appendChild(Li)
            })
            n++
        }
    }
    request.send()
}