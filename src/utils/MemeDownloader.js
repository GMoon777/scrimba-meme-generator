

import { toPng } from 'html-to-image';

export default function MemeDownloader(ref,name) {
      if (ref.current === null) {
        return
      }
  
      toPng(ref.current, { cacheBust: true, })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = `Meme - ${name.toUpperCase()}` 
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        })
    }