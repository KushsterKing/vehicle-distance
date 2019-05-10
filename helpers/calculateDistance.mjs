let _eQuatorialEarthRadius = 6378.1370;
let _d2r = (Math.PI / 180.0);

const HaversineInM = (lat1, long1, lat2, long2) =>
{
    return (1000.0 * HaversineInKM(lat1, long1, lat2, long2));
};

const HaversineInKM = (lat1, long1, lat2, long2) =>
{
    let dlong = (long2 - long1) * _d2r;
    let dlat = (lat2 - lat1) * _d2r;
    let a = Math.pow(Math.sin(dlat / 2.0), 2.0) + Math.cos(lat1 * _d2r) * Math.cos(lat2 * _d2r) * Math.pow(Math.sin(dlong / 2.0), 2.0);
    let c = 2.0 * Math.atan2(Math.sqrt(a), Math.sqrt(1.0 - a));
    let d = _eQuatorialEarthRadius * c;

    return d;
};

export default HaversineInM;