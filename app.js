/* typing effect  */
let text ="ohamed Ghehioueche";
const element = document.querySelector('.name');
let index = 0;
let isDeleting = false; 
function type() {
  if (!isDeleting) {
    element.innerHTML = text.substring(0, index + 1);
    index++;
    if (index === text.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    element.innerHTML = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
    }
  }
  setTimeout(type, isDeleting ? 50 : 150);
}
type();


/* header bar*/
const navMenues = document.querySelectorAll('.navbar ul a');
const homeMenu = document.querySelector('.homeMenu');

navMenues.forEach(menu =>{
  menu.onclick=()=>{
    navMenues.forEach(x =>{x.style.color='';homeMenu.style.color='#fff';})
    menu.style.color='#27ae60';    
  }
})

/* mobile header */
const barsBtn = document.querySelector('#bars');
const closeBtn = document.querySelector('#close');
const mobileNav = document.querySelector('.mobileNav');
const shadow = document.querySelector('.shadow');


barsBtn.addEventListener('click', ()=>{
  mobileNav.style.display='block';
  shadow.style.display='block';
})
closeBtn.addEventListener('click', ()=>{
  mobileNav.style.display='none';
  shadow.style.display='none';
})


/* next and previos buttons in projects */
const carosel = document.querySelector('.cardWrapper');
const list = document.querySelector('.gallury');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');

nextBtn.addEventListener('click', () => {
  slideShow('next');
});

prevBtn.addEventListener('click', () => {
  slideShow('prev');
});

// ====== TOUCH EVENTS ======
let startX = 0;
let endX = 0;

carosel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
carosel.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});
function handleSwipe() {
  const diff = startX - endX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      slideShow('next');
    } else {
      slideShow('prev'); 
    }
  }
}

// ====== SLIDER FUNCTION ======
function slideShow(type) {
  let items = document.querySelectorAll('.project');

  if (type === 'next') {
    list.appendChild(items[0]);
  } else {
    let lastPosition = items.length - 1;
    list.prepend(items[lastPosition]);
  }
}



/* Send Email function */
(function () {
  emailjs.init("IhDM_hBSR2JHjMuTC");
})();

document.getElementById("formContact").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_mezyhte",
    "template_dqtfwod",
    this
  ).then(
    function () {
      alert("Message sent successfully ✅");
    },
    function (error) {
      alert("Failed ❌");
      console.log(error);
    }
  );
});

