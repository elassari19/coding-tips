# to get domin or pathname for current url on server component
- import headers from 'next/headers'

## get current domin
  ```const headersList = headers();```
  ```const domain = headersList.get('host') || '';```

## get current pathname
  ```const fullUrl = headersList.get('referer') || '';```

## get last route fro current pathname
  ```const path = fullUrl.split('/').at(-1);```
  
