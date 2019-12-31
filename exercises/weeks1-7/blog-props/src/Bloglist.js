import React from 'react'
import blogs from './blogposts.json'
import Blogpost from './Blogpost'

const Bloglist = () => {
    const blogMap = blogs.map((blog, i) => <Blogpost key={i + blog.title}
                                                    title={blog.title}
                                                    sub={blog.subTitle}
                                                    author={blog.author}
                                                    date={blog.date}/>)
    return (
        <div>
            {blogMap}
        </div>
    )
}

export default Bloglist