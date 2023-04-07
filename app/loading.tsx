import pokeball from "@/public/pokeball.png"
import Image from "next/image"

export default function Loading() {
  return (
    <div className="loading text-xl flex flex-col-reverse h-[75vh] w-full justify-center items-center gap-4">
      <h1>Loading</h1>
      <Image src={pokeball} alt="loading" width={100} height={100} />
    </div>
  )
}