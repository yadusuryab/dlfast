import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface StepCardProps {
    stepNumber?: number;
    title: string;
    icon?:any;
    description: string;
    imageUrl?: any;
    className?:string;
  }
  
  const StepCard: React.FC<StepCardProps> = ({ className,stepNumber, title, description,icon, imageUrl }) => {
    return (
      <Card className={"w-full my-4 hover:scale-110 transition-all "+className}>
        <CardHeader>
        
         {stepNumber && <Badge className="w-fit">Step {stepNumber}</Badge>}
          <CardTitle className="flex gap-2 items-center">{icon} {title}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
       {imageUrl && <CardContent className="m-0 p-0 ">
          <Image
            src={imageUrl}
            alt={title}
            className="rounded-b-xl"
            width={400}
            height={200}
          />
        </CardContent>}
      </Card>
    );
  };
  
  export default StepCard;
