import React from 'react'
import { connect } from 'react-redux'

const SmurfList = (props) => {
    console.log(props);
    return (
        <div>
            {props.smurfs.map(s =>
                <div key={s.id}>
                    <p>{s.name}</p>
                </div>
            )}
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

export default connect(mapStateToProps, {}) (SmurfList);