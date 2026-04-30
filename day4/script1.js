let counter=0
const displayElement=document.querySelector('#display')
function increment()
{
    counter++
    //console.log(counter)
    displayElement.innerHTML=counter
}