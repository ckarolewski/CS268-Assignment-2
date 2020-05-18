export const Action = Object.freeze( {
    LoadMemories: 'LoadMemories',
});

export function loadMemories(memories) {
    return {
        type: Action.LoadMemories,
        payload: memories,
    }
}

function checkForErrors(response) {
    if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}

const host = 'https://today-log.duckdns.org:8442';

export function loadDay(month) {
    return dispatch => {
        fetch(`${host}/memories/${month}`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if(data.ok) {
                dispatch(loadMemories(data.memories));
            }
        })
        .catch(e => console.error(e));
    }   
}

export function startAddingBill(year, month, day) {
    return dispatch => {
        fetch(`${host}/memories/${month}`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if(data.ok) {
                dispatch(loadMemories(data.memories));
            }
        })
        .catch(e => console.error(e));
    }   
}