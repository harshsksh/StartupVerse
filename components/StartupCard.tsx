import React from 'react'
import {formatDate} from '../lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './button';
import Image from 'next/image';

type StartupCardType = {
  _id: string;
  _createdAt: string;
  views: number;
  author: {
    _id: string;
    name: string;
  };
  title: string;
  category: string;
  description: string;
  image: string;
};

const getValidImageUrl = (imageUrl: string | null | undefined): string => {
  // Return placeholder if no URL provided
  if (!imageUrl) return "https://placehold.co/400x164";
  
  // Check if it's a Google search result URL (not a direct image)
  if (imageUrl.includes('google.com/imgres') || imageUrl.includes('google.com/search')) {
    return "https://placehold.co/400x164";
  }
  
  // Check if it's a valid HTTP/HTTPS URL
  if (!imageUrl.startsWith('http')) {
    return "https://placehold.co/400x164";
  }
  
  return imageUrl;
};

const StartupCard = ({post} : {post : StartupCardType}) => {

    const {author : {_id : authorId, name}, views, _createdAt, title, category, description, _id, image} = post;

  return (
    <li className="startup-card group">
      <div className='flex-between'>
        <p className='startup_card_date'>
            {formatDate(_createdAt)}
        </p>
        <div className='flex gap-1.5'>
            <EyeIcon className="w-5 h-5 text-gray-500" />
          <span>{views}</span>
        </div>
      </div>
      <div className='flex-between mt-5 gap-5'>
        <div className='flex-1'>
            <Link href={`/user/${authorId}`} >
            <p className='text-16-medium line-clamp-1'>{name}</p>
            </Link>
            <Link href={`/startup/${_id}`} >
                <h3 className='text-20-semibold'>{title}</h3>
            
            </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/100x100"
            alt="Author's profile picture"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
        
      </div>
       <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>

        <Image 
          src={getValidImageUrl(image)} 
          alt={title}
          width={400} 
          height={164} 
          className="startup-card_img"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  )
}

export default StartupCard