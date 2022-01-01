const app = new Vue({
  el: '#app',
  data:{
    isMenuOpen: false,
    isDark:false,
    logo:'',
  },
  methods:{
    themeToggler(){
      this.isDark = !this.isDark;
      localStorage.setItem("dark", this.isDark ? true : '');
      document.body.classList.toggle("dark-theme-variables");
      this.logo = this.isDark ? "./images/logos/crow-white.png" : "./images/logos/crow.png";
    }
  },
  mounted(){
    this.isDark = localStorage.getItem("dark");
    this.logo = this.isDark ? "./images/logos/crow-white.png" : "./images/logos/crow.png";
    if(this.isDark){
      document.body.classList.add("dark-theme-variables");
    }
  },
});

//hide sidebar when click outside
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

document.addEventListener("click", function (event) {
  let isClickInside = sideMenu.contains(event.target);
  let isClickMenuBotton = menuBtn.contains(event.target);
  let isClickCloseBtn = closeBtn.contains(event.target);
  let width = window.innerWidth; // get width of window, for only in mobile screens

  if (!isClickInside & !isClickMenuBotton & (width < 769)) {
    sideMenu.classList.remove("show");
  }else if(isClickMenuBotton & !isClickCloseBtn){
    sideMenu.classList.add("show");
  }
});
