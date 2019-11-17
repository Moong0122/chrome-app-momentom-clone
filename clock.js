const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // 00, 01, 02를 만들기 위해 삼항연산자 사용
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function init() {
    // getTime();
    setInterval(getTime,1000);
}

init();
//setInterval - 두 인자값을 받는데 첫번째는 함수 이름, 두번쨰는 함수를 실행하고 싶은 시간
// 함수, 실행할 시간 간격
