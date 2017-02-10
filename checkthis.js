let nagHiding = false;
function swing() {
    let nagText = nag_text.innerHTML;
    if(nagText==''){
        nagText='Какво направи пак?';
        let swinging = setInterval(go, 700);
        logo.style.transform='rotate(110deg)';
        logo.style.transition='transform 1s';
        let on = true;
        function go() {
            if(nag_text.innerHTML=='Спри да чупиш!'){
                clearInterval(swinging);
            }
            if(on){
                logo.style.transform='rotate(70deg)';
                on = false;
            }
            else {
                logo.style.transform='rotate(110deg)';
                on = true;
            }
        }
    }
    else if(nagText=='Какво направи пак?'){
        nagText='Спри да чупиш!';
    }
    else if(nagText=='Спри да чупиш!'){
        nagText='Престани!';
    }
    else if(nagText=='Престани!'){
        nagText='Това ти ще го оправяш!';
    }
    else if(nagText=='Това ти ще го оправяш!'){
        nagText='hide';
    }
    if (nagText!='hide'){
        nag.style.display='block';
        nag_text.innerHTML=nagText;
        hideNagBuble();
    }
}
function hideNagBuble(save) {
    if(!nagHiding){
        nagHiding = true;
        setTimeout(function () {
            nag.style.opacity='0';
        }, 1000);
        setTimeout(function () {
            nag.style.display='none';
            nagHiding = false;
            if(save != null){
                nag_text.innerHTML = save;
            }
            nag.style.transition='';
            nag.style.opacity='1';
            nag.style.transition='opacity 1s';
        }, 2000);
    }
}
function getWork() {
    let rnd = RandomInt(3,10);
    for(let i = 0; i< rnd; i++){
        let task = document.createElement('img');
        task.setAttribute('class', 'dirt');
        let id = document.getElementsByClassName('dirt').length;
        task.setAttribute('id',`${(id+1).toString()}`);
        task.setAttribute('onclick',`clean(this.id)`);
        task.setAttribute('src', 'spot.png');
        document.body.appendChild(task);
        let random = RandomInt(0,180);
        if(random > 90){
            task.style.transform = `rotate(${random}deg) rotateX(180deg)`;
        }
        else {
            task.style.transform = `rotate(${random}deg) rotateY(180deg)`;
        }
        random = Math.floor(Math.random() *(70)+10);
        task.style.top = `${random}%`;
        random = Math.floor(Math.random() *(70)+10);
        task.style.left = `${random}%`;
        task.style.width = `${random/3}%`;
        task.style.height = `${Math.ceil(random/1.5)}%`;
    }
    let saveNag = nag_text.innerHTML;
    nag_text.innerHTML = "Нали искаш работа? Ето изчисти!";
    nag.style.display = 'block';
    hideNagBuble(saveNag);

    let spots = parseInt(dirt_spots_left.innerHTML);
    spots += rnd;
    dirt_spots_left.innerHTML = spots;
    if(spots*5 > 220){spots = 44;}
    let green = 221-spots*5;
    dirt_Counter.style.background = `rgba(200 ,${green},0, 0.5)`;
    if(dirt_Counter.style.display!='block'){
        dirt_Counter.style.display='block';
    }
}
function clean(id) {
    let elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
    let spots = parseInt(dirt_spots_left.innerHTML);
    dirt_spots_left.innerHTML = spots-1;
    if(spots-1 == 0){
        dirt_Counter.style.display='none';
        let saveNag = nag_text.innerHTML;
        nag_text.innerHTML = "Браво! Бисквитка?";
        let prize = document.createElement('img');
        prize.setAttribute('src','http://www.greatamericancookies.com/app/themes/greatamericancookies/library/images/home/carousel1.png');
        prize.setAttribute('class','cookie');
        prize.setAttribute('onclick','this.parentNode.removeChild(this); eat_cookie.play();');
        document.body.appendChild(prize);
        prize.style.top=`${RandomInt(10,90)}%`;
        prize.style.left=`${RandomInt(10,90)}%`;
        nag.style.display = 'block';
        hideNagBuble(saveNag);
    }
    if(spots*5 > 220){spots = 44;}
    let green = 221-spots*5;
    dirt_Counter.style.background = `rgba(200,${green},0, 0.5)`;
}
function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}