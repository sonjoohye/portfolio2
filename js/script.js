AOS.init();

// 모든 페이지에 적용되는 스크립트
const header = document.querySelector("#header");
// gnb 메뉴들 선택
const gnb = document.querySelectorAll(".gnb > li");
// 섹션들 선택
const sections = document.querySelectorAll(".section");
// 인트로 하단에 마우스 이미지 선택
const mouse = document.querySelector(".mouse");
// 어바웃 섹션만 선택
const about = document.querySelector(".about").offsetTop;
// 우측 하단 스크롤바 이동 버튼
const fixTop = document.querySelector(".fix_top");
const fixWrap = document.querySelector(".fix_wrap");

// 섹션 구역들 위치값 담아주는 변수(배열)
let secStart = [];

//스크롤 스위치 
let scrollOn = true;

// 카운팅 될 숫자값 배열로 저장
let countArray = [80,80,90,85,80,75];
// 게이지 dashoffset 변경될 숫자값
let percent = [80,80,44,85,80,110];
// .circle 대상들 선택
const circle = document.querySelectorAll(".circle");

// 신라호텔 태블릿 버튼 선택
const tabletShilla = document.querySelector(".tablet_shilla");
// 신라호텔 모바일 버튼 선택
const mobileShilla = document.querySelector(".mobile_shilla");
// 아파트멘터리 태블릿 버튼 선택
const tabletApt = document.querySelector(".tablet_apt");
// 아파트멘터리 모바일 버튼 선택
const mobileApt = document.querySelector(".mobile_apt");
// 아파트멘터리 태블릿 버튼 선택
const tabletNovel = document.querySelector(".tablet_novel");
// 아파트멘터리 모바일 버튼 선택
const mobileNovel = document.querySelector(".mobile_novel");

// 반응형 웹에 있는 데스크탑/태블릿/모바일 버튼을 누르면 각각의 크기에 맞는 새 창이 뜬다.
tabletShilla.addEventListener("click",function(){
    let url = "http://gagaclub.cafe24app.com/"; 
    window.open(url,"tablet_shilla","width=1024px,height=1080px,left=300px,top=0px");
    //window.open(url,"이름","크기,위치");  
});
mobileShilla.addEventListener("click",function(){
    let url = "http://gagaclub.cafe24app.com/"; 
    window.open(url,"tablet_shilla","width=500px,height=700px,left=500px,top=100px");
    //window.open(url,"이름","크기,위치");  
});
tabletApt.addEventListener("click",function(){
    let url = "http://gagaclub.dothome.co.kr/apt"; 
    window.open(url,"tablet_apt","width=1024px,height=1080px,left=300px,top=0px");
    //window.open(url,"이름","크기,위치");  
});
mobileApt.addEventListener("click",function(){
    let url = "http://gagaclub.dothome.co.kr/apt"; 
    window.open(url,"tablet_apt","width=500px,height=700px,left=500px,top=100px");
    //window.open(url,"이름","크기,위치");  
});
tabletNovel.addEventListener("click",function(){
    let url = "http://gagaclub.dothome.co.kr/novel"; 
    window.open(url,"tablet_apt","width=960px,height=1080px,left=300px,top=0px");
    //window.open(url,"이름","크기,위치");  
});
mobileNovel.addEventListener("click",function(){
    let url = "http://gagaclub.dothome.co.kr/novel"; 
    window.open(url,"tablet_apt","width=500px,height=700px,left=500px,top=100px");
    //window.open(url,"이름","크기,위치");  
});


window.addEventListener("scroll",function(){

    // 스크롤바 위치값
    let scTop = window.scrollY;

    // 섹션들의 시작 위치값 받아와서 배열 변수값 담아줌
    for(let i = 0; i < sections.length; i++){
        secStart[i] = sections[i].offsetTop;
    }

    // 스크롤을 내리면 헤더 배경색, 글씨색 변경
    if(scTop > 0){
        header.classList.add("on");
    }
    else{
        header.classList.remove("on"); 
    }

    // 스크롤바의 위치값이 해당 섹션 범위 안에 있을 때 -> 해당 메뉴만 활성화 / 나머지는 비활성화
    // for(let i = 0; i < sections.length; i++){
    //     if(scTop >= secStart[i]-80){
    //         // 메뉴 전부 비활성화
    //         for(let j = 0; j < sections.length; j++){
    //             gnb[j].classList.remove("on");
    //             // sections[j].classList.remove("on");
    //         }
    //         // 해당 메뉴만 활성화
    //         gnb[i].classList.add("on");
    //         // sections[i].classList.add("on");
    //     }
    // }

    // 숫자 카운트 되면서 동그라미 그래프가 차오름.
    if(scrollOn){

        if(scTop > about-80){
            //배열안에 있는 갯수만큼 반복문으로 숫자 카운팅 작업
            for(let i=0; i < countArray.length; i++){

                //카운팅 기능은 함수를 만들어서 작업 (카운팅될 숫자값,순번값)
                autoCount(countArray[i],i,percent[i]); 
            }
            scrollOn = false;
        }

    }

    // 스크롤바의 위치값에 따라 우측 하단 버튼이 나타나고 사라지는 기능을구현하는 조건문
    if(scTop > secStart[2]-300){
        // fixTop.classList.add("on");
        fixWrap.classList.add("on");
    }
    else{
        // fixTop.classList.remove("on");
        fixWrap.classList.remove("on");
    }

    //웹브라우저 스크롤 이벤트 
 

        //body 태그의 높이값(문서의 높이값)
        let scrollHeight = document.body.clientHeight;
        
        //body 태그의 높이값에서  웹브라우저 화면의 높이값을 빼줌
        let scrollRealHeight = scrollHeight - window.innerHeight;

        //스크롤바의 위치값을 백분율 %로 변환
        let scrollPercent = (scTop / scrollRealHeight) * 100;

        //게이지가 차는 부분 구현
        const bgs = document.querySelectorAll(".bg");
        bgs.forEach(function(items,index){

            items.style.width = scrollPercent + "%";

        });
});

