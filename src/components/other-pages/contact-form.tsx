"use client";

import { InputField } from "@/components/common/input-field";
import { countryCodes } from "@/components/other-pages/contact/country-codes.data";
import { InputPhoneNumber } from "@/components/other-pages/input-phone-number";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Button } from "shadcn/components/ui/button";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}
export function ContactForm() {
  const t = useTranslations("contact-us.contact-form");
  const [countryCode, setCountryCode] = useState(countryCodes[0].value);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const messageData = {
      ...formData,
      phoneNumber: `${countryCode} ${formData.phoneNumber}`,
    };
    // Handle form submission logic here
    // eslint-disable-next-line no-console
    console.log(messageData);
  };

  return (
    <div className="min-w-[320px] max-w-[400px] rounded-lg bg-secondary-bg p-6 max-tablet:p-5">
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <InputField
          label={t("name")}
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("write-name")}
          required
        />
        <InputField
          label={t("email")}
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
          required
        />
        <InputPhoneNumber
          phoneNumber={formData.phoneNumber}
          handleChange={handleChange}
          countryCode={countryCode}
          setCountryCode={setCountryCode}
        />
        <div>
          <label htmlFor="message" className="mb-1 block text-title font-semibold text-pure-color">
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-md border border-icon-color-20 bg-secondary-bg px-3 py-2 text-subtitle-color outline-none transition-all duration-200 placeholder:text-subtitle-color focus:border-2 focus:border-icon-color-50"
            placeholder={t("write-message")}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="h-[54px] w-full bg-primary text-base font-semibold capitalize text-primary-fg">
          {t("submit")}
        </Button>
      </form>
    </div>
  );
}
