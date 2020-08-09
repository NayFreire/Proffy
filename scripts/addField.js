//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField(){
    //Pega o campo que será duplicado
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')/*Pega todos inputs pra limpá-los para que os dados deles também não sejam clonados */

    //para cada campo, limpá-los

    fields.forEach(function(field){
        //pegar o field do momento
        field.value = ""
    })

    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}