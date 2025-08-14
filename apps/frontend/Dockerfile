FROM nginx:alpine

# Copy your app files to Nginx default dir
COPY . /usr/share/nginx/html

# Allow OpenShift random UID to write where needed
RUN chgrp -R 0 /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html \
    && chmod -R g+rwX /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html

EXPOSE 8080

# Change Nginx default port to 8080 for OpenShift
RUN sed -i 's/80;/8080;/' /etc/nginx/conf.d/default.conf

USER 1001

