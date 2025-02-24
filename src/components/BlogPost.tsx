interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  image: string;
}

export const BlogPost = ({ title, date, content, image }: BlogPostProps) => {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-sm text-black/70 mb-8">{new Date(date).toLocaleDateString()}</p>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}; 