import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Link as LinkIcon,
  Undo,
  Redo,
  Minus,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
  };

  const buttons = [
    { icon: Bold, action: () => editor.chain().focus().toggleBold().run(), active: editor.isActive("bold"), label: "Bold" },
    { icon: Italic, action: () => editor.chain().focus().toggleItalic().run(), active: editor.isActive("italic"), label: "Italic" },
    { icon: UnderlineIcon, action: () => editor.chain().focus().toggleUnderline().run(), active: editor.isActive("underline"), label: "Underline" },
    { icon: Strikethrough, action: () => editor.chain().focus().toggleStrike().run(), active: editor.isActive("strike"), label: "Strikethrough" },
    null, // separator
    { icon: Heading1, action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), active: editor.isActive("heading", { level: 1 }), label: "Heading 1" },
    { icon: Heading2, action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: editor.isActive("heading", { level: 2 }), label: "Heading 2" },
    { icon: Heading3, action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), active: editor.isActive("heading", { level: 3 }), label: "Heading 3" },
    null,
    { icon: List, action: () => editor.chain().focus().toggleBulletList().run(), active: editor.isActive("bulletList"), label: "Bullet List" },
    { icon: ListOrdered, action: () => editor.chain().focus().toggleOrderedList().run(), active: editor.isActive("orderedList"), label: "Ordered List" },
    { icon: Quote, action: () => editor.chain().focus().toggleBlockquote().run(), active: editor.isActive("blockquote"), label: "Quote" },
    { icon: Minus, action: () => editor.chain().focus().setHorizontalRule().run(), active: false, label: "Divider" },
    null,
    { icon: LinkIcon, action: addLink, active: editor.isActive("link"), label: "Link" },
    null,
    { icon: Undo, action: () => editor.chain().focus().undo().run(), active: false, label: "Undo" },
    { icon: Redo, action: () => editor.chain().focus().redo().run(), active: false, label: "Redo" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-border p-2 bg-muted/30 rounded-t-lg">
      {buttons.map((btn, i) => {
        if (btn === null) return <div key={`sep-${i}`} className="w-px h-6 bg-border mx-1" />;
        return (
          <Toggle
            key={btn.label}
            size="sm"
            pressed={btn.active}
            onPressedChange={btn.action}
            aria-label={btn.label}
            className="h-8 w-8 p-0"
          >
            <btn.icon size={16} />
          </Toggle>
        );
      })}
    </div>
  );
};

const RichTextEditor = ({ content, onChange }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: "text-primary underline" } }),
      Placeholder.configure({ placeholder: "Start writing your post..." }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border border-input rounded-lg overflow-hidden bg-background">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none p-4 min-h-[300px] focus-within:outline-none [&_.tiptap]:outline-none [&_.tiptap]:min-h-[280px] [&_.tiptap_p.is-editor-empty:first-child::before]:text-muted-foreground [&_.tiptap_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)] [&_.tiptap_p.is-editor-empty:first-child::before]:float-left [&_.tiptap_p.is-editor-empty:first-child::before]:pointer-events-none [&_.tiptap_p.is-editor-empty:first-child::before]:h-0"
      />
    </div>
  );
};

export default RichTextEditor;
