import React from 'react';

//The rows of the candidate table

const CandidateRow = ({ candidate, handleRowClick, editingCandidateId, editedCandidate, handleChange, handleEditCandidate, handleDeleteCandidate, handleCancelEdit }) => {
  return (
    <tr onClick={() => handleRowClick(candidate.id)}>

      <td>{candidate.id}</td>
      <td>
        {editingCandidateId === candidate.id ? (
          <input type="text" name="fullName" value={editedCandidate.fullName} onChange={handleChange} />
        ) : (
          candidate.fullName
        )}
      </td>
      <td>
        {editingCandidateId === candidate.id ? (
          <input type="email" name="email" value={editedCandidate.email} onChange={handleChange} />
        ) : (
          candidate.email
        )}
      </td>
      <td>
        {editingCandidateId === candidate.id ? (
          <input type="text" name="skills" value={editedCandidate.skills} onChange={handleChange} />
        ) : (
          candidate.skills
        )}
      </td>
      <td>
        {editingCandidateId === candidate.id ? (
          <input type="number" name="yrsExp" value={editedCandidate.yrsExp} onChange={handleChange} />
        ) : (
          candidate.yrsExp
        )}
      </td>
      <td className={`EditCandidateColumn ${editingCandidateId === candidate.id ? '' : 'hidden'}`}>
        <div className='ButtonGroup'>
          <div className='EditCandidateButton'>
            {editingCandidateId === candidate.id && <button onClick={handleEditCandidate}>Save</button>}
          </div>
          <div className='DeleteCandidateButton'>
            <button onClick={() => handleDeleteCandidate(candidate.id)}>Delete</button>
          </div>
          <div className='CancelEditButton'>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CandidateRow;
