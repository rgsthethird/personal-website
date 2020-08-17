// Constants
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

// Menu Icon Setup
var menuIcon = document.getElementById("menu-icon");
var petalTL = document.getElementById("petal-tl");
var petalTR = document.getElementById("petal-tr");
var petalBL = document.getElementById("petal-bl");
var petalBR = document.getElementById("petal-br");
menuIcon.addEventListener("mouseover", function(){
	petalTL.style.borderTopLeftRadius = "3px";
	petalTR.style.borderTopRightRadius = "3px";
	petalBL.style.borderBottomLeftRadius = "3px";
	petalBR.style.borderBottomRightRadius = "3px";
});
menuIcon.addEventListener("mouseleave", function(){
	petalTL.style.borderTopLeftRadius = "8px";
	petalTR.style.borderTopRightRadius = "8px";
	petalBL.style.borderBottomLeftRadius = "8px";
	petalBR.style.borderBottomRightRadius = "8px";
});

// Open Menu Setup
var xIcon = document.getElementById("menu-x");
var x1 = document.getElementById("x1");
var x2= document.getElementById("x2");
var menuIcon =  document.getElementById("menu-icon");
var menuList =  document.getElementById("menu-list");
// var menuBar =  document.getElementById("menu-bar");
// var menuChevron =  document.getElementById("menu-bar-chevron");
var menu =  document.getElementById("open-menu");
var menuSocialMedia = document.getElementById("menu-social-media");
var menuItems = document.getElementsByClassName("menu-item");
xIcon.addEventListener("mouseover", function(){
	x1.style.transform = "rotate(-45deg)";
	x2.style.transform = "rotate(-135deg)";
});
xIcon.addEventListener("mouseleave", function(){
	x1.style.transform = "rotate(45deg)";
	x2.style.transform = "rotate(-45deg)";
});

// Menu Functionality
menuIcon.addEventListener("click", function(){
	openMenu();
});
// menuBar.addEventListener("click", function(){
// 	openMenu();
// });
// menuBar.addEventListener("mouseover", function(){
// 	menuBar.style.width = "33px";
// 	menuChevron.style.right = "12px";
// });
// menuBar.addEventListener("mouseleave", function(){
// 	menuBar.style.width = "30px";
// 	menuChevron.style.right = "9px";
// });
xIcon.addEventListener("click", function(){
	closeMenu();
});
Array.prototype.forEach.call(menuItems, function(item) {
    item.addEventListener("click", function(){
		closeMenu();
	});
});

// On Scroll...
// var sticky = menuIcon.offsetTop+vh-17;
// window.onscroll = function() {
// 	if (window.pageYOffset > sticky) {
// 		menuIcon.style.position = "fixed";
// 	} else {
// 		menuIcon.style.position = "absolute";
// 	}
// };

// Functions
function openMenu() {
	menu.style.width = "35%";
	setTimeout(function() {
		menuSocialMedia.style.display = "flex";
		xIcon.style.display = "inherit";
	}, 40);
	setTimeout(function () {
		menuList.style.display = "inherit";
	}, 80);
}
function closeMenu() {
	xIcon.style.display = "none";
	menuList.style.display = "none";
	menuSocialMedia.style.display = "none";
	menu.style.width = "0";
}