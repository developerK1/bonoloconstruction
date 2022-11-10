//updating the copyright year
(function(){
	const currentYear = document.querySelector(".year" );
	
	let thisYear = new Date();
	let newYear = thisYear.getFullYear();
	
	currentYear.textContent = newYear ;
	currentYear.innerText = newYear;
}());


//toggling an active state on the menu links
$(document).on('click', 'ul li', function(){
	$(this).addClass('active').siblings().removeClass('active');
});


//toggling the current link state
const menuHover = document.querySelector('ul');
const currentLi = document.querySelector('.at-page');

menuHover.addEventListener('mouseover', ()=>{
	currentLi.classList.remove('at-page');
});

menuHover.addEventListener('mouseout', ()=>{
	currentLi.classList.add('at-page');
});


//social icon animation
const socialimgs = document.querySelectorAll(".soc-med-icon");

socialimgs.forEach((socialimg)=>{
	socialimg.addEventListener("click",function(){
	this.style.transition = " all 0.3s ease-in-out";
		this.classList.add("soc-icon-js");
	});
});



//navbar icon animations
const navbar = document.querySelector('.navbar-toggler');
/*const icon = document.querySelector('.navbar-toggler-icon'); 

navbar.addEventListener('click', pressed);

function pressed(){
	navbar.classList.toggle('openn');
	icon .classList.toggle('openn-icon');
	navbar.style.transition = " 0.6s ease" ;
	icon.style.transition = " 1s ease" ;
}
*/

//HUMBEGURE NAV
const hamburger = document.querySelector(".navbar-toggler");
const Lines = document.querySelectorAll(".lines");
let hambStust = false;

hamburger.addEventListener("click", function(){
	
	if(!hambStust){
	this.style.backgroundColor = "black";
		document.querySelector(".burger .lines:nth-child(3)").classList.add("line3");
		document.querySelector(".burger .lines:nth-child(2)").classList.add("line2")
		document.querySelector(".burger .lines:nth-child(1)").classList.add("line1");
		
		Lines.forEach(line => line.style.backgroundColor = "red");
		
		hambStust = true;
	}else if(hambStust){
		this.style.backgroundColor = "red";
		document.querySelector(".burger .lines:nth-child(3)").classList.remove("line3");
		document.querySelector(".burger .lines:nth-child(2)").classList.remove("line2");
		document.querySelector(".burger .lines:nth-child(1)").classList.remove("line1");
		
		Lines.forEach(line => line.style.backgroundColor = "black");
		
		hambStust = false;
	}
})



/* =============================================================== */

// ==== MODAL

const modal = document.querySelector('#modal-error');
const closeBtn = document.querySelector('#modal-error .container span');
const content = document.querySelector('main');
const body = document.querySelector('body');



function openBtn(){
	modal.classList.remove('modal-fadeOut');
	modal.style.display = "flex " ;
};

closeBtn.addEventListener('click',closey);

function closey(){
	modal.classList.add('modal-fadeOut');
	
	 setTimeout(function(){
		modal.style.display = " none" ;
	}, 2000);
	
	
};

window.addEventListener('click' , outsideClose);

window.addEventListener('scroll' , closey)
function outsideClose(e){
	if(e.target === modal ){
		closey();
	}
}

/* ====================================================== =========================================

								expand and columps button read more

const closedPara = document.querySelector(".closed");
	
	const expandBtns = document.querySelector"button");
	
	expandBtn.addEventListener("click",expand);
	
		
	function expand(){
	
		let prevElement = this.previousElementSibling;
		
		if(prevElement.style.display == "none" ){
			prevElement.style.display = "block ";
			prevElement.style.transition = "display 2s ease-in-out";
		}else {
			prevElement.style.display = "none";
		}
		
	}

	=================================================================== 
	//muliyple buttons ==========================
	const expandBtns = document.querySelectorAll("button");
	
	expandBtns.forEach((btn)=>{
		btn.addEventListener("click",expand);
	});
	
	
	





===================================================== ========================================== */

const seviceAsides = document.querySelectorAll("#services article aside");
let aisdeActiveStats = false;

seviceAsides.forEach((item)=>{
	item.addEventListener("mouseover", ()=>{
		item.lastElementChild.classList.add("seviceAsidLine");
		item.classList.add("seviceAside");
	});
	
	item.addEventListener("mouseout", ()=>{
		item.lastElementChild.classList.remove("seviceAsidLine");
		item.classList.remove("seviceAside");
	})
})


