import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Note {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface NotesState {
  notes: Note[];
  addNote: (title: string, content: string) => void;
  updateNote: (id: number, title: string, content: string) => void;
  deleteNote: (id: number) => void;
}

export const useNotesStore = create<NotesState>()(
  persist(
    (set) => ({
      notes: [],
      addNote: (title, content) =>
        set((state) => ({
          notes: [
            {
              id: Date.now(),
              title,
              content,
              date: new Date().toISOString(),
            },
            ...state.notes,
          ],
        })),
      updateNote: (id, title, content) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id
              ? { ...note, title, content, date: new Date().toISOString() }
              : note
          ),
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
    }),
    { name: "notes-storage" }
  )
);
