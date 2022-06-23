# 모닥
- 캠린이부터 캠핑 고인물까지 캠핑족을 위해 캠핑장 이용 후기와 캠핑장 정보를 함께 제공하는 사이트입니다.
- 개발 기간: 2022.01.25 ~ 2022.02.20
- 개발 인원: Back 1명 / Front 4명
- 기술 스택: 
  | 분류 | 기술 |
  | ------ | ------------------- |
  | Front | React, NextJs, Redux-toolkit, Redux-saga, Styled-Components |
  | Back | Express, MongoDB |
  | 배포 | Azure, Docker, Nginx |
  | 테스팅 | Jest, Storybook |
  
##  구현 기능 설명
- 기본 기능
    - 로그인/로그아웃
    - 회원 가입
    - 회원 정보 수정
- 주요 기능
    - 헤더에서 캠핑장 상시 검색.
    - 캠핑장 리스트 페이지에서 테마별 캠핑장 추천. (자신이 좋아하는 캠핑장과 같은 테마의 여러 캠핑장을 추천받을 수 있다.)
    - 캠핑장 소개 페이지에서 리뷰 작성.
    - 메인 페이지에서 인기 캠핑장, 인기 리뷰를 보여줌으로서 해당 캠핑장 관심 유도
- 서브 기능
    - 다크 모드 버튼
    - 캠핑장 북마크(찜하기 기능)
    - 리뷰 좋아요 버튼
    - 리뷰 조건 정렬(최신순, 인기순 등)
    - 마이 페이지에서 내가 작성한 리뷰, 찜한 캠핑장 열람.

## 프로젝트 구조도
<img src="https://user-images.githubusercontent.com/72085261/175261221-ae039346-a1bf-465e-9a85-353a8f94ff23.png" width="700" height="auto"/>

## 와이어프레임
- [피그마(와이어 프레임)](https://www.figma.com/file/4IuP5rkdTNYy0jsJJ8txH1/Wireframing-in-Figma?node-id=0%3A1)

## 페이지 및 기능 캡처
- 메인페이지(컴포넌트 제작)<br>
  <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175264236-1a7ebb25-774f-480c-8b60-fc8e134045f3.gif" />
- 캠핑장 리스트 페이지(컴포넌트 제작 및 기능구현)<br>
  <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175264483-cf1304b3-b7ab-4fd1-ba37-bd981720ab6a.gif" />
    - 필터링<br>
      <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175264662-3cee9d70-109a-46d1-bd52-89533652bbb7.gif" />
    - 정렬<br>
      <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175264668-5fff7abd-0107-4642-9e98-25f7e42bc150.gif" />
- 캠핑장 디테일 페이지<br>
  <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175265301-9987be54-b43e-498d-97d6-213f123298b4.gif" />
    - 리뷰 작성, 수정, 삭제<br>
      <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175265307-c181b8ba-2b5a-481d-8bff-21fd3df76ba8.gif" />
    - 캠핑장 북마크 및 리뷰 좋아요<br>
      <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175265313-2ffafe92-209d-4e22-9772-e4590a0604a6.gif" />
- 유저 페이지<br>
  <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175265318-5b536aa2-e923-4b05-bc10-045152099c34.gif" />
    - 회원 정보 수정<br>
    <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175265331-efab520e-07f3-4087-8ca3-91c82857ae1f.gif" />
    <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175265340-84bff961-ceef-4058-b02f-934e2d039aa2.gif" /><br>
    - 내 리뷰, 찜한 캠핑장 조회<br>
    <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175265344-b29621cd-a7d4-4ccf-8965-2e3644d6df9f.gif" />
- 페이지 공통 기능
    - 로그인 및 로그아웃<br>
      <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175265355-82ad8957-e701-4089-af6f-0870cf9e742b.gif" />
    - 다크모드<br>
      <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175265360-58d3d51f-8d58-4737-a638-49316ea4b0e2.gif" />
    - 검색 및 자동완성<br>
      <img width="700" height="auto" src="https://user-images.githubusercontent.com/72085261/175265367-b9f65bac-9ff4-4ea9-b1b6-cdcce551bb50.gif" />

