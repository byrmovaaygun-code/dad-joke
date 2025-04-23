 const arr=[`+elmler stansiyasının açarı nədir,<br><br>
    -Nədir?<br><br>
    +Riyaziyyat Çünki riyaziyyat bütün elmlerin açarıdır`,
`Məktəb yananda nə olur?<br><br>
Təhsil ocağı`,
`Aşbaz banka gedəndə nolur?<br><br>
Power bank`,
`Sürət həddini aşan kitab nə olur?<br><br>Best-seller!`,
`Qənd çox oxuyanda nolur?<br><br>
Kəllə Qənd`,
` Dədə Qorqud Qazan xanın adını qoyanda nə deyir?<br><br>
Adını mən qoydum,qapağını siz qoyun`,
`Kral ölsə oğlu nə olar <br><br>
Yetim`
]


  const  random=document.querySelector(".random")
  const  btn=document.querySelector(".btn")
function ramdomJoke() {
     const findRandom=Math.floor(Math.random() * arr.length)
     random.innerHTML=arr[findRandom]
}ramdomJoke()
btn.addEventListener("click", ramdomJoke )