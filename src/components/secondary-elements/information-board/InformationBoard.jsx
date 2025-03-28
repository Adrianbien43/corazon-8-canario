import React, { useState, useEffect } from 'react';
import { database } from '../../../firebaseConfig';
import { ref, push, set, onValue, remove } from 'firebase/database';
import './InformationBoard.css';

function InformationBoard({ id }) {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      const boardRef = ref(database, `informationBoards/${id}`);
      const listener = onValue(boardRef, (snapshot) => {
        const data = snapshot.val();
        console.log(`Datos recibidos para ID ${id}:`, data); // 🔥 Depuración
        if (data) {
          setImage(data.image || '');
          setTitle(data.title || '');
          setSubtitle(data.subtitle || '');
          setText(data.text || '');
        }
      });

      return () => listener(); // 🔥 Cleanup corregido
    }
  }, [id]);

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    try {
      if (id) {
        const boardRef = ref(database, `informationBoards/${id}`);
        await set(boardRef, { image, title, subtitle, text });
      } else {
        const newBoardRef = push(ref(database, 'informationBoards'));
        await set(newBoardRef, { image, title, subtitle, text });
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      if (id) {
        const boardRef = ref(database, `informationBoards/${id}`);
        await remove(boardRef);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="information-board">
      {title || subtitle || text || image ? (
        <>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <p>{text}</p>
          {image && <img src={image} alt="Board" />}
        </>
      ) : (
        <p>Cargando datos...</p>
      )}
      {isEditing ? (
        <div>
          <input type="text" value={image} onChange={handleImageChange} />
          <input type="text" value={title} onChange={handleTitleChange} />
          <input type="text" value={subtitle} onChange={handleSubtitleChange} />
          <textarea value={text} onChange={handleTextChange}></textarea>
          <button onClick={handleSaveClick}>Guardar</button>
          <button onClick={handleDeleteClick}>Eliminar</button>
        </div>
      ) : (
        <button onClick={() => setIsEditing(true)}>Editar</button>
      )}
    </div>
  );
}

export default InformationBoard;
