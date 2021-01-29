import React, {useEffect} from 'react'
import LogItem from './LogItem'
import Preloader from './Preloader'
import 'materialize-css/dist/css/materialize.min.css';
import { connect } from 'react-redux';
import { getLogs, setLoading } from '../actions/LogActions'

const LogsList = ({logs, getLogs, loading, setLoading}) => {

    useEffect(() => {
        getLogs()
        // eslint-disable-next-line
    }, [])

    if (loading) return <Preloader/>
   
 
    return (
        <div>
            <ul class="collection with-header">
                <li class="collection-header"><h4>Total Logs</h4></li>
                {!loading && logs && logs.map(log => {
                    return <LogItem key={log.id} log={log}/>
                })}     
            </ul>
        </div>

    )
}



const mapStateToProps = (state) => {
    return {
        logs: state.log.logs,
        loading: state.log.loading
    }

}

export default connect(mapStateToProps, {getLogs, setLoading})(LogsList)
