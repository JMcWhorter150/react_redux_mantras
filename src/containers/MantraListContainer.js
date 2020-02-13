import {connect} from 'react-redux';
import MantraList from '../components/MantraList'
import { actionSelectMantra } from '../actions';
function mapStateToProps(state) {
    return {
        mantras: state.mantras
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSelect: (id) => {dispatch(actionSelectMantra(id))}
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);

export default reduxConnector(MantraList);