
let userInput1 = document.querySelector('#userInput1');
let userInput2 = document.querySelector('#userInput2');


function textVerify(){

    let value = document.querySelector('#userInput').value;
    
    let trimmed = value.trim();

    if (trimmed.length > 8) {
        let tag = document.querySelector('#userInput');
        tag.setAttribute("class", "error");
        document.querySelector('.errorNotification').innerHTML = `${trimmed} is wrong - check the console for the error`;
        throw new Error('Something has gone badly wrong! You used too many characters!');

        
    }else if(trimmed.length == 0){
        document.querySelector('.errorNotification').innerHTML = "Get some text in there first!"
        
    }else{
        let tag = document.querySelector('#userInput');
        tag.removeAttribute('class');
    document.querySelector('.errorNotification').innerHTML = `${trimmed} is right! Good Work!`
    }
}


