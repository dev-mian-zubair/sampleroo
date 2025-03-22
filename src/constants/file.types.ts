import { FileText, Image, FileVideo, FileAudio, Code, TypeOutline } from 'lucide-react';

export const fileTypes = [
  {
    title: 'Document Files',
    description: 'Download sample DOC, PDF, TXT files',
    icon: FileText,
    href: 'documents',
    files: [
      { name: 'Sample Report.docx', size: '111.3 KB', type: 'DOCX', url: '/assets/home/sample_1.docx' },
      { name: 'User Manual.pdf', size: '142.8 KB ', type: 'PDF', url: '/assets/home/sample_2.pdf' },
      { name: 'Data Export.txt', size: '3.5 KB', type: 'TXT', url: '/assets/home/sample_3.txt' },
      { name: 'Technical Documentation.pdf', size: '1.0 MB', type: 'PDF', url: '/assets/home/sample_4.pdf' },
    ]
  },
  {
    title: 'Image Files',
    description: 'Download sample JPG, PNG, SVG files',
    icon: Image,
    href: 'images',
    files: [
      { name: 'Nature Landscape.jpg', size: '1.0 MB', type: 'JPG', url: '/assets/home/images/sample_1.jpg' },
      { name: 'Product Photo.png', size: '512.6 KB', type: 'PNG', url: '/assets/home/images/sample_2.png' },
      { name: 'Icon Set.svg', size: '31.1 KB', type: 'SVG', url: '/assets/home/images/sample_4.svg' },
      { name: 'Logo Design.png', size: '3.0 MB', type: 'PNG', url: '/assets/home/images/sample_3.png' },
    ]
  },
  {
    title: 'Video Files',
    description: 'Download sample MP4, AVI, MKV files',
    icon: FileVideo,
    href: 'videos',
    files: [
      { name: 'Product Demo.mp4', size: '3.0 MB', type: 'MP4', url: '/assets/home/videos/sample_1.mp4' },
      { name: 'Tutorial Video.avi', size: '750.0 KB', type: 'AVI', url: '/assets/home/videos/sample_2.avi' },
      { name: 'Movie Trailer.mkv', size: '1.26 MB', type: 'MKV', url: '/assets/home/videos/sample_3.mkv' },
      { name: 'Animation.mp4', size: '10.0 MB', type: 'MP4', url: '/assets/home/videos/sample_4.mp4' },
    ]
  },
  {
    title: 'Audio Files',
    description: 'Download sample MP3, WAV, OGG files',
    icon: FileAudio,
    href: 'audios',
    files: [
      { name: 'Background Music.mp3', size: '700 KB', type: 'MP3', url: '/assets/home/audios/sample_1.mp3' },
      { name: 'Sound Effect.wav', size: '5.0 MB', type: 'WAV', url: '/assets/home/audios/sample_2.wav' },
      { name: 'Piano Track.ogg', size: '2 MB', type: 'OGG', url: '/assets/home/audios/sample_3.ogg' },
      { name: 'Podcast Episode.mp3', size: '1 MB', type: 'MP3', url: '/assets/home/audios/sample_4.mp3' },
    ]
  },
  {
    title: 'Font Files',
    description: 'Download sample BIN, OTF, WOFF files',
    icon: TypeOutline,
    href: 'fonts',
    files: [
      { name: 'Sample Database.bin', size: '246.63 KB', type: 'BIN', url: '/assets/home/fonts/sample_1.bin' },
      { name: 'User Data.otf', size: '522.61 KB', type: 'OTF', url: '/assets/home/fonts/sample_2.otf' },
      { name: 'API Response.woff', size: '95.86 KB', type: 'WOFF', url: '/assets/home/fonts/sample_3.woff' },
      { name: 'Config Data.woff', size: '30.96 KB', type: 'WOFF', url: '/assets/home/fonts/sample_4.woff' },
    ]
  },
  {
    title: 'Code Files',
    description: 'Download sample BAT, JAVA, JSON files',
    icon: Code,
    href: 'codes',
    files: [
      { name: 'Project Files.bat', size: '1.58 KB', type: 'BAT', url: '/assets/home/codes/sample_1.bat' },
      { name: 'Backup Data.java', size: '186.00 B', type: 'JAVA', url: '/assets/home/codes/sample_2.java' },
      { name: 'Compressed Images.json', size: '65.00 B', type: 'JSON', url: '/assets/home/codes/sample_3.json' },
      { name: 'Documents Archive.json', size: '265.00 B', type: 'JSON', url: '/assets/home/codes/sample_4.json' },
    ]
  }
];
