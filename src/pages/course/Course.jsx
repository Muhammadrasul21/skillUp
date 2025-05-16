import React from "react";
import courseImg from "../../assets/courseImg.svg";
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
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, Pen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Course = () => {
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
              Kurslar
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-[800px] !m-auto">
        <div className="flex items-center justify-between !my-4">
          <p className="text-2xl font-semibold">Kurslar</p>
          <Link
            to={"/newcourse"}
            className={"bg-[#0090FF] text-white !py-3 !px-4  flex rounded-md"}
          >
            <Plus />
            Yangi kurs qo’shish
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="!p-6 gap-0 border-[#E2E8F0]">
            <CardContent className={"flex flex-col gap-3"}>
              <CardContent className={"flex gap-5"}>
                <img src={courseImg} alt="courseImg" />
                <CardContent className={"flex flex-col gap-2"}>
                  <CardTitle className={"font-semibold text-[18px]"}>
                    Dizaynda karyera va UX tadqiqotlar
                  </CardTitle>
                  <CardDescription className={"text-[18px] text-[#8F8F8F]"}>
                    Kompyuter bilan 0 va 1 lar orqali emas, odam tilida muloqot
                    qilish uchun Assembly tili o’ylab topilgan. Bu dasturchilar
                    hayotini juda os...
                  </CardDescription>
                </CardContent>
              </CardContent>

              <CardContent className={"flex items-center justify-between"}>
                <CardContent className={"flex gap-3 !mt-4 items-center"}>
                  <Button className="bg-[#EDEDED] !px-4 !py-5 cursor-pointer">
                    <Pen />
                    O’zgartirish
                  </Button>
                  <Button className="bg-[#EDEDED] !px-4 !py-5 cursor-pointer">
                    O’zgartirish
                    <ArrowUpRight />
                  </Button>
                </CardContent>
                <CardDescription
                  className={
                    "font-semibold text-[18px] text-[#0090FF] transition translate-y-[40%]"
                  }
                >
                  12 000 so’m
                </CardDescription>
              </CardContent>
            </CardContent>
            <CardFooter className="flex gap-3"></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Course;
