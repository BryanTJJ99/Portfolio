import { Timeline, Typography } from "@material-tailwind/react";

export default function TimeLine() {
  return (
    <Timeline color="secondary" orientation="vertical" className="text-left">

      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>

        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default" className="font-bold">
            UX Research Engineer Intern, <a href="https://www.workato.com/" className="font-bold hover:underline text-blue-800">Workato</a>
          </Typography>

          <Typography color="default" className="text-xs">
            May 2025 - Present | Mountain View, California, US
          </Typography>

          <Typography type="small" className="mt-2 text-foreground">
            I joined the UX Research team with a clear mission: to bridge the gap between research and engineering. My focus was on building tools that made insights more accessible and actionable.
            <br /><br />
            One key project involved developing agentic AI workflows for Workato GO, our internal search platform. This system automated the synthesis of feedback for Product Managers and UX Researchers, significantly reducing manual effort and helping to surface recurring patterns across vast amounts of input.
            <br /><br />
            To enable this, I engineered a custom MCP server. This secure server facilitated the connection of internal feedback to OpenAI’s deep research model, allowing us to scale insight extraction without compromising privacy.
            <br /><br />
            Additionally, I co-led the development of a predictive intelligence model for Data Pipelines. By leveraging clustering and regression, this model flagged high-likelihood adopters, providing Go-To-Market teams with readiness scores that helped identify over $2 million in Annual Recurring Revenue (ARR) accounts for targeted outreach.
            <br /><br />
            I also prototyped various interaction patterns, which helped accelerate design iteration and improve cross-functional alignment.
            <br /><br />
            <b>Learning Experiences:</b> This role highlighted the profound impact that well-designed systems can have on unlocking better decision-making across teams. It challenged me to view research tooling not just as backend logic, but as a critical enabler of clarity and efficiency.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>

        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default" className="font-bold">
            Product Led Growth Intern, <a href="https://www.workato.com/" className="font-bold hover:underline text-blue-800">Workato</a>
          </Typography>

          <Typography color="default" className="text-xs">
            May 2024 - Aug 2024 | Mountain View, California, US
          </Typography>

          <Typography type="small" className="mt-2 text-foreground">
            My time with the Documentation subteam focused on improving the visibility and effectiveness of our content.
            <br /><br />
            I developed a comprehensive dashboard by integrating GA4, Snowflake, and Sigma using Workato’s platform. This provided Product Managers and writers with crucial insights into how documentation performed across various touchpoints.
            <br /><br />
            Furthermore, I integrated Reviewdog with automated linting tools into our CI process, incorporating Google and Microsoft style rules. This initiative streamlined PR reviews and significantly improved documentation consistency.
            <br /><br />
            <b>Learning Experiences:</b> This internship underscored how deeply documentation can influence both user experience and product perception. I learned that when done effectively, documentation transcends mere support—it becomes an integral part of the product itself.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>

        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default" className="font-bold">
            Cross Border Acceleration & Innovation Intern, <a href="https://www.thexnode.com/" className="font-bold hover:underline text-blue-800">XNode 创极无限</a>
          </Typography>

          <Typography color="default" className="text-xs">
            May 2023 - Aug 2023 | Shanghai, China
          </Typography>

          <Typography type="small" className="mt-2 text-foreground">
            I spent the summer in Shanghai immersing myself in corporate innovation and startup advisory.
            <br /><br />
            For Scania, I played a key role in facilitating an innovation program. This involved analyzing trends in autonomous vehicles (AVs) and battery recycling within China’s rapidly evolving mega-city clusters.
            <br /><br />
            I also provided crucial support to startups from Singapore and Germany, guiding them through the complexities of market entry strategies into China’s unique ecosystem.
            <br /><br />
            Beyond my professional work, I unexpectedly found myself performing as the lead in a musical. This experience was a powerful reminder of how stepping outside one’s comfort zone can open up entirely new perspectives.
            <br /><br />
            <b>Learning Experiences:</b> This role was instrumental in teaching me to navigate ambiguity, work effectively across diverse cultures, and adapt quickly. These are skills I’ve carried forward into every subsequent role.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>

        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default" className="font-bold">
            Data Engineer Intern, <a href="https://www.unravelcarbon.com/" className="font-bold hover:underline text-blue-800">Unravel Carbon (Y-Combinator W22)</a>
          </Typography>

          <Typography color="default" className="text-xs">
            May 2022 - Aug 2022 | Singapore
          </Typography>

          <Typography type="small" className="mt-2 text-foreground">
            Joining Unravel Carbon at its early stage, I took ownership of a project focused on streamlining our emissions data pipeline.
            <br /><br />
            I developed a BERT-based multi-label classifier for emissions records, integrating it seamlessly with a Flask backend and React frontend. I also created scraping tools to support our Scope 3 data collection efforts.
            <br /><br />
            <b>Learning Experiences:</b> This initial exposure to startup life taught me the importance of moving fast, working independently, and building systems from the ground up. It also ignited a deeper interest in product thinking.
          </Typography>
        </Timeline.Body>
      </Timeline.Item>

    </Timeline>
  );
}