import ActionTask from './ActionTask';
import SearchBox from './SearchBox';
import TaskList from './TaskList';

export default function TaskBoard() {
    return (
        <div className="">
            <div className="p-2 flex justify-end">
                <SearchBox />
            </div>
            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16 flex justify-center  flex-col">
                <ActionTask />
                <TaskList />
            </div>
        </div>
    );
}
