<template>
  <div class="coding-tools">
    <h1>เครื่องมือ AI สำหรับการเขียนโค้ด</h1>

    <!-- GitHub Copilot (5 ดาว) -->
    <div class="tool-section">
      <div class="tool-header">
        <a
          href="https://github.com/features/copilot"
          target="_blank"
          rel="noopener noreferrer"
          class="tool-link"
        >
          <img
            src="@/assets/tool-logos/github-copilot-logo.svg"
            alt="GitHub Copilot logo"
            class="tool-logo"
          />
          <h2>GitHub Copilot</h2>
        </a>
        <div class="popularity">
          <span class="stars">★★★★★</span>
          <span class="rating">5.0</span>
        </div>
      </div>
      <p class="tool-description">
        GitHub Copilot เป็น AI pair programmer ที่พัฒนาโดย GitHub ร่วมกับ OpenAI สามารถแนะนำโค้ดแบบ
        real-time ขณะที่คุณพิมพ์ และเข้าใจบริบทของโค้ดที่คุณกำลังเขียนอยู่
      </p>
      <div class="features-usage">
        <div class="features">
          <h3>ฟีเจอร์เด่น:</h3>
          <ul>
            <li>แนะนำโค้ดแบบ real-time ขณะที่พิมพ์</li>
            <li>เข้าใจบริบทของโค้ดทั้งไฟล์</li>
            <li>แนะนำฟังก์ชันและคลาสทั้งบล็อก</li>
            <li>ทำงานได้กับหลากหลายภาษาและเฟรมเวิร์ค</li>
          </ul>
        </div>
        <div class="usage">
          <h3>การใช้งาน:</h3>
          <ol>
            <li>เริ่มพิมพ์โค้ดหรือคอมเมนต์</li>
            <li>Copilot จะแสดงคำแนะนำเป็นสีเทาจาง</li>
            <li>กด Tab เพื่อยอมรับคำแนะนำ</li>
            <li>กด Esc เพื่อปฏิเสธคำแนะนำ</li>
          </ol>
        </div>
      </div>
    </div>

    <!-- ChatGPT (5 ดาว) -->
    <div class="tool-section">
      <div class="tool-header">
        <a
          href="https://chat.openai.com"
          target="_blank"
          rel="noopener noreferrer"
          class="tool-link"
        >
          <img src="@/assets/tool-logos/chatgpt-logo.svg" alt="ChatGPT logo" class="tool-logo" />
          <h2>ChatGPT</h2>
        </a>
        <div class="popularity">
          <span class="stars">★★★★★</span>
          <span class="rating">5.0</span>
        </div>
      </div>
      <p class="tool-description">
        แม้ว่า ChatGPT จะไม่ใช่เครื่องมือเขียนโค้ดโดยตรง แต่เป็น AI chatbot
        ที่สามารถช่วยในการเขียนโค้ด แก้ไขบั๊ก และให้คำแนะนำได้อย่างมีประสิทธิภาพ
      </p>
      <div class="features-usage">
        <div class="features">
          <h3>ฟีเจอร์เด่น:</h3>
          <ul>
            <li>สามารถอธิบายโค้ดได้อย่างละเอียด</li>
            <li>แก้ไขบั๊กและให้คำแนะนำ</li>
            <li>สร้างโค้ดจากคำอธิบายภาษาธรรมชาติ</li>
            <li>ช่วยในการ debugging และ optimization</li>
          </ul>
        </div>
        <div class="usage">
          <h3>การใช้งาน:</h3>
          <ol>
            <li>อธิบายสิ่งที่ต้องการด้วยภาษาธรรมชาติ</li>
            <li>ChatGPT จะวิเคราะห์และตอบกลับ</li>
            <li>สามารถถามคำถามเพิ่มเติมเพื่อปรับแต่งคำตอบ</li>
          </ol>
        </div>
      </div>
    </div>

    <!-- Cursor (4.5 ดาว) -->
    <div class="tool-section">
      <div class="tool-header">
        <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" class="tool-link">
          <img src="@/assets/tool-logos/cursor-logo.png" alt="Cursor logo" class="tool-logo" />
          <h2>Cursor</h2>
        </a>
        <div class="popularity">
          <span class="stars">★★★★½</span>
          <span class="rating">4.5</span>
        </div>
      </div>
      <p class="tool-description">
        Cursor คือโปรแกรมแก้ไขโค้ดที่ขับเคลื่อนด้วย AI โดยพัฒนาต่อยอดจาก VS Code
        มีความสามารถในการเขียนโค้ด แก้ไขบั๊ก และให้คำแนะนำแบบ real-time
      </p>
      <div class="features-usage">
        <div class="features">
          <h3>ฟีเจอร์เด่น:</h3>
          <ul>
            <li>Chat AI ในตัว editor</li>
            <li>แก้ไขโค้ดอัตโนมัติ</li>
            <li>Terminal และ debugging ในตัว</li>
            <li>รองรับการทำงานเป็นทีม</li>
          </ul>
        </div>
        <div class="usage">
          <h3>การใช้งาน:</h3>
          <ol>
            <li>กด Cmd/Ctrl + K เพื่อเปิด AI chat</li>
            <li>เลือกโค้ดและสั่งให้ AI แก้ไข</li>
            <li>ใช้คำสั่งเสียงเพื่อควบคุม editor</li>
          </ol>
        </div>
      </div>
    </div>

    <!-- Amazon CodeWhisperer (4 ดาว) -->
    <div class="tool-section">
      <div class="tool-header">
        <a
          href="https://aws.amazon.com/codewhisperer"
          target="_blank"
          rel="noopener noreferrer"
          class="tool-link"
        >
          <img
            src="@/assets/tool-logos/codewhisperer-logo.svg"
            alt="Amazon CodeWhisperer logo"
            class="tool-logo"
          />
          <h2>Amazon CodeWhisperer</h2>
        </a>
        <div class="popularity">
          <span class="stars">★★★★☆</span>
          <span class="rating">4.0</span>
        </div>
      </div>
      <p class="tool-description">
        Amazon CodeWhisperer เป็น AI coding assistant ที่พัฒนาโดย AWS
        มีจุดเด่นในการสร้างโค้ดที่ปลอดภัยและใช้งานง่ายกับบริการของ AWS
      </p>
      <div class="features-usage">
        <div class="features">
          <h3>ฟีเจอร์เด่น:</h3>
          <ul>
            <li>แนะนำโค้ดสำหรับ AWS services</li>
            <li>ตรวจสอบความปลอดภัยของโค้ด</li>
            <li>รองรับหลายภาษาโปรแกรมมิ่ง</li>
            <li>ฟรีสำหรับการใช้งานส่วนบุคคล</li>
          </ul>
        </div>
        <div class="usage">
          <h3>การใช้งาน:</h3>
          <ol>
            <li>ติดตั้ง extension ใน IDE</li>
            <li>เริ่มเขียนโค้ดหรือคอมเมนต์</li>
            <li>กด Tab เพื่อยอมรับคำแนะนำ</li>
          </ol>
        </div>
      </div>
    </div>

    <!-- Tabnine (4 ดาว) -->
    <div class="tool-section">
      <div class="tool-header">
        <a
          href="https://www.tabnine.com"
          target="_blank"
          rel="noopener noreferrer"
          class="tool-link"
        >
          <img src="@/assets/tool-logos/tabnine-logo.svg" alt="Tabnine logo" class="tool-logo" />
          <h2>Tabnine</h2>
        </a>
        <div class="popularity">
          <span class="stars">★★★★☆</span>
          <span class="rating">4.0</span>
        </div>
      </div>
      <p class="tool-description">
        Tabnine เป็น AI coding assistant ที่ใช้ deep learning ในการเรียนรู้รูปแบบการเขียนโค้ด
        รองรับหลากหลายภาษาและ IDE
      </p>
      <div class="features-usage">
        <div class="features">
          <h3>ฟีเจอร์เด่น:</h3>
          <ul>
            <li>เรียนรู้สไตล์การเขียนโค้ดของทีม</li>
            <li>แนะนำโค้ดแบบ real-time</li>
            <li>รองรับการทำงานแบบ offline</li>
            <li>ปรับแต่งตามโปรเจคของคุณ</li>
          </ul>
        </div>
        <div class="usage">
          <h3>การใช้งาน:</h3>
          <ol>
            <li>ติดตั้ง Tabnine ใน IDE</li>
            <li>เริ่มเขียนโค้ด</li>
            <li>กด Tab เพื่อยอมรับคำแนะนำ</li>
          </ol>
        </div>
      </div>
    </div>

    <!-- Codeium (3.5 ดาว) -->
    <div class="tool-section">
      <div class="tool-header">
        <a href="https://codeium.com" target="_blank" rel="noopener noreferrer" class="tool-link">
          <img src="@/assets/tool-logos/codeium-logo.svg" alt="Codeium logo" class="tool-logo" />
          <h2>Codeium</h2>
        </a>
        <div class="popularity">
          <span class="stars">★★★½☆</span>
          <span class="rating">3.5</span>
        </div>
      </div>
      <p class="tool-description">
        Codeium เป็น AI coding assistant ที่ให้บริการฟรี เน้นความเร็วในการตอบสนอง
        และความแม่นยำในการแนะนำโค้ด
      </p>
      <div class="features-usage">
        <div class="features">
          <h3>ฟีเจอร์เด่น:</h3>
          <ul>
            <li>ให้บริการฟรีทั้งหมด</li>
            <li>ตอบสนองรวดเร็ว</li>
            <li>แนะนำโค้ดทั้งบรรทัดและฟังก์ชัน</li>
            <li>รองรับหลาย IDE</li>
          </ul>
        </div>
        <div class="usage">
          <h3>การใช้งาน:</h3>
          <ol>
            <li>ติดตั้ง extension</li>
            <li>สร้างบัญชีฟรี</li>
            <li>เริ่มใช้งานได้ทันที</li>
          </ol>
        </div>
      </div>
    </div>

    <!-- Visual Studio IntelliCode (3.5 ดาว) -->
    <div class="tool-section">
      <div class="tool-header">
        <a
          href="https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode"
          target="_blank"
          rel="noopener noreferrer"
          class="tool-link"
        >
          <img
            src="@/assets/tool-logos/intellicode-logo.svg"
            alt="Visual Studio IntelliCode logo"
            class="tool-logo"
          />
          <h2>Visual Studio IntelliCode</h2>
        </a>
        <div class="popularity">
          <span class="stars">★★★½☆</span>
          <span class="rating">3.5</span>
        </div>
      </div>
      <p class="tool-description">
        Visual Studio IntelliCode จาก Microsoft ช่วยเพิ่มประสิทธิภาพการเขียนโค้ด
        ด้วยการแนะนำการเติมโค้ดอัจฉริยะ
      </p>
      <div class="features-usage">
        <div class="features">
          <h3>ฟีเจอร์เด่น:</h3>
          <ul>
            <li>แนะนำ API ตามบริบท</li>
            <li>เรียนรู้รูปแบบการเขียนโค้ด</li>
            <li>รองรับหลายภาษา</li>
            <li>ฟรีสำหรับ VS Code</li>
          </ul>
        </div>
        <div class="usage">
          <h3>การใช้งาน:</h3>
          <ol>
            <li>ติดตั้ง extension</li>
            <li>เปิดใช้งานสำหรับภาษาที่ต้องการ</li>
            <li>เริ่มรับคำแนะนำอัตโนมัติ</li>
          </ol>
        </div>
      </div>
    </div>

    <!-- Bito AI (3 ดาว) -->
    <div class="tool-section">
      <div class="tool-header">
        <a href="https://bito.ai" target="_blank" rel="noopener noreferrer" class="tool-link">
          <img src="@/assets/tool-logos/bito-logo.svg" alt="Bito AI logo" class="tool-logo" />
          <h2>Bito AI</h2>
        </a>
        <div class="popularity">
          <span class="stars">★★★☆☆</span>
          <span class="rating">3.0</span>
        </div>
      </div>
      <p class="tool-description">Bito AI มีจุดเด่นในการทำงานแบบออฟไลน์และการสร้าง unit tests</p>
      <div class="features-usage">
        <div class="features">
          <h3>ฟีเจอร์เด่น:</h3>
          <ul>
            <li>ทำงานแบบออฟไลน์ได้</li>
            <li>สร้าง unit tests อัตโนมัติ</li>
            <li>แปลงโค้ดระหว่างภาษา</li>
            <li>สร้างคอมเมนต์อัตโนมัติ</li>
          </ul>
        </div>
        <div class="usage">
          <h3>การใช้งาน:</h3>
          <ol>
            <li>ติดตั้ง Bito AI extension</li>
            <li>เลือกโค้ดที่ต้องการ</li>
            <li>ใช้คำสั่งของ Bito</li>
          </ol>
        </div>
      </div>
    </div>

    <!-- Windsurf AI (2.5 ดาว) -->
    <div class="tool-section">
      <div class="tool-header">
        <a
          href="https://www.windsurf.ai"
          target="_blank"
          rel="noopener noreferrer"
          class="tool-link"
        >
          <img
            src="@/assets/tool-logos/windsurf_logo.svg"
            alt="Windsurf AI logo"
            class="tool-logo"
          />
          <h2>Windsurf AI</h2>
        </a>
        <div class="popularity">
          <span class="stars">★★½☆☆</span>
          <span class="rating">2.5</span>
        </div>
      </div>
      <p class="tool-description">
        Windsurf AI เน้นการทำความเข้าใจโค้ดเบสขนาดใหญ่และช่วยในการนำทางผ่านโค้ดที่ซับซ้อน
      </p>
      <div class="features-usage">
        <div class="features">
          <h3>ฟีเจอร์เด่น:</h3>
          <ul>
            <li>วิเคราะห์โค้ดเบสขนาดใหญ่</li>
            <li>สร้างแผนผังความสัมพันธ์</li>
            <li>ค้นหาโค้ดอัจฉริยะ</li>
            <li>อธิบายการทำงานของระบบ</li>
          </ul>
        </div>
        <div class="usage">
          <h3>การใช้งาน:</h3>
          <ol>
            <li>เชื่อมต่อกับ repository</li>
            <li>รอการวิเคราะห์โค้ด</li>
            <li>ใช้เครื่องมือวิเคราะห์</li>
          </ol>
        </div>
      </div>
    </div>

    <!-- Captain Stack (2.5 ดาว) -->
    <div class="tool-section">
      <div class="tool-header">
        <a
          href="https://captainstack.ai"
          target="_blank"
          rel="noopener noreferrer"
          class="tool-link"
        >
          <img
            src="@/assets/tool-logos/captainstack-logo.svg"
            alt="Captain Stack logo"
            class="tool-logo"
          />
          <h2>Captain Stack</h2>
        </a>
        <div class="popularity">
          <span class="stars">★★½☆☆</span>
          <span class="rating">2.5</span>
        </div>
      </div>
      <p class="tool-description">
        Captain Stack เชี่ยวชาญในการค้นหาและแก้ไขปัญหาโดยใช้ข้อมูลจาก Stack Overflow
      </p>
      <div class="features-usage">
        <div class="features">
          <h3>ฟีเจอร์เด่น:</h3>
          <ul>
            <li>ค้นหาคำตอบจาก Stack Overflow</li>
            <li>แนะนำวิธีแก้ปัญหา</li>
            <li>เชื่อมโยงกับโค้ดของคุณ</li>
            <li>อัพเดทแบบ real-time</li>
          </ul>
        </div>
        <div class="usage">
          <h3>การใช้งาน:</h3>
          <ol>
            <li>ติดตั้ง extension</li>
            <li>ไฮไลท์โค้ดที่มีปัญหา</li>
            <li>รับคำแนะนำการแก้ไข</li>
          </ol>
        </div>
      </div>
    </div>

    <!-- Lovable (2 ดาว) -->
    <div class="tool-section">
      <div class="tool-header">
        <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" class="tool-link">
          <img src="@/assets/tool-logos/lovable-logo.svg" alt="Lovable logo" class="tool-logo" />
          <h2>Lovable</h2>
        </a>
        <div class="popularity">
          <span class="stars">★★☆☆☆</span>
          <span class="rating">2.0</span>
        </div>
      </div>
      <p class="tool-description">
        Lovable เป็น AI coding assistant ที่พัฒนาโดยทีมคนไทย มีจุดเด่นในการรองรับภาษาไทย
      </p>
      <div class="features-usage">
        <div class="features">
          <h3>ฟีเจอร์เด่น:</h3>
          <ul>
            <li>รองรับภาษาไทย</li>
            <li>แนะนำโค้ดแบบ real-time</li>
            <li>เข้าใจบริบทของโค้ดไทย</li>
            <li>ช่วยในการ debugging</li>
          </ul>
        </div>
        <div class="usage">
          <h3>การใช้งาน:</h3>
          <ol>
            <li>ติดตั้ง extension</li>
            <li>เริ่มเขียนโค้ดหรือคอมเมนต์</li>
            <li>รับคำแนะนำในภาษาไทย</li>
          </ol>
        </div>
      </div>
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
  justify-content: space-between;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 15px;
}

.tool-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
}

.tool-link {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.tool-link:hover {
  opacity: 0.8;
}

.tool-description {
  margin-bottom: 20px;
  line-height: 1.6;
  color: var(--color-text);
}

.features-usage {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.features,
.usage {
  flex: 1;
  min-width: 250px;
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
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
}

h3 {
  color: var(--color-heading);
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.popularity {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.stars {
  color: #ffd700;
  font-size: 1.2rem;
  letter-spacing: -1px;
}

.rating {
  color: var(--color-text);
  font-size: 0.9rem;
  opacity: 0.8;
}

ul,
ol {
  margin: 0;
  padding-left: 20px;
}

li {
  color: var(--color-text);
  margin: 5px 0;
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .coding-tools {
    width: 100%;
    padding: 15px;
  }

  h1 {
    font-size: 2rem;
  }

  .tool-section {
    margin-bottom: 20px;
    padding: 15px;
  }

  .features-usage {
    gap: 20px;
  }
}
</style>
