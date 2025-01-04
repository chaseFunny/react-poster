import { QRCodeSVG } from 'qrcode.react';
import icon from '@/assets/icon.jpg';
import luckySnail from '@/assets/luckySnail.png';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import usePosterImage from '@/hooks/usePosterImage';

export const Poster = () => {
  const {getCurrPosterImageUrl, imgUrl} = usePosterImage();
   useEffect(() => {
    // 页面渲染后，获取当前海报截图，解决移动端微信环境下载失效问题
    if (isMobile) {
      getCurrPosterImageUrl();
    }
  }, []);
 
  return (
    <div className='relative'> <div id='poster' className="w-[375px] bg-white rounded-lg shadow-lg border-gray-300 border-[1px] border-solid p-6 space-y-6">
      {/* 头部 */}
      <div className="flex items-center gap-3">
        <img 
          src={icon} 
          alt="avatar" 
          className="w-12 h-12  rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold">Lucky Snail</h3>
          <p className="text-sm text-gray-500">Full Stack Developer</p>
        </div>
      </div>

      {/* 主图 */}
      <div className="relative">
        <img 
          src={luckySnail} 
          alt="main" 
          className="w-full aspect-1464/220 object-cover rounded-lg"
        />
        <div className="absolute -bottom-6 right-0 bg-black/50 text-white px-3 py-1 rounded-full text-[10px]">
          海报生成示例
        </div>
      </div>

      {/* 标题和描述 */}
      <div className="space-y-3">
        <h2 className="text-2xl">
          前端海报生成解决方案
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          使用 React + Canvas 技术，轻松实现跨平台海报生成功能，支持自定义字体、图片和二维码等元素。
        </p>

        <p className='font-JingNanBoBoHei'>特殊字体：知识发射器</p>
      </div>

      {/* 底部信息 */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="text-sm text-gray-500">
          扫码了解更多
        </div>
        <QRCodeSVG 
          value="https://www.luckysnail.cn"
          size={80}
          level="H"
          includeMargin={true}
        />
      </div>
    </div>
      { isMobile && <img src={imgUrl} className='absolute left-0 top-0 w-[375px] h-[442px] z-10' />}
    </div>
   
  );
};