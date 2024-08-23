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
            Product Led Growth Intern, <a href="https://www.workato.com/" className="font-bold hover:underline text-blue-800">Workato</a>
          </Typography>

          <Typography color="default" className="text-xs">
            <b>May 2024 - Aug 2024 | Mountain View, California, US</b>
          </Typography>
          
          <Typography type="small" className="mt-2 text-foreground">
          During this internship, I embraced a solutions engineering role within the Documentation subteam, where my focus was on enhancing the efficiency and effectiveness of our technical writers' workflow.
          <br />
          <br />
          One of the key projects I tackled was developing a metrics dashboard by integrating Google Analytics 4, Snowflake, and Sigma, and using Workato's low-code platform to build a seamless data pipeline. This enabled deeper insights into how customers and internal teams used our documentation.
          <br />
          <br />
          I also enhanced our Continuous Integration (CI) process by integrating Reviewdog with automated linting tools, incorporating rules from Google and Microsoft style guides. This improvement streamlined code reviews and elevated documentation quality.
          
          <br />
          <br />
          <b>Learning Experiences:</b> I gained a deep understanding of the critical role product documentation plays in driving organic growth, especially in a late-stage growth company. It's often overlooked in tech companies, where the focus tends to be on product features and innovation. However, I learned that adopting a product-driven approach with well-structured documentation can significantly enhance user engagement and retention, acting as a catalyst for sustainable growth.

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
              <b>May 2023 - Aug 2023 | Shanghai, China</b>
            </Typography>

            <Typography type="small" className="mt-2 text-foreground">
            During my internship in Shanghai's dynamic startup ecosystem, I collaborated with entrepreneurs, investors, and industry experts to drive innovation. A key project involved facilitating a Corporate Innovation Program for Scania, where I identified market opportunities in China's mega-city clusters, focusing on autonomous vehicles and battery recycling.
            <br />
            <br />
            I also conducted market validation for startups from Singapore and Germany, helping them find strategic entry points into China’s tech landscape.            
            <br />
            <br />
            <b>Learning Experiences:</b> Many questioned my decision to take on a non-engineering role for this overseas internship, expressing skepticism about how it would contribute to my career growth. However, I saw it as a unique opportunity to broaden my skill set and perspective. Embracing the challenge, I not only gained valuable insights into market dynamics but also immersed myself in the local culture, even taking on the lead role in a musical. This experience reinforced the importance of adaptability and cultural exchange, proving that stepping outside of traditional paths can lead to both professional and personal growth.
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
              <b>May 2022 - Aug 2022 | Singapore</b>
            </Typography>
            
            <Typography type="small" className="mt-2 text-foreground">
            In this climate-tech start up, I initiated and led a project to optimize the ETL process by implementing an automated multi-label text classification system with BERT transformers. I integrated this with a React.js frontend and Flask backend. Additionally, I developed a tool for web and image scraping to gather datasets on scope 3 emissions, critical for completing emission inventories.
            <br />
            <br />
            <b>Learning Experiences:</b> This was my first foray into the fast-paced environment of a seed-stage startup, where I quickly learned the importance of agility, innovation, and adaptability. The experience sparked a strong interest in the product side of technology, allowing me to see firsthand how ideas rapidly evolve into impactful solutions in a dynamic setting.
            </Typography>
        </Timeline.Body>
      </Timeline.Item>
    </Timeline>
  );
}
