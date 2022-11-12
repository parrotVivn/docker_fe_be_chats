 openssl genrsa -out key.pem    key
 openssl req -new  -key key.pem -out csr.pem     crs
 openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem     cert(key+crs)