import { useState } from 'react';
import ActionTask from './ActionTask';
import SearchBox from './SearchBox';
import TaskList from './TaskList';
import AddTaskModal from './AddTaskModal';

export default function TaskBoard() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [tasks, setTasks] = useState([{
        id: crypto.randomUUID(),
        title: 'Learn React',
        description: 'I love react!!',
        priority: 'High',
        tags: ['React', 'dev', 'TS'],
        isFavorite: true,
    }]);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    function handleAddTask(newTask, isAdd) {
        if (isAdd) {
            setTasks((prevTasks) => [...prevTasks, newTask]);
            alert('Task added!!');
        } else {
            setTasks(tasks.map(task => (
                task.id === newTask.id ? newTask : task
            )))
            alert('Updated!')
        }
        setShowAddModal(false);
    }

    function handleEditTask(task) {
        setTaskToUpdate(task);
        setShowAddModal(true);
    }

    function handleDeleteTask(id) {
        const deleteTask = tasks.filter(task => task.id !== id);
        setTasks(deleteTask);
    }

    function handleDeleteAllTask() {
        setTasks([]);
    }

    return (
        <div className="">
            {showAddModal && (
                <AddTaskModal
                    taskToUpdate={taskToUpdate}
                    onAdd={handleAddTask}
                    onCloseModal={() => setShowAddModal((pre) => !pre)}
                />
            )}
            <div className="p-2 flex justify-end">
                <SearchBox />
            </div>
            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16 flex justify-center  flex-col">
                <ActionTask
                    onAddTask={() => setShowAddModal((pre) => !pre)}
                    onDeleteAllTask={handleDeleteAllTask}
                />
                <TaskList
                    onEdit={handleEditTask}
                    onDelete={handleDeleteTask}
                    tasks={tasks}
                />
            </div>
        </div>
    );
}
