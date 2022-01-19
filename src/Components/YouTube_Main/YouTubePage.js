import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeadElement from '../HeadElement'
import APIKey from '../../APIKey';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar'
import Register from '../Register/Register';
import Login from '../Login/Login';
import VideoPage from '../VideoPage/VideoPage';


const YouTubePage = (props) => {

    const [router, setRouter] = useState("Home");
    const [currentVideo, setCurrentVideo] = useState({});
    const [videoSelected, setVideoSelected] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const [rerender, setRerender] = useState(false); 

    useEffect(() => {
        getHomePageVideos();
    }, [])
    useEffect(() => {
      
    }, [rerender])

    const getHomePageVideos = async () => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=gaming+music&type=video&key=${APIKey}&maxResults=6`)
        setSearchResults(response.data.items)
        console.log("Seach Results", response.data.items)
    }
    const changeRoute = (route) => {
        setRouter(route)
        setRerender(!rerender)
    }
    const getVideos = async (searchTerm) => {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=${APIKey}&maxResults=6`)
            console.log(response.data)
            setSearchResults(response.data.items);
            setVideoSelected(false);
        }
        catch (err) {
            console.log("OOPS", err)
        }

    }
    const searchForVideos = (searchValue) => {
        createQuery(searchValue);
    }
    const createQuery = async (strValue) => {
        let q = ''
        for (let i = 0; i < strValue.length; i++) {
            if (strValue[i] === " ") {
                q += "+";
            }
            else {
                q += strValue[i];
            }
        }
        getVideos(q);
    }
    const changeCurrentVideo = (video) => {
        setCurrentVideo(video);
        setVideoSelected(true);
    }

    return (
        <div>
            <HeadElement home={setVideoSelected} router={changeRoute}></HeadElement>
            {router == "Home" ?
                <>
                    <SearchBar search={searchForVideos}></SearchBar>
                    {!videoSelected ?
                        <SearchResults handleVideo={changeCurrentVideo} searchResults={searchResults}></SearchResults> :
                        <VideoPage handleVideo={changeCurrentVideo} video={currentVideo}></VideoPage>
                    }
                  
                </>
                : router == "Register" ?
                    <Register router={changeRoute} />
                    : <Login router={changeRoute} />}
        </div>
    );
}
export default YouTubePage;