import '../App.css'
import React from 'react';
import { trackData } from '../data';
import Track from '../components/Trackcomp'

function Trackinfo() {
    return (
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Album</th>
            </tr>
        {
          trackData
          .map((trackShow) =>   
            <tr>
              <td>
                <Track name={trackShow.album.name}/>
              </td>
              <td>
                <Track url={trackShow.album.images[2].url}/>
              </td>
            </tr>
          )
        }
          </tbody>
        </table>
    )
  }

  export default Trackinfo