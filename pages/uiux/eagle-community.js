import React from "react";
import Project from "../components/Project.js";
import MediaList from "../components/MediaList.js";
import Credits from "../components/Credits.js";
import EmbedVideo from "../components/EmbedVideo.js";
import TextContainer from "../components/TextContainer.js";
import TextTitle from "../components/TextTitle.js";
import TextContent from "../components/TextContent.js";
import { linkQuery } from "../../data.js";

export default function ProjectPage(props) {

  const projectId = "projectU001";

  const link = linkQuery[projectId];

  // TODO 實作這個頁面，記得改檔名
  return (
    <Project id={projectId}>

      <MediaList col={1} mCol={1}
        links={[
          "projectU001.image_01",
        ]} />

      <TextContainer>
        <TextTitle>Eagle Community — 免費的設計資源、靈感社群</TextTitle>
        <TextContent>
          專案期間：10 個月
        </TextContent>
        <TextContent>
          擔任角色：產品設計師
        </TextContent>
        <TextContent>
          負責內容：完整網站架構規劃與設計完稿
        </TextContent>
      </TextContainer>

      <TextContainer>
        <TextTitle>專案背景</TextTitle>
        <TextContent>
          公司產品 Eagle App 是一款專為設計師打造的素材管理軟體。為了提升產品的被動流量，因此規劃建立社群平台，讓使用者可以交流收集的素材與靈感，並提升使用者對產品的黏著度。
        </TextContent>
        <TextContent>
          Eagle App 適用於各產業類別的設計師，而社群平台著重於最主要的用戶設計類別，包含 UI 設計、平面設計、插畫設計、遊戲設計、室內設計等，依照上述類別設計師的使用習慣作為主要考量。
          網站風格定位為簡潔乾淨，依循原產品官網的調性。網站依主要客群分為三個語系，包含英文、繁中、簡中，不同語系的資料內容為獨立運作、不共享。
        </TextContent>
      </TextContainer>

      <TextContainer>
        <TextTitle>定義需求</TextTitle>
        <TextContent>
          1. 建立讓 Eagle App 用戶方便分享設計靈感、素材、工具的社群網站。
        </TextContent>
        <TextContent>
          2. 引導潛在用戶了解 Eagle App 的相關資訊，進而下載或購買軟體。
        </TextContent>
        <TextContent>
          3. 培養自主創作者，不須透過官方推動，社群就能長久穩定的運行。
        </TextContent>
      </TextContainer>

      <TextContainer>
        <TextTitle>專案成果</TextTitle>
        <TextContent>
          上線三個月的網站成效（以簡中網站計算）
        </TextContent>
        <TextContent>
          1. 用戶提交近 1500 個資源投稿。
        </TextContent>
        <TextContent>
          2. 約有 180K 網站總訪問量。
        </TextContent>
        <TextContent>
          3. 網站平均訪問時長 08:42。
        </TextContent>
      </TextContainer>



      <TextContainer>
        <TextTitle>資訊架構</TextTitle>
        <TextContent>
          以網站資訊架構圖和工程師與主管討論，確認方向正確後開始著手頁面規劃與視覺設計。
        </TextContent>
      </TextContainer>


      <MediaList col={1} mCol={1}
        links={[
          "projectU001.image_02",
        ]} />

      <MediaList col={1} mCol={1}
        links={[
          "projectU001.image_03",
          "projectU001.image_04",
          "projectU001.image_05",
          "projectU001.image_06",
          "projectU001.image_07",
          "projectU001.image_08",
          "projectU001.image_09",
          "projectU001.image_10",
        ]} />



      <Credits>
        <p>Client : Tainan City Government</p>
        <p>Art Director : Midnight Design</p>
        <p>Design : I Chan Su、Hsuan Yu Hsu</p>
        <p>3D Motion Design : 1000 Cheng</p>
        <p>Typeface : 文鼎字型</p>

      </Credits>

    </Project>);
}