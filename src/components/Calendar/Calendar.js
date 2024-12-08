import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../Buttons";

const Calendar = (props) => {
    const { className, date, handleChangeTime, handleOK } = props;
    const displayCalendar = (year, month) => {
        const firstDay = new Date(year, month, 1);
        const firstDayIndex = firstDay.getDay();

        const lastDay = new Date(year, month + 1, 0);
        const numberOfDay = lastDay.getDate();

        const container = document.getElementById('container');
        container.innerHTML = '';

        for (let i = 0; i < firstDayIndex; i++) {
            const cell = document.createElement('div');
            cell.innerHTML = '';
            container.appendChild(cell);
        }
        for (let i = 1; i <= numberOfDay; i++) {
            const cell = document.createElement('div');
            if (i === date.getDate()) {
                cell.className = 'bg-blue-200 flex items-center justify-center';
            } else {
                cell.className = 'bg-gray-200 flex items-center justify-center';
            }
            cell.innerHTML = i;
            cell.onclick = () => handleChangeTime(new Date(date.getFullYear(), date.getMonth(), i));
            container.appendChild(cell);
        }
    }
    const handleDecreaseMonth = () => {
        const month = date.getMonth();
        const year = date.getFullYear();
        if (month < 1) {
            handleChangeTime(new Date(year - 1, 11, date.getDate()))
        }
        else {
            handleChangeTime(new Date(year, month - 1, date.getDate()))
        }
    }
    const handleIncreaseMonth = () => {
        const month = date.getMonth();
        const year = date.getFullYear();
        if (month > 10) {
            handleChangeTime(new Date(year + 1, 0, date.getDate()))
        }
        else {
            handleChangeTime(new Date(year, month + 1, date.getDate()))
        }
    }

    useEffect(() => {
        const month = date.getMonth();
        const year = date.getFullYear();
        displayCalendar(year, month)
    }, [date])
    return (
        <div className={twMerge("bg-white p-2 rounded-md", className)}>
            <div className="flex justify-between">
                <button onClick={handleDecreaseMonth}>◀</button>
                <div>{date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}</div>
                <button onClick={handleIncreaseMonth}>▶</button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-sm mb-2">
                <div className='flex items-center justify-center'>Sun</div>
                <div className='flex items-center justify-center'>Mon</div>
                <div className='flex items-center justify-center'>Tue</div>
                <div className='flex items-center justify-center'>Wed</div>
                <div className='flex items-center justify-center'>Thur</div>
                <div className='flex items-center justify-center'>Fri</div>
                <div className='flex items-center justify-center'>Satur</div>
            </div>
            <div id="container" className="grid grid-cols-7 gap-1">
            </div>
            <div className="py-2 flex justify-end gap-2">
                <Button className="px-5 py-1" handleClick={handleOK}>OK</Button>
            </div>
        </div>
    )
}
const DatePicker = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [time, setTime] = useState(new Date());
    return (
        <div>
            <input className="rounded-md p-1 relative" value={time.toLocaleDateString()} onClick={() => setShowCalendar(!showCalendar)} />
            <div className="w-[1px] relative">
                {showCalendar &&
                    <Calendar
                        className="absolute top-[10px] w-[550px]"
                        date={time}
                        handleChangeTime={(newTime) => setTime(newTime)}
                        handleOK={() => setShowCalendar(false)}
                    />}
            </div>
        </div>
    )
}
export default DatePicker;