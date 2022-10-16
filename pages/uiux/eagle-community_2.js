import React from "react";
import Project from "../components/Project.js";
import MediaList from "../components/MediaList.js";
import Credits from "../components/Credits.js";
import EmbedVideo from "../components/EmbedVideo.js";
import TextContainer from "../components/TextContainer.js";
import TextTitle from "../components/TextTitle.js";
import TextContent from "../components/TextContent.js";
import { linkQuery } from "../../data.js";


import Title from '../components/v2/Title.js';
import List from '../components/v2/List.js';
import Text from '../components/v2/Text.js'
import Space from '../components/v2/Space.js'
import Divider from '../components/v2/Divider.js'



export default function ProjectPage(props) {

  const projectId = "projectU001";

  const link = linkQuery[projectId];


  return (
    <Project id={projectId} showOtherProject={false}>

      <MediaList col={1} mCol={1}
        links={[
          "projectU001.image_01",
        ]} />

      <TextContainer>
        <Title type='h1' content='Eagle Community — 免費的設計資源、靈感社群' />
        <Text content='專案期間：10 個月' />
        <Text content='擔任角色：產品設計師' />
        <Text content='負責內容：完整網站架構規劃與設計完稿' />
      </TextContainer>

      <TextContainer>
        <Title type='h2' content='專案背景' />
        <Text content={[
          '公司產品 Eagle App 是一款專為設計師打造的素材管理軟體。為了提升產品的被動流量，因此規劃建立社群平台，讓使用者可以交流收集的素材與靈感，並提升使用者對產品的黏著度。',
          'Eagle App 適用於各產業類別的設計師，而社群平台著重於最主要的用戶設計類別，包含 UI 設計、平面設計、插畫設計、遊戲設計、室內設計等，依照上述類別設計師的使用習慣作為主要考量。',
          '網站風格定位為簡潔乾淨，依循原產品官網的調性。網站依主要客群分為三個語系，包含英文、繁中、簡中，不同語系的資料內容為獨立運作、不共享。',
        ]} />
      </TextContainer>

      <TextContainer>
        <Title type='h2' content='定義需求' />
        <List type='order' content={[
          '建立讓 Eagle App 用戶方便分享設計靈感、素材、工具的社群網站。',
          '引導潛在用戶了解 Eagle App 的相關資訊，進而下載或購買軟體。',
          '培養自主創作者，不須透過官方推動，社群就能長久穩定的運行。',
        ]} />
      </TextContainer>

      <TextContainer>
        <Title type='h2' content='專案成果' />
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
        <Title type='h2' content='資訊架構' />
        <Text content='以網站資訊架構圖和工程師與主管討論，確認方向正確後開始著手頁面規劃與視覺設計。' />
      </TextContainer>


      <MediaList col={1} mCol={1}
        links={[
          "projectU001.image_02",
        ]} />

      <TextContainer>
        <Title type='h2' content='設計流程' />
        <Text content='定義需求與問題 → 收集資料（用戶、競品研究）→ 思考解決方案 → 介面規劃與設計 → 測試計畫 → 更新迭代' />
      </TextContainer>

      <TextContainer>

        <Title type='h2' content='過程中遇到的問題與解決方案' />

        <Title type='h3' content='1. 需不需有首頁呢？' />
        <Text content={[
          '因為社群網站，包含眾多的設計領域。因此在設計資源的部分，需要考量使用者是否想要看到別的領域的資源，全部顯示可能會造成閱讀上的混亂，但如果太侷限又會無法快速呈現這個網站全貌。',
          '因此我提出需要有首頁統整訊息，在首頁上呈現出主要的領域，以及以不同的區塊呈現各領域的資源，使用者可以由首頁選擇要前往的特定設計領域。',
          '然而這個提議並沒有馬上被採納。因為原先社群網站規劃上主要是由官網導流，會在官網的 navigation 上顯示名稱，並且有下拉選單，預期使用者可以直接由選單選擇要前往的設計領域。',
          '專案後期，由於社群網站除了官網導流，還會內嵌到軟體介面中，並且考量到首頁可以呈現有更多的資訊，例如 banner 、部落格文章以及推薦設計工具等等，因此最後將首頁納入網站規畫之中。',
        ]}
        />

        <Space />

        <Title type='h3' content='2. 分類系統該怎麼規劃？' />
        <Text content={[
          '設計資源頁可以想像成是一個資料庫，主要可以分成五大設計領域，在各領域之下又會有眾多的子分類，' +
          '但是不同領域之間也有可能有共通的子分類，例如：Icons、mockups、插圖等等。' +
          '另外，同個素材資源也有可能同時需要在不同子分類之下，這個狀況除了考慮前端該如何呈現，也要考慮後端是否要用同一份資料。',

          '設計資源頁可以想像成是一個資料庫，主要可以分成五大設計領域，在各領域之下又會有眾多的子分類，' +
          '但是不同領域之間也有可能有共通的子分類，例如：Icons、mockups、插圖等等。' +
          '另外，同個素材資源也有可能同時需要在不同子分類之下，這個狀況除了考慮前端該如何呈現，也要考慮後端是否要用同一份資料。',

          '最後討論出的解法是，後台資料並非直接分到不同的領域資料夾，而是類似標籤一樣，' +
          '單份資料可以標註資料是屬於哪些子分類，並且可以多重選擇。而在不同領域中的共同子分類，' +
          '也是採用了一樣的做法，單個子分類可以標註是屬於哪些領域。',

          '這個做法的優點是，避免重複的資料，可以節省資料庫的儲存空間，並且有良好的擴充性，不會因為更動資源或是子分類而消耗大幅成本。',
        ]}
        />

        <Space />

        <Title type='h3' content='3. 篩選器該使用直式還是橫式的呢？' />
        <Text content={[
          '設計資源頁的篩選器主要就是呈現分類系統，可以選擇不同的領域以及子分類。',

          '最初篩選器設計成直式的，也就是畫面中的側欄，而領域是利用下拉選單切換。優點是結構與 Eagle App 的資料夾結構類似，符合使用者過去的使用習慣。' +
          '而且分類名稱的顯示長度較有彈性，且可以有更多層級的分類結構。缺點是會占用畫面左側的空間，壓縮到主要的素材資源顯示區域。 而且領域只能利用下拉選單切換，在頻繁切換領域的狀況上較不夠直覺、方便。',

          '後來因為確定分類的層級只會有兩層 — 設計領域與子分類，因此改為橫式篩選器。橫式雖然就沒有直式的優點，但在分類層級不多的情況下切換以及瀏覽更為快速、占用的畫面空間也比較小，還有可以將其他篩選功能一併整合到同個區塊。',
        ]}
        />

      </TextContainer>

      <Divider />

      <TextContainer>
        <Title content='Wireframe' />
        <TextContent>

        </TextContent>
      </TextContainer>

      <MediaList col={2} mCol={1}
        links={[
          "projectU001.image_03",
          "projectU001.image_04",
        ]} />

      <TextContainer>
        <Title type='h2' content='Guideline' />
      </TextContainer>

      <MediaList col={1} mCol={1}
        links={[
          "projectU001.image_05",
        ]} />

      <TextContainer>
        <TextTitle content='QA 測試計畫' />
        <TextContent>

        </TextContent>
      </TextContainer>

      <MediaList col={1} mCol={1}
        links={[
          "projectU001.image_06",
        ]} />



      <TextContainer>
        <Title type='h2' content='最終設計產出' />
      </TextContainer>


      <MediaList col={1} mCol={1}
        title="首頁"

        links={[
          "projectU001.image_07",
        ]} />

      <MediaList col={1} mCol={1}
        title="設計資源"

        links={[
          "projectU001.image_08",
        ]} />

      <MediaList col={1} mCol={1}
        title="設計工具"

        links={[
          "projectU001.image_09",
        ]} />

      <MediaList col={1} mCol={1}
        title="優秀作者"

        links={[
          "projectU001.image_10",
        ]} />

      <TextContainer>
        <Title type='h2' content='結語' />

        <List type='order' content={[
          'UX Writing 的在地化：由於同時規劃多國語言的版本，由於簡體中文的內容初步規劃也是由設計師負責，所以要多參考其他簡體中文網站實際上會使用的用語，避免語意不清。',
          '保持迭代的彈性：雖然盡可能的在初期將網站規劃完善，專案過程中免不了會有大幅度的調整，因此保持彈性是很重要的，初期有將畫面中的元件拆分好，會讓版面調整上更有彈性。',
          '溝通的重要性：這次專案的團隊雖然規模不大，但偶爾還是會遇到溝通或期待有落差的時刻，執行專案的過程中逐漸學習到如何清楚的表達需求與困境，也很感謝團隊的包容，期許後續運作上能夠更加的順暢。',
        ]}
        />

      </TextContainer>

    </Project>);
}