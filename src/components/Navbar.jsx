import logo from "../assets/logo.svg";
import userImg from "../assets/user.svg";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Bell, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { CardContent } from "./ui/card";
import { notification } from "@/static";

const Navbar = () => {
  return (
    <div className="border-b border-[#E2E2E2] py-[24px]! mb-6!">
      <div className="flex items-center justify-between container">
        <img src={logo} alt="" />

        <div className="flex items-center gap-[30px]">
          <Button
            variant="secondary"
            className={"bg-[#EDEDED] py-[20px]! px-[16px]! cursor-pointer "}
          >
            View public channel
            <ArrowUpRight />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className={"w-10 h-10 relative cursor-pointer"}
                variant="outline"
              >
                <Bell />
                <p className="bg-[#0588F0] text-white w-[20px] h-[20px] rounded-full absolute -top-2 -right-2">
                  3
                </p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[368px] h-[468px] !mt-4 !py-5 border-none shadow-xl bg-[#FFFFFF]">
              <DropdownMenuLabel
                className={
                  "text-[18px] font-semibold border-b border-gray-300 !pb-2 !px-6"
                }
              >
                Bildirishnomalar
              </DropdownMenuLabel>

              <DropdownMenuGroup className={"!px-6"}>
                {notification?.map((item) => (
                  <CardContent
                    key={item.id}
                    className={
                      "flex flex-col gap-2 !py-4 border-t border-t-gray-300"
                    }
                  >
                    <DropdownMenuItem className={"text-[14px] text-[#8F8F8F]"}>
                      {item.date}
                    </DropdownMenuItem>
                    <CardContent className={"flex gap-1"}>
                      <DropdownMenuItem className={"font-bold"}>
                        {item.title}
                      </DropdownMenuItem>
                      <DropdownMenuItem className={"font-medium"}>
                        {item.desc}
                      </DropdownMenuItem>
                    </CardContent>
                  </CardContent>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-4 cursor-pointer">
            <img src={userImg} alt="" />
            <p>Jakhongir Rahmonov</p>
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
