
export const getTechs = () => async dispatch => {
    try {
        const res = await fetch('http://localhost:5000/techs');
        if (!res.ok) {
            throw Error ('Данные не доступны')
        }
        const data = await res.json();

        dispatch({type: 'GET_TECHS', payload: data})
    }

    catch (err) {
        dispatch({type: 'GET_TECHS_ERROR', payload: err.message})
        console.log(err.message)
    }
}

export const addTech = (tech) => async dispatch => {
    try {
        const res = await fetch('http://localhost:5000/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await res.json();

        dispatch({type: 'ADD_TECH', payload: data})
    }

    catch (err) {
        dispatch({type: 'GET_TECHS_ERROR', payload: err.message})
    }
}

export const deleteTech = (id) => async dispatch => {
    try {
        await fetch(`http://localhost:5000/techs/${id}`, {
            method: 'DELETE'       
        });

        dispatch({type: 'DELETE_TECH', payload: id})
    }

    catch (err) {
        dispatch({type: 'GET_TECHS_ERROR', payload: err.message})
    }
}

