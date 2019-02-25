import { connect } from 'react-redux';
import {
  removeTodo,
} from '../actions';
import TodoList from '../components/MainScreen/TodoList';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
