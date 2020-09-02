import React, { Component } from 'react';
import './App.css';
import SideBar from './sideBar/SideBar';
import Editor from './editor/Editor';

const firebase = require('firebase');
class App extends Component {
  state = {
    selectedNoteIndex: null,
    selectedNote: null,
    notes: null,
  };

  selectNote = (note, index) =>
    this.setState({ selectedNoteIndex: index, selectedNote: note });

  render() {
    return (
      <div className="app-container">
        <SideBar
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        />
        {this.state.selectedNote ? (
          <Editor
            selectedNote={this.state.selectedNote}
            selectedNoteIndex={this.state.selectedNoteIndex}
            notes={this.state.notes}
          />
        ) : null}
      </div>
    );
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  };
}

export default App;
