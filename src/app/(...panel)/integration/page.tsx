import Button from "@/components/Button";
import SingleAccordion from "@/components/SingleAccordion";
import { TextInput, Title } from "@mantine/core";

export default function Home() {
  return (
    <div>
      <div className="px-7 pt-6 pb-10 bg-white border border-[#EAEAEA] mb-2">
        <Title order={1} size={36} c="#161616" mb='lg'>
          Integration
        </Title>

        <div className="flex gap-2 flex-wrap">
          <SingleAccordion
            label="Twilio Integration"
            image="/images/twilio.svg"
          >
            <div className="flex gap-6 w-full items-end">
              <TextInput
                variant="filled"
                size="lg"
                label="Enter Account SID"
                withAsterisk
                placeholder="SID here"
                classNames={{
                  input: '!bg-white'
                }}
                flex={1}
              />

              <TextInput
                variant="filled"
                size="lg"
                label="Enter Authentication Token"
                withAsterisk
                placeholder="Here"
                classNames={{
                  input: '!bg-white !h-[48px]'
                }}
                flex={1}
              />

              <Button variant='fill'>
                Integrate
              </Button>
            </div>
          </SingleAccordion>

          <SingleAccordion
            label="TCal.com Integration"
            image="/images/cal.svg"
          >
            hello
          </SingleAccordion>

          <SingleAccordion
            label="API Key Management"
            image="/images/api.svg"
          >
            hello
          </SingleAccordion>
        </div>
      </div>

    </div>
  );
}
