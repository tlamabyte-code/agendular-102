import { IDaily, INewDaily } from "../interfaces/daily";

class DailyBase {
    color: string = this.rgbToHex('rgb(5, 36, 20)')

    rgbToHex(rgb: string): string {
        // rgb(5, 36, 20)
        const colors = rgb.substring(4, rgb.length - 1).split(',')

        const r = parseInt(colors[0].trim(), 10)
        const g = parseInt(colors[1].trim(), 10)
        const b = parseInt(colors[2].trim(), 10)

        const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    
        return hex;
    }

    getDarkerColor(): void {
        const hexToRgb = (hex: string) => {
            const bigint = parseInt(hex.slice(1), 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return { r, g, b };
        }

        const rgb = hexToRgb(this.color);

        const luminance = Math.max(rgb.r, rgb.g, rgb.b)

        if (luminance > 80) {
            const darkerFactor = 0.5
            const darkerR = Math.max(0, Math.round(rgb.r * darkerFactor));
            const darkerG = Math.max(0, Math.round(rgb.g * darkerFactor));
            const darkerB = Math.max(0, Math.round(rgb.b * darkerFactor));

            this.color = `#${(1 << 24 | darkerR << 16 | darkerG << 8 | darkerB).toString(16).slice(1)}`
        }
    }
}

export class Daily extends DailyBase implements IDaily {
    id: number = 0
    note: string = ''
    emotion: string = ''
    timestamp: number = Math.floor(new Date().getTime())

    // constructor() {}
}

export class NewDaily extends DailyBase implements INewDaily {
    note: string = ''
    emotion: string = ''
}
