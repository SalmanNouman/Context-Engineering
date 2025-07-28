/**
 * EXAMPLE CODE ONLY
 * 
 * This is demonstration code for the Context Engineering guide.
 * It's not meant to be executed directly, but to show proper component structure.
 * In a real project, you would need to install React and TypeScript dependencies.
 */
import React from 'react';
import { Task } from './types';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

/**
 * TaskItem component displays a single task with completion toggle and delete functionality
 * 
 * @example
 * ```tsx
 * <TaskItem 
 *   task={{ id: '1', title: 'Learn Context Engineering', completed: false }}
 *   onToggleComplete={(id) => handleToggleComplete(id)}
 *   onDelete={(id) => handleDelete(id)}
 * />
 * ```
 */
const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className="task-item" data-testid="task-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          aria-label={`Mark ${task.completed ? 'incomplete' : 'complete'}`}
        />
        <span className={task.completed ? 'completed' : ''}>
          {task.title}
        </span>
      </div>
      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
