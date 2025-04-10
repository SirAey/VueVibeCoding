<template>
  <div class="coding-tools">
    <h1>เครื่องมือ AI สำหรับการเขียนโค้ด</h1>
    <div class="tool-section">
      <div class="tool-header">
        <img src="@/assets/tool-logos/cursor-logo.png" alt="Cursor logo" class="tool-logo" />
        <h2>Cursor</h2>
      </div>
      <p lang="en" dir="ltr">
        Cursor คือโปรแกรมแก้ไขโค้ดที่ขับเคลื่อนด้วย AI โดยพัฒนาต่อยอดจาก Visual Studio Code (VS
        Code) มีความสามารถในการเขียนโค้ด, แก้ไขบั๊ก, และให้คำแนะนำแบบ real-time
      </p>
    </div>

    <div class="tool-section">
      <div class="tool-header">
        <img src="@/assets/tool-logos/windsurf_logo.svg" alt="Windsurf AI logo" class="tool-logo" />
        <h2>Windsurf AI</h2>
      </div>
      <p>
        Windsurf AI เป็นเครื่องมือ AI ที่ช่วยในการพัฒนาซอฟต์แวร์
        โดยเน้นการทำความเข้าใจโค้ดเบสขนาดใหญ่ และสามารถช่วยนักพัฒนาในการนำทางผ่านโค้ดที่ซับซ้อนได้
      </p>
    </div>

    <div class="tool-section">
      <div class="tool-header">
        <img
          src="@/assets/tool-logos/github-copilot-logo.svg"
          alt="GitHub Copilot logo"
          class="tool-logo"
        />
        <h2>GitHub Copilot</h2>
      </div>
      <p>
        GitHub Copilot เป็น AI pair programmer ที่พัฒนาโดย GitHub ร่วมกับ OpenAI สามารถแนะนำโค้ดแบบ
        real-time ขณะที่คุณพิมพ์ และเข้าใจบริบทของโค้ดที่คุณกำลังเขียนอยู่
      </p>
    </div>

    <div class="tool-section">
      <div class="tool-header">
        <img src="@/assets/tool-logos/replit-logo.svg" alt="Replit logo" class="tool-logo" />
        <h2>Replit</h2>
      </div>
      <p>
        Replit เป็น IDE แบบ browser-based ที่มาพร้อมกับความสามารถด้าน AI ช่วยให้คุณสามารถเขียนโค้ด,
        ทดสอบ และ deploy โปรเจกต์ได้จากเบราว์เซอร์
      </p>
    </div>

    <div class="tool-section">
      <div class="tool-header">
        <img src="@/assets/tool-logos/chatgpt-logo.svg" alt="ChatGPT logo" class="tool-logo" />
        <h2>ChatGPT</h2>
      </div>
      <p>
        แม้ว่า ChatGPT จะไม่ใช่เครื่องมือเขียนโค้ดโดยตรง แต่เป็น AI chatbot
        ที่สามารถช่วยในการเขียนโค้ด แก้ไขบั๊ก อธิบายแนวคิดการเขียนโปรแกรม
        และให้คำแนะนำในการแก้ปัญหาต่างๆ ได้
      </p>
    </div>
  </div>
</template>

<style scoped>
.coding-tools {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90em;
  margin: 0 auto;
  padding: 20px;
}

.tool-section {
  width: 100%;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.tool-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--color-border-hover);
}

.tool-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.tool-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
}

h1 {
  color: var(--color-heading);
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.6rem;
  font-weight: 500;
}

h2 {
  color: hsla(160, 100%, 37%, 1);
  margin-bottom: 15px;
  font-size: 1.4rem;
  font-weight: 500;
}

p {
  line-height: 1.6;
  color: var(--color-text);
  font-size: 15px;
}

@media (max-width: 1024px) {
  .coding-tools {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
  }

  .tool-section {
    margin-bottom: 20px;
    padding: 15px;
  }
}
</style>
