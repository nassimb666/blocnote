import React from 'react';

function Note({ content, onEdit, onDelete }) {
  return (
    <div className="note">
      <p>{content}</p>
      <button onClick={onEdit}>Modifier</button>
      <button onClick={onDelete}>Supprimer</button>
    </div>
  );
}

export default Note;
