
import { IMG_STANDART_XLARGE } from "./constans";
import { ROOT_MODAL } from "./constans";
export default function renderPers(data) {
  let htmlContent = '';
  data.forEach(function ({ name, thumbnail: { path, extension } }) {
    const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;
    console.log(imgSrc)
    htmlContent += `
    <li class="modal__pers">
     <img class="modal__img" src="${imgSrc}"/>
     <span class="modal__name">${name}</span>
    </li>
    `;
  });
  const htmlWrapper = `
    <div class="modal__wrapper">
      <ul class="modal__inner">
        ${htmlContent}
      <button
       class="modal__close js-close-button"
       onclick="modal.innerHTML =''"
      ></button>
      </ul>
    </div>
    `;
  ROOT_MODAL.innerHTML = htmlWrapper;
}