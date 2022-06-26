import { getUrl } from './utils';
import notPers from './notPers';
import renderPers from './renderPers';
export default async function characters(uri){
  const getApiMarvel = await getUrl(uri);
  if(getApiMarvel.length){
    renderPers(getApiMarvel)
  }else{
    notPers()
  }
}