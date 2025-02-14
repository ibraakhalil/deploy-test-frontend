"use client";

import { useTranslations } from "next-intl";
import { InputField } from "@/components/common/input-field";
import { countryCodes } from "./contact/country-codes.data";
import { CountryCodeCombobox } from "./select-country-code-combobox";

interface InputPhoneNumberProps {
  phoneNumber: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  countryCode: string;
  setCountryCode: (value: string) => void;
}

export function InputPhoneNumber({ phoneNumber, handleChange, countryCode, setCountryCode }: InputPhoneNumberProps) {
  const t = useTranslations("contact-us.contact-form");
  return (
    <div className="flex items-end gap-2.5">
      <div className="w-2/5">
        <label htmlFor="phoneNumber" className="mb-1 block text-title font-semibold text-pure-color">
          {t("mobile")}
        </label>
        {/*         <Combobox
          options={countryCodes.map(c => ({
            value: c.value,
            label: (
              <div>
                {c.label.icon} {c.label.text}
              </div>
            ),
          }))}
        /> */}
        <CountryCodeCombobox options={countryCodes} value={countryCode} setValue={setCountryCode} />
      </div>
      <div className="w-3/5">
        <InputField
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={handleChange}
          placeholder="01XXXXXXXXX"
          required
          className=""
        />
      </div>
    </div>
  );
}
