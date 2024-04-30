//This function `marked` api to parse the value of editor and 
//displays it in the preview div
const previewer=()=>{
    const editor = document.querySelector('#editor')
    const preview = document.querySelector('#preview')

    // this variable stores the parsed value of the marked.parse
    const markedText = marked.parse(editor.value,{
        highlight: function(code, language){
            const showLanguage = Prism.languages[language] || Prism.languages.markup;
            return Prism.highlight(code, showLanguage, language)
        }
    })
    
    // markedText is displayed in preview
    preview.innerHTML = markedText
}