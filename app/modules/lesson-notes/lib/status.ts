export type NoteStatus =
  | { kind: "error"; message: string }
  | { kind: "edited"; updatedAt: string }
  | { kind: "none" };

export function noteStatus(
  note: { updatedAt: string } | null | undefined,
  error: string | undefined
): NoteStatus {
  if (error) return { kind: "error", message: error };
  if (note) return { kind: "edited", updatedAt: note.updatedAt };
  return { kind: "none" };
}
