import React from 'react'

const Square = (props) => {
    const styles = {
        width: '200px',
        height: '200px',
        borderRadius: '50px',
        backgroundColor: props.color
    }
    return (
        <div style={styles} className='square'></div>
    )
}

export default Square