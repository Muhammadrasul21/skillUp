import { heroItems } from "@/static";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="container">
      <p className="font-semibold text-2xl !mb-3 ">Muallif dashboardi</p>
      <div className="grid grid-cols-3 gap-5">
        {heroItems?.map((item) => (
          <Card
            className={`border-[${item.btnColor}] !p-6 flex flex-col`}
            key={item.id}
            style={{
              backgroundColor: item.bgColor,
              border: `1px solid ${item.btnColor}`,
            }}
          >
            <CardTitle className={"font-semibold text-[20px]"}>
              {item.title}
            </CardTitle>
            <CardDescription className={"text-[#8F8F8F]"}>
              {item.desc}
            </CardDescription>
            <CardFooter>
              <Link to={item.path}>
                <Button
                  style={{ backgroundColor: item.btnColor }}
                  className={"text-white !px-4 cursor-pointer"}
                >
                  {item.btn}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Hero;
