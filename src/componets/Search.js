import React, { useState, useEffect } from 'react'
import './style.css'

function Search() {

    const [search, setSearch] = useState("")
    const [images, setImages] = useState([])




    useEffect(() => {
        const fetchapi = async () => {
            const url = `https://pixabay.com/api/?key=22300493-51f141522599e178c35c1ab35&q=${search}`
            const response = await fetch(url)
            const responseJson = await response.json()
            setImages(responseJson.hits)
        }

        fetchapi();
    }, [search])

    return (
        <>
        <h1>Search Gallery</h1>
            <div className="searchbox">
                <input type="text" name="search" placeholder="Search Images...."
                    onChange={(e) => { setSearch(e.target.value) }} value={search} />
            </div>

            <div className="box">
            {
                !search ? (
                    <p>Empty List! Search something Intersting</p>
                ) :

                    (

                        images.map((image) => {
                            return (
                             
                                    <div className="image">
                                        <img src={image.largeImageURL} alt={search} id="img1" />
                                    </div>
                                
                            )
                        }))
            }

            </div>
        </>


    )
}

export default Search

