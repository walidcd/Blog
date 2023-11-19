import fs from "fs"
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

export async function getStaticPaths() {
  const folder = "posts";
  const fileNames = fs.readdirSync(folder);
  const markdownFiles = fileNames.filter((file) => file.endsWith(".md"));
  const slugs = markdownFiles.map((file) => file.replace(".md", ""));

  const paths = slugs.map((slug)=>{return {params:{slug:slug}}});

  return {
    paths,
    fallback: false 
  };
}

export const getStaticProps=(context)=>{
    const folder="posts/";
    const slug=context.params.slug;
    const file=`${folder}${context.params.slug}.md`
    const fileContent =fs.readFileSync(file,"utf-8");
    const matterContent =matter(fileContent);
    const title=matterContent.data.title;
    const content =matterContent.content;
    const subtitle=matterContent.data.subtitle;
    return {props:{blog:content,title,subtitle}}
}




const Postpage = ({blog,title,subtitle}) => {
    return ( 
        <div className="post prose mt-16  dark:prose-invert max-w-5xl mx-auto">
          <div>
            <h1 className="text-center">{title}</h1>
            <h2>{subtitle}</h2>
          </div>
          <div >
            <Markdown>{blog}</Markdown>
          </div>
        </div>
     );
}
 
export default Postpage;