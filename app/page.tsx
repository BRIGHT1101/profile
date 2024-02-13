import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/api"); // API 엔드포인트 경로
    if (response.ok) {
      const data = await response.json();
      return data.greeting;
    } else {
      console.error("Error fetching data");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export default async function Home() {
  const a = await fetchData();
  return (
    <main className="text-[100px]">
      <div>{a}</div>
      <Drawer>
        <DrawerTrigger>hi</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </main>
  );
}
