import './index.scss';
const msg = "demo01";
const getTestChunkFnModule = () => import('./testchunk.js');
window.onload = async ()=>{
  console.log(`${msg},loaded`);
  const {default:testChunk} = await new Promise((resolve)=>{
    setTimeout(() => {
      const module = getTestChunkFnModule()
      resolve(module)
    }, 1);
  })
  testChunk('testChunk')
};