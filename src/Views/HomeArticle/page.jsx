import { Box } from "@mui/material";
import React from "react";
import AppIndexSectionArticle from "./../HomeArticle/components/AppIndexSectionArticle";
import AppCustomComponent from "./../HomeArticle/components/AppCustomComponent";
import AppArticleIndex from "./../HomeArticle/components/AppArticleIndex";
import AppBenefitsIndex from "./../HomeArticle/components/AppBenefitsIndex";
import AppArticleContent from "./../HomeArticle/components/AppArticleContent";
import AppSocialAdvantages from "./../HomeArticle/components/AppSocialAdvantages";
import AppCustomCardList from "./../HomeArticle/components/AppCustomCardList";
import AppInfoCards from "./../HomeArticle/components/AppInfoCards";
import AppArticleCard from "./../HomeArticle/components/AppArticleCard";
import VideosDestacados from "./../Home/components/videosDestacados/VideosMasVistos";

import Footer from "../components/footer/page";

const HomeArticle = () => {
  return (
    <Box>
      <AppIndexSectionArticle />
      <AppCustomComponent />
      <AppArticleIndex />
      <AppBenefitsIndex />
      <AppArticleContent />
      <AppSocialAdvantages />
      <AppInfoCards />
      <AppCustomCardList />
      <AppArticleCard />
      <Box sx={{  width: "100%" }}>
        <Box sx={{ margin: { xs: "20px", md: "0px 200px" } }}>
          <VideosDestacados />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default HomeArticle;
