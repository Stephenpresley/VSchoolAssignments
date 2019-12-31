import React, { Component } from 'react';
import RandomColor from './RandomColor'

import axios from 'axios'

class Container extends Component {
    constructor() {
        super()

        this.state = {
            colors: []
        }
    }

    componentDidMount() {
        axios.get('http://www.colr.org/json/colors/random/1').then(res => {
            // console.log(res.data)
            return this.setState({colors: res.data.colors})
        })
    }

    render() {
        const colorMap = this.state.colors.map(color => <RandomColor key={color.id}
                                                                    color={color.hex}
                                                                    />)
        return (
            <div>
                {colorMap}
            </div>
        );
    }
}

export default Container;