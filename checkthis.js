let nagHiding = false;
let menu_dropped = null;
function nagging() {
    let nag_text = document.getElementById('nag_text');
    let nag = document.getElementById('nag');
    let nagText = nag_text.innerHTML;
    if(nagText==''){
        nagText='Какво направи пак?';
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
        let nag = document.getElementById('nag');
        let nag_text = document.getElementById('nag_text');
        nagHiding = true;
        setTimeout(function () {
            nag.style.opacity='0';
        }, 2500);
        setTimeout(function () {
            nag.style.display='none';
            nagHiding = false;
            if(save != null){
                nag_text.innerHTML = save;
            }
            nag.style.transition='';
            nag.style.opacity='1';
            nag.style.transition='opacity 1s';
        }, 3500);
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
        random = Math.floor(Math.random() *(55)+10);
        task.style.top = `${random}%`;
        random = Math.floor(Math.random() *(25)+10);
        task.style.left = `${random}%`;
        random = Math.floor(Math.random() *(55)+10);
        if(window.innerWidth > window.innerHeight){
            task.style.width = `${random/3}vw`;
            task.style.height = `${Math.ceil(random/3)}vw`;
        }
        else {
            task.style.width = `${random/2}vh`;
            task.style.height = `${Math.ceil(random/2)}vh`;
        }

    }
    let nag_text = document.getElementById('nag_text');
    let nag = document.getElementById('nag');
    let dirt_spots_left = document.getElementById('dirt_spots_left');
    let saveNag = nag_text.innerHTML;
    nag_text.innerHTML = "Нали искаш работа? Ето изчисти!";
    nag.style.display = 'block';
    hideNagBuble(saveNag);

    let spots = parseInt(dirt_spots_left.innerHTML);
    spots += rnd;
    dirt_spots_left.innerHTML = spots;
    if(spots*5 > 220){spots = 44;}
    let green = 221-spots*5;
    let dirt_Counter = document.getElementById('dirt_Counter');
    dirt_Counter.style.background = `rgba(200 ,${green},0, 0.5)`;
    if(dirt_Counter.style.display!='block'){
        dirt_Counter.style.display='block';
    }
}
function clean(id) {
    let elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
    let dirt_spots_left = document.getElementById('dirt_spots_left');
    let spots = parseInt(dirt_spots_left.innerHTML);
    dirt_spots_left.innerHTML = spots-1;
    if(spots-1 == 0){
        let dirt_Counter = document.getElementById('dirt_Counter');
        dirt_Counter.style.display='none';
        let nag_text = document.getElementById('nag_text');
        let saveNag = nag_text.innerHTML;
        nag_text.innerHTML = "Браво! Бисквитка?";
        let prize = document.createElement('img');
        prize.setAttribute('src','http://www.greatamericancookies.com/app/themes/greatamericancookies/library/images/home/carousel1.png');
        prize.setAttribute('class','cookie');
        prize.setAttribute('onclick','this.parentNode.removeChild(this); eat_cookie.play();');
        document.body.appendChild(prize);
        prize.style.top=`${RandomInt(10,70)}vh`;
        prize.style.left=`${RandomInt(10,70)}vw`;
        let nag = document.getElementById('nag');
        nag.style.display = 'block';
        hideNagBuble(saveNag);
    }
    if(spots*5 > 220){spots = 44;}
    let green = 221-spots*5;
    let dirt_Counter = document.getElementById('dirt_Counter');
    dirt_Counter.style.background = `rgba(200,${green},0, 0.5)`;
}
function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CheckForApples() {

    let nAgt = window.navigator.userAgent;
    let os = 'Not Apple';
    let clientStrings = [
        {s:'iOS', r:/(iPhone|iPad|iPod)/},
        {s:'Mac OS X', r:/Mac OS X/},
        {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
        {s:'OS/2', r:/OS\/2/},
    ];
    for (let id in clientStrings) {
        let cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
            os = 'OS';
            break;
        }
    }
    if(os.indexOf('OS') != -1){

        let d = document.createElement('div');
        let ap = document.createElement('img');
        ap.setAttribute('src', 'apple.jpg');
        ap.setAttribute('class','apple-greetings-img');
        d.setAttribute('class','apple-greetings');
        d.appendChild(ap);
        d.setAttribute('id','apple_greetings');
        let p = document.createElement('p');
        p.innerHTML = 'If you still want to continue click on the button below but if you see bugs you were warned.';
        p.setAttribute('class','apple-greetings-text');
        d.appendChild(p);
        let b = document.createElement('button');
        let s = "document.getElementById('apple_greetings').style.display='none'";
        b.setAttribute('onclick',s);
        b.innerHTML='Continue';
        b.setAttribute('class', 'apple-greetings-button');
        d.appendChild(b);
        document.body.appendChild(d);
    }
}
function debugging() {
    let debug = document.getElementById('debug');
    let debug_info = document.getElementById('debug_info');
    if(debug.checked==true){
        debug_info.innerHTML = 'h: ' + window.innerHeight + ' w: ' + window.innerWidth;
    }
    else {
        debug_info.innerHTML = '';
    }
}
function dropdown(menu_head) {
    try {
        menu_head = menu_head.childNodes[1];
        if(menu_dropped != null && menu_dropped != menu_head){
            menu_dropped.style.display="none";
        }
        menu_head.style.display=="block" ? menu_head.style.display="none" : menu_head.style.display="block";
        menu_dropped = menu_head;
    }
    catch (e){console.log(e);}
}
function experiment() {
    if(document.getElementById('test_subject').getAttribute('class')=='none'){
        let r = RandomInt(0,4);
        let c = ['ball', 'sun', 'roll', 'circle'];
        let d = [3000, 4000, 8000, 10000];
        document.getElementById('test_subject').setAttribute('class', c[r]);
        setTimeout(function () {
            document.getElementById('test_subject').setAttribute('class', 'none');
        }, d[r]);
    }
}