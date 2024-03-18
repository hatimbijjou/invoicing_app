const information = document.getElementById('author')

information.innerText = `This app is made by (${author.fullName()})`

const func = async () => {
    const response = await window.author.isLoading()
    console.log(response)
}

func()


document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})
  
document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'System'
})