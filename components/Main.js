export default () => `
<main>
    <form>
      <!-- TODO: Use <div>s along with FLEXBOX to format this form with 'mobile-first' responsive design. -->
      <div>
        <label for="name">
          Name:
        </label>
        <input id="name" type="text" required />
      </div>

      <div>
        <label for="score">
          Score:
          </label>
        <input id="score" type="number" required/>
      </div>

      <div>
        <button>Submit Grade</button>
      </div>
    </form>
  </main>`;
