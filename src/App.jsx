import React, { useState } from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import Note from './Note';
import Login from './Login';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState('./assets/gojo-scan.gif'); // Mettez à jour le nom de l'image

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  }

  const editNote = (index) => {
    const updatedNote = prompt("Modifier la note : ", notes[index]);
    if (updatedNote !== null) {
      const updatedNotes = [...notes];
      updatedNotes[index] = updatedNote;
      setNotes(updatedNotes);
    }
  }

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  };

  const login = () => {
    setIsLoggedIn(true);
    // Vous n'avez pas besoin de mettre à jour l'image ici
  }

  const logout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <header>
        <h1>BlocNote</h1>
        <p>Ne perdez jamais vos idées</p>
        <Login
          isLoggedIn={isLoggedIn}
          onLogin={login}
          onLogout={logout}
          profileImage={profileImage} // Passez l'URL de l'image de profil au composant Login
        />
      </header>
      <div className='card'>
        <h2>Ajouter une note <a href="#" onClick={addNote}><AiFillPlusSquare className='icon' /></a></h2>
        <input type="text" placeholder='Ex:Note' value={newNote} onChange={(e) => setNewNote(e.target.value)} />
      </div>
      {notes.map((note, index) => (
        <Note
          key={index}
          content={note}
          onEdit={() => editNote(index)}
          onDelete={() => deleteNote(index)}
        />
      ))}
    </div>
  );
}

export default App;
  