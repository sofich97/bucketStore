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

    const handleIncrement = (value) => {
        console.log('increment', value)
        // const increment  = counters.map((count) => count.value = count.value + 1)
        const increment  = counters.
        console.log(increment);
        setCounters(increment);
    }

    const handleDecrement = (value) => {
        console.log('decrement', value)
        const decrement = counters.map((count) => count.value - 1);
        // const decrement = counters.value = value - 1
        setCounters(decrement)
    }


    // const handleUpdate = () => {
    //     const updatedState = [
    //         {id: 0, value: 1, name: "Ненужная вещь"},
    //         {id: 1, value: 2, name: "Ложка"},
    //         {id: 2, value: 3, name: "Вилка"},
    //         {id: 3, value: 4, name: "Тарелка"},
    //         {id: 4, value: 0, name: "Набор минималиста"},
    //     ];
    //     setCounters(updatedState);
    // }

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
            {/*<button*/}
            {/*    className="btn btn-primary btn-sm m-2"*/}
            {/*    onClick={handleUpdate}*/}
            {/*>*/}
            {/*    Обновить состояние*/}
            {/*</button>*/}
        </>
    );
};

export default CountersList;

