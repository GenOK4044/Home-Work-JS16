//F I R S T   P A R T//


function GoogleCallback (func, data) {//т.к. jQuery ожидает в качестве первого параметра данные, по этой причине создаем промежуточную callback функцию//
	window[func](data);
};

	$('.button').on('click' , function(e) {//при нажатии на кнопку поиска срабатывает функция//

		e.preventDefault(); //останавливаем реакцию кнопки предусмотреную по умолчанию//
		var $text = $('.search').val();//находим текст введенный юзером//


		$.ajax({//делаем аякс запрос на сервер гугл//
			url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q='+ $text +'&rsz=8&callback=GoogleCallback&context=?',
			dataType: "jsonp",
			success: function (data) {//ф-я выполняемая по приходу ответа от сервера//
            	var ul = document.createElement("ul");
    			$.each(data.results, function(i, val){
            		var li = document.createElement("li");
            		li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
            		ul.appendChild(li);
    			});
    			$('.results').html(ul);
        	}  

		});
	});

	

//S E C O N D      P A R T//



function Human(name, age, sax, weight, height) {//конструктор для создания людей//
	this.name = name;
	this.age = age;
	this.sax  = sax;
	this.weight = weight;
	this.height = height;
}

var Eugene = new Human('Eugene', 26, 'man', 73, 183);//создаем человека Евгений//
var Elena = new Human('Elena', 23, 'woman', 63, 171);//создаем человека Елена//

var Worker = {//работающий человек//
	workPlace: 'DTEC',
	money: 5200,
	work: function() {
		console.log('is work'); 
	},
};	

var Student = {//студент//
	studyPlace: 'KPI',
	stepend: 500,
	watchSerials: function() {
		console.log('Student is watch serials');
	},
};

Worker.__proto__ = Eugene;
Student.__proto__ = Elena;

console.log('Eugene:', Eugene);
console.log('Elena:', Elena);
console.log('____________________________');

console.log('worker:', Worker);
console.log('student:', Student);
console.log('____________________________');

console.log('worker name:', Worker.name);
console.log('student name:', Student.name);
