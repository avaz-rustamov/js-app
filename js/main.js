// var elWordEnglish = document.addEventListener(".word__english");
var rec = new webkitSpeechRecognition();


rec.lang = 'uz-UZ';

rec.onend = function () {
	console.log('==== Aloqa tugadi ====');
};

rec.onerror = function () {
	console.log('Xatolik');
};


rec.onresult = function (evt) {
	var command = evt.results[0][0].transcript;
  // var elWordUzbek = document.addEventListener(".word__uzbek");

	if (command === '1') {
    var elWordUzbek = document.createElement("span");
    elWordUzbek.setAttribute("class", "word__uzbek")
    elWordUzbek.textContent = " Aniq aritikl"
    word__english.appendChild(elWordUzbek);
	} else if (command === '2') {
    var elWordUzbek = document.createElement("span");
    elWordUzbek.setAttribute("class", "word__uzbek")
    elWordUzbek.textContent = " ning"
    word__english2.appendChild(elWordUzbek);
	} else if (command === '3') {
    var elWordUzbek = document.createElement("span");
    elWordUzbek.setAttribute("class", "word__uzbek")
    elWordUzbek.textContent = " va"
    word__english3.appendChild(elWordUzbek);
	} else if (command === '4') {
    var elWordUzbek = document.createElement("span");
    elWordUzbek.setAttribute("class", "word__uzbek")
    elWordUzbek.textContent = " Artikl"
    word__english4.appendChild(elWordUzbek);
	}else if (command === '5') {
    var elWordUzbek = document.createElement("span");
    elWordUzbek.setAttribute("class", "word__uzbek")
    elWordUzbek.textContent = " Ga"
    word__english5.appendChild(elWordUzbek);
	}else if (command === '6') {
    var elWordUzbek = document.createElement("span");
    elWordUzbek.setAttribute("class", "word__uzbek")
    elWordUzbek.textContent = " Da(Ichida)"
    word__english6.appendChild(elWordUzbek);
	}else if (command === '7') {
    var elWordUzbek = document.createElement("span");
    elWordUzbek.setAttribute("class", "word__uzbek")
    elWordUzbek.textContent = " To Be"
    word__english7.appendChild(elWordUzbek);
	}else if (command === '8') {
    var elWordUzbek = document.createElement("span");
    elWordUzbek.setAttribute("class", "word__uzbek")
    elWordUzbek.textContent = " Siz"
    word__english8.appendChild(elWordUzbek);
	}else if (command === '9') {
    var elWordUzbek = document.createElement("span");
    elWordUzbek.setAttribute("class", "word__uzbek")
    elWordUzbek.textContent = " Bu"
    word__english9.appendChild(elWordUzbek);
	}
};

recBtn.addEventListener('click', function () {
	console.log('==== Aloqa boshlandi ====');
	rec.start();
});
