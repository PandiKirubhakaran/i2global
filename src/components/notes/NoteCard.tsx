"use client";

import MainCard from "@/components/common/MainCard";
import styles from "./NoteCard.module.css";
import { formatDate } from "@/utils/format";

interface Note {
  id: number;
  title: string;
  content: string;
  date: Date;
}

interface NoteCardProps {
  note: Note;
  onEdit: (id: number) => void;
}

export default function NoteCard({ note, onEdit }: NoteCardProps) {
  return (
    <MainCard
      title={note.title}
      secondary={
        <button className={styles.editButton} onClick={() => onEdit(note.id)}>
          Edit
        </button>
      }
      whiteBg
    >
      <div>
        <div className={styles.content}>{note.content}</div>
        <div className={styles.footer}>
          Last Modifier: {formatDate(note.date)}
        </div>
      </div>
    </MainCard>
  );
}
