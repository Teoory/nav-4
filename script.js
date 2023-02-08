
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      document.getElementById("navbar").style.backgroundColor = "#444444";
      // document.getElementById("logo").src = "/assets/Groupe 16.svg";
    } else {
      document.getElementById("navbar").style.background = "";
      // document.getElementById("logo").src = "/assets/Groupe 7.svg";
    }
    if ( document.body.clientWidth < 768 ) {
      document.getElementById("navbar").style.top = "0px";
      document.getElementById("navbar").style.background = "rgb(0, 0, 0, 0.15)";
    }
}
