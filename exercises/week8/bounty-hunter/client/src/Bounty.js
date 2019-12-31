import React, {Component} from 'react';
import AddBounty from './AddBounty'
import {axiosContext} from './AxoisContext'

class Bounty extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }

    toggle = () => {
        this.setState(prev => {
            return {
                edit: !prev.edit
            }
        })
    }

    delete = () => {
        this.props.deleteBounty(this.props.info._id)
    }

    saveBounty = () => {
        this.props.editBounty(this.props.info._id)
    }

    render() {
        let {firstName, lastName, living, bountyAmount, type} = this.props.info
        return (
            <div className='bounty'>
                {
                    this.state.edit === false ?
                    <div>
                        <h2>{`First Name/Title: ${firstName}, Last Name: ${lastName}`}</h2>
                        <h4>{`Group Affiliation: ${type}, Bounty is wanted alive?: ${living}`}</h4>
                        <h1>{`Bounty: ${bountyAmount}`}</h1>
                        <svg onClick={this.toggle}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" width="32" height="32">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path d="M16.757 3l-7.466 7.466.008 4.247 4.238-.007L21 7.243V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z"/>
                        </svg>
                        <svg onClick={this.delete}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" width="32" height="32">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm6.414 8l1.768-1.768-1.414-1.414L12 12.586l-1.768-1.768-1.414 1.414L10.586 14l-1.768 1.768 1.414 1.414L12 15.414l1.768 1.768 1.414-1.414L13.414 14zM9 4v2h6V4H9z"/>
                        </svg>
                    </div>
                    :
                    <AddBounty  button='Save Changes' type='update' 
                                bounty={this.props.info} toggle={this.toggle}
                                saveBounty={this.saveBounty}/>
                }
                
            </div>
        );
    }
};

export default axiosContext(Bounty);