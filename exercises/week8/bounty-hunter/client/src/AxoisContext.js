import React, { Component } from 'react';
import axios from 'axios'

const {Provider, Consumer} = React.createContext();

class AxoisContext extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bounties: []
        }
    }
    
    getAll = () => {
        axios.get('/bounties').then(res => {
            this.setState({bounties: res.data.reverse()}) 
        })
    }

    addBounty = newBounty => {
        axios.post('/bounties/', newBounty).then(res => {
            this.setState(prev => {
                return {
                    bounties: [...prev.bounties, res.data]
                }
            })
        })
    }

    deleteBounty = _id => {
        axios.delete('/bounties/' + _id).then(res => {
            this.setState(prev => {
                return {
                    bounties: prev.bounties.filter(bounty => bounty._id !== _id)
                }
            })
        })
    }

    editBounty = (_id, update) => {
        axios.put('/bounties/' + _id, update).then(res => {
            this.setState(prev => {
                return {
                    bounties: prev.bounties.map(bounty => bounty._id === _id ? res.data : bounty)
                }
            })
        })
    }

    render() {
        return (
            <Provider value={{...this.state, 
                                getAll: this.getAll,
                                addBounty: this.addBounty,
                                deleteBounty: this.deleteBounty,
                                editBounty: this.editBounty}}>
                {this.props.children}
            </Provider>
        );
    }
}

export default AxoisContext;

export function axiosContext (Comp) {
    return props => <Consumer>
                        {value => <Comp {...value} {...props} />}
                    </Consumer>
}