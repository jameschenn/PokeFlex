window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
    const form = document.querySelector('#form');
    const option = document.querySelector('.formSelector');
    const formButton = document.querySelector('#formButton');
    formButton.addEventListener('click', e => {
        form.action += `/${option.id}`;
        console.log("hello")
    })
})
