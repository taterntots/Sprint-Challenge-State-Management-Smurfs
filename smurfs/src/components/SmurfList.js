import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'
import SmurfForm from './SmurfForm';

const SmurfList = (props) => {
    // console.log(props);
    return (
        <div>
            {props.smurfs.map(s =>
                <div key={s.id}>
                    <p>{s.name}</p>
                    <p>Age: {s.age}</p>
                    <p>Height: {s.height}</p>
                </div>
            )}
            <button onClick={() => props.getSmurfs()}>Get Smurfs</button>
            <SmurfForm />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs }) (SmurfList);