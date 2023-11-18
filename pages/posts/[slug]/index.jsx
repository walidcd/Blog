import fs from "fs"
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

export async function getStaticPaths() {
  const folder = "posts";
  const fileNames = fs.readdirSync(folder);
  const markdownFiles = fileNames.filter((file) => file.endsWith(".md"));
  const slugs = markdownFiles.map((file) => file.replace(".md", ""));

  const paths = slugs.map((slug)=>{return {params:{slug:slug}}});
  // console.log("paths");
  // console.log(paths);
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
        <div className="post prose ">
          <div className="titleContainer ">
            <h1 className="title ">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
          </div>
          <div className="contentContainer ">
            <Markdown>{blog}</Markdown>
          </div>
        </div>
     );
}
 
export default Postpage;