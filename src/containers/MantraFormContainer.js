import {connect} from 'react-redux';
import {actionAddMantra} from '../actions';
import MantraForm from '../components/MantraForm';

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (text) => {dispatch(actionAddMantra(text))}
    }
}

const reduxConnector = connect(null, mapDispatchToProps);

export default reduxConnector(MantraForm);