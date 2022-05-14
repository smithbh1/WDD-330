function dataSubmit(){

    const form = document.getElementById('myForm');
    const data = new FormData(form);
    const arr = Array.from(data);
    localStorage.setItem('myForm', JSON.stringify(arr))
    
    for (let i=0; i<arr.length; ++i) {
        const item = arr[i];
        const el   = form.elements[item[0]];
        el.value = item[1];

        let displayDiv = document.querySelector('.displayFormData');

        displayDiv.append(`  ${el.name} : ${el.value}  `)
    }
}

function displayData(){

    dataSubmit();  
}

