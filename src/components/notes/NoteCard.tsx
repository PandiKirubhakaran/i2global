"use client";

import { useState } from "react";
import MainCard from "@/components/common/MainCard";
import styles from "./NoteCard.module.css";

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
  const formatDate = (date: Date) => {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const dayName = days[date.getDay()];
    const dayNum = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    const j = dayNum % 10,
      k = dayNum % 100;
    let suffix = "th";
    if (j === 1 && k !== 11) suffix = "st";
    else if (j === 2 && k !== 12) suffix = "nd";
    else if (j === 3 && k !== 13) suffix = "rd";

    return `${dayName} ${dayNum}${suffix} ${monthName} ${year}`;
  };

  return (
    <MainCard
      title={note.title}
      secondary={
        <button
          className={styles.editButton}
          onClick={() => onEdit(note.id)}
        >
          Edit
        </button>
      }
    >
      <div className={styles.content}>{note.content}</div>
      <div className={styles.footer}>
        Last Modifier: {formatDate(note.date)}
      </div>
    </MainCard>
  );
}
