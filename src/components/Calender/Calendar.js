import { useEffect, useState } from "react";

const Calendar = () => {
    const [time, setTime] = useState(new Date())
    const displayCalendar = (year, month) => {
        const firstDay = new Date(year, month, 1);
        const firstDayIndex = firstDay.getDay();

        const lastDay = new Date(year, month + 1, 0);
        const numberOfDay = lastDay.getDate();

        const container = document.getElementById('container');
        container.innerHTML = ''

        for (let i = 0; i < firstDayIndex; i++) {
            const cell = document.createElement('div');
            cell.innerHTML = '';
            container.appendChild(cell)
        }
        for (let i = 1; i <= numberOfDay; i++) {
            const cell = document.createElement('div');
            cell.innerHTML = i;
            container.appendChild(cell)
        }
    }
    const handleDecrease = () => {
        const month = time.getMonth();
        const year = time.getFullYear();
        if (month < 1) {
            setTime(new Date(year - 1, 11, time.getDate()))
        }
        else {
            setTime(new Date(year, month - 1, time.getDate()))
        }
    }
    const handleIncrease = () => {
        const month = time.getMonth();
        const year = time.getFullYear();
        if (month > 10) {
            setTime(new Date(year + 1, 0, time.getDate()))
        }
        else {
            setTime(new Date(year, month + 1, time.getDate()))
        }
    }

    useEffect(() => {

        const month = time.getMonth();
        const year = time.getFullYear();
        displayCalendar(year, month)
    }, [time])
    return (
        <div>
            <div className="flex justify-between">
                <button onClick={handleDecrease}>◀</button>
                <div>{time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear()}</div>
                <button onClick={handleIncrease}>▶</button>
            </div>
            <div className="grid grid-cols-7">
                <div>Sun</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Satureday</div>
            </div>
            <div id="container" className="grid grid-cols-7">
            </div>
        </div>
    )
}
export default Calendar;