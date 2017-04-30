FROM debian:jessie

MAINTAINER Shaun Warman <https://github.com/shaunwarman>

RUN apt-get update \
    && apt-get install -y wget \
    && wget https://dl.influxdata.com/influxdb/releases/influxdb_1.2.2_amd64.deb \
    && dpkg -i influxdb_1.2.2_amd64.deb

CMD ["influxd"]
