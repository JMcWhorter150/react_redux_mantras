import {connect} from 'react-redux';
import TypeMantras from '../components/TypeMantras';

function mapStateToProps(state) {
    return {
        mantra: state.mantras[state.currentMantra]
    }
}

const reduxConnector = connect(mapStateToProps);

export default reduxConnector(TypeMantras);