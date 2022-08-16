import React from 'react'

export default function Body(props) {
    console.log(props)

  return (
    <div>
        <h2>Search </h2>
        {props.list.map((item, index) => {
            return (
                <div key={index}>
                    <div className='TitleContainer'>
                    <h5> <a href = {item.url}>
                    {item.title}
                    </a>
                    </h5>
                    <h6 className='Links'> ({item.url}) </h6>
                </div>
                <div className='StoryContainer'>
                    <h6>
                       <span> {item.points} points|</span>                       
                       <span> {item.author}|</span>
                       <span> {item.created_at}| </span>
                       <span> {item.num_comments} comments| </span>
                    </h6>
                    </div>
                </div>

            )
        })}
    </div>
  )
}
