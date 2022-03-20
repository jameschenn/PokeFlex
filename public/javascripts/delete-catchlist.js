window.addEventListener("load", (event) => {


  const deleteButton = document.querySelectorAll('.deleteListBtn');
  for (let i = 0; i < deleteButton.length; i++) {
    const button = deleteButton[i];

    button.addEventListener('click', async e => {
      e.preventDefault()
      const trainerId = e.target.id.split("-")[0];
      const catchlistId = e.target.id.split("-")[1];
      const res = await fetch(`/catchlists/${trainerId}/${catchlistId}`, {
        method: 'DELETE'
      })

      const data = await res.json()

      if (data.message === 'Success') {
        const container = document.getElementById(`div-${catchlistId}`);
        container.remove()
      }
    })
  }

})
