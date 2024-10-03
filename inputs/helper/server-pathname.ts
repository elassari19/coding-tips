import { headers } from 'next/headers';

const Compo = ({}) => {
  const headersList = headers();
  const domain = headersList.get('host') || '';
  const fullUrl = headersList.get('referer') || '';
  const path = fullUrl.split('/').at(-1);

  return (
    <div>
    domain {domain}
    fullUrl {fullUrl}
    current pathname {path}
    </div>
  )
}
