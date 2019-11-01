import React from 'react'
import Friend from './Friend'
import Pet from './Pet'
import friends from './friends.json'

const FriendList = () => {
    const friendMap = friends.map((friend, i) => <Friend key={i + friend.name}
                                                        name={friend.name}
                                                        age={friend.age}
                                                        pets={friend.pets.map((pet, i) => <Pet key={i + pet.name}
                                                                                                name={pet.name}
                                                                                                breed={pet.breed}
                                                                                                />)}
                                                        />)
    return (
        <div className='friend-container'>
            {friendMap}
        </div>
    )
}

export default FriendList