import React, { Component } from 'react'
import Habit from './habit'

class habits extends Component {
    state = {
        habits: [
            //state에 habits 배열생성
            { id: 1, name: 'Reading', count: 1 },
            { id: 2, name: 'Reading', count: 2 },
            { id: 3, name: 'Reading', count: 3 },
        ],
    }
    handleIncrement = habit => {
        const habits = [...this.state.habits]
        const index = habits.indexOf(habit)
        habits[index].count++
        this.setState({ habits: habits }) //그냥 habits만 써줘도 같은동작
    }

    handleDecrement = habit => {
        const habits = [...this.state.habits]
        const index = habits.indexOf(habit)
        const count = habits[index].count - 1
        habits[index].count = count < 0 ? 0 : count
        this.setState({ habits: habits }) //그냥 habits만 써줘도 같은동작
    }

    handleDelete = habit => {
        /*const habits = [...this.state.habits]
        const index = habits.indexOf(habit)
        habits.splice(index, 1)*/
        const habits = this.state.habits.filter(item => item.id !== habit.id)
        this.setState({ habits: habits }) //그냥 habits만 써줘도 같은동작
    }
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
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
