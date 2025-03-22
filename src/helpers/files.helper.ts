import { audios } from '@/constants/audios';
import { codes } from '@/constants/codes';
import { documents } from '@/constants/documents';
import { fonts } from '@/constants/fonts';
import { images } from '@/constants/images';
import { videos } from '@/constants/videos';

export type FileObjType = {
  url: string;
  size: string;
}

const prepareData = (dataObj: Record<string, FileObjType[]>, child?: string) => {
  return child ? dataObj[child] : Object.values(dataObj).reduce((acc: FileObjType[], curr: FileObjType[]) => {
    return [
      ...acc,
      ...curr,
    ]
  });
}

export const getData = (category: string, child?: string) => {
  switch (category) {
    case 'documents':
      return prepareData(documents, child);
      break;
    case 'images':
      return prepareData(images, child);
      break;
    case 'videos':
      return prepareData(videos, child);
      break;
    case 'audios':
      return prepareData(audios, child);
      break;
    case 'fonts':
      return prepareData(fonts, child);
      break;
    case 'codes':
      return prepareData(codes, child);
      break;
    default:
      return [];
      break;
  }
}
