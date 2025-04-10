<template>
  <div class="post-test-container">
    <h1>Post-test: Vibe Coding</h1>

    <div class="test-section">
      <form @submit.prevent="submitTest">
        <div v-for="(question, index) in questions" :key="index" class="question-block">
          <h3>คำถามที่ {{ index + 1 }}</h3>
          <p class="question-text">{{ question.text }}</p>

          <div class="options">
            <div v-for="(option, optIndex) in question.options" :key="optIndex" class="option">
              <template v-if="question.type === 'checkbox'">
                <input
                  type="checkbox"
                  :id="'q' + index + '_' + optIndex"
                  :value="optIndex"
                  v-model="answers[index]"
                  @change="initializeCheckboxArray(index)"
                />
              </template>
              <template v-else>
                <input
                  type="radio"
                  :id="'q' + index + '_' + optIndex"
                  :name="'question' + index"
                  :value="optIndex"
                  v-model="answers[index]"
                />
              </template>
              <label :for="'q' + index + '_' + optIndex">{{ option }}</label>
            </div>
          </div>
        </div>

        <div class="submit-section">
          <button type="submit" :disabled="!isComplete">ส่งคำตอบ</button>
          <p v-if="!isComplete" class="warning">กรุณาตอบคำถามให้ครบทุกข้อ</p>
        </div>
      </form>

      <div v-if="showResults" class="results">
        <h2>ผลการทดสอบ</h2>
        <p>คะแนนของคุณ: {{ score }} / {{ questions.length }}</p>
        <div v-for="(result, index) in results" :key="index" class="result-item">
          <p>ข้อ {{ index + 1 }}: {{ result.correct ? '✅ ถูกต้อง' : '❌ ไม่ถูกต้อง' }}</p>
          <p v-if="!result.correct" class="explanation">
            คำอธิบาย: {{ questions[index].explanation }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Question {
  text: string
  type: 'radio' | 'checkbox'
  options: string[]
  correct: number | number[]
  explanation: string
}

interface Result {
  correct: boolean
}

const questions: Question[] = [
  {
    text: 'Vibe Coding คืออะไร?',
    type: 'radio',
    options: [
      'การเขียนโค้ดโดยไม่สนใจมาตรฐานใดๆ',
      'การใช้ AI ช่วยในการเขียนโค้ดโดยปล่อยให้ AI ทำงานส่วนใหญ่',
      'การเขียนโค้ดด้วยความรู้สึกและการคาดเดา',
      'การเขียนโค้ดแบบไม่มีการวางแผน',
    ],
    correct: 1,
    explanation:
      'Vibe Coding คือการใช้ AI เป็นเครื่องมือหลักในการเขียนโค้ด โดยให้ AI ทำงานส่วนใหญ่ผ่านการสั่งงานด้วยคำสั่งเสียงหรือข้อความ',
  },
  {
    text: 'ข้อใดเป็นเครื่องมือที่ใช้ใน Vibe Coding (เลือกได้หลายข้อ)',
    type: 'checkbox',
    options: ['Cursor', 'GitHub Copilot', 'ChatGPT', 'Visual Studio Code ธรรมดา'],
    correct: [0, 1, 2],
    explanation:
      'เครื่องมือหลักที่ใช้ใน Vibe Coding ได้แก่ Cursor, GitHub Copilot, และ ChatGPT ซึ่งเป็นเครื่องมือที่มี AI ช่วยในการเขียนโค้ด',
  },
  {
    text: 'ข้อเสียของ Vibe Coding คืออะไร?',
    type: 'radio',
    options: [
      'โค้ดทำงานช้ากว่าการเขียนเอง',
      'ไม่สามารถทำงานที่ซับซ้อนได้',
      'อาจทำให้ไม่เข้าใจโค้ดที่เขียนอย่างลึกซึ้ง',
      'ใช้ทรัพยากรเครื่องมากเกินไป',
    ],
    correct: 2,
    explanation:
      'การพึ่งพา AI มากเกินไปอาจทำให้ไม่เข้าใจโค้ดอย่างลึกซึ้ง เพราะเราปล่อยให้ AI ทำงานส่วนใหญ่',
  },
  {
    text: 'Vibe Coding เหมาะสมกับงานประเภทใดมากที่สุด?',
    type: 'radio',
    options: [
      'โปรเจคที่ต้องการความปลอดภัยสูง',
      'โปรเจคขนาดใหญ่ที่มีความซับซ้อน',
      'โปรเจคที่ต้องการความเร็วในการพัฒนา',
      'โปรเจคที่ต้องการประสิทธิภาพสูง',
    ],
    correct: 2,
    explanation:
      'Vibe Coding เหมาะกับโปรเจคที่ต้องการความเร็วในการพัฒนา เช่น การทำ prototype หรือโปรเจคขนาดเล็ก',
  },
  {
    text: 'ข้อใดไม่ใช่ลักษณะของ Vibe Coding?',
    type: 'radio',
    options: [
      'ใช้ AI ช่วยในการเขียนโค้ด',
      'มีการวางแผนและออกแบบอย่างละเอียด',
      'ใช้คำสั่งเสียงในการสั่งงาน',
      'ยอมรับโค้ดที่ AI แนะนำโดยไม่ตรวจสอบ',
    ],
    correct: 1,
    explanation:
      'Vibe Coding มักจะไม่มีการวางแผนและออกแบบอย่างละเอียด แต่จะเน้นการใช้ AI ในการพัฒนาอย่างรวดเร็ว',
  },
]

const answers = ref<(number | number[] | null)[]>(Array(questions.length).fill(null))

// เพิ่มฟังก์ชันสำหรับจัดการ checkbox array
const initializeCheckboxArray = (index: number) => {
  if (questions[index].type === 'checkbox' && !Array.isArray(answers.value[index])) {
    answers.value[index] = []
  }
}

// ตั้งค่าเริ่มต้นสำหรับคำถามแบบ checkbox
onMounted(() => {
  questions.forEach((q, index) => {
    if (q.type === 'checkbox') {
      answers.value[index] = []
    }
  })
})

const showResults = ref(false)
const results = ref<Result[]>([])
const score = ref(0)

const isComplete = computed(() => {
  return answers.value.every((answer) => answer !== null)
})

const submitTest = () => {
  score.value = 0
  results.value = questions.map((q, i) => {
    let correct = false
    if (Array.isArray(q.correct)) {
      // สำหรับคำถามที่เลือกได้หลายข้อ
      const userAnswer = answers.value[i]
      correct =
        Array.isArray(userAnswer) &&
        userAnswer.length === q.correct.length &&
        userAnswer.every((a) => Array.isArray(q.correct) && q.correct.includes(Number(a)))
    } else {
      // สำหรับคำถามที่เลือกได้ข้อเดียว
      correct = answers.value[i] === q.correct
    }
    if (correct) score.value++
    return { correct }
  })
  showResults.value = true
}
</script>

<style scoped>
.post-test-container {
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

.test-section {
  margin-bottom: 40px;
}

.question-block {
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
}

.question-text {
  font-size: 1.1rem;
  margin: 15px 0;
  color: var(--color-text);
}

.options {
  margin: 15px 0;
}

.option {
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.submit-section {
  margin-top: 30px;
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.warning {
  color: #ff4444;
  margin-top: 10px;
}

.results {
  margin-top: 30px;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--color-background-mute);
}

.result-item {
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  background-color: var(--color-background-soft);
}

.explanation {
  margin-top: 5px;
  font-style: italic;
  color: hsla(160, 100%, 37%, 1);
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
  margin-bottom: 10px;
}

@media (max-width: 1024px) {
  .post-test-container {
    width: 100%;
    padding: 15px;
  }

  h1 {
    font-size: 2rem;
  }

  .question-block {
    margin-bottom: 20px;
    padding: 15px;
  }
}
</style>
