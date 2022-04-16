const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]



function loadList(){
    
    for (let i = 0; i < links.length; i++){
        let list_item = document.createElement('li');
        let a_link = document.createElement('a')

        a_link.setAttribute('href', links[i].url);

        a_link.textContent = links[i].label;
    
        list_item.appendChild(a_link);

        document.querySelector('.task-list').appendChild(list_item);
  }
}