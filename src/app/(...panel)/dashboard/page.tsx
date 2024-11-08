import { Text, Title } from "@mantine/core";
import Button from "@/components/Button";
import { LineChartMock } from "@/mock/LineChart";
import LineChart from "@/components/LineChart";

export default function Home() {
  return (
    <div>
      <div className="px-7 pt-6 pb-10 bg-white border border-[#EAEAEA] mb-2">
        <Title order={2} size={24} c="#161616">
          Welcome John!
        </Title>
        <Text size="lg" c="#161616" mb='lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>

        <div className="flex gap-2 flex-wrap">
          <Button
            icon="/images/icon-users.svg"
            variant="fill"
          >
            Create Agent
          </Button>

          <Button
            icon="/images/icon-phone-ring.svg"
            variant='outline'
          >
            Schedule Outbound Call
          </Button>

          <Button
            icon="/images/icon-plus-square.svg"
            variant='outline'
          >
            Invite Team Member
          </Button>
        </div>
      </div>

      <div className="px-8 pt-6 pb-10 bg-white border border-[#EAEAEA]">
        <Title order={2} size={24} c="#161616">
          Daily Usage
        </Title>

        <LineChart
          data={LineChartMock}
          h={350}
          dataKey="date"
          series={[{ name: 'Apples', color: 'var(--primary)' }]}
          curveType="linear"
          connectNulls
          mt={'xl'}
        />
      </div>
    </div>
  );
}
