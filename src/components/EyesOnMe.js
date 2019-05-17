import React, {Component} from 'react';

export default class EyesOnMe extends Component {
    happy = () => console.log('Good!')
    annoyed = () => console.log('Hey! Eyes on me!')
    render() {
        return (
            <button onFocus={this.happy} onBlur={this.annoyed}>Me</button>
        )
    }
}