import React, { Component } from 'react'
import Habit from './habit'

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
    render() {
        return (
            <ul>
                {this.props.habits.map(habit => (
                    //Habit컴포넌트에 habit이라는 props를 전달
                    //Habit에서는 비구조화 할당을하여 사용하자
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                ))}
            </ul>
        )
    }
}

export default habits
