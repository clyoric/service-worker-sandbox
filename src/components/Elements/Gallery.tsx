import {useEffect, useState} from "react";
import {getPhotosByPage} from "../../api/pexels/photos";

export const Gallery = () => {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      const response = await getPhotosByPage(1);

      console.log('response - ', response);

      setPhotos(response.photos as any)
    }

    getPhotos();
  }, []);

  return (
    <section className="w-full min-h-[600px] bg-gray-500 grid grid-cols-3">
      {photos.map((photo) => <img src={photo.src.original} alt={photo.alt} key={photo.id}/>)}
    </section>)
}