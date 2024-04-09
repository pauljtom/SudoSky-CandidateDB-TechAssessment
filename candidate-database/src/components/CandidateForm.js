import React from 'react';

//In charge of rendering the New Candidate Form
const CandidateForm = ({ handleChange, handleSubmit, values, setShowNewCandidateForm }) => {
  return (
    <div className='AddCandidateForm'>
      <input type='text' name='fullName' placeholder='Full Name' value={values.fullName} onChange={handleChange} />
      <input type='email' name='email' placeholder='Email' value={values.email} onChange={handleChange} />
      <input type='text' name='skills' placeholder='Skills' value={values.skills} onChange={handleChange} />
      <input type='number' name='yrsExp' placeholder='Years of Experience' value={values.yrsExp} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={() => setShowNewCandidateForm(false)}>Cancel</button>
    </div>
  );
};

export default CandidateForm;