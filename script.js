//This function `marked` api to parse the value of editor and 
//displays it in the preview div
const previewer=()=>{
    const editor = document.querySelector('#editor')
    const preview = document.querySelector('#preview')

    // this variable stores the parsed value of the marked.parse
    const markedText = marked.parse(editor.value)
    
    // markedText is displayed in preview
    preview.innerHTML = markedText
    
    
    document.querySelectorAll('pre code').forEach(element=>{
        hljs.highlightElement(element)
    })
}