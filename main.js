import { KEPEKLISTA1 } from "./adat.js";
let kep = 0;
let kivalasztottKepek = [];
//function Randomszamgeneralas(min, max, exclude) {
//    let randnum = Math.floor(Math.random() * (max - min))+min;
//
//    if (randnum == exclude){
//        ranNum = generateRandomBetween(min, max, exclude);
//    }
//}

$(function () {
  console.log(KEPEKLISTA1);

  //  for (let index = 0; index < KEPEKLISTA1.length; index++) {
  //   KEPEKLISTA1[index][1]=Randomszamgeneralas(16)
  //  }
  const ARTICLE = $("article");
  ARTICLE.html(osszeallit(KEPEKLISTA1));
  //   setTimeout(function () {
  //     console.log("1000 ms múlva");
  //   }, 1000);
  const IMG = $("article div img");
  IMG.on("click", function (event) {
    $(event.target).attr("src", KEPEKLISTA1[event.target.id].kep);
    if(kep == 0){
        kivalasztottKepek[0] = event.target.id;
    }
    else{
        kivalasztottKepek[1] = event.target.id;
    }
    console.log(kivalasztottKepek[0]);
    console.log(kivalasztottKepek[1]);
    // event.target.src = KEPEKLISTA1[event.target.id].kep;
    kep += 1;
      if (kep >= 2) {
        setTimeout(visszafordit,1000)
      }
  });
});

function osszeallit(list) {
  let txt = "";
  for (let i = 0; i < list.length; i++) {
    txt += `<div>`;
    txt += `<img src="kepek/hatter.jpg" alt="" id="${i}"> `;
    //  txt += `<img src="${list[i].kep}" alt=""> `;
    txt += `</div>`;
  }
  return txt;
}

console.log("betöltés elött");

function visszafordit(){
    console.log("megy")
    for (let index = 0; index < kivalasztottKepek.length; index++) {
        const ELEM=$("article img").eq(kivalasztottKepek[index])
      ELEM.attr("src", "kepek/hatter.jpg")
      console.log(ELEM)
    }
    kep = 0;
}
