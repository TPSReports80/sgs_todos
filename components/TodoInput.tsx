import { FormStateType } from "./ProjectForm";

type TodoInputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: (e: React.MouseEvent) => void;
  handleClear: (e: React.MouseEvent) => void;
  formData: FormStateType;
};

const TodoInput = ({
  handleChange,
  handleAdd,
  formData,
  handleClear,
}: TodoInputProps) => {
  return (
    <div>
      <input
        type="text"
        id="todos"
        name="todoDesc"
        value={formData.todoDesc}
        onChange={handleChange}
      />
      <button className="btn btn-clear" onClick={handleClear}>
        Clear
      </button>
      <button className="btn btn-primary" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
