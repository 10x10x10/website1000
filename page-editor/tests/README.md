# 編輯器回歸驗證

從 repository 根目錄執行 `npm --prefix page-editor test`。需先安裝根目錄相依（提供 tsx）與 page-editor 相依。測試使用 Node 內建 runner 及與 React 18.3.1 相符的 react-test-renderer；CSS loader 只替換樣式模組，不替換受測元件。

- `editorTree.test.mjs`：跨父層／祖先索引校正、前後排序、無效目的地、循環、primitive，以及原樹與內容集合保全。
- `ProjectTreeEditor.test.mjs`：mount 真實編輯器元件後觸發拖曳 callbacks，覆蓋 root、before、after、inside、兩個移動入口與選取清除。
- `InspectorPanel.test.mjs`：mount/update/unmount、無選取→Title→Section→無選取→Title、刪除及新作品狀態，不保留舊編輯狀態。

人工驗證：開啟本地 dev server，在不儲存的測試作品新增 Title 與 Section，選取 Title 輸入可識別內容；以拖曳把 Title 放入後方 Section，確認內容保留並取消選取，再選取／刪除該節點及開啟另一作品，確認 Inspector 正確切換。鍵盤可用 Space 拿起／放下、方向鍵移動。不要為驗證而儲存到正式作品。
