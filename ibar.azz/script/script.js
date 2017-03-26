var sideMenu = document.querySelectorAll('.side_menu');
var sideMenus = document.querySelector('.side_menus');
var contactClick = document.querySelector('.s_menu a:first-child');
var bankOnlineClick = document.querySelectorAll('.s_menu a')[1];
var login = document.querySelector('.login span:first-child');
var fader = document.querySelector('.fader');
var closeButton = document.querySelectorAll('.close_sm');
var contactSide = document.getElementById('contact_side');
var wrapper = document.querySelector('.wrapper');
var allMenu = document.querySelector('.m_menu');
var key = document.querySelectorAll('.login span')[1];
var a = -320;
//---------------------click function---------------------
document.body.addEventListener('click', function (e) {
    var target = e.target;
    while (target != document.body) {
        if (typeof target.getAttribute("data-menu") === 'string') {
            wrapper.classList.add('zoom_out');
            dataMenu = target.getAttribute('data-menu');
            fader.style.display = 'block';
            sideMenu[dataMenu].style.right = 0;
        }
        target = target.parentNode;
    }
});
//--------------fader click--------------
fader.addEventListener('click',function(){
    sideMenu[dataMenu].style.right = a + 'vw';
    fader.style.display = 'none';
    wrapper.classList.remove('zoom_out');
})
//------  x - button   ------------------
for(i=0;i<sideMenu.length;i++){
    closeButton[i].addEventListener('click',function(){
        sideMenu[dataMenu].style.right = a + 'vw';
        wrapper.classList.remove('zoom_out');
        fader.style.display = 'none';
    })
}
//------------------slider-----------------------------
var dot = document.querySelectorAll('.dot');
var cardItem = document.querySelectorAll('.card_item');
var t=0;
for(i=0;i<dot.length;i++){
    dot[i].addEventListener('click',function(event){
        for(k=0;k<dot.length;k++){
            dot[k].classList.remove('dot_selected');
            cardItem[k].style.opacity = 0;
        }
        slideData = event.target.getAttribute('name');
        t+=1;
        cardItem[slideData].style.opacity = t;
        this.classList.add('dot_selected');
    });
}
//--------------------search input-------------------------
var searchInput = document.querySelector('.search_query');
var softResult = document.querySelector('.soft_result');
var searchPlaceholder = document.querySelector('.search_placeholder');
document.body.addEventListener('click',function(event){
    getSearch = event.target.getAttribute('name');
    if(getSearch == 'search'){
        softResult.style.height = '35px';
        softResult.style.opacity = 1;
        if(window.innerWidth < 1000){
            searchPlaceholder.style.transform = 'translate(-30px, -25px) scale(.7)';
        }else{
            searchPlaceholder.style.transform = 'translate(-88px, -35px) scale(.5)';
        }
    }else{
        softResult.style.height = 0;
        softResult.style.opacity = 0;
        searchPlaceholder.style.transform = '';
    }
})
//--------------------ALL SITE MENU MOVING-------------------
var menuIndividual = document.querySelector('.menu_individual');
var menuCorporate = document.querySelector('.menu_corporate');
var menuScroll = document.querySelector('.sm_menus_scroll');
var p = 0;
//menuIndividual click
menuIndividual.addEventListener('click',function(){
    menuScroll.style.left = p + 'px';
    menuCorporate.classList.remove('sm_active')
    this.classList.add('sm_active');
})
//menuCorporate click
menuCorporate.addEventListener('click',function(){
    p -= 750;
    menuScroll.style.left = p + 'px';
    menuIndividual.classList.remove('sm_active')
    this.classList.add('sm_active');
    p=0;
})
//---------------------individual/corporate---------------------
var individual = document.querySelector('.individual');
var corporate = document.querySelector('.corporate');
var logo = document.querySelector('.logo');
var middlerWrap = document.querySelector('.middler_wrap');
var clip = document.querySelector('.fk');
var scroll = document.querySelector('.scroll');
var pathAfter = document.querySelectorAll('.path_after');
//individual-corporate complex function
function indiCor(){
    middlerWrap.style.top = '-100%';
    clip.style.clipPath =' polygon(60% 0, 100% 0, 100% 100%, 12% 100%)';
    clip.style.transition = 'all 3s cubic-bezier(1, 0, 0, 1)';
    for(t=0;t<2;t++){
        pathAfter[t].style.opacity = 0;
    }
}
//individual click
individual.addEventListener('click',function(){
    scroll.style.top = '';
    corporate.classList.remove('main_menu_active');
    this.classList.add('main_menu_active');
    indiCor();
    pathAfter[0].style.transition ='';
    setTimeout(function(){
        pathAfter[0].style.opacity=1;
    }, 700);
})
//corporate click
corporate.addEventListener('click',function(){
    scroll.style.top = '-100vh';
    individual.classList.remove('main_menu_active');
    this.classList.add('main_menu_active');
    indiCor();
    pathAfter[1].style.transition ='';
    setTimeout(function(){
        pathAfter[1].style.opacity=1;
    }, 700);
})
//logo click
logo.addEventListener('click',function(){
    middlerWrap.style.top = '';
    corporate.classList.remove('main_menu_active');
    individual.classList.remove('main_menu_active');
    clip.style.clipPath =' polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
    clip.style.transition = 'all 1.5s cubic-bezier(1, 0, 0, 1)';
    for(t=0;t<2;t++){
        pathAfter[t].style.opacity = 0;
        pathAfter[t].style.transition ='all .8s cubic-bezier(1, 0, 0, 1)';
    }
})
//-------------menu for responsive -------------
var miniMenu = document.querySelector('.mobile_menu_opener');
var menuMobile = document.querySelector('.total_menu_wrp_mobile');
var closeMobileMenu = document.querySelector('.close_mobile_menu');
var mobileSection = document.querySelector('.tmw_mobile_wrap_scroll');
miniMenu.addEventListener('click',function(){
    menuMobile.style.left=0;
})
closeMobileMenu.addEventListener('click',function(){
    menuMobile.style.left='';
})

