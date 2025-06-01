"use client";

import { FiPlus } from "react-icons/fi";
import AddNoteModal from "./AddNoteModal";
import NoteCard from "./NoteCard";
import { useState } from "react";
import { useNotesStore } from "@/store/useNotesStore";
import { getGreeting } from "@/utils/greeting";
import styles from "./NotesPage.module.css";
import classes from "../../app/page.module.css";

export default function NotesPage() {
  const [showModal, setShowModal] = useState(false);
  const { notes, addNote, updateNote, deleteNote } = useNotesStore();

  const handleEdit = (id: number) => {
    const note = notes.find((n) => n.id === id);
    if (!note) return;

    const newTitle = prompt("Edit Title:", note.title);
    const newContent = prompt("Edit Content:", note.content);

    if (newTitle && newContent) {
      updateNote(id, newTitle, newContent);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this note?")) {
      deleteNote(id);
    }
  };
  return (
    <div className={classes.container}>
      <div className={styles.pageContainer}>
        <h1>{getGreeting()}</h1>
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={{ ...note, date: new Date(note.date) }}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}

        <button
          className={styles.floatingButton}
          onClick={() => setShowModal(true)}
        >
          <FiPlus size={24} color="#fff" />
        </button>

        {showModal && (
          <AddNoteModal onClose={() => setShowModal(false)} onAdd={addNote} />
        )}
      </div>
    </div>
  );
}
