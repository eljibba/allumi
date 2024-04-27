import Image from "next/image";

interface IRating {
  count: Number,
}

export const Rating = (data: IRating) => {
  return (
    <div className="flex flex-col gap-1">
      <Image
        src="/star.svg"
        width="30"
        height="30"
        alt="star"
      />
    </div>
  );
};
