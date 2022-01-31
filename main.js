const input = document.querySelector(`.search`);
const liList = document.querySelectorAll(`li`);

const engineSearch = (e) =>
{
   const text = e.target.value.toLowerCase();

   console.log(text);

   liList.forEach((itemLi, index) =>
   {
      if (itemLi.textContent.toLowerCase().indexOf(text) == !-1)
      {
         itemLi.style.display = `block`;
      } else
      {
         itemLi.style.display = `none`
      }
   })

}



input.addEventListener(`keyup`, engineSearch)