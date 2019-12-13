import React, { useState } from 'react';

const SmurfForm = (props) => {
    // console.log(props);
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    })
    // console.log(newSmurf);

    const handleChanges = (event) => {
        setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addSmurfs(newSmurf);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='name' type='text' placeholder='name' onChange={handleChanges} />
                <input name='age' type='text' placeholder='age' onChange={handleChanges} />
                <input name='height' type='text' placeholder='height' onChange={handleChanges} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SmurfForm;