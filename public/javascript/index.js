let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
let screenWidth = screen.width;

window.onload = function() {
				// Sets Element Positions
				setDimensions();
				// Sets email for contact forms
				document.getElementById('contact-form').addEventListener('submit', function(event) {
					event.preventDefault();
					emailjs.sendForm('gmail', 'template_wF2l1CBr', this);
					document.querySelector('#input-name').value = "";
					document.querySelector('#input-email').value = "";
					document.querySelector('#input-company').value = "";
					document.querySelector('#input-phone').value = "";
					document.querySelector('#input-message').value = "";
				});
				document.getElementById('email-form').addEventListener('submit', function(event) {
					event.preventDefault();
					emailjs.sendForm('gmail', 'updateregistration', this);
					document.querySelector('#email-input').value = "";
				});
			}
window.addEventListener("resize", setDimensions);

let loadingPage = document.getElementById('loading');
setTimeout(function() {loadingPage.style.top = "-100vh";}, 1500);

// Functions for page display
function setDimensions() {
	vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	screenWidth = screen.width;
	setStickies();
	setPageHeights();
}

function setStickies() {
	if(vw >= 900 && screenWidth >= 900) {
		stickybits("#about-image");
		stickybits("#resume-image");
	} else {
		stickybits("#about-image").cleanup();
		stickybits("#resume-image").cleanup();
	}
}

function setPageHeights() {
	var aboutHeight = document.getElementById('about-text').offsetHeight+vh/5;
	var resumeHeight = document.querySelector('#resume-backdrop .content-text').offsetHeight+vh/3.5;
	var aboutVH = Math.round(aboutHeight/vh*100);
	var resumeVH = Math.round(resumeHeight/vh*100);
	document.getElementById('about').style.height = aboutVH.toString()+"vh";
	document.getElementById('resume').style.height = resumeVH.toString()+"vh";
	if(vw >= 900 && screenWidth >= 900) {
		document.getElementById('resume').style.top = (aboutVH+100).toString()+"vh";
		document.getElementById('contact').style.top = (aboutVH+100+resumeVH).toString()+"vh";
		document.getElementById('footer').style.top = (aboutVH+200+resumeVH).toString()+"vh";
	} else if (vw >= 500 && screenWidth >= 500) {
		document.getElementById('resume').style.top = (aboutVH+140).toString()+"vh";
		document.getElementById('contact').style.top = (aboutVH+180+resumeVH).toString()+"vh";
		document.getElementById('footer').style.top = (aboutVH+320+resumeVH).toString()+"vh";
		var inputWidth = document.getElementById('input-name').offsetWidth;
		var message = document.getElementById('input-message');
		message.style.transitionDuration = "0";
		message.style.width = "calc("+(inputWidth-2).toString()+"px - 2em)";
		message.style.transitionDuration = ".2s";
	} else {
		document.getElementById('about-backdrop').style.height = (aboutVH-5).toString()+"vh";
		document.getElementById('about').style.height = (aboutVH+15).toString()+"vh"
		document.getElementById('resume-backdrop').style.height = (resumeVH-10).toString()+"vh";
		document.getElementById('resume').style.height = (resumeVH+10).toString()+"vh"
		document.getElementById('contact-backdrop').childNodes[1].style.height = "59vh";
		document.getElementById('resume').style.top = (aboutVH+115).toString()+"vh";
		document.getElementById('contact').style.top = (aboutVH+125+resumeVH).toString()+"vh";
		document.getElementById('footer').style.top = (aboutVH+208+resumeVH).toString()+"vh";
		document.getElementById('footer').childNodes[1].style.height = "19vh";
		var inputWidth = document.getElementById('input-name').offsetWidth;
		var message = document.getElementById('input-message');
		message.style.transitionDuration = "0";
		message.style.width = "calc("+(inputWidth+20).toString()+"px - 2em)";
		message.style.transitionDuration = ".2s";
	}
	
}

