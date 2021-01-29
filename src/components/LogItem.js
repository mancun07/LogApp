import React from 'react'
import { deleteLog, setCurrent } from '../actions/LogActions'
import {connect} from 'react-redux'

const LogItem = ({log, deleteLog, setCurrent}) => {


    return (
    <li class="collection-item">
        <div>
            <a href="#editModal" onClick={() => setCurrent(log)} class={`modal-trigger ${log.attention ? 'red-text' : ''}`}>{log.message}</a>
            <br/>
            <span>#{log.id} <span className="grey-text">last updated by{' '}</span>{log.tech} 
            <span className="grey-text">{' '}on {log.date}</span>
            </span>
            <a href="#!" class="secondary-content" onClick={() => deleteLog(log.id)}><i class="material-icons">delete</i></a>


        </div>

     
       
                     {/* <div>Alvin<a href="#!" class="secondary-content">
                <i class="material-icons">send</i></a> */}
            {/* </div> */}
             
    </li>

    
    )
}

export default connect(null, {deleteLog, setCurrent})(LogItem)
