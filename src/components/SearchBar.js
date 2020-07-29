// import React from "react";

// import {Paper,TextField} from "@material-ui/core" ;


// class searchBar extends React.Component{
// //  For State Change we are using state modifiers based on our search component

//     state={
//         searchTerm: "",


//     }

//     handleChange = (event) => {
//         this.setState({searchTerm:event.target.value})
//     }

//     handleSubmit = () => {
//         const {searchTerm}=this.state;

//         const {onFormSubmit}=this.props;

//         onFormSubmit(searchTerm);

//         event.preventDefault();
//     }



//     render(){
//         return(
//            <Paper elevation={6} style={{padding:'25px'}}>
           
//            <form onSubmit={this.handleSubmit}>

//                <TextField fullwidth label="Search..." onChange={this.handleChange} />

//            </form>

//            </Paper>
//         )
//     }
// };
// export default SearchBar;

  
import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
}