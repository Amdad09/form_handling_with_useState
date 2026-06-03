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
        priority: 'high',
        tags: ['React', 'dev', 'TS'],
        isFavorite: false,
    }]);

    function handleAddTask(newTask) {
        console.log("Add task...")
        setShowAddModal(pre => !pre);
        setTasks(...tasks, newTask);
    }

    return (
        <div className="">
            {showAddModal && <AddTaskModal onAdd={ handleAddTask } />}
            <div className="p-2 flex justify-end">
                <SearchBox />
            </div>
            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16 flex justify-center  flex-col">
                <ActionTask  onAddTask = {handleAddTask} />
                <TaskList tasks={ tasks} />
            </div>
        </div>
    );
}
