import { noteStatus } from "./lib/status";

export type { NoteStatus } from "./lib/status";

/** What the notes footer shows: a save error beats the last-edited time. */
export function describeNoteStatus(
  note: { updatedAt: string } | null | undefined,
  error?: string
) {
  return noteStatus(note, error);
}
