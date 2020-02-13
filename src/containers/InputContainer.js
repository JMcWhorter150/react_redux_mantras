import {connect} from 'react-redux';
import {actionAddMantra} from '../actions';
import Input from '../components/Input';

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (text) => {dispatch(actionAddMantra(text))}
    }
}

const reduxConnector = connect(null, mapDispatchToProps);

export default reduxConnector(Input);