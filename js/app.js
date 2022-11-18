const tabItems = document.querySelectorAll('.tabheader__item');
const tabContent = document.querySelectorAll('.tabcontent');
const tabMain = document.querySelector('.tabheader__items');


const hideContent = () => {
  tabContent.forEach((item)=> {
    item.style.display = 'none'
  })
  tabItems.forEach((item)=>{
    item.classList.remove('tabheader__item_active')
  })
}
const showContent =(i= 0) => {
  tabContent[i].style.display = 'block'
  tabItems[i].classList.add('tabheader__item_active')
}
hideContent()
showContent()

tabMain.addEventListener("click",(event)=>{
  const target = event.target
  // console.log(event.target)
  if (!target.classList.contains('tabheader__item_active')){
    tabItems.forEach((tab, idx)=>{
      if(target === tab){
        hideContent()
        showContent(idx)
      }
    })
  }
})

//2

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelectorAll("[data-modal]");

console.log(modalTrigger);

modalTrigger.forEach((item) => {
  item.addEventListener("click", openModal);
});

function openModal() {
  modal.classList.add("show");

  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
}

modal.addEventListener("click", (event) => {
  if (
      event.target === modal ||
      event.target.classList.contains("modal__close")
  ) {
    closeModal();
  }
});

