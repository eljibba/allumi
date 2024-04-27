import cn from "@/shared/utils/cn";
import Image from "next/image";

interface IMentorCard {
  name: string,
  desc: string,
  imagePath: string,
  job: "frontend" | "backend" | "designer",
}

export const MentorCard = (data: IMentorCard) => {
  return (
    <div className="flex gap-2 w-[380px]">
      <div className="flex flex-col gap-2">
        <Image
          className="relative rounded-lg"
          src={data.imagePath}
          alt="Person 1"
          width={180}
          height={180}
          priority
        />
        <p className="text-lg font-semibold">{data.name}</p>
        <div className={cn('bg-gray-800 w-fit px-2 py-0.5 rounded-full font-bold', {
          'bg-sky-500': data.job === 'frontend',
          'bg-red-500': data.job === 'backend',
          'bg-amber-500': data.job === 'designer',
        })}>
          <p className="text-sm">{data.job}</p>
        </div>
      </div>
      <p className="">{data.desc}</p>
    </div>
  );
};
