import { Skeleton } from "./ui/skeleton";

export function SkeletonGrid(){
    return(
        <div className="flex flex-col gap-y-5">
            <Skeleton className="w-[1020px] h-[65px] rounded-md"></Skeleton>
            <Skeleton className="w-[1020px] h-[65px] rounded-md"></Skeleton>
            <Skeleton className="w-[1020px] h-[65px] rounded-md"></Skeleton>
            <Skeleton className="w-[1020px] h-[65px] rounded-md"></Skeleton>
            <Skeleton className="w-[1020px] h-[65px] rounded-md"></Skeleton>

        </div>
    )
}