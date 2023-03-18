import Image from "next/image"
import { Figure } from "./Figure"
import Link from "next/link"

export const Article = () => {
  return (
    <>
      <style>{`
        body {
          line-height: 1.4em;
          font-size: 1.4rem;
          font-family: Georgia, "Times New Roman", Times, serif;
          color: #363636
        }

        img {
          margin: auto;
          width: 100%;
          height: auto;
        }

        figcaption {
          color: #727272;
          font-size: 1.2rem;
          line-height: 1.4em;
        }

        figure {
          margin: 0;
        }

        h1 {
          font-style: italic;
          font-weight: bold;
          font-size: 2rem;
          line-height: 1.4em
        }

        h2 {  
          font-size: 1.2em;
          line-height: 1.4em;
          font-weight: 600
        }

        .h-padding-page {
          padding: 0 1rem;
        }

        input {
          font-size: 1.3rem;
        }

        button {
          font-size: 1.3rem
        }

        .self-promotion {
          display: block;
          text-align: center;
          margin: auto;
          color: hotpink;
        }
        `}</style>

      <br />

      <Link className="self-promotion" href="http://www.willthefirst.com">www.willthefirst.com</Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <form className="h-padding-page">
        <input type="text" placeholder="say hi" />
        <button type="submit">Email me</button>

      </form>

      <p className="h-padding-page">
        Cooool cool. Let me know if you like it er wanna hire me or something
      </p>
      <p className="h-padding-page">
        I'm a developer who had a free day today...just thought it might be interesting to read articles from bottom to top, I dunno.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="h-padding-page">Maybe you liked it?</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="h-padding-page">Was that weird?</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="h-padding-page">So.</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <p className="h-padding-page">
        The turmoil in the financial world comes just as the economic recovery, at least in the United States, seemed to be gaining momentum. Consumer spending, which fell in late 2022, rebounded early this year. The housing market, which slumped in 2022 as mortgage rates rose, had shown signs of stabilizing. And despite high-profile layoffs at large tech companies, job growth has stayed strong or even accelerated in recent months. By early March, forecasters were raising their estimates of economic growth and marking down the risks of a recession, at least this year.
      </p>

      <Figure
        src="/17econ-moment-04-htcl-superJumbo.webp"
        caption="Tougher lending standards could be a blow to small businesses and affect overall supply in the economy. Casey Steffens for The New York Times
        "
      ></Figure>

      <p className="h-padding-page">
        Already, there are hints that the crisis may not be limited to the United States. Credit Suisse said on Thursday that it would borrow up to $54 billion from the Swiss National Bank after investors dumped its stock as fears arose about its financial health. The 166-year-old lender has faced a long series of scandals and missteps, and its problems aren’t directly related to those of Silicon Valley Bank and other U.S. institutions. But economists said the violent market reaction was a sign that investors were growing concerned about the stability of the broader system.
      </p>
      <p className="h-padding-page">
        “If we’re not on top of that, then what about some of these other, more shadowy parts of the financial system?” said Anil Kashyap, a University of Chicago economist who studies financial crises.
      </p>
      <p className="h-padding-page">
        Still, he and other experts said it was alarming that such severe problems could go undetected so long at Silicon Valley Bank, the midsize California institution whose failure set in motion the latest turmoil. That raises questions about what other threats could be lurking, perhaps in less regulated corners of finance such as real estate or private equity.
      </p>
      <p className="h-padding-page">
        “Usually to have a more systemic financial crisis, you need more than one shoe to drop,” Professor Rogoff said. “Think of higher real interest rates as one shoe, but you need another.”
      </p>
      <p className="h-padding-page">
        He said he did not expect a repeat of 2008, when the collapse of the U.S. mortgage market quickly engulfed virtually the entire global financial system. Banks around the world are better capitalized and better regulated than they were back then, and the economy itself is stronger.
      </p>
      <p className="h-padding-page">
        “I was surprised where the problem came, but I wasn’t surprised there was a problem,” Kenneth Rogoff, a Harvard professor and leading scholar of financial crises, said in an interview. In an essay in early January, he warned of the risk of a “looming financial contagion” as governments and businesses struggled to adjust to an era of higher interest rates.
      </p>
      <p className="h-padding-page">
        What was less expected is where the first crack showed: small and midsize U.S. banks, in theory among the most closely monitored and tightly regulated pieces of the global financial system.
      </p>
      <p className="h-padding-page">
        The notion that the rapid increase in interest rates could threaten financial stability is hardly new. In recent months, economists have remarked often that it is surprising that the Fed has been able to raise rates so much, so fast without severe disruptions to a marketplace that has grown used to rock-bottom borrowing costs.
      </p>
      <Figure
        src="/17econ-moment-03-htcl-superJumbo.webp"
        caption="The failure of Silicon Valley Bank, the midsize California institution, set the latest turmoil in motion. Ian C. Bates for The New York Times"
      ></Figure>
      <p className="h-padding-page">
        “I was surprised where the problem came, but I wasn’t surprised there was a problem,” Kenneth Rogoff, a Harvard professor and leading scholar of financial crises, said in an interview. In an essay in early January, he warned of the risk of a “looming financial contagion” as governments and businesses struggled to adjust to an era of higher interest rates.
      </p>
      <p className="h-padding-page">
        What was less expected is where the first crack showed: small and midsize U.S. banks, in theory among the most closely monitored and tightly regulated pieces of the global financial system.
      </p>
      <Figure
        src="/17econ-moment-04-htcl-superJumbo.webp"
        caption="Tougher lending standards could be a blow to small businesses and affect overall economic recovery. Erin Schaff for The New York Times"
      ></Figure>
      <p className="h-padding-page">
        Already, there are hints that the crisis may not be limited to the United States. Credit Suisse said on Thursday that it would borrow up to $54 billion from the Swiss National Bank after investors dumped its stock as fears arose about its financial health. The 166-year-old lender has faced a long series of scandals and missteps, and its problems aren’t directly related to those of Silicon Valley Bank and other U.S. institutions. But economists said the violent market reaction was a sign that investors were growing concerned about the stability of the broader system.
      </p>
      <p className="h-padding-page">
        Still, he and other experts said it was alarming that such severe problems could go undetected so long at Silicon Valley Bank, the midsize California institution whose failure set in motion the latest turmoil. That raises questions about what other threats could be lurking, perhaps in less regulated corners of finance such as real estate or private equity.
      </p>
      <p className="h-padding-page">
        “If we’re not on top of that, then what about some of these other, more shadowy parts of the financial system?” said Anil Kashyap, a University of Chicago economist who studies financial crises.
      </p>

      <p className="h-padding-page">
        What was less expected is where the first crack showed: small and midsize U.S. banks, in theory among the most closely monitored and tightly regulated pieces of the global financial system.
      </p>
      <p className="h-padding-page">
        The notion that the rapid increase in interest rates could threaten financial stability is hardly new. In recent months, economists have remarked often that it is surprising that the Fed has been able to raise rates so much, so fast without severe disruptions to a marketplace that has grown used to rock-bottom borrowing costs.
      </p>
      <Figure
        src="/17econ-moment-03-htcl-superJumbo.webp"
        caption="The failure of Silicon Valley Bank, the midsize California institution, set the latest turmoil in motion. Ian C. Bates for The New York Times"
      ></Figure>

      <p className="h-padding-page">
        They don’t have long to weigh their options: Fed officials will hold their next regularly scheduled meeting on Tuesday and Wednesday amid unusual uncertainty about what they will do. As recently as 10 days ago, investors expected the central bank to reaccelerate its campaign of interest rate increases in response to stronger-than-expected economic data. Now, Fed watchers are debating whether the meeting will end with rates unchanged.
      </p>


      <p className="h-padding-page">
        “There will be real and lasting economic repercussions from this, even if all the dust settles well,” said Jay Bryson, chief economist at Wells Fargo. “I would raise the probability of a recession given what’s happened in the last week.”
      </p>

      <p className="h-padding-page">Even if those efforts succeed — and veterans of previous crises cautioned that was a big “if” — economists said the episode would inevitably take a toll on hiring and investments as banks pulled back on lending, and businesses struggled to borrow money as a result. Some forecasters said the turmoil had already made a recession more likely.
      </p>

      <p className="h-padding-page">Markets remained volatile on Friday — stocks had their worst day of the week — as leaders in Washington and on Wall Street sought to keep the crisis contained.  </p>

      <p className="h-padding-page">
        The U.S. economic recovery has repeatedly defied predictions of an impending recession, withstanding supply-chain backlogs, labor shortages, global conflicts and the fastest increase in interest rates in decades.
      </p>
      <Figure
        src="/17econ-moment-01-htcl-mobileMasterAt3x.webp"
        caption="The failure of Silicon Valley Bank, the midsize California institution, set the latest turmoil in motion. Ian C. Bates for The New York Times"
      ></Figure>
      <h2 className="h-padding-page">
        Borrowing could become tougher, a particular blow to small businesses — and a threat to the recovery’s staying power.
      </h2>
      <h1 className="h-padding-page" id="start-here">Banking Crisis Hangs Over Economy, Rekindling Recession Fear
        Borrowing could become tougher, a particular blow to small businesses — and a threat to the recovery’s staying power.
      </h1>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

