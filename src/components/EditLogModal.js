import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {updateLog, setCurrent} from '../actions/LogActions'

const EditLogModal = ({current, updateLog, setCurrent}) => {
    const [message, setMessage] = useState('')
    const [tech, setTech] = useState('')
    const [attention, setAttention] = useState(false)

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setTech(current.tech);
            setAttention(current.attention);
        }
      }, [current])  


    const onSubmit = (e) => {
        e.preventDefault();
        updateLog({
            message, 
            tech,
            attention,
            id: current.id
        })
        setMessage('');
        setTech('');
        setAttention(false);
    }


    return (
    <div id="editModal" class="modal">
        <form onSubmit={onSubmit}>
        <div class="modal-content">
            <h4 className="center-align">Edit the log</h4>
            <div class="input-field col s6">
                <input id="log" type="text" value={message} class="validate" onChange={e => setMessage(e.target.value)}/>
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

const mapStateToProps = (state) => {
    return {
        current: state.log.current
    }
}

export default connect(mapStateToProps, {updateLog, setCurrent})(EditLogModal)
