import React, { useState, useEffect } from 'react';
import "./Community.css";
import Body from '../../components/main-elements/body/Body';
import InformationBoard from '../../components/secondary-elements/information-board/InformationBoard';
import { ref, onValue, push, set } from 'firebase/database';
import { database } from '../../firebaseConfig';

export const Community = () => {
  const [boardIds, setBoardIds] = useState([]);

  useEffect(() => {
    const boardsRef = ref(database, 'informationBoards');
    onValue(boardsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const ids = Object.keys(data);
        setBoardIds(ids);
      } else {
        setBoardIds([]);
      }
    });
  }, []);

  // ➕ Función para agregar un nuevo InformationBoard
  const handleAddBoard = async () => {
    const newBoardRef = push(ref(database, 'informationBoards')); // 🔹 Genera un ID único
    await set(newBoardRef, {
      image: "https://example.com/default.jpg",
      title: "Nuevo Tablero",
      subtitle: "Subtítulo predeterminado",
      text: "Texto de ejemplo para este nuevo tablero."
    });
  };

  return (
    <>
      <Body>
        <div className="community-container">
          <h2>Comunidad</h2>
          <h4>¡¡Espero que todos tengáis un buen día!!</h4>
          <button onClick={handleAddBoard}>➕ Añadir nuevo tablero</button>
        </div>
        {boardIds.map((id) => (
          <InformationBoard key={id} id={id} />
        ))}
      </Body>
    </>
  );
};
