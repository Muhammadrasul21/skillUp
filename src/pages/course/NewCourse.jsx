import React, { useState } from "react";
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
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react";

const NewCourse = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  return (
    <div className="container !mb-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className={"text-[#64748B] cursor-pointer"}
            >
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className={"cursor-pointer text-[#64748B]"}>
              Kurslar
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className={"cursor-pointer"}>
              Yangi kurs qo’shish
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-[800px] !m-auto">
        <div className="flex items-center justify-between !my-4">
          <p className="text-2xl font-semibold">Yangi kurs qo’shish</p>
        </div>

        <Card className="w-full !py-6 space-y-4 p-4">
          <div>
            <Label htmlFor="name" className={"text-[18px] opacity-50 hover:opacity-100 transition duration-300 ease-in-out flex flex-col-reverse"}>Banner rasm tanlang <Upload /></Label>
        
            <Input
              id="name"
              type="file"
              className={"hidden"}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {previewImage && (
            <div className="mt-4">
              <p className="mb-2 text-sm text-gray-600">Tanlangan rasm:</p>
              <img
                src={previewImage}
                alt="Tanlangan rasm"
                className="w-full max-w-[300px] rounded shadow"
              />
            </div>
          )}
        </Card>
        <Card className="w-full !py-6 space-y-4 p-4">
          

          {previewImage && (
            <div className="mt-4">
              <p className="mb-2 text-sm text-gray-600">Tanlangan rasm:</p>
              <img
                src={previewImage}
                alt="Tanlangan rasm"
                className="w-full max-w-[300px] rounded shadow"
              />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default NewCourse;
