window.addEventListener("load", (event)=>{

    console.log("hello from javascript!")

    // const form = document.querySelector('#form');
    // const option = document.querySelector('.formSelector');
    // const formButton = document.querySelector('#formButton');

    // formButton.addEventListener('click', e => {
    //     form.action += `/${option.id}`;
    //     console.log("hello")
    // })

    const deleteButton = document.querySelectorAll('.deleteBtn');
    console.log(deleteButton);
    for(let i = 0; i < deleteButton.length; i++) {
        const button = deleteButton[i];

        button.addEventListener('click', async e => {
            const pokeId = e.target.id.split('-')[0];
            const catchid = e.target.id.split('-')[1];
            const trainerId = e.target.id.split('-')[2];

            //sends pokeId to backend
            const res = await fetch(`/catchlists/${trainerId}/${catchid}/${pokeId}`, {
                method: 'DELETE'
            })

            const data = await res.json()

            if(data.message === 'Success') {
                const container = document.querySelector(`#${pokeId}`);
                container.remove()
            }
        })
    }

})
