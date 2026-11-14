import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

// Homepage copy is editable here. Practice facts (rates, phone, address,
// credentials, license) live in src/site.ts so every page stays consistent.
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
            { name: "heroEyebrow", type: "string", required: true },
            { name: "heroTitleLine1", type: "string", required: true },
            { name: "heroTitleLine2", type: "string", required: true },
            { name: "heroDescription", type: "text", required: true },
            { name: "heroCtaText", type: "string", required: true },
            { name: "heroCtaUrl", type: "string", required: true },
            { name: "heroImageUrl", type: "string", required: true },
            { name: "heroImageAlt", type: "string", required: true },
            { name: "heroLocationLabel", type: "string", required: true },
            { name: "whoLabel", type: "string", required: true },
            { name: "whoTitle", type: "string", required: true },
            { name: "whoIntro", type: "text", required: true },
            { name: "whoListLabel", type: "string", required: true },
            { name: "whoList", type: "list", items: { type: "string" } },
            { name: "fitLabel", type: "string", required: true },
            { name: "fitTitle", type: "string", required: true },
            { name: "fitYesLabel", type: "string", required: true },
            { name: "fitYesList", type: "list", items: { type: "string" } },
            { name: "fitNoLabel", type: "string", required: true },
            { name: "fitNoList", type: "list", items: { type: "string" } },
            { name: "approachLabel", type: "string", required: true },
            { name: "approachTitle", type: "string", required: true },
            { name: "approachParagraph1", type: "text", required: true },
            { name: "approachParagraph2", type: "text", required: true },
            { name: "approachPillars", type: "list", items: { type: "string" } },
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
            { name: "service4Title", type: "string", required: true },
            { name: "service4Description", type: "text", required: true },
            { name: "ratesLabel", type: "string", required: true },
            { name: "ratesTitleLine1", type: "string", required: true },
            { name: "ratesTitleLine2", type: "string", required: true },
            { name: "ratesDescription1", type: "text", required: true },
            { name: "ratesDescription2", type: "text", required: true },
            { name: "oonTitle", type: "string", required: true },
            { name: "oonSteps", type: "list", items: { type: "object", fields: [{ name: "title", type: "string" }, { name: "text", type: "text" }] } },
            { name: "oonNote", type: "text", required: true },
            { name: "faqLabel", type: "string", required: true },
            { name: "footerTitleLine1", type: "string", required: true },
            { name: "footerTitleLine2", type: "string", required: true },
            { name: "footerDescription", type: "string", required: true }
          ]
        }
      ]
    })
  ]
});
