import { useState } from "react";

const Note = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "go to walk",
      desc: "I am going to park today",
      date: Date.now(),
    },
    {
      id: 2,
      title: "go to field",
      desc: "I will go to my field today",
      date: Date.now(),
    },
    {
      id: 3,
      title: "go to surajpur",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat unde ratione quisquam enim quo, ullam odio excepturi odit velit aliquid voluptates ipsam corrupti. Fugiat atque veritatis quasi optio! Animi",
      date: Date.now(),
    },
    {
      id: 4,
      title: "meet friends",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat unde ratione quisquam enim quo, ullam odio excepturi odit velit aliquid voluptates ipsam corrupti. Fugiat atque veritatis quasi optio! Animi",
      date: Date.now(),
    },
  ]);

  const handleDelete = (id) => {
    const updatedData = data.filter((note) => note.id !== id);
    setData(updatedData);
  };

  return (
    <div className="app-note">
      <input type="text" placeholder="Take a note.." />
      <div className="notes">
        {data.map((note) => (
          <div className="note" key={note.id}>
            <h4>{note.title}</h4>
            <p>{note.desc}</p>
            <div>
              <span>{new Date(note.date).toLocaleString()}</span>
              <button onClick={() => handleDelete(note.id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
