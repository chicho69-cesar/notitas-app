export const getData = async () => {
    const response = await fetch('http://localhost:3000');
    const data = await response.json();
    return data;
}

export const newNote = note => {
    fetch('http://localhost:3000/add', {
        method: 'POST',
        body: JSON.stringify(note),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    })
    .then(response => response.text())
    .then(res => console.log(res));
}

export const updateNote = note => {
    fetch('http://localhost:3000/update', {
        method: 'POST',
        body: JSON.stringify(note),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    })
    .then(response => response.text())
    .then(res => console.log(res));
}

export const removeNote = id => {
    fetch('http://localhost:3000/remove', {
        method: 'POST',
        body: JSON.stringify({ id: id }),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    })
    .then(response => response.text())
    .then(res => console.log(res));
}

export const darkTheme = darkmode => {
    fetch('http://localhost:3000/darkmode', {
        method: 'POST',
        body: JSON.stringify({ darkmode: darkmode }),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    })
    .then(response => response.text())
    .then(res => console.log(res));
}