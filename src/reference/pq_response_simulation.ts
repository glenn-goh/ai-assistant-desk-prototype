export const pqResponseData = {
  id: "pq-response-mnd",
  title: "Parliamentary Question Response - MND Housing Policy",
  description: "AI-assisted PQ response research and drafting for policy officer",
  colorScheme: "purple" as const,
  messages: [
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Good morning, Sarah! 👋\n\nWelcome! I'm your AI assistant, here to help you with your work tasks.\n\nWhat would you like help with today?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "I need to respond to this PQ:\n\n\"To ask the Minister for National Development (a) what is the average waiting time for BTO flats across different towns in the past year; and (b) what measures are being taken to reduce waiting times for first-time homebuyers.\""
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Got it. This is a two-part question on BTO waiting times and policy measures. Let me start by doing comprehensive research across multiple sources to help you draft a strong response. This will take a few minutes.\n\nI'll search:\n1. Past similar PQs from Hansard\n2. Your department's internal knowledge base\n3. Recent news coverage and ministerial statements on housing policy\n4. Relevant statistics on BTO waiting times\n\nLet's begin:"
        },
        {
          type: "thinking" as const,
          thoughts: [
            "Searching Hansard for past PQs on BTO waiting times...",
            "Analyzing previous ministerial responses on housing policies...",
            "Searching internal MND knowledge base for policy positions...",
            "Retrieving latest BTO statistics by town and flat type...",
            "Scanning recent news coverage on housing announcements...",
            "Cross-referencing Minister's public statements...",
            "Identifying policy measures and initiatives...",
            "Compiling data on waiting time trends..."
          ],
          timingMs: 3500
        },
        {
          type: "assistantSwitch" as const,
          message: "Deep Research Assistant"
        },
        {
          type: "text" as const,
          content: "Research completed! Here's what I found:\n\n## 📋 RESEARCH SUMMARY\n\n### Past Similar PQs (from Hansard)\nI found 3 relevant PQs from the past 18 months:\n\n1. **PQ 2284 (Aug 2024)** - Similar question on BTO delivery timelines\n   - Response emphasized government's efforts to accelerate construction\n   - Mentioned contractor capacity challenges post-COVID\n   \n2. **PQ 1856 (Mar 2024)** - Question on housing supply for first-timers\n   - Response highlighted increased BTO supply and Prime Location Housing\n   - Referenced \"3-4 year\" typical waiting time\n\n3. **PQ 3102 (Nov 2024)** - Question on construction delays\n   - Response acknowledged supply chain disruptions\n   - Mentioned partnerships with builders\n\n### Current Statistics (Internal Database)\n**Average BTO Waiting Times (Past 12 months):**\n- Mature estates (e.g., Queenstown, Kallang): 4.2 years\n- Non-mature estates (e.g., Tengah, Punggol): 3.8 years\n- Overall average: 3.9 years\n\n**Trend:** Slight increase from 3.6 years (2023) due to construction delays\n\n### Recent Policy Announcements\n1. **National Day Rally 2024** - PM mentioned accelerating housing supply\n2. **MND Press Release (Oct 2024)** - Announced 100,000 flats over next 5 years\n3. **Minister's Facebook Post (Nov 2024)** - Emphasized \"commitment to ensuring adequate supply\"\n\n### Approved Policy Stance\nFrom internal knowledge base:\n- Acknowledge waiting time concerns with empathy\n- Emphasize unprecedented supply ramp-up\n- Highlight measures: increased contractor capacity, construction productivity improvements\n- Note: Avoid specific future timeline commitments\n\nWould you like me to draft the response now?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Yes please! This research is super helpful. Can you draft a response following our usual format?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Absolutely! Let me draft the PQ response for you. I'll follow MND's standard format and ensure consistency with past responses."
        },
        {
          type: "thinking" as const,
          thoughts: [
            "Loading MND PQ response template...",
            "Structuring two-part answer format...",
            "Incorporating statistics from research...",
            "Aligning language with past ministerial responses...",
            "Ensuring empathetic tone on waiting time concerns...",
            "Including policy measures and initiatives...",
            "Cross-checking against internal guidelines...",
            "Formatting for parliamentary submission..."
          ],
          timingMs: 2000
        },
        {
          type: "text" as const,
          content: "Here's your draft PQ response:\n\n---\n\n## DRAFT PARLIAMENTARY QUESTION RESPONSE\n\n**Question No.: [To be assigned]**  \n**Date:** [Session date]  \n**Member:** [MP name]  \n**Ministry:** Ministry of National Development\n\n**Question:**\nTo ask the Minister for National Development (a) what is the average waiting time for BTO flats across different towns in the past year; and (b) what measures are being taken to reduce waiting times for first-time homebuyers.\n\n**Response:**\n\n**(a) Average Waiting Times**\n\nThe average waiting time for Build-To-Order (BTO) flats varies across towns depending on construction complexities, site conditions, and contractor capacity. Over the past year, the average waiting time from application to key collection has been approximately 3.9 years.\n\nFor projects in mature estates such as Queenstown and Kallang, the average is 4.2 years. For non-mature estates such as Tengah and Punggol, it is 3.8 years.\n\nThese waiting times reflect challenges in the construction sector, including supply chain disruptions and labour constraints in the post-pandemic period.\n\n**(b) Measures to Reduce Waiting Times**\n\nThe Government remains committed to ensuring Singaporeans can access quality public housing within a reasonable timeframe. Several measures have been implemented:\n\nFirst, housing supply is being significantly increased. HDB will launch approximately 100,000 flats over the next five years.\n\nSecond, we are working with contractors to expand construction capacity through pre-qualification of more contractors and support for advanced construction technologies.\n\nThird, construction productivity is being improved through Design for Manufacturing and Assembly (DfMA), which allows components to be pre-fabricated off-site, reducing on-site construction time.\n\nFourth, the Prime Location Public Housing (PLH) model has been introduced to provide housing options in sought-after areas while maintaining accessibility for first-time homebuyers.\n\nThe Government will continue to monitor the situation and make necessary adjustments to deliver quality homes within reasonable timeframes.\n\n---\n\n**Key Features of this draft:**\n- ✅ Addresses both parts of the question clearly\n- ✅ Uses actual statistics from research (3.9 years average)\n- ✅ Formal parliamentary tone\n- ✅ Aligns with past ministerial responses on housing\n- ✅ Includes 4 concrete policy measures\n- ✅ Maintains consistency with recent announcements\n\nWould you like me to adjust anything?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "This is good, but can you make it more formal and succinct? PQ responses need to be quite formal and to the point."
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Absolutely, let me tighten this up and make it more formal."
        },
        {
          type: "thinking" as const,
          thoughts: [
            "Adjusting to formal parliamentary tone...",
            "Making response more succinct...",
            "Removing unnecessary phrases...",
            "Tightening language..."
          ],
          timingMs: 1000
        },
        {
          type: "text" as const,
          content: "Here's the revised version:\n\n---\n\n## REVISED DRAFT\n\n**Response:**\n\n**(a) Average Waiting Times**\n\nThe average waiting time for BTO flats from application to key collection is approximately 3.9 years. This varies by location: mature estates average 4.2 years, while non-mature estates average 3.8 years. These timelines reflect construction sector challenges including supply chain disruptions and labour constraints post-pandemic.\n\n**(b) Measures to Reduce Waiting Times**\n\nThe Government has implemented several measures:\n\nFirst, HDB will launch approximately 100,000 flats over the next five years to ensure adequate supply.\n\nSecond, we are expanding construction capacity by pre-qualifying more contractors and supporting adoption of advanced construction technologies.\n\nThird, we are improving productivity through Design for Manufacturing and Assembly (DfMA), which enables off-site pre-fabrication to reduce construction time.\n\nFourth, the Prime Location Public Housing model provides additional options in sought-after locations while maintaining accessibility for first-time buyers.\n\nWe remain committed to delivering quality homes within reasonable timeframes and will continue to monitor and adjust our approach as needed.\n\n---\n\n**Changes made:**\n- ✅ More formal, parliamentary tone\n- ✅ Succinct and direct language\n- ✅ Removed conversational phrases\n- ✅ Tightened structure while maintaining all key information\n- ✅ Maintained all key facts and policy measures\n\nBetter?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Much better! That's the right tone and length. Can you also add a brief cover note I can send to my director when I submit this for review?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Of course! Let me draft a concise cover note for your director."
        },
        {
          type: "thinking" as const,
          thoughts: [
            "Drafting cover note for director review...",
            "Highlighting key points and sources...",
            "Including clearance timeline...",
            "Professional but concise format..."
          ],
          timingMs: 800
        },
        {
          type: "text" as const,
          content: "Here's your cover note:\n\n---\n\n**COVER NOTE FOR DIRECTOR**\n\n**To:** Director, Housing Policy Division  \n**From:** Sarah Chen, Policy Officer  \n**Date:** [Today's date]  \n**Subject:** PQ Response - BTO Waiting Times (Due: [Due date])\n\n**PQ Summary:**\nMP question on (a) average BTO waiting times by town, and (b) measures to reduce waiting times for first-timers.\n\n**Key Points in Draft Response:**\n1. Provided actual statistics: 3.9 years overall average (4.2 years mature estates, 3.8 years non-mature)\n2. Acknowledged pandemic-related construction challenges\n3. Highlighted four key measures: supply ramp-up (100k flats), contractor capacity expansion, productivity improvements (DfMA), and PLH model\n4. Maintained empathetic tone consistent with recent ministerial statements\n\n**Research Conducted:**\n- Cross-referenced with 3 similar past PQs (Aug-Nov 2024)\n- Verified statistics with internal database\n- Aligned with recent policy announcements (NDR 2024, Oct 2024 press release)\n- Confirmed stance against specific future timeline commitments\n\n**Consistency Check:**\n✅ Aligns with PQ 1856 (Mar 2024) on \"3-4 year\" reference  \n✅ Consistent with Minister's recent Facebook post on supply commitment  \n✅ References same policy measures mentioned in Oct 2024 press release\n\n**Clearance Timeline:**\nCurrent stage: Director review (you)  \nNext: Directorate clearance  \nFinal: Ministry clearance  \nSubmission deadline: [Due date]\n\n**Attachments:**\n1. Draft PQ Response\n2. Annex A - Past PQ References\n3. Annex B - Statistics Source Documentation\n\nPlease let me know if you need any revisions or additional information.\n\n---\n\nThis gives your director everything they need for a quick review!"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Perfect! Can you now package everything - the PQ response, cover note, and all the supporting annexes?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Absolutely! Let me compile everything for you."
        },
        {
          type: "thinking" as const,
          thoughts: [
            "Generating final PQ response document (.docx)...",
            "Creating cover note (.docx)...",
            "Compiling Annex A: Past PQ references with links...",
            "Compiling Annex B: Statistics documentation...",
            "Creating Annex C: News coverage summary...",
            "Formatting all documents to MND standards...",
            "Preparing submission package..."
          ],
          timingMs: 2000
        },
        {
          type: "text" as const,
          content: "📦 **PACKAGE READY FOR DOWNLOAD**\n\n**Submission Package:** PQ_BTO_Waiting_Times_Package.zip (1.8 MB)\n\n**Contents:**\n\n**Main Documents:**\n- 📄 PQ_Response_BTO_Waiting_Times_DRAFT.docx\n- 📄 Cover_Note_to_Director.docx\n\n**Supporting Annexes:**\n- 📄 Annex_A_Past_PQ_References.pdf\n  - PQ 2284 (Aug 2024) - BTO delivery timelines\n  - PQ 1856 (Mar 2024) - Housing supply for first-timers\n  - PQ 3102 (Nov 2024) - Construction delays\n  - Includes Hansard links and key excerpts\n\n- 📄 Annex_B_Statistics_Documentation.pdf\n  - Average waiting times by estate (past 12 months)\n  - Historical trend comparison (2023 vs 2024)\n  - Data source: MND Internal Housing Database\n  - Last updated: [Current month]\n\n- 📄 Annex_C_News_Coverage_Summary.pdf\n  - National Day Rally 2024 - Housing announcements\n  - MND Press Release (Oct 2024) - 100k flats commitment\n  - Minister's public statements (past 6 months)\n  - Media coverage analysis\n\n**All documents formatted to MND standards and ready for internal circulation.**\n\n---\n\n## 📊 SESSION SUMMARY\n\n**Time Saved:** ~5 hours vs manual research and drafting  \n**Sources Researched:** 8+ (Hansard, internal database, news archives, policy documents)  \n**Documents Generated:** 6 complete documents  \n**Past PQs Analyzed:** 3 relevant precedents  \n**Consistency Status:** ✅ 100% aligned with ministry positions  \n**Deadline Status:** ✅ 4 days ahead of schedule\n\n**Next Steps:**\n1. Download package\n2. Review documents one final time\n3. Submit to director for clearance\n4. Await feedback and incorporate any changes\n5. Route through directorate and ministry clearance\n\nYou're all set for submission!"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "This is amazing! I was so stressed about this deadline and you made it so much easier. Can I just send this directly to my director from here?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Yes! I can help you send this to your director. Let me draft the submission email. What's your director's name and email?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "His name is Michael Tan, email is michael.tan@mnd.gov.sg. Should I CC anyone else?"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Good practice to CC your team lead or deputy director if there is one. Do you have someone you typically CC for PQ submissions?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Oh right, I should CC Rachel Lim, she's our deputy director. Her email is rachel.lim@mnd.gov.sg"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Perfect! Let me draft the submission email for you."
        },
        {
          type: "thinking" as const,
          thoughts: [
            "Drafting submission email...",
            "Professional but concise tone...",
            "Highlighting key points for quick review...",
            "Including all attachments..."
          ],
          timingMs: 800
        },
        {
          type: "text" as const,
          content: "Here's your email draft:\n\n---\n\n**EMAIL DRAFT**\n\n**To:** Michael Tan (michael.tan@mnd.gov.sg)  \n**CC:** Rachel Lim (rachel.lim@mnd.gov.sg)  \n**Subject:** [For Review] PQ Response - BTO Waiting Times | Due: [Due date]\n\n**Body:**\n\nDear Michael,\n\nPlease find attached my draft response to the PQ on BTO waiting times for your review.\n\n**PQ Summary:**  \nMP question on (a) average waiting times across towns, and (b) measures to reduce waiting times for first-timers.\n\n**Key Highlights:**\n- Provided verified statistics: 3.9 years overall average\n- Acknowledged construction challenges empathetically\n- Highlighted four concrete policy measures\n- Cross-checked against past PQs and recent ministerial statements\n- All statistics verified with internal database\n\n**Research completed:**\n- 3 similar past PQs from Hansard (Aug-Nov 2024)\n- Recent policy announcements (NDR 2024, Oct press release)\n- Current statistics from MND Housing Database\n\nI've ensured the response aligns with our established positions and maintains consistency with recent parliamentary answers. Supporting documentation and past PQ references are included in the annexes.\n\nPlease let me know if you need any revisions or additional information. Happy to discuss if you have questions.\n\nDeadline: [Due date] - We have 4 days buffer for clearance.\n\nThank you.\n\nBest regards,  \n**Sarah Chen**  \nPolicy Officer  \nHousing Policy Division  \nMinistry of National Development  \n📧 sarah.chen@mnd.gov.sg | ☎️ +65 6325 8XXX\n\n**Attachments:**\n- PQ_Response_BTO_Waiting_Times_DRAFT.docx\n- Cover_Note_to_Director.docx\n- Annex_A_Past_PQ_References.pdf\n- Annex_B_Statistics_Documentation.pdf\n- Annex_C_News_Coverage_Summary.pdf\n\n---\n\nDoes this look good to send?"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Yes perfect! Please send it."
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "Sending now..."
        },
        {
          type: "thinking" as const,
          thoughts: [
            "Attaching all 5 documents (1.8 MB total)...",
            "Verifying recipients...",
            "Checking email formatting...",
            "Sending email..."
          ],
          timingMs: 1500
        },
        {
          type: "text" as const,
          content: "✅ **Email sent successfully!**\n\nYour PQ submission has been sent to:\n- **Michael Tan** (michael.tan@mnd.gov.sg) - Director\n- **Rachel Lim** (rachel.lim@mnd.gov.sg) - Deputy Director (CC'd)\n\nAll 5 attachments included (1.8 MB total)\n\n**Sent:** [Current timestamp]\n\nI'll monitor for any replies and notify you when Michael or Rachel responds. You can also download a copy of all documents for your records.\n\n---\n\n## 📊 FINAL SESSION SUMMARY\n\n**Total Time Saved:** ~5-6 hours vs manual process  \n**Documents Created:** 6 professional documents  \n**Research Sources:** 8+ verified sources  \n**Past PQs Analyzed:** 3 relevant precedents  \n**Statistical Data Points:** Verified from official database  \n**Consistency Checks:** ✅ 100% aligned with ministry positions  \n**Deadline Buffer:** 4 days ahead of submission deadline  \n**Status:** ✅ Submitted for director review\n\n**What we accomplished:**\n✅ Comprehensive research across Hansard, internal database, and news coverage  \n✅ Drafted accurate, empathetic response aligned with policy stance  \n✅ Revised for appropriate tone based on your feedback  \n✅ Created complete submission package with supporting annexes  \n✅ Sent professional email to director with all documentation  \n\nYou're all set! Take a well-deserved break. 😊"
        }
      ]
    },
    {
      role: "user" as const,
      content: {
        text: "Thank you so much! This would have taken me forever to do on my own. Really appreciate the help!"
      }
    },
    {
      role: "bot" as const,
      content: [
        {
          type: "text" as const,
          content: "You're very welcome, Sarah! I'm glad I could help reduce your stress and save you time. PQ responses can be intense with tight deadlines, so I'm happy this made it easier.\n\nFeel free to come back anytime you need help with future PQs or other policy work. Good luck with the clearance process! 😊"
        }
      ]
    }
  ]
};
