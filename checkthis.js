/**
 * Created by Petar on 2/8/2017.
 */
var interval = setInterval(checker, 1000);
var stopSwinging = false;
function checker() {
    if(nag_text.innerHTML=='Какво направи пак?'){
        var swinging = setInterval(go, 700);
        logo.style.transform='rotate(110deg)';
        logo.style.transition='transform 1s';
        clearInterval(interval);
        var on = true;
        function go() {
            if(nag_text.innerHTML=='Спри да чупиш!'){
                clearInterval(swinging);
            }
            if(nag_text.innerHTML=='Спри да чупиш!'){
                stopSwinging = true;
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
}
function swing() {
    if(nag_text.innerHTML==''){
        nag_text.innerHTML='Какво направи пак?';
    }
    else if(nag_text.innerHTML=='Какво направи пак?'){
        nag_text.innerHTML='Спри да чупиш!';

    }
    else if(nag_text.innerHTML=='Спри да чупиш!'){
        nag_text.innerHTML='Престани!';
    }
    else if(nag_text.innerHTML=='Престани!'){
        nag_text.innerHTML='Това ти ще го оправяш!';
    }
    else if(nag_text.innerHTML=='Това ти ще го оправяш!'){
        nag_text.innerHTML='hide';
    }
    if (nag_text.innerHTML!='hide'){
        nag.style.display='block';
    }
    setTimeout(function () {
        nag.style.display='none';
    }, 2000);
}