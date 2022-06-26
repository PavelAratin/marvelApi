import { API_KEY, URL_COMICS, URL_CHARACTERS, ROOT_INDEX, ROOT_MODAL, IMG_STANDART_XLARGE,IMG_NOT_AVAIBLE } from './constans';
import { getUrl } from './utils';
import displayError from './error';

async function comics() {
  const getApiMarvel = await getUrl(`https://gateway.marvel.com/v1/public/${URL_COMICS}?&apikey=${API_KEY}&limit=100`);
  let htmlContent = '';
  if(getApiMarvel){
    getApiMarvel.forEach(function ({ id, title, thumbnail: { path, extension } }) {
      if(path.lastIndexOf(IMG_NOT_AVAIBLE) === -1){
        const uri = `https://gateway.marvel.com/v1/public/${URL_COMICS}/${id}/${URL_CHARACTERS}?&apikey=${API_KEY}&limit=100`;
        const imgSrc = path + '/' + IMG_STANDART_XLARGE + '.' + extension;
        htmlContent += `
        <li class="comics__item js-comics-item" data-uri="${uri}">
          <span class="comics__name">${title}</span>
          <img class="comics__img" src ="${imgSrc}"/>
        </li>
        `
      }
    });
    const htmlWrapper = `
    <ul class="comics__container">
      ${htmlContent}
    </ul>
    `
    ROOT_INDEX.innerHTML = htmlWrapper;
  }else{
    displayError();
  }
}
export default comics;