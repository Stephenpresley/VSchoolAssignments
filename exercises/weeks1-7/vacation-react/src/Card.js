import React from 'react'

const Vacation = (props) => {
    let {place, price, time} = props
    let style;
    if(time === 'Spring'){
        style = {
            backgroundColor: "lightGreen"
        }
    }else if(time === 'Summer'){
        style = {
            backgroundColor: "crimson"
        }
    }else if(time === 'Fall'){
        style = {
            backgroundColor: 'orange'
        }
    }else {
        style = {
            backgroundColor: '#1ce'
        }
    }
    let dollaSign;
    if(price < 500) {
        dollaSign = '$'
    }else if(price > 500 && price < 1000) {
        dollaSign = '$$'
    }else {
        dollaSign = '$$$'
    }
    return (
        <div style={style} className='vacation'>
            <h1>{place}</h1>
            <h3>{price}</h3>
            <h4>{time}</h4>
            <h5>{dollaSign}</h5>
        </div>
    )
}

export default Vacation