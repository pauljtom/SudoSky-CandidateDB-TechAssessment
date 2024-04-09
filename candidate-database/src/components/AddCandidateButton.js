import React from 'react';

//New Candidate Button
const AddCandidateButton = ({ handleClick }) => {
  return (
    <button className='AddCandidateButton' onClick={handleClick}>Add Candidate ➕</button>
  );
};

export default AddCandidateButton;