import geoip from 'geoip-lite';

export default class IpLocator {
  static ipInfo(ipAddress: any) {
    let ip:any = ipAddress;
    if (ip.includes('::ffff:')) {
      [ip] = ip.split(':').reverse();
    }

    [ip] = ip.split(',');
    return geoip.lookup(ip);
  }
}
