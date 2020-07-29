// import React from 'react';

// import {Grid} from '@material-ui/core';

// import {SearchBar, VideoList, VideoDetails} from "./components";


// import youtube from './API/youtube';

// class App extends React.Component{

//     state={

//         videos:[],
//         selectedVideo:null,
//     }

//     componentDidMount(){
//         this.handleSubmit('pdf generation with react and Node')

//     }

//     onVideoSelect = (video) => {

//         this.setState({selectedVideo:video});

//     }

//     handleSubmit = async(searchTerm) => {

//         const response = await youtube.get('search',{

//             params:{
//                 part: 'snippet',
//                 maxResults: 5,
//                 key: "AIzaSyD6lTCC9ekKM61gPKhnjXU1AXUPVbTm-M8",
//                 q:searchTerm,
//             }
//         });
//         this.setState({videos:response.data.items, selectedVideo:response.data.items[0]});

//     }



//     render(){

//         const {selectedVideo,videos}=this.state;


//         return(
//             <Grid justify="center" container spacing={10}>
//               <Grid item xs={12}>
//                   <Grid conatiner spacing= {10} >
//                         <Grid item xs={12}>
//                       <SearchBar onFormSubmit={this.handleSubmit}/>
//             </Grid>

//             <Grid item xs={8}>
//             <VideoDetails video={selectedVideo}/>
//             </Grid>

//             <Grid item xs={4}>
//             <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
//             </Grid>

//             </Grid>
//             </Grid>
//             </Grid>
//         )
//     }
// }

// export default App;


import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetails } from "./components";

import youtube from "./API/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetails video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
       key: "AIzaSyD6lTCC9ekKM61gPKhnjXU1AXUPVbTm-M8",
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}
