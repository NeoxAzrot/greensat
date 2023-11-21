import { marked } from 'marked';

interface MdxProps {
  code: string;
}

const Mdx = ({ code }: MdxProps) => {
  const markdown = marked.parse(code);

  return (
    <article className="prose text-lg text-slate-500 max-w-none prose-lg prose-p:leading-normal prose-headings:font-playfair-display prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-slate-900 prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit before:prose-p:content-[''] after:prose-p:content-[''] prose-hr:my-8">
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </article>
  );
};

export default Mdx;
