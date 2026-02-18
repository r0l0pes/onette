
import sharp from 'sharp';

async function checkCorners() {
    try {
        const image = sharp('public/images/logo-onette.png');
        const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

        const getPixel = (x, y) => {
            const i = (y * info.width + x) * info.channels;
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        };

        console.log(`Top-Left: ${getPixel(0, 0)}`);
        console.log(`Top-Right: ${getPixel(info.width - 1, 0)}`);
        console.log(`Bottom-Left: ${getPixel(0, info.height - 1)}`);
        console.log(`Bottom-Right: ${getPixel(info.width - 1, info.height - 1)}`);

    } catch (e) {
        console.error(e);
    }
}

checkCorners();
