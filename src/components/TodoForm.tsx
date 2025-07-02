import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoFormProps {
  onAddTodo: (text: string, priority: Todo['priority'], category: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Todo['priority']>('medium');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text, priority, category);
      setText('');
      setPriority('medium');
      setCategory('General');
    }
  };

  const categories = ['General', 'Work', 'Personal', 'Shopping', 'Health'];

  return (
    <form onSubmit={handleSubmit} className="todo-card mb-6">
      <div className="flex flex-col space-y-4">
        <div className="flex-1">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new todo..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
            autoFocus
          />
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-32">
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as Todo['priority'])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          
          <div className="flex-1 min-w-32">
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              type="submit"
              className="btn-primary flex items-center space-x-2 px-6"
              disabled={!text.trim()}
            >
              <Plus size={20} />
              <span>Add Todo</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
