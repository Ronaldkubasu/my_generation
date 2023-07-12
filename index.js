
function myFunction() {
  alert("Hello! welcome to our harvad university Site");
  fetch(" https://zoo-animal-api.herokuapp.com/animals/rand/4")
  .then(response => console.log(response))
  .then(data => {
      console.log(data.sentence)
      document.querySelector(".calc").innerHTML = data.secondCard;
  })
  .catch((e) => console.log(e));

}

// import React from 'react'
// import './home.css'
// import {BsFillSunFill} from 'react-icons/bs'
// import {BsFillMoonFill} from 'react-icons/bs'

// const changeTheme= () => {
//     let container = document.getElementById('home_section')
//     let sun = document.getElementById('icon_shape')
//     let moon = document.getElementById('moon')

//     container.classList.toggle('dark')

//     // moon.style.display = 'none'
//     // sun.style.display = 'block'
// }

// function Home() {
//   return (
//     <section id='home_section'>
//       <div className='button_container' onClick={changeTheme}>
//         <BsFillSunFill id='icon_shape'/>
//         <BsFillMoonFill id='moon' />
//         </div>
//     </section>
//   )
// }

// console.log(changeTheme);

// export default Home

fetch(" http://localhost:3000/posts")
    .then(response => console.log(response))
    .then(data => {
        console.log(data.sentence)
        document.querySelector(".calc").innerHTML = data.secondCard
    })
