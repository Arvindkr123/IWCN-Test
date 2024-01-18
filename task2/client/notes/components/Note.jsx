import { useEffect, useState } from "react";
import axios from "axios";
import AddNote from "./AddNote";

const Note = () => {
  const [data, setData] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:8800/api/notes/" + id);
    setRefreshScreen((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:8800/api/notes");
      setData(res.data);
    })();
  }, [refreshScreen]);

  return (
    <div className="app-note">
      <AddNote setRefreshScreen={setRefreshScreen} />
      <div className="notes">
        {data &&
          data.map((note) => (
            <div className="note" key={note.id}>
              <h4>{note.title}</h4>
              <p>{note.desc}</p>
              <div>
                <span>{new Date(note.date).toLocaleString()}</span>
                <button onClick={() => handleDelete(note.id)}>delete</button>
              </div>
            </div>
          ))}

        {data.length === 0 && <h1>No Notes Available ! please create</h1>}
      </div>
    </div>
  );
};

export default Note;
