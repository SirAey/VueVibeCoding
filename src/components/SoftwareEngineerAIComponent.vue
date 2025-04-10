<template>
  <div class="engineer-ai-container">
    <h1>Software Engineer & AI: The Future of Development</h1>

    <div class="section">
      <h2>AI จะมาแทนที่ Software Engineer ได้หรือไม่?</h2>
      <div class="content-block">
        <h3>ความสามารถของ AI ในปัจจุบัน</h3>
        <ul>
          <li>สร้างโค้ดพื้นฐานได้อย่างรวดเร็ว</li>
          <li>แก้ไขบั๊กที่พบบ่อย</li>
          <li>สร้างเอกสารประกอบโค้ด</li>
          <li>แนะนำวิธีการแก้ปัญหาทั่วไป</li>
        </ul>

        <h3>ข้อจำกัดของ AI</h3>
        <ul>
          <li>ไม่เข้าใจความต้องการทางธุรกิจอย่างลึกซึ้ง</li>
          <li>ไม่สามารถออกแบบสถาปัตยกรรมระบบที่ซับซ้อน</li>
          <li>ขาดความเข้าใจในบริบทและผลกระทบระยะยาว</li>
          <li>ไม่สามารถตัดสินใจเชิงกลยุทธ์</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2>Software Engineer ควรปรับตัวอย่างไร?</h2>
      <div class="content-block">
        <div class="adaptation-point">
          <h3>1. พัฒนาทักษะที่ AI ทดแทนไม่ได้</h3>
          <ul>
            <li>การคิดเชิงระบบและการออกแบบสถาปัตยกรรม</li>
            <li>การวิเคราะห์และแก้ปัญหาที่ซับซ้อน</li>
            <li>การสื่อสารและทำงานร่วมกับทีม</li>
            <li>การเข้าใจความต้องการทางธุรกิจ</li>
          </ul>
        </div>

        <div class="adaptation-point">
          <h3>2. เรียนรู้การใช้ AI เป็นเครื่องมือ</h3>
          <ul>
            <li>ใช้ AI เพื่อเพิ่มประสิทธิภาพการทำงาน</li>
            <li>รู้จักจุดแข็งและข้อจำกัดของ AI</li>
            <li>พัฒนาทักษะการเขียน Prompt ที่มีประสิทธิภาพ</li>
            <li>ตรวจสอบและปรับปรุงผลลัพธ์จาก AI</li>
          </ul>
        </div>

        <div class="adaptation-point">
          <h3>3. มุ่งเน้นการสร้างคุณค่าระดับสูง</h3>
          <ul>
            <li>การออกแบบประสบการณ์ผู้ใช้</li>
            <li>การออกแบบระบบที่มีความปลอดภัย</li>
            <li>การวางแผนการพัฒนาระยะยาว</li>
            <li>การแก้ปัญหาที่ซับซ้อนในโดเมนเฉพาะ</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>อนาคตของ Software Engineer</h2>
      <div class="content-block future-block">
        <p>
          AI จะไม่มาแทนที่ Software Engineer แต่จะเป็นเครื่องมือที่ช่วยให้ Software Engineer
          ทำงานได้มีประสิทธิภาพมากขึ้น Software Engineer จะต้องปรับบทบาทจากการเขียนโค้ดทั่วไป
          ไปสู่การเป็นผู้ออกแบบและควบคุมระบบที่ซับซ้อน
        </p>
        <p>
          ในอนาคต Software Engineer จะต้องเป็นผู้เชี่ยวชาญในการผสมผสานความสามารถของมนุษย์และ AI
          เพื่อสร้างโซลูชันที่ตอบโจทย์ความต้องการทางธุรกิจและสังคม
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.engineer-ai-container {
  width: 90em;
  margin: 0 auto;
  padding: 20px;

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 90em;
    margin: 0 auto;
    padding: 20px; */
  }
}

.section {
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
}

.content-block {
  margin-top: 20px;
  padding: 15px;
  border-radius: 6px;
  background-color: var(--color-background-mute);
}

.adaptation-point {
  margin-bottom: 25px;
}

.future-block {
  padding: 20px;
  border-left: 4px solid hsla(160, 100%, 37%, 1);
}

h1 {
  color: var(--color-heading);
  font-size: 2.6rem;
  margin-bottom: 40px;
}

h2 {
  color: hsla(160, 100%, 37%, 1);
  font-size: 1.4rem;
  margin-bottom: 20px;
}

h3 {
  color: var(--color-heading);
  font-size: 1.1rem;
  margin: 15px 0 10px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 10px 0;
}

li {
  line-height: 1.6;
  margin: 8px 0;
  color: var(--color-text);
}

p {
  line-height: 1.6;
  margin: 15px 0;
  color: var(--color-text);
}

@media (max-width: 1024px) {
  .engineer-ai-container {
    width: 100%;
    padding: 15px;
  }

  h1 {
    font-size: 2rem;
  }

  .section {
    margin-bottom: 20px;
    padding: 15px;
  }
}
</style>
