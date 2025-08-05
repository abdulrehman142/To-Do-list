import React, { useState, useEffect, useRef } from 'react';

function ToDoList() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newTask = {
      text: input.trim(),
      createdAt: new Date().toLocaleString(),
    };

    setTasks([...tasks, newTask]);
    setInput('');
  };

  const handleDelete = (indexToRemove) => {
    const updated = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index].text);
  };

  const handleSave = (index) => {
    const updated = [...tasks];
    updated[index].text = editValue;
    setTasks(updated);
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">My To-Do List</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="w-full sm:w-96 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-[#280cb3] text-white px-4 py-2 rounded hover:text-amber-400 font-bold w-full sm:w-auto"
        >
          + Add Task
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-400 mt-6">No tasks yet. Add one!</p>
      ) : (
        <ul className="mt-6 space-y-2 max-w-md mx-auto">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-start border p-3 rounded shadow-sm flex-col sm:flex-row sm:items-center transition-all"
            >
              <div className="flex-1 w-full">
                {editIndex === index ? (
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="border p-1 w-full mb-1 rounded"
                  />
                ) : (
                  <>
                    <div className="block font-medium break-words">{task.text}</div>
                    <div className="text-sm text-gray-500">
                      Added: {task.createdAt}
                    </div>
                  </>
                )}
              </div>

              <div className="flex gap-2 mt-2 sm:mt-0 sm:ml-4">
                {editIndex === index ? (
                  <button
                    onClick={() => handleSave(index)}
                    className="text-green-600 hover:text-green-800 font-bold"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-600 hover:text-blue-800 font-bold"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:text-red-800 font-bold"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;
