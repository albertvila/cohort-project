import { describe, it, expect } from "vitest";
import { describeNoteStatus } from "../index";

describe("describeNoteStatus", () => {
  const note = { updatedAt: "2026-01-01T00:00:00.000Z" };

  it("shows nothing for a Student with no note and no error", () => {
    expect(describeNoteStatus(null)).toEqual({ kind: "none" });
  });

  it("shows when the note was last edited", () => {
    expect(describeNoteStatus(note)).toEqual({
      kind: "edited",
      updatedAt: note.updatedAt,
    });
  });

  it("puts a save error ahead of the edited time", () => {
    expect(describeNoteStatus(note, "Too long")).toEqual({
      kind: "error",
      message: "Too long",
    });
  });
});
