import React, { useState, useEffect } from 'react';
import "./Mainpage.css";
import  musicIcon from "../images/music-icon.png";
import  home from "../images/home.png";
import  playlist from "../images/playlist.png";
import  genres from "../images/genres.png";
import  artist from "../images/artists.png";
import  album from "../images/albun.png";
import  favroites from "../images/favorites.png";
import  podcast from "../images/Podcasts.png";
import  leftarrow from "../images/leftarrow.png";
import  rightarrow from "../images/rightarrow.png";
import  setting from "../images/setting.png";
import  bell from "../images/bell.png";
import { HiMenuAlt3 } from "react-icons/hi";
import axios from 'axios';

export default function Mainpage() {
  
  const [playlistData, setPlaylistData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/playlist/',
        params: {
          id: '37i9dQZF1DX4Wsb4d7NKfP'
        },
        headers: {
          'X-RapidAPI-Key': '9da8a1ad2dmsh293fca8c5c9cf00p12260fjsn7e35b6ccb817',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setPlaylistData(response.data);
        console.log(response.data);
        console.log(playlistData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  
    return (
        <div className="container-fluid">
          <div className='left'>
            <div className="heading">
                <img src={musicIcon} alt="..." className="img-thumbnail" width="42" height="42" /> 
                <div>Music <span>Stream</span></div>
                <HiMenuAlt3 />
            </div>
            <div>
                <div className="buttons"><img src={home} alt="..." className="img-thumbnail" width="24" height="24" /> Home</div>
                <div className="buttons"><img src={playlist} alt="..." className="img-thumbnail" width="24" height="24" /> Playlists</div>
                <div className="buttons"> <img src={genres} alt="..." className="img-thumbnail" width="24" height="24" />Genres</div>
                <div className="buttons"><img src={artist} alt="..." className="img-thumbnail" width="24" height="24" />  Artists</div>
                <div className="buttons"><img src={album} alt="..." className="img-thumbnail" width="24" height="24" /> Albums</div>
                <div className="buttons"><img src={favroites} alt="..." className="img-thumbnail" width="24" height="24" /> Favroites</div>
                <div className="buttons"><img src={podcast} alt="..." className="img-thumbnail" width="24" height="24" /> Podcasts</div>
            </div>
          </div>
          <div className="right">
            <div className="navBar">
                <div>Home</div>
                <div><img src={leftarrow} alt="..." className="img-thumbnail" width="28" height="28" /></div>
                <div><img src={rightarrow} alt="..." className="img-thumbnail" width="28" height="28" /></div>
                <div className="searchBar">
                <input type="password" className="form-control" placeholder="Search" />
                </div>
                <div><img src={setting} alt="..." className="img-thumbnail" width="34" height="34" /></div>
                <div><img src={bell} alt="..." className="img-thumbnail" width="34" height="34" /></div>
                <div>
                  <div>Hello</div>
                  <div>Sharda University</div>
                </div>
            </div>

            <div className="playlist">
            
              {playlistData? (
                {playlistData.data.map((playlistItem) => (
                  <div class="card">
                <img src={playlistItem.images[0].url} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text" >{playlistItem.images[0].name}</p>
                </div>
              </div>
              )}

              {/* <div class="card">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <p class="card-text"></p>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      );
}
