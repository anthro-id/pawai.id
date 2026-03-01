import { Box } from "@mantine/core";

const embedUrl: string = 
  `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.12060868765286!2d115.16872590245558!3d-8.71573751008575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246bf0af0eb65%3A0xcd9a6ee9943613ff!2sGrand%20Istana%20Rama%20Hotel%20Kuta%20-%20Bali!5e0!3m2!1sen!2sid!4v1772339732426!5m2!1sen!2sid`;

export default function FrontpageBodyGoogleMaps() {
  return (
    <Box pos={"relative"} h={480} w={"100%"}>
      <iframe
        title={"Grand Istana Rama Hotel Google Maps"}
        style={{ border: 0, width: "inherit", height: "inherit" }}
        referrerPolicy={"no-referrer"}
        src={embedUrl}
      />
    </Box>
  )
};