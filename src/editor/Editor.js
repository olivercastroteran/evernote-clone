import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class Editor extends Component {
  state = {};
  render() {
    return <div>Hello from the Editor</div>;
  }
}

export default withStyles(styles)(Editor);
