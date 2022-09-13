import { v2 as cloudinary } from 'cloudinary';
import { env } from '../env/server.mjs';

cloudinary.config({
    cloud_name: env.CLOUD_NAME,
    api_key: env.API_KEY,
    api_secret: env.API_SECRET,
});

export function uploadImage(imageUploaded) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            imageUploaded,
            {
                width: 400,
                height: 300,
                crop: 'fill',
            },
            (err, res) => {
                if (err) reject(err);
                resolve(res);
            },
        );
    });
}
