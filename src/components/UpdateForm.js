import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
} from '../actions/actions.js';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      budget: this.props.budget,
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
      this.props.categoryUpdate(this.state);
    
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit } >
        <input onChange={this.onChange} type="text" name="name" placeholder="Category" value={this.state.name} required="true"/>
        <input onChange={this.onChange} name="buget" type="text" placeholder="Budget" value={this.state.budget} required="true"/>
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
    categoryCreate: val => dispatch(categoryCreate(val)),
    categoryUpdate: val => dispatch(categoryUpdate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);