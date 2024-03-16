"use client";
import { useStateValue } from "@/context/state-provider";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface Props {
    letter: string;
}
export default function ViewOnlyRichText({ letter, }: Props) {
    let editor = useEditor({
        extensions: [StarterKit.configure()],
        content: letter,
        editable: false,
    });
    return (
            <EditorContent editor={editor} />
    );
}