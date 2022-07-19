import React from 'react'

export default function Header() {

    return (

        <div className="header">

            <div className="header--leftCont">

                <img src="./images/troll-face.png"
                    alt="logo"
                    className="header--logo" />

                <div className="header--title">
                    Meme Generator
                </div>

            </div>

            <div className="header--rightCont">

                <div className="header--courseText">
                    By Gabriel Moon
                </div>

            </div>

        </div>
    )
}

