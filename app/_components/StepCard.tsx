import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StepCardProps {
  stepNumber?: number;
  title: string;
  icon?: React.ReactNode;
  description: string;
  imageUrl?: string;
  className?: string;
}

const StepCard: React.FC<StepCardProps> = ({
  className = "",
  stepNumber,
  title,
  description,
  icon,
  imageUrl,
}) => {
  return (
    <Card className={` w-full my-4 hover:ring-2  hover:ring-primary transition-transform ${className}`}>
 <CardHeader>
        {stepNumber && (
          <Badge className="w-fit">Step {stepNumber}</Badge>
        )}
        <CardTitle className="flex gap-2 items-center">
          {icon && <span>{icon}</span>} {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {imageUrl && (
      <CardContent className="m-0 p-0 rounded-b-lg  bg-black w-full ">
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          className="object-contain"
         
          
          layout="fill" // Ensures the image fills the container
        />
      </div>
    </CardContent>
    
      )}
    </Card>
  );
};

export default StepCard;