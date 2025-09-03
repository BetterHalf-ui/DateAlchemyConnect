import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered,
  Quote,
  Link2,
  Eye,
  Edit3 
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

export default function RichTextEditor({ value, onChange, placeholder, rows = 15 }: RichTextEditorProps) {
  const [isPreview, setIsPreview] = useState(false);

  const insertText = (before: string, after: string = '') => {
    const textarea = document.querySelector('textarea[data-rich-editor="true"]') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    onChange(newText);
    
    // Restore focus and selection
    setTimeout(() => {
      textarea.focus();
      const newPosition = start + before.length + selectedText.length + after.length;
      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);
  };

  const formatButtons = [
    {
      icon: Bold,
      label: 'Bold',
      action: () => insertText('**', '**'),
    },
    {
      icon: Italic,
      label: 'Italic',
      action: () => insertText('*', '*'),
    },
    {
      icon: Underline,
      label: 'Underline',
      action: () => insertText('<u>', '</u>'),
    },
    {
      icon: List,
      label: 'Bullet List',
      action: () => insertText('\n- ', ''),
    },
    {
      icon: ListOrdered,
      label: 'Numbered List',
      action: () => insertText('\n1. ', ''),
    },
    {
      icon: Quote,
      label: 'Quote',
      action: () => insertText('\n> ', ''),
    },
    {
      icon: Link2,
      label: 'Link',
      action: () => insertText('[', '](url)'),
    },
  ];

  const renderPreview = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/<u>(.*?)<\/u>/g, '<u>$1</u>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/^1\. (.+)$/gm, '<li>$1</li>')
      .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\n/g, '<br>');
  };

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-200 rounded-lg bg-gray-50">
        {formatButtons.map((button, index) => (
          <Button
            key={index}
            type="button"
            variant="ghost"
            size="sm"
            onClick={button.action}
            disabled={isPreview}
            title={button.label}
            className="h-8 w-8 p-0"
            data-testid={`format-${button.label.toLowerCase().replace(' ', '-')}`}
          >
            <button.icon className="w-4 h-4" />
          </Button>
        ))}
        
        <div className="ml-auto flex gap-2">
          <Button
            type="button"
            variant={!isPreview ? "default" : "ghost"}
            size="sm"
            onClick={() => setIsPreview(false)}
            className="flex items-center gap-1"
            data-testid="button-edit-mode"
          >
            <Edit3 className="w-4 h-4" />
            Edit
          </Button>
          <Button
            type="button"
            variant={isPreview ? "default" : "ghost"}
            size="sm"
            onClick={() => setIsPreview(true)}
            className="flex items-center gap-1"
            data-testid="button-preview-mode"
          >
            <Eye className="w-4 h-4" />
            Preview
          </Button>
        </div>
      </div>

      {/* Editor/Preview Area */}
      {isPreview ? (
        <div 
          className="min-h-[300px] p-4 border border-gray-300 rounded-lg bg-white prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: renderPreview(value) }}
          data-testid="content-preview"
        />
      ) : (
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || "Write your article content here..."}
          rows={rows}
          className="resize-y"
          data-rich-editor="true"
          data-testid="content-editor"
        />
      )}

      {/* Help Text */}
      <div className="text-sm text-gray-500">
        <p className="mb-1">Formatting help:</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <span>**bold text** → <strong>bold text</strong></span>
          <span>*italic text* → <em>italic text</em></span>
          <span>[link text](URL) → link</span>
          <span>&gt; quote → blockquote</span>
        </div>
      </div>
    </div>
  );
}