import { followerItems } from "@/static";
import React from "react";
import {
  Card,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const Followers = () => {
  return (
    <div className="container grid grid-cols-4 gap-4 !my-6">
      {followerItems?.map((item) => (
        <Card
          className={`border border-[#E2E8F0] !p-5 !flex`}
          key={item.id}
          style={{
            backgroundColor: item.bgColor,
            border: `1px solid ${item.btnColor}`,
          }}
        >
          <CardContent className="flex flex-col gap-3">
            <CardTitle className={"text-[#666687]!  text-[14px]"}>
              {item.title}
            </CardTitle>
            <CardDescription className={"font-semibold text-[20px]"}>
              {item.num} {item.endpt}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Followers;
