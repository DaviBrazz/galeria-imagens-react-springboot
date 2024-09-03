import { Image } from './image.resource'

class ImageService {
    baseURL: string = 'http://localhost:8080/images';

    async buscar(query: string = "", extension: string = ""): Promise<Image[]> {
        const url = `${this.baseURL}?extension=${extension}&query=${query}`;
        const response = await fetch(url);
        return await response.json();
    }
}

export const useImageService = () => new ImageService();