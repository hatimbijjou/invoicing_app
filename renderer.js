const information = document.getElementById('author')

information.innerText = `This app is made by (${author.fullName()})`

const func = async () => {
    const response = await window.author.isLoading()
    console.log(response)
}

func()