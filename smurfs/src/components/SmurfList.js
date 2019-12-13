import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSmurfs, addSmurfs } from '../actions'
import SmurfForm from './SmurfForm';
import styled from 'styled-components';

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-auto-flow: row;
  justify-content: center;
  align-items: start;
  margin: 2rem 2rem;
  background-color: slategrey;
  border-radius: 15px;
`

const SmurfList = (props) => {
    // console.log(props);

    useEffect(() => {
        props.getSmurfs();
    }, [])

    return (
        <div>
            {/* <button onClick={() => props.getSmurfs()}>Get Smurfs</button> */}
            <SmurfForm addSmurfs={props.addSmurfs} />
            <GridStyle>
                {props.smurfs.map(s =>
                    <div key={s.id}>
                        <p>{s.name}</p>
                        <p>Age: {s.age}</p>
                        <p>Height: {s.height}</p>
                    </div>
                )}
            </GridStyle>
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

export default connect(mapStateToProps, { getSmurfs, addSmurfs }) (SmurfList);