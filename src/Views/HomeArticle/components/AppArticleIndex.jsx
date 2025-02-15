import React from "react";
import ArticleIndex from "../../components/article/ArticleIndex";

const AppArticleIndex = ({ title, subtitles }) => {
  return (
    <ArticleIndex
      title={title}
      items={subtitles}  // Aquí pasamos los subtítulos
      boxStyles={{ backgroundColor: "#f0f0f0" }}
      listStyles={{ fontSize: "1rem" }}
    />
  );
};

export default AppArticleIndex;
