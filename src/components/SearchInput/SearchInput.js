import React from 'react';
import './SearchInput.css';

const SearchInput = () => { 

    

return (
<div >
    <input
      type = "text"
      name = 'Search'
      className = 'search-box'
      placeholder="Enter Star Wars Characters"
      onChange= {(event) => console.log(event)}
    />
</div>
);
};

export default SearchInput;