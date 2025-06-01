"use client";

import MainCard from "@/components/common/MainCard";
import styles from "./NoteCard.module.css";
import { formatDate } from "@/utils/format";

export interface Note {
  id: number;
  title: string;
  content: string;
  date: string | Date;
}

interface NoteCardProps {
  note: Note;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  return (
    <MainCard
      title={note.title}
      secondary={
        <div className={styles.buttonGroup}>
          <button className={styles.editButton} onClick={() => onEdit(note.id)}>
            Edit
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        </div>
      }
      whiteBg
       className={styles.card}
    >
      <div>
        <div className={styles.content}>{note.content}</div>
        <div className={styles.footer}>
          Last Modifier: {formatDate(new Date(note.date))}
        </div>
      </div>
    </MainCard>
  );
}
