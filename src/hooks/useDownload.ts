import { useToast } from "./use-toast";

export const useDownloadDOMElementAsImage = () => {
  const { toast } = useToast()
  /**
 * 下载 DOM 元素为高质量图片
 * @param elementId DOM 元素id
 * @param fileName 下载图片的文件名
 * @param sc 缩放因子，默认为3
 * @returns
 */
  const downloadDOMElementAsImage = async (elementId: string, fileName: string = "poster", sc = 3) => {
    const element = document.getElementById(elementId) as HTMLElement;


    if (!element || !window || !document) return toast({ description: '无法找到 DOM 元素' });
    const messageKey = 'loading';

    try {
      // 临时增加元素尺寸以提高分辨率
      const originalWidth = element.offsetWidth;
      const originalHeight = element.offsetHeight;
      const scale = sc; // 增加缩放因子以提高分辨率
      const domToImage: any = await import('dom-to-image');
      const dataUrl = await domToImage.toPng(element, {
        width: originalWidth * scale,
        height: originalHeight * scale,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: `${originalWidth}px`,
          height: `${originalHeight}px`,
        },
        cacheBust: true,
        // @ts-ignore
        useCORS: true,
        quality: 1,
        // bgcolor: 'transparent',
      });

      // 创建下载链接
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast({
        description: '下载成功',
        key: messageKey,
      });
    } catch (e: any) {
      toast({
        description: '下载失败',

      });
    }
  };
  return { downloadDOMElementAsImage };
}