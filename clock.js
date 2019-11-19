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
    // 만약 getTime을 써주지 않는다면 엔터할때마다 시간에 딜레이가 걸린다
    getTime();
    setInterval(getTime,1000);
}

init();
