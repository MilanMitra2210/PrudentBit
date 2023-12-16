import React from "react";
import "./Mainpage.css";
import  musicIcon from "../images/music-icon.png";
import  home from "../images/home.png";
import  playlist from "../images/playlist.png";
import  genres from "../images/genres.png";
import  artist from "../images/artists.png";
import  album from "../images/albun.png";
import  favroites from "../images/favorites.png";
import  podcast from "../images/Podcasts.png";
// import  podcast from "../images/Podcasts.png";
import { HiMenuAlt3 } from "react-icons/hi";


export default function Mainpage() {
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

            </div>
          </div>
        </div>
      );
}
