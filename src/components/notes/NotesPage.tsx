"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import AddNoteModal from "./AddNoteModal";
import styles from "./NotesPage.module.css";
import NoteCard from "./NoteCard";
import classes from "../../app/page.module.css";
import { getGreeting } from "@/utils/greeting";

interface Note {
  id: number;
  title: string;
  content: string;
  date: Date;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddNote = (title: string, content: string) => {
    const newNote: Note = {
      id: Date.now(),
      title,
      content,
      date: new Date(),
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const handleEdit = (id: number) => {
    alert(`Edit note with ID ${id} (functionality to be implemented)`);
  };

  return (
    <div className={classes.container}>
      <div className={styles.pageContainer}>
        <h1 style={{ color: "rgb(91, 82, 58)", marginBottom: "20px" }}>
          {getGreeting()}
        </h1>
        {notes.map((note) => (
          <div key={note.id} className={styles.noteWrapper}>
            <NoteCard note={note} onEdit={handleEdit} />
          </div>
        ))}
        <button
          className={styles.floatingButton}
          onClick={() => setShowModal(true)}
          aria-label="Add Note"
        >
          <FiPlus size={24} color="#fff" />
        </button>

        {showModal && (
          <AddNoteModal
            onClose={() => setShowModal(false)}
            onAdd={handleAddNote}
          />
        )}
      </div>
    </div>
  );
}
