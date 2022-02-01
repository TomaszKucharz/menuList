const input = document.querySelector(`.search`);
const btnLeft = document.querySelector(`.left`);
const btnRight = document.querySelector(`.right`)
const drinkList = ["Piwo", "Whisky", "Woda z kranu", "Woda brzozowa", " Woda gazowana", " Woda bez bombelków", " Pepsi", "Sok jabłkowy", " Sok jagodowy", " Sok pomarańczowy",
   "Sok z wiśni", "Wino czerwone / wytrawne", "Wino czerwone / słodkie", "Wino białe / wytrawne", " Wino białe / słodkie"]
const breakfastList = ["Omlet z szynką parmeńską, zielona sałata rzymska z pomidorkami koktajlowymi w sosie miodowo-musztardowym",
   "Jajka po benedyktyńsku na chrupiącym toście z sosem holenderskim, sałatka z avokado i pomidorków koktailowych",
   "Jajka sadzone na bekonie, chrupiące tosty z masłem, grillowane pieczarki, sałatka jarzynowa,świeże pieczywo",
   "Jajecznica  na maśle  ( opcjonalnie z  bekonem, pieczarkami, zieloną cebulkąj, pomidorami), z chrupiącym pieczywem ( mini bułki, chleb żytni na zakwasie), zieloną sałatą i pomidorkami cherry",
   "Szakszuka z grillowanymi warzywami i świeżą kolendrą (cukinia, papryka, czerwona cebula), chrupiące tosty",
   "Bajgiel z pastą z białego serka z łososiem  i grillowanymi warzywami, sałatka z pomidorów i ogórek z dodatkiem świeżych  ziół i oliwy",
   "Bajgiel z hummusem z suszonymi pomidorami, sałatka ze śieżych pomidorów z czosnkiem i bazylią z dodatkiem oliwy z oliwek",
   "Grillowany serek halloumi z sałatką z rukoli, pomidorów, czerwonej cebuli, oliwek z sosem greckim, mini bułeczki",
   "Chrupiąca granola z jogurtem naturalnym i świeżymi owocami sezonowymi, naturalny sok z jabłek lub pomarańczy",
   "Pancake’i z syropem klonowym, sosem malinowym/truskawkowym lub gęstą czekoladą, wyciskany sok z pomarańczy",
];
const lunchList = ["Krem z  pomidorów z prażonymi pestkami dyni, karczek pieczony w ziołach w sosie majerankowym z ziemniakami i sałatką szwedzką,  mus truskawkowy",
   "Zupa porowa , gyros z kurczaka z kolorowym ryżem ( szpinak, pomidory, szczypta szfranu)  z surówką coleslaw, ciasto marchewkowe",
   "Krem z dyni z groszkiem ptysiowym, placek po węgiersku, szarlotka na gorąco z lodami waniliowymi ",
   "Krupnik z borowikami, grillowany filet z mintaja z pieczonymi ziemniakami w ziołach, surówka z kiszonej kapusty,sernik z musem malinowym",
   "Krem z pieczarek z grzankami, bitki wieprzowe w sosie cebulowym,kluski śląskie, brownie",
   "Zupa cebulowa z serem, grillowany filet z kurczaka z piecarkami i pieczonymi ziemniakami, zestaw surówek,  mus czekoladowy",
   "Krem z pieczonych buraków ze śmietanką, pstrąg na maśle z ziołami i czosnkiem, pieczonymi ziemniakami, surówka z selera z orzechami włoskimi, ciasteczka owsiane",
   "Barszcz ukraiński, gołąbki z pieczarkami w sosie pomidorowym, tarta truskawkowa z bitą śmietaną",
   "Kapuśniak z kiszonej kapusty, gulasz wieprzowy, kasza pęczak z grzybami, surówka z marchewki z pomarańczami, lody z owocami",
   "Krem z groszku zielonego z grzanką, makaron penne z pesto genovese ze świeżo startym parmezanem i sałatką ze świeżego szpinaku, rukoli,pomidorów,czosnku i oliwy z oliwek, tiramisu"
];
let listL = drinkList;
const lastPage = ["drinkList", "breakfastList", "lunchList"];

let flag = 0;
const changePageToRight = () =>
{
   flag++;
   console.log(flag);
   btnLeft.style.visibility = "visible"
   if (flag !== lastPage.length - 1)
   {
      breakfast();
   } else
   {
      btnRight.style.visibility = "hidden"
      lunch();
   }
}

const changePageToLeft = () =>
{
   flag--;
   console.log(flag);
   if (flag === 0)
   {
      clear()
      btnLeft.style.visibility = "hidden"
      document.querySelector(`.header`).style.backgroundImage = `url(./bar-g175f68357_1920.jpg)`;
      document.querySelector(`h1`).textContent = `Drink-list`;
      document.querySelector(`input`).placeholder = "Wpisz nazwę szukanego napoju"
      listL = drinkList;
      start()

   } else
   {
      btnRight.style.visibility = "visible"
      breakfast();
   }

   // console.log("text");

}


const breakfast = () =>
{

   clear()
   document.querySelector(`.header`).style.backgroundImage = `url(./pancakes-2291908_1920.jpg)`;
   document.querySelector(`h1`).textContent = `Breakfast-list`;
   document.querySelector(`input`).placeholder = "Wpisz nazwę szukanego śniadania"
   listL = breakfastList;
   start();
}
const lunch = () =>
{
   clear()
   document.querySelector(`.header`).style.backgroundImage = `url(./meat-1155132_1920.jpg)`;
   document.querySelector(`h1`).textContent = `Lunch-list`;
   document.querySelector(`input`).placeholder = "Wpisz nazwę szukanego lunch'u"
   listL = lunchList;
   start();
}

const clear = () =>
{
   for (let i = 0; i < listL.length; i++) { document.querySelector(`li`).remove() }
}


const start = () =>
{
   const ul = document.querySelector(`ul`);
   for (let i = 0; i < listL.length; i++)
   {
      const li = document.createElement(`li`);
      li.innerHTML = listL[i];
      ul.appendChild(li);
   }
}
start()




const engineSearch = (e) =>
{
   const liList = [...document.querySelectorAll(`li`)];
   const text = e.target.value.toLowerCase();


   liList.forEach(el =>
   {
      if (el.textContent.toLowerCase().indexOf(text) !== -1)
      {
         el.style.display = `block`;
      } else
      {
         el.style.display = `none`;
      }
   })
}


btnLeft.addEventListener(`click`, changePageToLeft);
btnRight.addEventListener(`click`, changePageToRight);
input.addEventListener(`keyup`, engineSearch)