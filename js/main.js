const links = [
    {
      label: "Week1 notes",
      url: "Week01/index.html"
    },
    {
      label: "Week2 notes",
      url: "Week02/index.html"
    },
    {
      label: "Week3 notes",
      url: "Week03/index.html"
    },
    {
      label: "Week4 notes",
      url: "Week04/index.html"
    },
    {
      label: "Week5 notes",
      url: "Week05/index.html"
    },
    {
      label: "Midterm",
      url: "Midterm/index.html"
    },
    {
      label: "Week07 notes",
      url: "Week07/index.html"
    },
    {
      label: "Week08 notes",
      url: "Week08/index.html"
    },
    {
      label: "Final Project",
      url: "Personal-Project/index.html"
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