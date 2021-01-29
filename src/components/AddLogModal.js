import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addLog} from '../actions/LogActions'

const AddLogModal = ({addLog}) => {
    const [message, setMessage] = useState('')
    const [tech, setTech] = useState('')
    const [attention, setAttention] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        addLog({message, tech, attention})
        setMessage('');
        setTech('');
        setAttention(false);
    }

    return (
    <div id="modal1" class="modal">
        <form onSubmit={onSubmit}>
        <div class="modal-content">
            <h4 className="center-align">Add a new log</h4>
            <div class="input-field col s6">
                <input id="log" type="text" value={message} class="validate" onChange={e => setMessage(e.target.value)}/>
                <label for="log">Input a Log</label>
            </div>

            <select value={tech} onChange={e => setTech(e.target.value)}>
                <option value="" disabled>Choose your option</option>
                <option value="John Daw">John Daw</option>
                <option value="Sam Smith">Sam Smith</option>
                <option value="Sara Wilson">Sara Wilson</option>
            </select>

            <p>
                <label>
                    <input type="checkbox" checked={attention} onChange={e => setAttention(!attention)}/>
                    <span>Needs Attention</span>
                </label>
            </p>

        </div>
 

        <div class="modal-footer">
            <input type="submit" class="modal-close btn btn-flat green white-text" value="Send"/>
        </div>
        </form>
    </div>
    )
}

export default connect(null, {addLog})(AddLogModal)
