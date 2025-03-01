import React from 'react';
import { COLLECTION_ENDPOINT } from '../utils/urlConstants';
import './UsernameField.css'

const UsernameField = ({ recursiveFetchAndWait, setGameList}) => {

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setGameList([]);
            recursiveFetchAndWait(COLLECTION_ENDPOINT + event.target.value.toLowerCase()); 
        }
    }

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Enter BGG Username"
                name="username"
                id="searchBox"
                onKeyPress={handleKeyPress}
            />
            <button type="button"
                    onClick={ (event) => {
                                setGameList([]);
                                recursiveFetchAndWait(COLLECTION_ENDPOINT + document.querySelector('#searchBox').value.toLowerCase());
                            } }>
            Submit</button>
        </div>
        
    );
}

export default UsernameField;