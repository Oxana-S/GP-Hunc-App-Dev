import Button from "@/components/Button";
import { Avatar, Text, Title } from "@mantine/core";

export default function Home() {
  
  return (
    <div>
      <div className="px-7 pt-6 pb-10 bg-white border border-[#EAEAEA] mb-2">
        <div className="flex justify-between w-full">
          <Title order={1} size={36} c="#161616" mb='lg'>
            Agents
          </Title>

          <Button variant="fill" icon="/images/icon-plus-square.svg">
            Add New Agent
          </Button>
        </div>

        <div className="flex gap-x-10 gap-y-5 flex-wrap">
          {[...new Array(6*3)].map((_, index) => (
            <div
              key={index}
              className="flex py-6 px-4 bg-[#F7F7F7] rounded-lg flex-1 min-w-[30%]"  
            >
              <Avatar size={30} mr='sm' name="Darlene Robertson" color="initials"/>
              
              <div className="flex flex-col flex-1">
                <Text c='#212121' fw={500} size='md'>
                  Darlene Robertson
                </Text>
                <Text c='#74C69D' fw={400} size='md'>
                  Active now
                </Text>
              </div>

              <div className="bg-[#74C69D33] rounded-full flex justify-center items-center w-[90px] h-[27px] self-center text-[#74C69D]">
                <div
                  className="w-1 h-1 rounded-full bg-current mr-1"
                />
                <span>
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
