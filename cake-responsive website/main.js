
// form login


var user_login = document.querySelector('#login-btn');
user_login.addEventListener('click', () => {
    document.querySelector('.login-form-container').classList.add('click');
})

var remove_bar = document.querySelector('.cross-bar');
remove_bar.onclick = () => {
    document.querySelector('.login-form-container').classList.remove('click');
}

var remove_bar = document.querySelector('.cross-bar');
remove_bar.onclick = () => {
    document.querySelector('.login-form-container').classList.remove('click');
}

// search dynamic bar

document.querySelector('#search-btn').onclick = () => {

    document.querySelector('header .search_box').classList.add('active');

}


document.querySelector('#delete_search').onclick = () => {
    document.querySelector('header .search_box').classList.remove('active');
    document.querySelector('#input_search').value = null;
}

window.onscroll = () => {
    if (window.scrollY > 20) {
        document.querySelector('header .search_box').classList.remove('active');
        document.querySelector('#input_search').value = null;
    }


}




var i=0


setInterval(()=>{
    

  i++;



  function Typewriting() {
    var str = 'Start Your Day With Sweetness';
    document.querySelector('.auto-writng').innerHTML=str.slice(0,i);
    if(i>str.length){
        i=1;
    }
    
    console.log(i);
}





Typewriting();

},300);


document.querySelector('#card_plus').onclick=()=>{
    document.querySelector('.add_to_card_container').classList.add('active');
}

document.querySelector('.delete').onclick=()=>{
    document.querySelector('.add_to_card_container').classList.remove('active');

}