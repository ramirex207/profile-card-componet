/*const elemento = document.getElementsByTagName('img')
elemento[0].alt="profile"

const identificador = document.getElementById('ejemplo')
identificador.textContent="700k"

const likes = document.querySelector('.likes')
*/
const profileCard = document.createElement('div')
profileCard.className="profile-card" 

const profileCardTop = document.createElement('div')
profileCardTop.className= "profile-card-top"

profileCard.appendChild(profileCardTop)
console.log(profileCardTop)

