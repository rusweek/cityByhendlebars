window.addEventListener('load', function(e){
    
	let input = document.querySelector('#input');
    let wrap = document.querySelector('.wrapper');
    let result = document.getElementById('result');    
                
        
        let url1 = "https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json"
        function getAjax(url){
            return new Promise(function(resolve, reject){
                let xhr = new XMLHttpRequest();

                xhr.open('GET', url, true);
                xhr.responseType = 'json';
                
                xhr.addEventListener('load', function(){
                   resolve(xhr.response);
                   
                });
                xhr.addEventListener('error', function(){
                    reject();
                });
                xhr.send();
                
            });
        };
        
        input.addEventListener('input', function(){
            if ( !document.createRange ) {
		          node.innerHTML = "";
	       }
	       else {

                  var tmpRange = document.createRange(); // создаем рэндж
                  tmpRange.selectNodeContents(result); // выбираем содержимое контейнера, если надо и контейнер то selectNode
                  tmpRange.deleteContents(); //Метод deleteContents удаляет всё содержимое объекта Range

                  tmpRange.detach(); // Метод detach извлекает текущий объект из DOM, так что на него больше нельзя сослаться.
	       };

        });
        
        
        input.addEventListener('input', function(){
            getAjax(url1).then(response =>{
            let arrayAjax = ArrToABC(response);
            addElem(arrayAjax);
            
		   
		    function addElem(arr){
            let inputVal = document.getElementById('input').value;
            
            console.log(result);
            arr.forEach(function(elem){
                if (elem.indexOf(inputVal) !== -1){
                    let nameObj = {};
                    nameObj.name = elem;
                    console.log(nameObj);
                    let source = header.innerHTML;
                    console.log(source);
                    let templateFn = Handlebars.compile(source);
                    console.log(templateFn);
                    let template = templateFn({nameObj});// сюда ложем название объекта из которого хотим получить значение
                    console.log(template);
                    
                   // result.innerHTML = template;
                    let div = document.createElement('div');
                    result.appendChild(div);
                    div.innerHTML = template;
					
					
					};
                
                
				});
            
        
			
			};
               function ArrToABC(arrFromAjax){
				let arr = arrFromAjax;
				let arrPush = [];
				

				for({name} of arr){
					arrPush.push(name);
				};
				
				arrPush.sort();
				return arrPush;
				};
        
            }); 
//            .catch(function (e) {
//        console.log('error');
//        
//            });
  

        });

});