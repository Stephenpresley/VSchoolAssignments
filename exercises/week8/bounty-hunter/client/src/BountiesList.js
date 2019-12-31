import React, { Component } from 'react';
import Bounty from './Bounty'
import {axiosContext} from './AxoisContext'


class BountiesList extends Component {

    componentDidMount() {
        this.props.getAll()
    }
    render() {
        const bountyMap = this.props.bounties.map(bounty => <Bounty key={bounty._id}
                                                                    info={bounty}
                                                            />
                                                )
        return (
            <div className='container'>
                {bountyMap}
            </div>
        );
    }
}

export default axiosContext(BountiesList);