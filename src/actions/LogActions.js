
export const getLogs = () => async dispatch => {
    try {
        setLoading()
        const res = await fetch('http://localhost:5000/logs');
        const data = await res.json();
        console.log(data)

        dispatch({type: 'GET_LOGS', payload: data})
    }

    catch (err) {
        dispatch({type: 'GET_ERRORS', payload: err.message})
    }
}

export const searchLogs = (text) => async dispatch => {

        try {
            setLoading(true)
            const res = await fetch(`http://localhost:5000/logs?q=${text}`)
            const data = await res.json()
    
            dispatch({type: 'SEARCH_LOGS', payload: data})
        }
    
        catch (err) {
            dispatch({type: 'GET_ERRORS', payload: err.message})
        }
}

export const addLog = (newLog) => async dispatch => {
    try {
        setLoading(true)
        const res = await fetch('http://localhost:5000/logs', {
            method: 'POST',
            body: JSON.stringify(newLog),
            headers: {'Content-Type': 'application/json'}
        })

        const data = await res.json();

        dispatch({type: 'ADD_LOG', payload: data})
    }

    catch (err) {
        dispatch({type: 'GET_ERRORS', payload: err.message})
    }
}

export const updateLog = (log) => async dispatch => {
    try {
        setLoading(true)
        const res = await fetch(`http://localhost:5000/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {'Content-Type': 'application/json'}
        })

        const data = await res.json();

        dispatch({type: 'UPDATE_LOG', payload: data})
    }

    catch (err) {
        dispatch({type: 'GET_ERRORS', payload: err.message})
    }
}

export const deleteLog = (id) => async dispatch => {
    try {
        setLoading(true)
        await fetch(`http://localhost:5000/logs/${id}`, {
            method: 'DELETE'
        })

        dispatch({type: 'DELETE_LOG', payload: id})
    }

    catch (err) {
        dispatch({type: 'GET_ERRORS', payload: err.message})
    }
}

export const setLoading = () => async dispatch => {
        dispatch({type: 'SET_LOADING'})
}

export const setCurrent = (log) => {
    return {type: 'SET_CURRENT', payload: log}
}

