import React, { Component } from 'react';
import './App.css';
import SideBar from './sideBar/SideBar';
import Editor from './editor/Editor';

const firebase = require('firebase');
class App extends Component {
  state = {
    selectedNoteIndex: null,
    slectedNote: null,
    notes: null,
  };

  render() {
    return (
      <div className="app-container">
        <SideBar />
        <Editor />
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
