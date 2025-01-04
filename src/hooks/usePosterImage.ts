import { isAndroidDevice } from '@/lib/utils';
import { useToast } from './use-toast';
import { useState } from 'react';

// 生成海报的图片，兼容移动端和微信内无法下载的问题
export default function usePosterImage() {
  const [imgUrl, setImgUrl] = useState<string>('');
  const { toast } = useToast()

  const getCurrPosterImageUrl = async () => {
    const element = document.getElementById('poster') as HTMLElement;
    if (!element) return toast({
      description: '无法找到 DOM 元素'
    });
    try {
      if (isAndroidDevice()) {
        // 使用dom-to-image生成图像
        const domToImage: any = await import('dom-to-image');
        const scale = 2; // 提高清晰度
        const style = {
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: `${element.offsetWidth}px`,
          height: `${element.offsetHeight}px`,
          cacheBust: true,
          // @ts-ignore
          useCORS: true,
          quality: 1,
          // bgcolor: 'transparent',
        };
        const param = {
          width: element.offsetWidth * scale,
          height: element.offsetHeight * scale,
          style
        };
        domToImage.toPng(element, param)
          .then((dataUrl: string) => {
            setImgUrl(dataUrl)
          })
      } else {
        // 使用html2canvas生成图像
        const html2canvas: any = await import('html2canvas');
        html2canvas(element, { useCORS: true, allowTaint: true, scale: 2 }).then((canvas: any) => {
          // 将canvas转换为DataURL
          const dataURL = canvas.toDataURL('image/png');

          setImgUrl(dataURL)
        });
      }



    } catch (e) {
      console.log(e);
    }
  };
  return { imgUrl, getCurrPosterImageUrl };

}