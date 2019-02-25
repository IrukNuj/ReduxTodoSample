import { connect } from 'react-redux';
import {
  addTodo,
  changeInput,
} from '../actions';
import Form from '../components/MainScreen/Form';

const mapStateToProps = state => ({
  text: state.form.text,
});

const mapDispatchToProps = dispatch => ({
  changeInput: text => dispatch(changeInput(text)),
  addTodo: text => dispatch(addTodo(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
