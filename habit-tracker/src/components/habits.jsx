import React, { Component } from 'react';
import Habit from './habit';

class habits extends Component {
    state = {
        habits: [ //state에 habits 배열생성
            {id:1, name: 'Reading', count:1},
            {id:2, name: 'Reading', count:2},
            {id:3, name: 'Reading', count:3},
        ]
    }

    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    //Habit컴포넌트에 habit이라는 props를 전달
                    //Habit에서는 비구조화 할당을하여 사용하자
                    <Habit key={habit.id} habit={habit}/> 
                ))}
            </ul>
        );
    }
}

export default habits;