"use client";

import { useState, Fragment } from "react";
import MainCard from "@/components/common/MainCard";
import Input from "@/components/common/Input";
import styles from "./AddNoteModal.module.css";

interface AddNoteModalProps {
  onClose: () => void;
  onAdd: (title: string, content: string) => void;
}

export default function AddNoteModal({ onClose, onAdd }: AddNoteModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (!title.trim() || !content.trim()) {
      alert("Both Title and Content are required.");
      return;
    }
    onAdd(title.trim(), content.trim());
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <Fragment>
      <div className={styles.overlay} onClick={onClose} />

      <div className={styles.modalContainer}>
        <MainCard
          title="Add Notes"
          secondary={
            <button className={styles.cancelHeader} onClick={onClose}>
              x
            </button>
          }
        >
          <Input label="" value={title} onChange={setTitle} />
          <div className={styles.textareaGroup}>
            <textarea
              className={styles.textarea}
              rows={5}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.addButton} onClick={handleAdd}>
              Add
            </button>
            <button className={styles.cancelButton} onClick={onClose}>
              Cancel
            </button>
          </div>
        </MainCard>
      </div>
    </Fragment>
  );
}
