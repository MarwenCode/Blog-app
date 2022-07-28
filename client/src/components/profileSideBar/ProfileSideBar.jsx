import React from 'react'
import "./profilesidebar.scss"

const ProfileSideBar = () => {
  return (
    <div className='ProfileSideBar'>
        <div className="profileUp">
            <span className='profilepic'>profilepic</span>
            <span className='name'>name</span>
            
        </div>
        <div className="profileDown">
            <div className="profileInfo">
                <ul className='profileItems'>
                    <li className='item'>
                        name

                    </li>
                    <li className='item'>
                        age

                    </li>
                    <li className='item'>
                        hobbies

                    </li>
                    <li className='item'>
                        expression

                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProfileSideBar