import React, { Component } from 'react'
import Habit from './habit'
import HabitAddForm from './HabitAddForm'

class habits extends Component {
    handleIncrement = habit => {
        this.props.onIncrement(habit)
    }

    handleDecrement = habit => {
        this.props.onDecrement(habit)
    }

    handleDelete = habit => {
        this.props.onDelete(habit)
    }
    handleAdd = name => {
        this.props.onAdd(name)
    }
    render() {
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd}></HabitAddForm>
                <ul>
                    {this.props.habits.map(habit => (
                        //Habit컴포넌트에 habit이라는 props를 전달
                        //Habit에서는 비구조화 할당을하여 사용하자
                        //app에서 받아온 데이터를 habit에 넘겨준다
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>
                    Reset All
                </button>
            </>
        )
    }
}

export default habits
