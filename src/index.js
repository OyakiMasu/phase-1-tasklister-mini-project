document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
     buildToDo(e.target.new-task-description)
     form.reset()
  })
});

function buildToDo(form){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${create-task-form}`
  p.appendChild(btn)
  console.log(p)
  document.querySelector("#tasks").appendChild(p)
}
function handleDelete(e){
e.target.parentNode.remove()

}
