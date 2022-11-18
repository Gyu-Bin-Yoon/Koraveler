
let day1 = document.querySelectorAll(".lineDay1 p");
let day1Article = document.querySelectorAll(".day1 .course");
console.log(day1Article)
day1Article[0].style.display = "block";
day1.forEach((day1) => {
    day1.addEventListener("click", changeCourseDay1);
})

function changeCourseDay1(e){
    let text = e.target.innerText;
    
    for(let i=0;i<day1.length;i++){
        if(day1[i].innerText === text){
            day1Article.forEach((day1) => {
                day1.style.display = "none";
            })
            day1.forEach((day1) => {
                day1.style.fontWeight = "400";;
            })
            e.target.style.fontWeight = "600";
            day1Article[i].style.display = "block";
        }
    }
}

let day2 = document.querySelectorAll(".lineDay2 p");
let day2Article = document.querySelectorAll(".day2 .course");
day2Article[0].style.display = "block";
day2.forEach((day1) => {
    day1.addEventListener("click", changeCourseDay2);
})

function changeCourseDay2(e){
    let text = e.target.innerText;
    
    for(let i=0;i<day2.length;i++){
        if(day2[i].innerText === text){
            day2Article.forEach((day2) => {
                day2.style.display = "none";
            })
            day2.forEach((day2) => {
                day2.style.fontWeight = "400";;
            })
            e.target.style.fontWeight = "600";
            day2Article[i].style.display = "block";
        }
    }
}

let day3 = document.querySelectorAll(".lineDay3 p");
let day3Article = document.querySelectorAll(".day3 .course");
day3Article[0].style.display = "block";
day3.forEach((day1) => {
    day1.addEventListener("click", changeCourseDay2);
})

function changeCourseDay2(e){
    let text = e.target.innerText;
    
    for(let i=0;i<day3.length;i++){
        if(day3[i].innerText === text){
            day3Article.forEach((day2) => {
                day2.style.display = "none";
            })
            day3.forEach((day2) => {
                day2.style.fontWeight = "400";;
            })
            e.target.style.fontWeight = "600";
            day3Article[i].style.display = "block";
        }
    }
}