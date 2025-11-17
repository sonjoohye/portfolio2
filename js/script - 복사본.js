// 모든 페이지에 적용되는 스크립트
const header = document.querySelector("#header");

// 과거의 스크롤바 위치값
let lastScrollTop = 0;

window.addEventListener("scroll",function(){

    // 스크롤을 내리면 헤더 배경색이 들어감
    let scTop = window.scrollY;

    if(scTop > 0){
        header.classList.add("on");
    }
    else{
        header.classList.remove("on"); 
    }

    //스크롤바 내리면 헤더는 사라지고
    //스크롤바 올리면 헤더는 나타남
    if(scTop > lastScrollTop) {
        header.classList.add("top");
    }
    else{
        header.classList.remove("top");
    }
    lastScrollTop = scTop;
});

// 카운팅 될 숫자값 배열로 저장
let countArray = [90,65,75,80];
// 게이지 dashoffset 변경될 숫자값
let percent = [44,154,110,88];

// .circle 대상들 선택
const circle = document.querySelectorAll(".circle");

// 배열안에 있는 갯수만큼 반복문으로 숫자 카운팅 작업
for(let i = 0; i < countArray.length; i++){

    // 카운팅 기능은 함수를 만들어서 작업 (카운팅될 숫자값, 순번값)
    autoCount(countArray[i],i,percent[i]);
}

// 카운팅되는 기능 함수로 정의
function autoCount(result,index,gage){
    // 초기값 숫자
    let start = 0;
    let last = 440; //dashoffset
    // 숫자 카운팅 setInterval 구간
    let plus = setInterval(function(){
        start++;  //1씩 숫자 증가
        last -= 5; //5씩 감소
        if(start >= result){
            clearInterval(plus); //숫자 카운팅 중지
            // 최종 결과 숫자가 카운트 태그에 나타나도록 해준다.
            circle[index].querySelector(".count").innerHTML = result + "%";
            // 게이지가 다 차서 멈춘 모습을 보여준다.
            circle[index].querySelector("circle").style.strokeDashoffset = gage;
        }
        else{
            // 진행 과정 숫자가 카운트 태그에 나타나도록 해준다.
            circle[index].querySelector(".count").innerHTML = start + "%";
            // 진행 과정에서 원형 스트로크의 게이지가 차는 모습을 보여준다.
            circle[index].querySelector("circle").style.strokeDashoffset = last;
        }

    },10);
}