import React from 'react'

const Blogpost = (props) => {
    const {title, sub, author, date} = props
    return (
        <div>
            <h1>{title}</h1>
            <h2>{sub}</h2>
            <h3>{author}</h3>
            <h4>{date}</h4>
        </div>
    )
}

export default Blogpost