// gnb 메뉴 클릭 시 스크롤바의 위치가 부드럽게 이동되는 기능을 구현
for(let i = 0; i < gnb.length; i++){

    gnb[i].addEventListener("click",function(e){
        // a태그가 가지고 있는 기본기능(페이지 이동) 멈춤
        e.preventDefault();
        // 해당 섹션구역의 위치값으로 스크롤바가 부드럽게 이동
        let scrollMove = sections[i].offsetTop; // 위치값을 새로 받아옴

        window.scrollTo({
            top:scrollMove,
            behavior:"smooth"
        });
    });
}

// 자동타이핑
let text = "도전하며 성장하는 \n 웹퍼블리셔 손주혜입니다 :)"
let viewText = "";
let i = 0;

const typingText = document.querySelector(".typing_text");

let autoTyping = setInterval(function(){
    typing();
},150);

function typing(){
    viewText = text[i++];
    if(viewText == "\n"){
        typingText.innerHTML += "<br>";
    }
    else{
        typingText.innerHTML += viewText;
    }

    if(i > text.length-1){
        clearInterval(autoTyping);

        // 아래 코드 활성화하면 5초마다 반복됨.
        // setTimeout(function(){
        //     typingText.innerHTML = "";
        //     i = 0;

        //     autoTyping = setInterval(function(){
        //         typing();
        //     },100);


        // },5000);
    }
}

// 하단 마우스 이미지 클릭하면 다음 화면으로 스크롤 이동
mouse.addEventListener("click",function(){
    let scrollMove = sections[1].offsetTop;
    window.scrollTo({
        top:scrollMove,
        behavior:"smooth"
    })
});

// 우측 하단 화살표 누르면 스크롤 맨 위로 부드럽게 이동
fixTop.addEventListener("click",function(e){
    e.preventDefault();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


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


// isotope API 사용방법
let elem = document.querySelector('.besides_list');
let iso = new Isotope( elem, {
    // options
    itemSelector: '.all',
    layoutMode: 'fitRows',
    transitionDuration: '0.5s'
});

// 메뉴를 클릭 시 정렬 기능 실행
const btns = document.querySelectorAll(".besides > .top > .btn > li");

btns.forEach(function(item,index){

    item.addEventListener("click",function(e){

        e.preventDefault(); //a태그가 가지고 있는 페이지 이동기능 중지

        // 클릭한 메뉴의 data-filter 속성값을 담아줄 변수
        let attrValue = item.getAttribute("data-filter");
        
        // 정렬기능 객체가 들어가있는 iso 변수에 -> 기능을 실행시키자.
        iso.arrange({
            filter:attrValue
        });

        // 클릭한 메뉴만 활성화, 나머지는 비활성화
        btns.forEach(function(menu,index){
            menu.classList.remove("on")
        });
        item.classList.add("on");
    });

});


// // 마우스 휠을 위, 아래로 올리고 내리면 한 섹션씩 이동하는 기능
// sections.forEach(function(item,index){
//     item.addEventListener("wheel",function(e){

//         e.preventDefault();//a태그가 아니라 스크롤이벤트랑 휠 중첩 막아주려고

//         if(e.wheelDelta > 0){//0이 기준이다.
//             movePoint = e.currentTarget.previousElementSibling.offsetTop;
//             //휠을 올리면 이전으로 올라감
//         }
        
//         else if(e.wheelDelta < 0){
//             movePoint = e.currentTarget.nextElementSibling.offsetTop;
//             //휠을 내리면 다음으로 내려감
//         }

//         window.scrollTo({
//             top:movePoint,
//             left:0,
//             behavior:"smooth"
//         });
//     });
// });