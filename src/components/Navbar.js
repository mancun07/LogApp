import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import {searchLogs} from '../actions/LogActions'
import {connect} from 'react-redux'


const Navbar = ({searchLogs}) => {
    return (
        <nav>
        <div class="nav-wrapper indigo">
          <form>
            <div class="input-field">
              <input id="search" type="search" onChange={(e) => searchLogs(e.target.value.trim())}/>
              <label class="label-icon" for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
}

export default connect(null, {searchLogs})(Navbar)
