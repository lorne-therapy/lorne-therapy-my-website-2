import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "20",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/content"],
      models: [
        {
          name: "HomePage",
          type: "page",
          urlPath: "/",
          filePath: "src/content/data.json",
          fields: [
            { name: "navigationName", type: "string", required: true },
            { name: "clientPortalUrl", type: "string", required: true },
            { name: "heroLocationLabel", type: "string", required: true },
            { name: "heroTitleLine1", type: "string", required: true },
            { name: "heroTitleLine2", type: "string", required: true },
            { name: "heroDescription", type: "text", required: true },
            { name: "heroCtaText", type: "string", required: true },
            { name: "heroCtaUrl", type: "string", required: true },
            { name: "philosophyLabel", type: "string", required: true },
            { name: "philosophyTitleLine1", type: "string", required: true },
            { name: "philosophyTitleLine2", type: "string", required: true },
            { name: "philosophyTitleLine3", type: "string", required: true },
            { name: "philosophyDescription1", type: "text", required: true },
            { name: "philosophyDescription2", type: "text", required: true },
            { name: "aboutLabel", type: "string", required: true },
            { name: "aboutTitleLine1", type: "string", required: true },
            { name: "aboutTitleLine2", type: "string", required: true },
            { name: "aboutParagraph1", type: "text", required: true },
            { name: "aboutParagraph2", type: "text", required: true },
            { name: "aboutParagraph3", type: "text", required: true },
            { name: "clinicalFocusLabel", type: "string", required: true },
            { name: "service1Title", type: "string", required: true },
            { name: "service1Description", type: "text", required: true },
            { name: "service2Title", type: "string", required: true },
            { name: "service2Description", type: "text", required: true },
            { name: "service3Title", type: "string", required: true },
            { name: "service3Description", type: "text", required: true },
            { name: "ratesLabel", type: "string", required: true },
            { name: "ratesTitleLine1", type: "string", required: true },
            { name: "ratesTitleLine2", type: "string", required: true },
            {
              name: "ratesList",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "serviceName", type: "string", required: true },
                  { name: "price", type: "string", required: true }
                ]
              }
            },
            { name: "ratesDescription1", type: "text", required: true },
            { name: "ratesDescription2", type: "text", required: true },
            { name: "footerTitleLine1", type: "string", required: true },
            { name: "footerTitleLine2", type: "string", required: true },
            { name: "footerDescription", type: "text", required: true },
            { name: "footerCtaText", type: "string", required: true },
            { name: "footerCtaUrl", type: "string", required: true },
            { name: "footerName", type: "string", required: true },
            { name: "footerLicense", type: "string", required: true },
            { name: "footerLocation", type: "string", required: true },
            { name: "footerEmail", type: "string", required: true }
          ]
        }
      ]
    })
  ]
});
