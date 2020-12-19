async function getEvents(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statustext);
        } else {
            const fetchJson = await response.json();
            console.log(fetchJson);
            listEvents(fetchJson);
        }
    } catch (error) {
        console.log(error);
    }
}

function listEvents(data) {
    const eventsContainer = document.querySelector('#eventList');

    data.events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.innerHTML =
        `
        <span class="event-title">${event.title}</span>
        `
        listItem.id = event.title;
        eventsContainer.appendChild(listItem);

    })
}