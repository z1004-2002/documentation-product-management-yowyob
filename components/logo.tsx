import Image from 'next/image';
import y from '../public/img/logo.png'


const Logo: React.FC = () => {
  return (
    <div style={{ position: 'fixed', top: '5px', left: '20px', zIndex: '9999' }}>
      <Image src={y} alt="YOWYOB.DOC" width={150} height={50} />
    </div>
  );
};

export default Logo;