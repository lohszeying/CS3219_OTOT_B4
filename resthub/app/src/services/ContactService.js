

export async function getAllContacts() {
    const response = await fetch('/api/contacts');
    return await response.json();
}

export async function createContact(data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", data.name);

    const response = await fetch('/api/contacts', {
        /*method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: payload}) */
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    })
    console.log("response: " + response);
    return await response.json();
}

export async function deleteContact(data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();

    const response = await fetch('/api/contacts/' + data.id, {
        /*method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: payload}) */
        method: 'DELETE',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    })
    console.log("response: " + response);
    return await response.json();
}

export async function editContact(data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", data.name);

    const response = await fetch('/api/contacts/' + data.id, {
        /*method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: payload}) */
        method: 'PUT',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    })
    console.log("response: " + response);
    return await response.json();
}