import './app.css'
import Habits from './components/habits'
import Navbar from './components/Navbar'
import React, { Component } from 'react'

class App extends Component {
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
        //filter는 새로운배열을 만들어준다
        const habits = this.state.habits.filter(item => item.id !== habit.id)
        this.setState({ habits: habits }) //그냥 habits만 써줘도 같은동작
    }
    render() {
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
                ></Habits>
                ;
            </>
        )
    }
}

export default App
