export const animator=()=>{
    const EditObserver = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('editShow')
            }
        })
    })
    const PreviewObserver = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('previewShow')
            }
        })
    })
    const editEntry = document.querySelectorAll('.first')
    const previewEntry = document.querySelectorAll('.second')

    editEntry.forEach(el=>{
        EditObserver.observe(el)
    })

    previewEntry.forEach(el=>{
        PreviewObserver.observe(el)
    })
}
