import '../App.css'
import {data} from '../data.js'

function Trackinfo(){
    return(
        <body>
            <p className="App-mainTitle">Song Info</p>
            <div className="App-mainTrack">
                <img src = "https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b" className="App-mainImg"/>
                <p className="App-mainDesc">
                    <span className="App-mainSong">{data.album.name}</span><br></br>
                    <span className="App-mainArtist">Queen</span>  
                </p>
            </div>
        </body>
    )
}

export default Trackinfo;