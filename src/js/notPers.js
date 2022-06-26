import { ROOT_MODAL } from "./constans";
export default function notPers(data){
  const htmlWrapper =`
    <div 
    class="not-pers"
    onclick="modal.innerHTML =''"
    >
      <span>Нет контента</span>
    </div>
  `;
  ROOT_MODAL.innerHTML = htmlWrapper;
}