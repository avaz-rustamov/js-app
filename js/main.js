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
    var elWordEnglish = document.addEventListener(".word__english")
    elWordUzbek.setAttribute("class", "word__uzbek")
    elWordUzbek.textContent = " Aniq aritikl"
    elWordUzbek.appendChild(elWordUzbek);
	} else if (command === '2') {
    var elWordUzbek = document.createElement("span");
    var elWordEnglish = document.addEventListener(".word__english")
    elWordUzbek.setAttribute("class", "word__uzbek")
    elWordUzbek.textContent = " ning"
    elWordUzbek.appendChild(elWordUzbek);
	}
};

recBtn.addEventListener('click', function () {
	console.log('==== Aloqa boshlandi ====');
	rec.start();
});
