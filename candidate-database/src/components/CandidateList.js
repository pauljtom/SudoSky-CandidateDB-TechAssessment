import React from 'react';
import CandidateRow from './CandidateRow';

//Candidate Table

const CandidateList = ({ candidates, handleRowClick, editingCandidateId, editedCandidate, handleChange, handleEditCandidate, handleDeleteCandidate, handleCancelEdit }) => {

// Sorts candidates by ID in ascending order
const sortedCandidates = candidates.slice().sort((a, b) => a.id - b.id);

  return (
    <div className='TableWrapper'>
      <div className='Table'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Skills</th>
              <th>Years of Experience</th>
            </tr>
          </thead>
          <tbody>
            {sortedCandidates.map(candidate => (
              <CandidateRow
                key={candidate.id}
                candidate={candidate}
                handleRowClick={handleRowClick}
                editingCandidateId={editingCandidateId}
                editedCandidate={editedCandidate}
                handleChange={handleChange}
                handleEditCandidate={handleEditCandidate}
                handleDeleteCandidate={handleDeleteCandidate}
                handleCancelEdit={handleCancelEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateList;
