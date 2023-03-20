import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoListItem";

// todo item type
type TodoItemType = {
  id: number;
  desc: string;
};
// project object type (move to global state later)
export type ProjectItemType = {
  name: string;
  todos: TodoItemType[];
};
// form state type
export type FormStateType = {
  name: string;
  todoDesc: string;
};

const ProjectForm = () => {
  // project add form state
  const [formData, setFormData] = useState<FormStateType>({
    name: "",
    todoDesc: "",
  });
  // initial project object (move to global later)
  const initProjectObject: ProjectItemType = {
    name: "",
    todos: [],
  };
  // project add object state (move to global later)
  const [projectItem, setProjectItem] =
    useState<ProjectItemType>(initProjectObject);

  // handle input change
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  // handle clearing todo input
  function handleClear(e: React.MouseEvent) {
    setFormData((prevState) => ({ ...prevState, todoDesc: "" }));
  }
  // handle adding todo input value to project add object as array item
  function handleAdd(e: React.MouseEvent) {
    const newTodo: TodoItemType = {
      id: Math.floor(Math.random() * 100),
      desc: formData.todoDesc,
    };
    setProjectItem((prevState) => ({
      ...prevState,
      todos: [...prevState?.todos, newTodo],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  function handleDeleteItem(id: number) {
    setProjectItem((prevState) => {
      const newTodoList = prevState.todos.filter((item) => item.id !== id);
      return { ...prevState, todos: newTodoList };
    });
  }

  function handleEditItem() {}

  // todo item list mapped out
  const todoList = projectItem.todos.map((item, i) => (
    <TodoItem
      key={item.id}
      id={item.id}
      value={item.desc}
      handleDeleteItem={handleDeleteItem}
      handleEditItem={handleEditItem}
    />
  ));
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Project</h2>
      <div>
        <label htmlFor="name">Project name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="todos">Todo list:</label>
        <TodoInput
          handleAdd={handleAdd}
          handleClear={handleClear}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
      <div className="todo-items">
        {projectItem.todos.length >= 1 ? todoList : null}
      </div>

      <button className="btn btn-primary">Add Project</button>
    </form>
  );
};

export default ProjectForm;
