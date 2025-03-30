import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, get } from 'firebase/database';
import { database } from '../../firebaseConfig';

const BoardDetail = () => {
  const { id } = useParams(); // Obtiene el id del tablero de la URL
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const boardRef = ref(database, 'informationBoards/' + id);
    get(boardRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          setBoard(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!board) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="board-detail">
      <h2>{board.title}</h2>
      <h4>{board.subtitle}</h4>
      <p>{board.text}</p>
      <img src={board.image} alt={board.title} />
    </div>
  );
};

export default BoardDetail;
