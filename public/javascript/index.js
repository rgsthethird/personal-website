let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

window.onload = function() {
				// Sets Element Positions
				setDimensions();
				// For contact forms
				document.getElementById('contact-form').addEventListener('submit', function(event) {
					console.log(this);
					event.preventDefault();
					emailjs.sendForm('gmail', 'template_wF2l1CBr', this);
					document.querySelector('#input-name').value = "";
					document.querySelector('#input-email').value = "";
					document.querySelector('#input-company').value = "";
					document.querySelector('#input-phone').value = "";
					document.querySelector('#input-message').value = "";
				});
				document.getElementById('email-form').addEventListener('submit', function(event) {
					console.log(this);
					event.preventDefault();
					emailjs.sendForm('gmail', 'updateregistration', this);
					document.querySelector('#email-input').value = "";
				});
			}
window.addEventListener("resize", setDimensions);

// Functions
function setDimensions() {
	vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	setStickies();
	setPageHeights();
}

function setStickies() {
	if(vw >= 900) {
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
	if(vw >= 900) {
		document.getElementById('resume').style.top = (aboutVH+100).toString()+"vh";
		document.getElementById('contact').style.top = (aboutVH+100+resumeVH).toString()+"vh";
		document.getElementById('footer').style.top = (aboutVH+200+resumeVH).toString()+"vh";
	} else {
		document.getElementById('resume').style.top = (aboutVH+140).toString()+"vh";
		document.getElementById('contact').style.top = (aboutVH+180+resumeVH).toString()+"vh";
		document.getElementById('footer').style.top = (aboutVH+320+resumeVH).toString()+"vh";
		var inputWidth = document.getElementById('input-name').offsetWidth;
		var message = document.getElementById('input-message');
		message.style.transitionDuration = "0";
		message.style.width = "calc("+(inputWidth-2).toString()+"px - 2em)";
		message.style.transitionDuration = ".2s";
	}
	
}

