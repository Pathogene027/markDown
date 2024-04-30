//This function increases or decreases the size of the clicked element
const handleClick=(e)=>{
    let preview = document.querySelector('.preview-section')
    let textBox = document.querySelector('#editor')
    let container 
    let editSection = document.querySelector('.editor-section')
    let icon = document.querySelectorAll('.fa-solid')

    //use the boolean value of @var sizeState to determine whether to increase
    //or decrease an element eg (editor-section,preview-section)

    //increase the size of an element if it child icon is clicked 
    if(sizeState===false){
        icon.forEach(item=>{
            //add a class of 'fa-minimize' 
            item.classList.add('fa-minimize')

            //add a class of 'fa-minimize' 
            item.classList.remove('fa-maximize')
        })

        //increase the size of a preview-section if the previewIcon is clicked 
        if(e.target.parentElement.className.slice().includes('previewIcon')){
            container = document.querySelector('.editor-section');
            preview.style.width= '100%'
        }

         //increase the size of a editor-section if the editorIcon is clicked 
        else if(e.target.parentElement.className.slice().includes('editorIcon')){
            container = document.querySelector('.preview-section')
            container.style.position='absolute';
            container.style.top='-1000px';
            editSection.style.width = '100%'
            textBox.style.minHeight = '100vh'
        }
        container.classList.add('invisible')
        container.style.position='absolute'
        console.log(container)
        sizeState = true
    }

    //decrease the size of an element if it child icon is clicked
    else{
        icon.forEach(item=>{
            item.classList.remove('fa-minimize')
            item.classList.add('fa-maximize')
        })
        //decrease the size of a preview-section if the previewIcon is clicked
        if(e.target.parentElement.className.slice().includes('previewIcon')){
            container= document.querySelector('.editor-section')
            preview.style.width= ''
        }
        //increase the size of a editor-section if the editorIcon is clicked
        else if(e.target.parentElement.className.slice().includes('editorIcon')){
            container = document.querySelector('.preview-section')
            container.style.position='';
            container.style.top='';
            editSection.style.width = ''
            textBox.style.minHeight = ''
        }
        container.classList.remove('invisible')
        container.style.position='relative'
        sizeState = false
    }
    
}