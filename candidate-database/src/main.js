import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateForm from './components/CandidateForm';
import CandidateList from './components/CandidateList';
import AddCandidateButton from './components/AddCandidateButton';
import CandidateRow from './components/CandidateRow';
import './styles/style.css';


function MainApp() {
  //State to hold the list of candidates
  const [candidates, setCandidates] = useState([]);

  // State to manage the form for adding new candidates
  const [newCandidate, setNewCandidate] = useState({
    fullName: '',
    email: '',
    skills: '',
    yrsExp: 0
  });

  // Tracks ID of candidates being edited & Candidates being edited
  const [editingCandidateId, setEditingCandidateId] = useState(null);
  const [editedCandidate, setEditedCandidate] = useState({
    fullName: '',
    email: '',
    skills: '',
    yrsExp: 0
  });

  // State to control the visibility of the new cand form
  const [showNewCandidateForm, setShowNewCandidateForm] = useState(false);

  //Fetches candidates from my locally hosted API using axios.get
  useEffect(() => {
    axios.get('https://localhost:7242/api/Candidates')
      .then(response => {
        setCandidates(response.data);
      })
      .catch(error => {
        console.error('Error fetching candidates: ', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate({
      ...newCandidate,
      [name]: value
    });

    setEditedCandidate({
      ...editedCandidate,
      [name]: value
    });
  };

  //This handles adding a new candidate, using POST
  const handleAddCandidate = () => {
    axios.post('https://localhost:7242/api/Candidates', newCandidate)
      .then(response => {
        setCandidates([...candidates, response.data]);
        setNewCandidate({
          fullName: '',
          email: '',
          skills: '',
          yrsExp: 0
        });
        setShowNewCandidateForm(false); // this hides the New Candidate form after adding
      })
      .catch(error => {
        console.error('Error adding candidate: ', error);
      });
  };

  // Toggle selected state
  const handleRowClick = (id) => {
    setEditingCandidateId(id);
    const selectedCandidate = candidates.find(candidate => candidate.id === id);
    setEditedCandidate(selectedCandidate);
  };

  //Handles the editing of a candidate, using PUT
  const handleEditCandidate = () => {
    axios.put(`https://localhost:7242/api/Candidates/${editingCandidateId}`, editedCandidate)
      .then(response => {
        const updatedCandidates = candidates.map(candidate =>
          candidate.id === editingCandidateId ? response.data : candidate
        );
        setCandidates(updatedCandidates);
        setEditingCandidateId(null);
        axios.get('https://localhost:7242/api/Candidates')
          .then(response => {
            setCandidates(response.data);
          })
          .catch(error => {
            console.error('Error fetching candidates: ', error);
          });
      })
      .catch(error => {
        console.error('Error updating candidate: ', error);
      });
  };

  // Handles candidate Deletion using DELETE
  const handleDeleteCandidate = (id) => {
    axios.delete(`https://localhost:7242/api/Candidates/${id}`)
      .then(response => {
        const updatedCandidates = candidates.filter(candidate =>
          candidate.id !== id
        );
        setCandidates(updatedCandidates);
      })
      .catch(error => {
        console.error('Error deleting candidate: ', error);
      });
  };

  //This handles the cancellation from the edit mode
  const handleCancelEdit = () => {
    setEditingCandidateId(null);
    setEditedCandidate({
      fullName: '',
      email: '',
      skills: '',
      yrsExp: 0
    });
  };





  return (
    <div className='Main'>
      <div className='Headings'>
        <h1>Candidate Database</h1>
        <h3>Add, Edit & Delete Candidates! ✅</h3>
        <h5 id='Subtitle'>Click a candidate to Edit or Delete ✏️</h5>
      </div>
    
    <AddCandidateButton handleClick={() => setShowNewCandidateForm(true)} />
    {/* Renders new candidate form if showNewCandidateForm is true */}
    {showNewCandidateForm && (
        <CandidateForm
          handleChange={handleChange}
          handleSubmit={handleAddCandidate}
          values={newCandidate}
          setShowNewCandidateForm={setShowNewCandidateForm}
        />
    )}
    {/* Renders candidate list */}
      <CandidateList
        candidates={candidates}
        handleRowClick={handleRowClick}
        editingCandidateId={editingCandidateId}
        editedCandidate={editedCandidate}
        handleChange={handleChange}
        handleEditCandidate={handleEditCandidate}
        handleDeleteCandidate={handleDeleteCandidate}
        handleCancelEdit={handleCancelEdit}
      />

    </div>
  );
}

export default MainApp;
