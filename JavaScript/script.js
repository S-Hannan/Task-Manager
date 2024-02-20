function FillAndUpdate() {
    console.log('Added to list')
    title = document.getElementById('text1').value;
    desc = document.getElementById('desc1').value;
    if (localStorage.getItem('ItemsJson') == null) {
        array = [];
        array.push([title, desc]);
        localStorage.setItem('ItemsJson', JSON.stringify(array))

    }
    else {
        arraystr = localStorage.getItem('ItemsJson');
        array = JSON.parse(arraystr);
        array.push([title, desc]);
        localStorage.setItem('ItemsJson', JSON.stringify(array))

    }
    update();
}

function update() {


    if (localStorage.getItem('ItemsJson') == null) {
        array = [];

        localStorage.setItem('ItemsJson', JSON.stringify(array))

    }
    else {
        arraystr = localStorage.getItem('ItemsJson');
        array = JSON.parse(arraystr);


    }
    // Add items in table
    let tablebody = document.getElementById('tablebody')
    let str = ''
    array.forEach((element, i) => {
        str += `
<tr>
<th scope="row">${i + 1} </th>
<td>${element[0]}</td>
<td>${element[1]} </td>
<td><button class="delete" onclick='deleted(${i})' >Delete</button></td>
</tr>`
    });
    tablebody.innerHTML = str;
}
add = document.getElementById('add');
add.addEventListener('click', FillAndUpdate)
update();

function deleted(ItemIndex, a = ItemIndex + 1) {
    console.log('Item ' + a + ' Deleted')
    arraystr = localStorage.getItem('ItemsJson');
    array = JSON.parse(arraystr);
    array.splice(ItemIndex, 1)
    localStorage.setItem('ItemsJson', JSON.stringify(array));
    update();
}

function clearstorage() {
    if (confirm('Do you want to clear all lists?')) {
        console.log('Successfully Cleared')
        localStorage.clear();
        update();
    }

    else { console.log('Cancelled') }
}

