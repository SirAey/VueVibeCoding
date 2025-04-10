<template>
  <header class="topic">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/x-post.png" width="auto" height="auto" /> -->

    <dev class="content">
      <blockquote class="twitter-tweet" data-theme="dark">
        <p lang="en" dir="ltr">
          There&#39;s a new kind of coding I call &quot;vibe coding&quot;, where you fully give in
          to the vibes, embrace exponentials, and forget that the code even exists. It&#39;s
          possible because the LLMs (e.g. Cursor Composer w Sonnet) are getting too good. Also I
          just talk to Composer with SuperWhisper…
        </p>
        &mdash; Andrej Karpathy (@karpathy)
        <a href="https://twitter.com/karpathy/status/1886192184808149383?ref_src=twsrc%5Etfw"
          >February 2, 2025</a
        >
      </blockquote>
      <a>
        <!--<a href="https://twitter.com/karpathy/status/1886192184808149383?ref_src=twsrc%5Etfw" -->
        &mdash; Andrej Karpathy (@karpathy) 6:17 AM · Feb 3, 2025
      </a>
      <p lang="en" dir="ltr">
        There's a new kind of coding I call "vibe coding", where you fully give in to the vibes,
        embrace exponentials, and forget that the code even exists. It's possible because the LLMs
        (e.g. Cursor Composer w Sonnet) are getting too good. Also I just talk to Composer with
        SuperWhisper so I barely even touch the keyboard. I ask for the dumbest things like
        "decrease the padding on the sidebar by half" because I'm too lazy to find it. I "Accept
        All" always, I don't read the diffs anymore. When I get error messages I just copy paste
        them in with no comment, usually that fixes it. The code grows beyond my usual
        comprehension, I'd have to really read through it for a while. Sometimes the LLMs can't fix
        a bug so I just work around it or ask for random changes until it goes away. It's not too
        bad for throwaway weekend projects, but still quite amusing. I'm building a project or
        webapp, but it's not really coding - I just see stuff, say stuff, run stuff, and copy paste
        stuff, and it mostly works.
      </p>
      <a> &mdash; แปลโดย GitHub Copilot </a>
      <p lang="th" dir="ltr">
        มีวิธีการเขียนโค้ดแบบใหม่ที่ผมเรียกว่า "vibe coding" ซึ่งเป็นการปล่อยให้ตัวเองไปกับ feeling
        ยอมรับการเติบโตแบบก้าวกระโดด และลืมไปเลยว่าโค้ดมันมีอยู่จริง สิ่งนี้เป็นไปได้เพราะ LLM (เช่น
        Cursor Composer กับ Sonnet) พัฒนาไปไกลมาก นอกจากนี้ผมยังคุยกับ Composer ผ่าน SuperWhisper
        ทำให้แทบไม่ต้องแตะคีย์บอร์ดเลย ผมขอให้มันทำอะไรง่ายๆ เช่น "ลด padding ของ sidebar
        ลงครึ่งนึง" เพราะขี้เกียจหามันเอง ผมกด "Accept All" ตลอด ไม่อ่าน diff อีกต่อไปแล้ว เวลาเจอ
        error message ก็แค่ก็อปวางโดยไม่ต้องคอมเมนต์อะไร ส่วนใหญ่ก็แก้ได้
        โค้ดมันเติบโตเกินความเข้าใจปกติของผม ต้องใช้เวลาอ่านนานมากถึงจะเข้าใจ บางครั้ง LLM
        แก้บัคไม่ได้ ผมก็เลี่ยงไปทำอย่างอื่นหรือขอให้เปลี่ยนอะไรสุ่มๆ จนกว่าบัคจะหาย
        มันไม่แย่เท่าไหร่สำหรับโปรเจกต์ช่วงสุดสัปดาห์ที่ไม่ได้จริงจัง แต่ก็สนุกดี
        ผมกำลังสร้างโปรเจกต์หรือเว็บแอพ แต่มันไม่ใช่การเขียนโค้ดจริงๆ - ผมแค่ดูอะไรบางอย่าง
        พูดอะไรบางอย่าง รันอะไรบางอย่าง และก็อปวางอะไรบางอย่าง แล้วมันก็ทำงานได้เป็นส่วนใหญ่
      </p>
    </dev>
  </header>
</template>

<!-- <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->

<script setup lang="ts">
const script = document.createElement('script')
script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
/* script.setAttribute('language', 'javascript') */
document.head.appendChild(script)
</script>

<style>
.topic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90em;

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

  p {
    /* font-size: 20px; */
    font-style: italic;
    /* font-weight: bold; */
    /* color: #ffc8c8; */
    margin-bottom: 20px;
  }

  dev {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* max-width: 800px; */
    margin: 0 auto;
    padding: 20px;
  }

  a {
    color: rgb(2, 134, 196);
    font-size: 10px;
  }

  a:hover {
    color: rgb(0, 174, 255);
    cursor: pointer;
    text-shadow: 1px 1px 10px rgba(182, 228, 255, 0.295);
  }

  .twitter-tweet {
    width: 500px;
    /* text-align: center; */
  }
}
</style>
