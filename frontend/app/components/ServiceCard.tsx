"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RotateCw } from "lucide-react";
import { FC } from "react";
  
// Define the type for the props
interface ServiceCardProps {
    title: string | undefined;
    description: string | undefined; 
    totalEntries: number;
    lastUpdated: string;

}
const ServiceCard:FC<ServiceCardProps> = ({title, description,totalEntries, lastUpdated}) => {
    return ( 
        <Card>
  <CardHeader className="flex flex-row items-top justify-between">
   <div className="flex flex-col gap-2">
   <CardTitle>{title}</CardTitle>
   <CardDescription>{description}</CardDescription>
   </div>
   <Button 
  variant="ghost" 
  type="button"
  title="Update Now"
  onClick={(e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(`Trigger update for ${title}`);
    // TODO: trigger fetch/update here
  }}
>
  <RotateCw />
</Button>
  </CardHeader>
  <CardContent>
    <p className="text-sm">Total Entries: {totalEntries} </p>
  </CardContent>
  <CardFooter>
    <p className="text-sm">Last Updated: {lastUpdated}</p>
  </CardFooter>
</Card>

     );
}
 
export default ServiceCard;