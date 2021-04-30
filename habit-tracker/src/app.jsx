import './app.css'
import Habits from './components/habits'
import Navbar from './components/Navbar'
import React, { PureComponent } from 'react'

class App extends PureComponent {
    state = {
        habits: [
            //state에 habits 배열생성
            { id: 1, name: 'Reading', count: 1 },
            { id: 2, name: 'Reading', count: 2 },
            { id: 3, name: 'Reading', count: 3 },
        ],
    }
    handleIncrement = habit => {
        const habits = this.state.habits.map(item => {
            if (item.id === habit.id) {
                return { ...habit, count: habit.count + 1 }
            }
            return item
        })
        this.setState({ habits: habits }) //그냥 habits만 써줘도 같은동작
    }

    handleDecrement = habit => {
        const habits = this.state.habits.map(item => {
            if (item.id === habit.id) {
                const count = habit.count - 1
                return { ...habit, count: count < 0 ? 0 : count }
            }
            return item
        })
        this.setState({ habits: habits }) //그냥 habits만 써줘도 같은동작
    }

    handleDelete = habit => {
        /*const habits = [...this.state.habits]
        const index = habits.indexOf(habit)
        habits.splice(index, 1)*/
        //filter는 새로운배열을 만들어준다
        const habits = this.state.habits.filter(item => item.id !== habit.id)
        this.setState({ habits: habits }) //그냥 habits만 써줘도 같은동작
    }
    handleAdd = name => {
        const habits = [
            ...this.state.habits,
            { id: Date.now(), name, count: 0 },
        ]
        this.setState({ habits })
    }

    handleReset = () => {
        const habits = this.state.habits.map(habit => {
            if (habit.count !== 0) {
                return { ...habit, count: 0 }
            }
            return habit
        })
        this.setState({ habits })
    }
    render() {
        console.log(`app`)
        return (
            <>
                <Navbar
                    totalCount={
                        //count가 0이상인 habits배열의 길이
                        this.state.habits.filter(item => item.count > 0).length
                    }
                ></Navbar>
                <Habits
                    habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    onReset={this.handleReset}
                ></Habits>
            </>
        )
    }
}

export default App
