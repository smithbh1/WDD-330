function loadStory(){

    let storyName = document.querySelector('#name_input').value
    let storyHTML = localStorage.getItem(storyName)

    document.querySelector('#story_editor').value = storyHTML
}
function saveStory(){

    let storyName = document.querySelector('#story_input').value
    let storyHTML = document.querySelector('#story_editor').value

    localStorage.setItem(storyName, storyHTML)
}
function displayStory(){

    let storyHTML = document.querySelector('#story_editor').value

    document.querySelector('#story_display').innerHTML = storyHTML
}