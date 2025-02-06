function run(){
    const htmlCode = document.querySelector(".html-code").value,
        cssCode = document.querySelector(".css-code").value,
        jsCode = document.querySelector(".js-code").value,
    output = document.querySelector(".output")

    output.contentDocument.body.innerHTML = `
        ${htmlCode} <style>${cssCode}</style>
    `
    
    output.contentWindow.eval(jsCode)
}