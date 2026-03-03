import React from "react";
type ContactInfoProps = {
  phone: string;
  email: string;
  address: string;
};

export const ContactInfo: React.FC<ContactInfoProps> = ({
  phone,
  email,
  address,
}) => {
  return (
    <div style={{ padding: "40px" }}>
      <p>📞 {phone}</p>
      <p>📧 {email}</p>
      <p>📍 {address}</p>
    </div>
  );
};
