

debugger
 var form =document.querySelector(".question-form")
 var correctAnswers=["E","E","E","E"]
 var result=document.querySelector(".result")
 
form.addEventListener("submit",e=>{e.preventDefault();
   
    var score=0;
 
 var userAnsers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]
   
    userAnsers.forEach((answers,index )=>{
    if(answers==correctAnswers[index] ) { score +=25;}
   
});console.log(score)
    result.classList.remove("d-none");
    let puan=0;
    let bastır1=setInterval(()=>{let span= document.querySelector( "span").textContent=`${puan}%`

      if(puan==score)
      {clearInterval(bastır1)}

      else{puan+=25}
}
,1000
    
    )
    
})






//Biz burada parantezden sonra 2000 yazdığımızda 2 saniye sonra console can değerini basar.Set time out bir kere çalışır.Yani can 2 saniye sonra bir defa yazar ve görevini tamamlar.

setTimeout
(()=>{console.log("Can")}
,2000)

//Eğer burada bir her belirtilen saniyede tekrar tekran console.loh  can yazdırmak istoyrsak o zaman biz burada set nitervali kullanacağız.
const bastır = 
setInterval(()=>{console.log("Can"
)},
2000)

let i=0;
//Biz vurada kodu console yazdırmayı durdurmak istiyorsak o zaman set intervalı bir değişkene atammız gerekiyor.
const bastır1=setInterval(()=>{  i++;console.log(i); },2000)

//







