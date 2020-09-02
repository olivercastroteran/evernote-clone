import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../sideBarItem/SideBarItem';

class SideBar extends Component {
  state = {
    addingNote: false,
    title: null,
  };

  newNoteBtnClick = () => {
    console.log('New Note');
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };

  updateTitle = (txt) => {
    this.setState({ title: txt });
  };

  newNote = () => {
    console.log(this.state);
  };

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    return (
      <div className={classes.sidebarContainer}>
        <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
          {this.state.addingNote ? 'Cancel' : 'New Note'}
        </Button>
        {this.state.addingNote ? (
          <div>
            <input
              type="text"
              className={classes.newNoteInput}
              placeholder="Enter note title"
              onKeyUp={(e) => this.updateTitle(e.target.value)}
            />
            <Button className={classes.newNoteSubmitBtn} onClick={this.newNote}>
              Submit
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(SideBar);
