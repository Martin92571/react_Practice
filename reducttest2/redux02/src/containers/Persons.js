import React, { Component } from 'react';
import { connect } from 'react-redux'
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';
class Persons extends Component {
    state = {
        persons: []
    }


    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onClickBtn} />
                {this.props.list.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onClickDelete(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    console.log(state);
    return {
      list: state.list
    }
  }

const mapDispatchToProps = dispatch => {
    return {
      // implicitly forwarding arguments
      onClickBtn: () => dispatch({type:actionTypes.ADD_PERSON}),
      onClickDelete:(id)=>dispatch({type:actionTypes.REMOVE_PERSON,id:id})
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Persons);