function loadStory(){

    let storyName = document.querySelector('#story-name').value;
    let storyMarkup = localStorage.getItem(storyName);

    document.querySelector('#story-editor').value = storyMarkup;
}
function saveStory(){

    let storyName = document.querySelector('#story-name').value;
    let storyMarkup = document.querySelector('#story-editor').value;

    localStorage.setItem(storyName, storyMarkup);
}
function displayStory(){

    let storyMarkup = document.querySelector('#story-editor').value;

    document.querySelector('#story-display').innerHTML = storyMarkup;
}