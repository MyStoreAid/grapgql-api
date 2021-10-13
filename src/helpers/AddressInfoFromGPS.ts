import axios, { AxiosResponse } from 'axios';

const googleApiKey = process.env.GOOGLE_API_KEY;

async function addressInfoFromGps(gps: any) {
    const url: string = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${gps.lat},${gps.lng}&sensor=false&key=${googleApiKey}`;
    const addressResponse: AxiosResponse<any> = await axios.get(url);

    const address: any = addressResponse.data.results[0];
    const countryComponent: any = address.address_components.find((c: { types: string | string[]; }) => c.types.includes('country'))
    const regionComponent: any = address.address_components.find((c: { types: string | string[]; }) => c.types.includes('administrative_area_level_1'))
    const cityComponent: any = address.address_components.find((c: { types: string | string[]; }) => c.types.includes('locality'));

    const city: any = cityComponent?.long_name;
    const region: any = regionComponent?.long_name;
    const country: any = countryComponent?.long_name;
    const location: any = address?.formatted_address;
    const params: { city: any, region: any, country: any, location: any} = {
        city, region, country, location
    };

    return params;
}


export default addressInfoFromGps;
