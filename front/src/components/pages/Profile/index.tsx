import React, { useEffect } from "react";
import Head from "next/head";

import RowFrame from "@templates/RowFrame";
import UserReviews from "@molecules/UserReviews";
import UserCamps from "@molecules/UserCamps";
import Tabs, { TabItem } from "@molecules/MyProfileTabs";
import MyPageProfile from "@src/components/UI/organisms/UserProfile";
import { useAppSelector } from "@store/configureStore";
import { useRouter } from "next/router";
import Style from "./style";

const Profile = () => {
  const router = useRouter();

  const { userInfo } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (!userInfo) router.replace("/");
  }, []);

  return (
    <>
      <Head>
        <title>{userInfo?.nickname} :: MODAK</title>
        {userInfo?.intro && <meta name="description" content={`${userInfo?.intro}...`} />}
        <meta name="og:title" content={`${userInfo?.nickname}님의 프로필`} />
        {userInfo?.intro && <meta name="og:description" content={`${userInfo?.intro}...`} />}
        <meta name="og:image" content={userInfo?.profileImg} />
      </Head>
      <RowFrame>
        <Style.Main>
          <MyPageProfile />

          <Tabs tabs={["내 리뷰", "찜한 캠핑장"]}>
            <TabItem>
              <UserReviews />
            </TabItem>
            <TabItem>
              <UserCamps />
            </TabItem>
          </Tabs>
        </Style.Main>
      </RowFrame>
    </>
  );
};

export default Profile;
