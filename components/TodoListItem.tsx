type TodoItemProps = {
  id: number;
  value: string;
  handleDeleteItem: (id: number) => void;
  handleEditItem: (e: React.MouseEvent) => void;
};

const TodoItem = ({
  id,
  value,
  handleDeleteItem,
  handleEditItem,
}: TodoItemProps) => {
  return (
    <div>
      <h3>{value}</h3>
      <button className="btn btn-danger" onClick={() => handleDeleteItem(id)}>
        Delete
      </button>
      <button className="btn btn-edit" onClick={handleEditItem}>
        Edit
      </button>
    </div>
  );
};

export default TodoItem;
