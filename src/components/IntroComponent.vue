<template>
  <header class="welcome-topic">
    <div class="content">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ObQ1GihWPow?si=dHD01Cu1KS2mhdwf"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="video-frame"
      ></iframe>

      <div class="links">
        <a href="https://youtu.be/ObQ1GihWPow?si=EzPIBZ8TOy89NTxY" class="video-link">
          &mdash; แบไต๋ 12 ผลงานยกระดับ AI จาก AI Champion by SCBX
        </a>
        <a href="https://youtu.be/Ql0nTjTrUws?si=LGT3uKDwUQ9Ci5C_" class="video-link">
          &mdash; สั่ง AI เขียนโค้ดเราต้องเข้าใจมั้ย?
        </a>
      </div>

      <blockquote class="highlight-quote">
        <p lang="th" dir="ltr">
          "เป็นคนเขียน app เอง โดยที่ไม่รู้ด้วยซ้ำว่า <br />
          บรรทัดนั้นมันแปลว่าอะไร แต่เขียนแล้วมันใช้ได้ ก็โอเค"
        </p>
      </blockquote>
    </div>
  </header>
</template>

<style scoped>
.welcome-topic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90em;
  padding: 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: var(--color-background-soft);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.content:hover {
  border-color: var(--color-border-hover);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.video-frame {
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.video-link {
  color: hsla(160, 100%, 37%, 1);
  font-size: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 4px 8px;
  border-radius: 4px;
}

.video-link:hover {
  background-color: hsla(160, 100%, 37%, 0.1);
  transform: translateY(-1px);
}

.highlight-quote {
  background-color: var(--color-background-mute);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid hsla(160, 100%, 37%, 1);
  margin: 0;
}

.highlight-quote p {
  font-size: 18px;
  font-style: italic;
  font-weight: 500;
  color: var(--color-text);
  margin: 0;
  text-align: center;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .welcome-topic {
    width: 100%;
    padding: 1rem;
  }

  .video-frame {
    width: 100%;
    height: auto;
  }

  .highlight-quote p {
    font-size: 16px;
  }
}
</style>
