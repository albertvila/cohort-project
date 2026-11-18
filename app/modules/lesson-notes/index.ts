export type NoteStatus =
  | { kind: "error"; message: string }
  | { kind: "edited"; updatedAt: string }
  | { kind: "none" };

/** What the notes footer shows: a save error beats the last-edited time. */
export function describeNoteStatus(
  note: { updatedAt: string } | null | undefined,
  error?: string
): NoteStatus {
  if (error) return { kind: "error", message: error };
  if (note) return { kind: "edited", updatedAt: note.updatedAt };
  return { kind: "none" };
}
