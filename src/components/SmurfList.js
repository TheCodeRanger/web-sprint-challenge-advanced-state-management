import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

 const SmurfList = (props)=> {
    const isLoading = props.loading;
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {props.smurf.map(singleSmurf => (<Smurf key={singleSmurf.id} smurf={singleSmurf}/>))}
    </div>);
}

const mapStateToProps = (state) => {
    return {
    smurfArray: state.smurfArray,
    loading: state.loading
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.