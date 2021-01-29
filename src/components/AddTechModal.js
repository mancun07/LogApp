import React, {useState} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import {addTech} from '../actions/TechActions'
import { connect } from 'react-redux'

const AddTechModal = ({addTech}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addTech({firstName, lastName});
        setFirstName('');
        setLastName('');
    }

    return (
        <div id="addTechModal" class="modal">
                <form onSubmit={onSubmit}>
                    <div className="modal-content">
                        <div class="input-field">
                            <input id="first_name" value={firstName} onChange={e => setFirstName(e.target.value.trim())} type="text" />
                            <label for="first_name">First Name</label>
                        </div>
                        <div class="input-field">
                            <input id="last_name" value={lastName} onChange={e => setLastName(e.target.value.trim())} type="text" />
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                        <div className="modal-footer">
                            <input type="submit" value="Send" class="modal-close waves-effect waves-green btn-flat indigo white-text"/>
                        </div>
                </form> 

        </div>

    )
}

export default connect(null, {addTech})(AddTechModal)
