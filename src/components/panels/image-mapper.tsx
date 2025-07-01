import React from 'react';

// 导入所有客户案例图片
import 深圳农商银行 from '../../assets/深圳农商银行.png';
import 紫金保险 from '../../assets/紫金保险.png';
import 荣数信息 from '../../assets/荣数信息.png';
import Object from '../../assets/Object.png';
import 西山居1 from '../../assets/西山居-1.png';
import 中农网1 from '../../assets/中农网-1.png';
import 鸿合科技2 from '../../assets/鸿合科技-2.png';
import 优艾智合 from '../../assets/优艾智合.png';
import 华依科技 from '../../assets/华依科技.png';
import 奥哲 from '../../assets/奥哲.png';
import 中国电信1 from '../../assets/中国电信-1.png';
import 人民日报 from '../../assets/人民日报.png';

// 客户案例图片映射
const customerImageMap: Record<string, string> = {
  '深圳农商银行.png': 深圳农商银行,
  '紫金保险.png': 紫金保险,
  '荣数信息.png': 荣数信息,
  'Object.png': Object,
  '西山居-1.png': 西山居1,
  '中农网-1.png': 中农网1,
  '鸿合科技-2.png': 鸿合科技2,
  '优艾智合.png': 优艾智合,
  '华依科技.png': 华依科技,
  '奥哲.png': 奥哲,
  '中国电信-1.png': 中国电信1,
  '人民日报.png': 人民日报,
};

interface ImageMapperProps {
  originalUrl?: string;
  itemImgKey: string;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const ImageMapper: React.FC<ImageMapperProps> = ({
  originalUrl,
  itemImgKey,
  className,
  alt = '',
  width,
  height
}) => {
  const getImageUrl = (): string => {
    if (!originalUrl) return '';
    
    // 如果是客户案例图片
    if (itemImgKey.includes('customerLogo')) {
      const fileName = originalUrl.split('/').pop();
      if (fileName && customerImageMap[fileName]) {
        return customerImageMap[fileName];
      }
    }
    
    // 其他情况返回原始URL
    return originalUrl;
  };

  const imageUrl = getImageUrl();
  
  if (!imageUrl) {
    return null;
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
}; 