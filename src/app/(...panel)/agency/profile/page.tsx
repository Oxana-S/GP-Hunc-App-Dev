'use client';

import PageContentCard from "@/components/PageContentCard";
import Tabs from "@/components/Tabs";
import AgencyInfo from "@/screens/Agency/AgencyInfo";
import CustomDomain from "@/screens/Agency/CustomDomain";
import { IAgencyInfo } from "@/screens/Agency/interfaces";
import { Suspense } from "react";

export default function Home() {
  const agencyInfo: IAgencyInfo = {
      name: 'Agency Name',
      img: '#',
      contacts: [
          {
              type: 'mail',
              value: 'carliejohn@gmail.com'
          },
          {
              type: 'phone',
              value: '+12 3456 7890'
          },
          {
              type: 'loc',
              value: 'Toronto, California, 1234'
          }
      ]
  }

  return (
    <div>
      <PageContentCard
        title="Agency / Profile Setup"
      >
        <Suspense>
          <Tabs
            defaultTab="info"
            items={[
              {
                label: 'Agency Info',
                slug: 'info',
                content: <AgencyInfo agencyInfo={agencyInfo}/>
              },
              {
                label: 'Custom Domain',
                slug: 'domain',
                content: <CustomDomain agencyInfo={agencyInfo}/>
              }
            ]}
          />
        </Suspense>
      </PageContentCard>
    </div>
  );
}
