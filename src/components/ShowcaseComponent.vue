<template>
  <div class="showcase-container">
    <h1>AI Coding Showcase</h1>

    <div class="showcase-section">
      <h2>1. Code Generation</h2>
      <p class="section-description">
        AI สามารถสร้างโค้ดจากคำอธิบายภาษาธรรมชาติ (Natural Language) ได้ เพียงแค่บอก AI
        ว่าต้องการฟังก์ชันที่ทำอะไร AI ก็สามารถสร้างโค้ดที่ทำงานได้ตามที่ต้องการ พร้อมทั้งเพิ่ม type
        safety ด้วย TypeScript
      </p>
      <div class="showcase-item">
        <div class="code-example">
          <h3>Example Prompts:</h3>
          <ul class="prompt-list">
            <li>"Create a function to calculate Fibonacci sequence using TypeScript"</li>
            <li>"Write a function that sorts an array of numbers in descending order"</li>
            <li>
              "Generate a TypeScript class for managing a shopping cart with methods for
              adding/removing items"
            </li>
          </ul>
          <h3>Selected Prompt:</h3>
          <p class="selected-prompt">"Create a function to calculate Fibonacci sequence"</p>
          <h3>AI Generated Code:</h3>
          <pre><code>
function fibonacci(n: number): number {{'{'}}
    if (n &lt;= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
{{'}'}}
          </code></pre>
        </div>
      </div>
    </div>

    <div class="showcase-section">
      <h2>2. Code Refactoring</h2>
      <p class="section-description">
        AI สามารถปรับปรุงโค้ดให้มีประสิทธิภาพและอ่านง่ายขึ้น โดยใช้ฟีเจอร์ใหม่ๆ ของภาษา เช่น การใช้
        array methods แทน for loop, การใช้ arrow functions, และการเพิ่ม type annotations
        ช่วยให้โค้ดกระชับและเข้าใจง่ายขึ้น
      </p>
      <div class="showcase-item">
        <div class="code-example">
          <h3>Example Prompts:</h3>
          <ul class="prompt-list">
            <li>"Refactor this code to use modern JavaScript features"</li>
            <li>"Convert this function to use TypeScript and make it more efficient"</li>
            <li>"Optimize this code to be more readable and maintainable"</li>
          </ul>
          <h3>Selected Prompt:</h3>
          <p class="selected-prompt">
            "Refactor this code to use modern array methods and TypeScript"
          </p>
          <h3>Before:</h3>
          <pre><code>
function processData(data) {{'{'}}
    var result = [];
    for (var i = 0; i &lt; data.length; i++) {{'{'}}
        if (data[i] &gt; 0) {{'{'}}
            result.push(data[i] * 2);
        {{'}'}}
    {{'}'}}
    return result;
{{'}'}}
          </code></pre>
          <h3>After AI Refactoring:</h3>
          <pre><code>
const processData = (data: number[]): number[] =>
    data.filter(item => item &gt; 0)
        .map(item => item * 2);
          </code></pre>
        </div>
      </div>
    </div>

    <div class="showcase-section">
      <h2>3. Bug Detection &amp; Fixing</h2>
      <p class="section-description">
        AI สามารถตรวจจับและแก้ไขข้อผิดพลาดในโค้ดได้ เช่น การแก้ไข off-by-one error ในการวนลูป,
        การเพิ่มการตรวจสอบค่า edge cases, และการใช้วิธีการที่มีประสิทธิภาพมากขึ้นในการคำนวณ
        นอกจากนี้ยังเพิ่มความปลอดภัยด้วย type checking
      </p>
      <div class="showcase-item">
        <div class="code-example">
          <h3>Example Prompts:</h3>
          <ul class="prompt-list">
            <li>"Fix the bug in this function that causes array index out of bounds"</li>
            <li>"This average calculation is wrong, can you find and fix the issue?"</li>
            <li>"Add error handling and edge case checks to make this function more robust"</li>
          </ul>
          <h3>Selected Prompt:</h3>
          <p class="selected-prompt">
            "There's a bug in this average calculation function, can you fix it?"
          </p>
          <h3>Buggy Code:</h3>
          <pre><code>
function calculateAverage(numbers) {{'{'}}
    let sum = 0;
    for (let i = 0; i &lt;= numbers.length; i++) {{'{'}}
        sum += numbers[i];
    {{'}'}}
    return sum / numbers.length;
{{'}'}}
          </code></pre>
          <h3>AI Fixed Code:</h3>
          <pre><code>
function calculateAverage(numbers: number[]): number {{'{'}}
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
{{'}'}}
          </code></pre>
        </div>
      </div>
    </div>

    <div class="showcase-section">
      <h2>4. Code Documentation</h2>
      <p class="section-description">
        AI สามารถสร้างเอกสารประกอบโค้ดที่ละเอียดและเข้าใจง่าย โดยอธิบายการทำงานของฟังก์ชัน,
        พารามิเตอร์ที่ต้องการ, ค่าที่ส่งกลับ และยังสามารถเพิ่มตัวอย่างการใช้งานที่ชัดเจน
        ช่วยให้นักพัฒนาคนอื่นเข้าใจการทำงานของโค้ดได้ดียิ่งขึ้น
      </p>
      <div class="showcase-item">
        <div class="code-example">
          <h3>Example Prompts:</h3>
          <ul class="prompt-list">
            <li>"Add JSDoc documentation to this function"</li>
            <li>"Generate comprehensive documentation with examples for this code"</li>
            <li>"Document this class including all its methods and properties"</li>
          </ul>
          <h3>Selected Prompt:</h3>
          <p class="selected-prompt">
            "Create detailed documentation with examples for this user data processing function"
          </p>
          <h3>Original Code:</h3>
          <pre><code>
function processUserData(data) {{'{'}}
    const result = {{'{}'}};
    data.forEach(item => {{'{'}}
        result[item.id] = {{'{'}}
            name: item.name,
            age: calculateAge(item.birthDate)
        {{'}'}};
    {{'}'}});
    return result;
{{'}'}}
          </code></pre>
          <h3>AI Generated Documentation:</h3>
          <pre><code>
/**
 * Processes user data and creates a mapped object with user details
 * @param {{'{'}}Array{{'}'}} data - Array of user objects containing id, name, and birthDate
 * @returns {{'{'}}Object{{'}'}} - Mapped object with user id as key and processed user details
 * @example
 * const users = [
 *   {{'{'}} id: 1, name: "John", birthDate: "1990-01-01" {{'}'}}
 * ];
 * processUserData(users);
 * // Returns: {{'{'}} 1: {{'{'}} name: "John", age: 33 {{'}'}} {{'}'}}
 */
          </code></pre>
        </div>
      </div>
    </div>

    <div class="showcase-section">
      <h2>5. Testing</h2>
      <p class="section-description">
        AI สามารถสร้างชุดทดสอบที่ครอบคลุมการทำงานของโค้ด โดยคิดถึงกรณีทดสอบต่างๆ ที่สำคัญ ทั้ง
        positive cases และ negative cases ช่วยให้มั่นใจว่าโค้ดทำงานได้ถูกต้องในทุกสถานการณ์
        และยังช่วยในการตรวจจับข้อผิดพลาดที่อาจเกิดขึ้นในอนาคต
      </p>
      <div class="showcase-item">
        <div class="code-example">
          <h3>Example Prompts:</h3>
          <ul class="prompt-list">
            <li>"Create unit tests for this email validation function"</li>
            <li>"Generate test cases covering edge cases for this calculation"</li>
            <li>"Write integration tests for this user authentication system"</li>
          </ul>
          <h3>Selected Prompt:</h3>
          <p class="selected-prompt">
            "Write unit tests for this email validation function, including both valid and invalid
            cases"
          </p>
          <h3>Code to Test:</h3>
          <pre><code>
function validateEmail(email: string): boolean {{'{'}}
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
{{'}'}}
          </code></pre>
          <h3>AI Generated Tests:</h3>
          <pre><code>
describe('validateEmail', () => {{'{'}}
    test('should return true for valid email', () => {{'{'}}
        expect(validateEmail('test@example.com')).toBe(true);
    {{'}'}});

    test('should return false for invalid email', () => {{'{'}}
        expect(validateEmail('invalid-email')).toBe(false);
    {{'}'}});
{{'}'}});
          </code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.showcase-container {
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

.showcase-section {
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
}

.showcase-item {
  margin-top: 20px;
}

.code-example {
  background-color: var(--color-background-mute);
  padding: 15px;
  border-radius: 6px;
  margin-top: 10px;
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

pre {
  background-color: var(--color-background);
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}

code {
  font-family: monospace;
  color: var(--color-text);
}

p {
  line-height: 1.6;
  color: var(--color-text);
}

.section-description {
  margin: 15px 0;
  line-height: 1.6;
  color: var(--color-text);
  font-size: 1.1rem;
}

.prompt-list {
  list-style-type: disc;
  margin: 10px 0;
  padding-left: 20px;
}

.prompt-list li {
  color: var(--color-text);
  margin: 5px 0;
  line-height: 1.4;
}

.selected-prompt {
  color: hsla(160, 100%, 37%, 1);
  font-style: italic;
  margin: 10px 0;
  padding: 5px 10px;
  border-left: 3px solid hsla(160, 100%, 37%, 1);
  background-color: var(--color-background);
}

@media (max-width: 1024px) {
  .showcase-container {
    width: 100%;
    padding: 15px;
  }

  h1 {
    font-size: 2rem;
  }

  .showcase-section {
    margin-bottom: 20px;
    padding: 15px;
  }
}
</style>
