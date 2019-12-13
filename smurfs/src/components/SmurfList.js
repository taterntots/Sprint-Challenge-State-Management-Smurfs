import React from 'react'
import { connect } from 'react-redux'

const SmurfList = (props) => {
    console.log(props);
    return (
        <p>some data</p>
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