import React from 'react';
import { CheckSquare } from 'lucide-react';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { TodoFilters } from './components/TodoFilters';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    todos,
    filter,
    sort,
    stats,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    setFilter,
    setSort
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <CheckSquare size={40} className="text-primary-500" />
            <h1 className="text-4xl font-bold text-gray-900">Todo App</h1>
          </div>
          <p className="text-gray-600 text-lg">Stay organized and get things done</p>
        </div>

        {/* Add Todo Form */}
        <TodoForm onAddTodo={addTodo} />

        {/* Filters and Stats */}
        <TodoFilters
          filter={filter}
          sort={sort}
          onFilterChange={setFilter}
          onSortChange={setSort}
          stats={stats}
          onClearCompleted={clearCompleted}
        />

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <CheckSquare size={64} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-500 mb-2">
                {filter === 'completed' ? 'No completed todos' : 
                 filter === 'active' ? 'No active todos' : 'No todos yet'}
              </h3>
              <p className="text-gray-400">
                {