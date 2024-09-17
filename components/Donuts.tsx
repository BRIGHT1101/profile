import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Donuts({ project, index }: any ) {
  return (
    <section className="relative w-screen h-full donuts">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Dialog>
          <DialogTrigger className="w-1/2 flex-none">
            <div className={`title`}>
              <h2 className="font-black italic text-[4vw] text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-50">
                {project.title}
              </h2>
              <img
                src={project.img}
                className="w-full block rounded-2xl overflow-hidden shadow"
              />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="absolute bottom-[1vw] right-[1vw] z-10 w-[15vw] h-full">
        {Array.from({ length: 9 }).map((_, i) => {
          return (
            <img
              key={i}
              src={`/donut${i + 1}.png`}
              className="absolute donut"
              style={{ bottom: `${i * 5}%` }}
            />
          );
        })}
      </div>
    </section>
  );
}
