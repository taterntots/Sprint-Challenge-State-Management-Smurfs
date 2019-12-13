import React from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'

const SmurfList = (props) => {
    console.log(props);
    return (
        <div>
            {props.smurfs.map(s =>
                <div key={s.id}>
                    <p>{s.name}</p>
                </div>
            )}
            <button onClick={() => props.getSmurfs()}>Get Smurfs</button>
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