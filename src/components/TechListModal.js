import React, {useEffect} from 'react'
import {deleteTech, getTechs} from '../actions/TechActions'
import { connect } from 'react-redux'

const TechListModal = ({getTechs, deleteTech, techs}) => {

    useEffect(() => {
        getTechs();
    }, [getTechs])

    return (
        <div id="techModal" className="modal">
            <div class="modal-content">
                <h4 className="center">List of technicians</h4>
                <ul class="collection">
                    {techs && techs.map(tech => {
                        return <li key={tech.id} class="collection-item">{tech.firstName}{' '}{tech.lastName}
                        <a href="#!" class="secondary-content"
                        onClick={() => deleteTech(tech.id)}
                        ><i class="material-icons">delete</i></a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        techs: state.tech.techs
    }
}

export default connect(mapStateToProps, {getTechs, deleteTech} )(TechListModal)
