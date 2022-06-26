import characters from './characters';
export default function eventListener(){
  document.querySelectorAll('.js-comics-item').forEach(function(item){
   const uri = item.dataset.uri;
    item.addEventListener('click',function(){
      characters(uri);
    });
  });
}
eventListener();