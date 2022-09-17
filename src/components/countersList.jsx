import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 2, name: "Ненужная вещь"},
        {id: 1, value: 8, name: "Ложка"},
        {id: 2, value: 0, name: "Вилка"},
        {id: 3, value: 0, name: "Тарелка"},
        {id: 4, value: 0, name: "Набор минималиста"},
    ];

    const [counters, setCounters] = useState (initialState);

    const handleDelete = (id) => {
        console.log('handleDelete: ', id)
        const newCounters = counters.filter((count) => count.id !== id)
        console.log(newCounters)
        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialState);
    }

    const handleIncrement = (id) => {
        const increment  = prev => prev.map((el) => el.id === id ? {...el, value: el.value + 1} : el)
        setCounters(increment);
    }

    const handleDecrement = (id) => {
        const decrement = prev => prev.map((el) => el.id === id ? {...el, value: el.value - 1} : el);
        setCounters(decrement)
    }

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
            ))}
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleReset}
            >
                Сброс
            </button>
        </>
    );
};

export default CountersList;

