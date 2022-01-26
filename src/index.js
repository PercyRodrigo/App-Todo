import './styles.css';

import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml ( todo ) ); //Forma normal
// todoList.todos.ForEach( crearTodoHtml ); Forma corta