import { Margin } from '@mui/icons-material';
import { Link } from 'components/link';
import Image from 'next/image';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      style={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        marginLeft: '-50px',
        zoom: '0.43',
      }}
      {...rest}
    >
      <Image src={src} alt="startup landing logo" />
    </Link>
  );
}
