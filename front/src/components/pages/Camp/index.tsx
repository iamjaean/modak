import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import RowFrame from "@templates/RowFrame";
import CampSiteCoverImg from "@molecules/CampSiteCoverImg";
import CampSiteInfo from "@molecules/CampSiteInfo";
import CampsiteReviewBox from "@organisms/CampsiteReviewBox";
import { useAppSelector } from "@src/store/configureStore";

const Camp: NextPage = () => {
  const { singleCamp } = useAppSelector((state) => state.camp);
  return (
    <>
      <Head>
        <title>{singleCamp?.name} :: MODAK</title>
        <meta name="description" content={`${singleCamp?.lineIntro}...`} />
        <meta property="og:title" content={`${singleCamp?.name} -MODAK`} />
        <meta property="og:image" content={`${singleCamp?.firstImage || "/tent.jpeg"}`} />
        <meta property="og:description" content={`${singleCamp?.lineIntro}...`} />
      </Head>
      <CampSiteCoverImg />
      <RowFrame>
        <CampSiteInfo />
        <CampsiteReviewBox />
      </RowFrame>
    </>
  );
};

export default Camp;
