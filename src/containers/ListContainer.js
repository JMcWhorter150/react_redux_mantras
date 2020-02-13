import {connect} from 'react-redux';
import List from '../components/List'
function mapStateToProps(state) {
    return {
        mantras: state
    }
}

const reduxConnector = connect(mapStateToProps);

export default reduxConnector(List);