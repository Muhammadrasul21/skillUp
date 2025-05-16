import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, Pen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dataItems } from "@/static";

const Maqolalar = () => {
  return (
    <div className="container !mb-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className={"text-[#64748B]"}>
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage className={"cursor-pointer"}>
              Maqolalar
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-[800px] !m-auto">
        <div className="flex items-center justify-between !my-4">
          <p className="text-2xl font-semibold">Maqolalar</p>
          <Button className={"bg-[#0090FF] text-white !py-5 !px-4 cursor-pointer"}>
            <Plus />
            Yangi maqola yozish
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {dataItems?.map((item) => (
            <Card className="!p-6 gap-0 border-[#E2E8F0]" key={item.id}>
              <CardContent className={"flex flex-col gap-3"}>
                <CardTitle className={"font-semibold text-[18px]"}>
                  {item.title}
                </CardTitle>
                <CardDescription className={"text-[18px] text-[#8F8F8F]"}>
                  {item.desc}
                </CardDescription>
                <CardContent className={"flex gap-3"}>
                  <Button className="bg-[#EDEDED] !px-4 !py-5 cursor-pointer">
                    <Pen />
                    {item.btn}
                  </Button>
                  <Button className="bg-[#EDEDED] !px-4 !py-5 cursor-pointer">
                    {item.btn2}
                    <ArrowUpRight />
                  </Button>
                </CardContent>
              </CardContent>
              <CardFooter className="flex gap-3"></CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maqolalar;
