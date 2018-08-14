import React from 'react';
import {connect} from 'react-redux';
import {
  playerCreate,
  playerUpdate,
} from '../actions/player-actions.js';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      position: this.props.position,
      isEditing: true,
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = e => {
    console.log('stuffss', e.target.name)
    const changedBit = {
      [e.target.name]: e.target.value
    };
    this.setState(changedBit);
  };

  handleSubmit(e) {
      e.preventDefault()
      console.log('updeate is editing', this.state.isEditing)
      this.props.playerUpdate(this.state);
    
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit } >
        <input onChange={this.onChange} type="text" name="name" placeholder="player name" value={this.state.name} required="true"/>
        <input onChange={this.onChange} name="position" type="text" placeholder="player position" value={this.state.position} required="true"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

// render() {
//   return (
//     // <form onSubmit={this.onSubmit} onChange={this.onChange}>
//     //   <input name="title" placeholder="title" value={this.state.title} />
//     //   <textarea
//     //     name="content"
//     //     placeholder="content"
//         value={this.state.content}
//       />
//       <button>Update Note</button>
//       <button type="button" onClick={this.onCancel}>
//         cancel
//       </button>
//     </form>
//   );
// }

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    playerCreate: val => dispatch(playerCreate(val)),
    playerUpdate: val => dispatch(playerUpdate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);