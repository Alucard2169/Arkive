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
interface ItemCardProps {
    title: string;
    description: string; 
    totalEntries: number;
    lastUpdated: string;

}
const ItemCard:FC<ItemCardProps> = ({title, description,totalEntries, lastUpdated}) => {
    return ( 
        <Card>
  <CardHeader className="flex flex-row items-top justify-between">
   <div className="flex flex-col gap-2">
   <CardTitle>{title}</CardTitle>
   <CardDescription>{description}</CardDescription>
   </div>
   <Button variant="ghost" title="Update Now"><RotateCw/></Button>
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
 
export default ItemCard;