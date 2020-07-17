  import React from 'react';

// function SongAdderForm() {
//     return (
//       <div>
//           <SongAdderFormItem/>
//       </div>
//     );
//   }

class SongAdderForm extends React.Component {
  constructor(props){
    super(props);
    this.state={};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  handleSubmit(event) {
    alert("er is geklikt :O")
    // this.setState({ value: event.target.value })

    // event.preventDefault();
    // //const new song = object
    // // handleSubmit = (event) => {
    // //   event.preventDefault();
    // //   console.log("submit", this.state);
    // this.setState()
    //   const newSong = {
    //     key: {},
    //     title: {},
    //     artist: this.state.artist,
    //     genre: this.state.genre,
    //     rating: this.state.rating,
    //   };
    //   console.log(newSong);
    // //   alert("newSong", newSong.rating);
    // //   this.props.addSong(newSong);
    // //   this.setState({ songs: "" });
  
    // //this.state.value=event.target.value;
    // //ingevulde wordt toegevoegd
    // //verwijzing naar 
    // //alert('A name was submitted
  }
  // const Add = () => { return (
  //   <li key={item. id}>{item. name}</li> ))}
  render(){
    return (
      <div><h2>SongAdderForm</h2>
      <form onSubmit={this.handleSubmit}>
        <label>
          Titel:
          <input type="text" value={this.newTitle} onChange={this.handleChange} />
        </label>
        <label>
          Artiest:
          <input type="text" value={this.newArtist} onChange={this.handleChange} />
        </label>
        <label>
          Genre:
          <input type="text" value={this.newGenre} onChange={this.handleChange} />
        </label>
        <label>
          Rating:
          <input type="text" value={this.newRating} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Voeg toe" />
      </form> 
      </div>
    );
  }
}
export default SongAdderForm;