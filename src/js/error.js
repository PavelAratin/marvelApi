import { ROOT_INDEX } from "./constans";
export default function displayError() {
  const htmlWrapper = `
      <div class="error-container">
        <p class="error-container__text">Произошла ошибка</p>
        <p class="error-container__text">Попробуйте зайти позже</p>
      </div>
    `;
    ROOT_INDEX.innerHTML = htmlWrapper;
};