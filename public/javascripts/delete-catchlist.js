window.addEventListener("load", (event) => {

  console.log("hello from delete-catchlist!")

  const deleteButton = document.querySelectorAll('.deleteListBtn');
  for (let i = 0; i < deleteButton.length; i++) {
    const button = deleteButton[i];

    button.addEventListener('click', async e => {
      e.preventDefault()
      const trainerId = e.target.id.split("-")[0];
      const catchlistId = e.target.id.split("-")[1];
      console.log('trainer', trainerId)
      console.log('catch', catchlistId)
      const res = await fetch(`/catchlists/${trainerId}/${catchlistId}`, {
        method: 'DELETE'
      })

      const data = await res.json()

      if (data.message === 'Success') {
        console.log('IF data')
        const container = document.getElementById(`div-${catchlistId}`);
        container.remove()
      }
    })
  }

})
