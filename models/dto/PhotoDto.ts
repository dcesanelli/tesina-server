import { Photo } from "@prisma/client";
import { ImageLocation } from "../types/ImageLocation";

export type PhotoDto = {
    id: string;
    title: string;
    imageUri: string;
    address: string;
    location: ImageLocation;
};

export const newPhotoDto = (photo: Photo): PhotoDto => {
    return {
        id: photo.id,
        title: photo.title,
        imageUri: photo.imageUri,
        address: photo.address,
        location: {
            lat: photo.locationLat,
            lng: photo.locationLng
        }
    };
};