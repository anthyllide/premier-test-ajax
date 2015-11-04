function addEvent(element, event, func) {
    if(element.addEventListener) {
        element.addEventListener(event, func, false);
    } else {
      element.attachEvent('on' + event, func); 
    }
}

addEvent(window, 'load', function (){
    
   function loadfile (file) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', file);
    
        addEvent(xhr,'readystatechange',function(){
            if(xhr.readyState && xhr.status === 200) {
                var element = document.getElementById('fileContent');
                element.innerHTML = '<span>' + xhr.responseText + '</span>';
            } else {
                alert('Une erreur est survenue! \n\nCode :'+ xhr.status +'\nTexte: ' + xhr.statusText);
            }  
        });
        
        xhr.send();
    }
        
    var inputs = document.getElementsByTagName('input'),
        inputsLength = inputs.length;
    
    for(var i=0; i < inputsLength; i++) {
        addEvent(inputs[i], 'click', function(){
            loadfile(this.value);
        });
    }
   
});