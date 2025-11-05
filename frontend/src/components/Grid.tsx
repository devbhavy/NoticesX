import { Button } from "./ui/button";
import { Item, ItemActions, ItemContent, ItemTitle } from "./ui/item";

export function NoticesGrid({ temp }: { temp: { title: string; link: string }[] }) {
    return (
      <div className="flex flex-col gap-y-5">
        {temp.map((notice, index) => (
          <div key={index}>
            <Item variant={"outline"} className="bg-black">
                <ItemContent>
                    <ItemTitle>
                        {notice.title}
                    </ItemTitle>
                </ItemContent>
                <ItemActions>
                    <Button variant={"outline"} onClick={()=>{
                        window.location.href = notice.link
                    }} className="bg-black hover:cursor-pointer" size={"sm"}>
                        Redirect to notice
                    </Button>

                </ItemActions>

            </Item>

            {/* <div>{notice.title}</div>
            <div>{notice.link}</div> */}
          </div>
        ))}
      </div>
    );
  }
  