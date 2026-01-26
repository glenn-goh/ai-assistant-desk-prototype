import type { ColorTheme, FontStyle } from './PersonalizationDialog';
import { getThemeClasses, getFontClasses } from '../lib/theme-utils';
import { FileText, Download, Share2 } from 'lucide-react';
import { Button } from './ui/button';

interface ProcurementAORProps {
  colorTheme: ColorTheme;
  fontStyle: FontStyle;
  messageCount: number;
}

export function ProcurementAOR({ colorTheme, fontStyle, messageCount }: ProcurementAORProps) {
  const theme = getThemeClasses(colorTheme);
  const font = getFontClasses(fontStyle);

  // Show vendor shortlist for message 3-4
  if (messageCount <= 4) {
    return (
      <div className={`${theme.outputPanel} rounded-lg shadow-lg p-6`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className={`text-sm ${theme.title} ${font.title}`}>Catering Vendor Shortlist</h2>
            <p className={`text-xs ${theme.mutedText}`}>GeBiz Approved Caterers</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Option 1 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className={`text-xs ${theme.title}`}>Option 1: Asia Delights Catering</h3>
                <p className={`text-xs ${theme.mutedText}`}>UEN: 201234567H • SOA: GBT-2024-CAT-087</p>
              </div>
              <div className="text-right">
                <div className={`text-sm text-blue-600 dark:text-blue-400`}>$16/pax</div>
                <div className={`text-xs ${theme.mutedText}`}>Total: $400</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mt-3 mb-3">
              <div>
                <p className={`text-xs ${theme.mutedText}`}>Rating</p>
                <p className={`text-xs ${theme.title}`}>⭐ 4.8/5.0</p>
              </div>
              <div>
                <p className={`text-xs ${theme.mutedText}`}>On-Time Delivery</p>
                <p className={`text-xs ${theme.title}`}>98%</p>
              </div>
              <div>
                <p className={`text-xs ${theme.mutedText}`}>Past Orders</p>
                <p className={`text-xs ${theme.title}`}>127 agencies</p>
              </div>
            </div>

            <div className="mb-2">
              <p className={`text-xs ${theme.mutedText} mb-1`}>Menu Highlights:</p>
              <p className={`text-xs ${theme.title}`}>Mixed rice with 2 mains + 1 veg, includes halal & vegetarian options</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded">Halal Certified</span>
              <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Vegetarian Available</span>
              <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs rounded">Most Economical</span>
            </div>
          </div>

          {/* Option 2 - Selected */}
          <div className="border-2 border-blue-500 dark:border-blue-400 rounded-lg p-4 bg-blue-50/50 dark:bg-blue-950/20">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`text-xs ${theme.title}`}>Option 2: Golden Wok Catering</h3>
                  <span className="px-2 py-0.5 bg-blue-600 text-white text-xs rounded">SELECTED</span>
                </div>
                <p className={`text-xs ${theme.mutedText}`}>UEN: 201234567G • SOA: GBT-2024-CAT-089</p>
              </div>
              <div className="text-right">
                <div className={`text-sm text-blue-600 dark:text-blue-400`}>$18/pax</div>
                <div className={`text-xs ${theme.mutedText}`}>Total: $450</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mt-3 mb-3">
              <div>
                <p className={`text-xs ${theme.mutedText}`}>Rating</p>
                <p className={`text-xs ${theme.title}`}>⭐ 4.7/5.0</p>
              </div>
              <div>
                <p className={`text-xs ${theme.mutedText}`}>On-Time Delivery</p>
                <p className={`text-xs ${theme.title}`}>95%</p>
              </div>
              <div>
                <p className={`text-xs ${theme.mutedText}`}>Past Orders</p>
                <p className={`text-xs ${theme.title}`}>89 agencies</p>
              </div>
            </div>

            <div className="mb-2">
              <p className={`text-xs ${theme.mutedText} mb-1`}>Menu Highlights:</p>
              <p className={`text-xs ${theme.title}`}>Premium Chinese cuisine buffet, 3 mains + 2 veg + soup + dessert, halal & vegetarian</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded">Halal Certified</span>
              <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Vegetarian Available</span>
              <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs rounded">Highest Rated</span>
            </div>
          </div>

          {/* Option 3 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className={`text-xs ${theme.title}`}>Option 3: Thai Spice Express</h3>
                <p className={`text-xs ${theme.mutedText}`}>UEN: 201234567T • SOA: GBT-2024-CAT-091</p>
              </div>
              <div className="text-right">
                <div className={`text-sm text-blue-600 dark:text-blue-400`}>$17/pax</div>
                <div className={`text-xs ${theme.mutedText}`}>Total: $425</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mt-3 mb-3">
              <div>
                <p className={`text-xs ${theme.mutedText}`}>Rating</p>
                <p className={`text-xs ${theme.title}`}>⭐ 4.6/5.0</p>
              </div>
              <div>
                <p className={`text-xs ${theme.mutedText}`}>On-Time Delivery</p>
                <p className={`text-xs ${theme.title}`}>92%</p>
              </div>
              <div>
                <p className={`text-xs ${theme.mutedText}`}>Past Orders</p>
                <p className={`text-xs ${theme.title}`}>64 agencies</p>
              </div>
            </div>

            <div className="mb-2">
              <p className={`text-xs ${theme.mutedText} mb-1`}>Menu Highlights:</p>
              <p className={`text-xs ${theme.title}`}>Authentic Thai buffet, 2 mains + 2 veg + rice/noodles, halal & vegetarian options</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded">Halal Certified</span>
              <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded">Vegetarian Available</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show AOR document for message 5+
  return (
    <div className={`${theme.outputPanel} rounded-lg shadow-lg`}>
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
              <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className={`text-sm ${theme.title} ${font.title}`}>Authority for Request (AOR)</h2>
              <p className={`text-xs ${theme.mutedText}`}>Team Bonding Catering Service</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              <Download className="w-3 h-3 mr-1" />
              Download PDF
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <Share2 className="w-3 h-3 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-4xl mx-auto">
        {/* Document Header */}
        <div className="text-center mb-8 pb-6 border-b-2 border-gray-300 dark:border-gray-600">
          <h1 className={`text-base mb-2 ${theme.title} ${font.title}`}>AUTHORITY FOR REQUEST (AOR)</h1>
          <p className={`text-xs ${theme.mutedText}`}>Ministry/Agency Procurement Form</p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-left max-w-md mx-auto">
            <div>
              <p className={`text-xs ${theme.mutedText}`}>AOR Reference:</p>
              <p className={`text-xs ${theme.title}`}>AOR-2024-HR-0842</p>
            </div>
            <div>
              <p className={`text-xs ${theme.mutedText}`}>Date:</p>
              <p className={`text-xs ${theme.title}`}>{new Date().toLocaleDateString('en-SG')}</p>
            </div>
          </div>
        </div>

        {/* Section 1: Requester Details */}
        <div className="mb-6">
          <h3 className={`text-xs mb-3 pb-2 border-b ${theme.title} ${font.title}`}>1. REQUESTER DETAILS</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className={`text-xs ${theme.mutedText} mb-1`}>Department:</p>
              <p className={`text-xs ${theme.title}`}>Human Resources</p>
            </div>
            <div>
              <p className={`text-xs ${theme.mutedText} mb-1`}>Requester Name:</p>
              <p className={`text-xs ${theme.title}`}>[Your Name]</p>
            </div>
            <div>
              <p className={`text-xs ${theme.mutedText} mb-1`}>Contact:</p>
              <p className={`text-xs ${theme.title}`}>[Your Email/Phone]</p>
            </div>
            <div>
              <p className={`text-xs ${theme.mutedText} mb-1`}>Division:</p>
              <p className={`text-xs ${theme.title}`}>Staff Engagement & Welfare</p>
            </div>
          </div>
        </div>

        {/* Section 2: Purpose & Justification */}
        <div className="mb-6">
          <h3 className={`text-xs mb-3 pb-2 border-b ${theme.title} ${font.title}`}>2. PURPOSE & JUSTIFICATION</h3>
          <div className="space-y-2">
            <div>
              <p className={`text-xs ${theme.mutedText} mb-1`}>Purpose:</p>
              <p className={`text-xs ${theme.title}`}>Team Bonding Lunch Event</p>
            </div>
            <div>
              <p className={`text-xs ${theme.mutedText} mb-1`}>Justification:</p>
              <p className={`text-xs ${theme.title} leading-relaxed`}>
                Quarterly team bonding activity to enhance team cohesion, boost morale, and recognize team achievements. This catering service is required for 25 staff members on [Next Friday's Date]. The event aligns with our employee engagement strategy and supports team welfare initiatives under the HR work plan.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div>
                <p className={`text-xs ${theme.mutedText} mb-1`}>Event Date:</p>
                <p className={`text-xs ${theme.title}`}>{new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-SG')}</p>
              </div>
              <div>
                <p className={`text-xs ${theme.mutedText} mb-1`}>Number of Participants:</p>
                <p className={`text-xs ${theme.title}`}>25 persons</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Vendor Selection */}
        <div className="mb-6">
          <h3 className={`text-xs mb-3 pb-2 border-b ${theme.title} ${font.title}`}>3. VENDOR SELECTION</h3>
          <div className="space-y-3">
            <div>
              <p className={`text-xs ${theme.mutedText} mb-1`}>Selected Vendor:</p>
              <p className={`text-xs ${theme.title}`}>Golden Wok Catering Pte Ltd</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className={`text-xs ${theme.mutedText} mb-1`}>UEN:</p>
                <p className={`text-xs ${theme.title}`}>201234567G</p>
              </div>
              <div>
                <p className={`text-xs ${theme.mutedText} mb-1`}>Contact:</p>
                <p className={`text-xs ${theme.title}`}>+65 6234 5678</p>
              </div>
            </div>
            <div>
              <p className={`text-xs ${theme.mutedText} mb-1`}>Selection Rationale:</p>
              <p className={`text-xs ${theme.title} leading-relaxed`}>
                Vendor selected from GeBiz Standing Offer Arrangement (SOA) database. Golden Wok Catering demonstrates strong performance metrics with 4.7/5.0 rating and 95% on-time delivery record. They are pre-approved under Contract #GBT-2024-CAT-089 (valid until Dec 2025). The vendor offers comprehensive menu options including both halal-certified and vegetarian choices, meeting our dietary requirement specifications. Pricing at $18/pax is within budget parameters ($15-20/pax) and represents good value for the premium menu offered.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className={`text-xs ${theme.mutedText} mb-1`}>SOA Contract Reference:</p>
                <p className={`text-xs ${theme.title}`}>GBT-2024-CAT-089</p>
              </div>
              <div>
                <p className={`text-xs ${theme.mutedText} mb-1`}>Halal Certification:</p>
                <p className={`text-xs ${theme.title}`}>MUIS-HC-2024-1234</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Cost Breakdown */}
        <div className="mb-6">
          <h3 className={`text-xs mb-3 pb-2 border-b ${theme.title} ${font.title}`}>4. COST BREAKDOWN</h3>
          <div className={`border ${theme.separator} rounded-lg overflow-hidden`}>
            <table className="w-full">
              <thead className={`${theme.header}`}>
                <tr>
                  <th className={`text-xs text-left p-2 ${theme.title}`}>Item Description</th>
                  <th className={`text-xs text-right p-2 ${theme.title}`}>Quantity</th>
                  <th className={`text-xs text-right p-2 ${theme.title}`}>Unit Price</th>
                  <th className={`text-xs text-right p-2 ${theme.title}`}>Amount (SGD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className={`text-xs p-2 ${theme.title}`}>Premium Chinese Buffet Catering</td>
                  <td className={`text-xs text-right p-2 ${theme.title}`}>25 pax</td>
                  <td className={`text-xs text-right p-2 ${theme.title}`}>$18.00</td>
                  <td className={`text-xs text-right p-2 ${theme.title}`}>$450.00</td>
                </tr>
                <tr className="border-t-2 border-gray-300 dark:border-gray-600 bg-blue-50/50 dark:bg-blue-950/20">
                  <td colSpan={3} className={`text-xs p-2 ${theme.title}`}>
                    <strong>Total Amount</strong>
                  </td>
                  <td className={`text-xs text-right p-2 ${theme.title}`}>
                    <strong>$450.00</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3">
            <p className={`text-xs ${theme.mutedText} italic`}>Note: GST is absorbed by vendor under SOA contract terms</p>
          </div>
        </div>

        {/* Section 5: Budget Allocation */}
        <div className="mb-6">
          <h3 className={`text-xs mb-3 pb-2 border-b ${theme.title} ${font.title}`}>5. BUDGET ALLOCATION</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className={`text-xs ${theme.mutedText} mb-1`}>Cost Center:</p>
              <p className={`text-xs ${theme.title}`}>5200-HR-TeamBldg</p>
            </div>
            <div>
              <p className={`text-xs ${theme.mutedText} mb-1`}>Budget Code:</p>
              <p className={`text-xs ${theme.title}`}>52001-TRAIN-WELFARE</p>
            </div>
            <div>
              <p className={`text-xs ${theme.mutedText} mb-1`}>Budget Available:</p>
              <p className={`text-xs ${theme.title}`}>$2,450.00</p>
            </div>
            <div>
              <p className={`text-xs ${theme.mutedText} mb-1`}>Amount Requested:</p>
              <p className={`text-xs ${theme.title}`}>$450.00</p>
            </div>
          </div>
          <div className="mt-3 p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className={`text-xs ${theme.title}`}>✓ Sufficient budget available. Balance after procurement: $2,000.00</p>
          </div>
        </div>

        {/* Section 6: Compliance */}
        <div className="mb-6">
          <h3 className={`text-xs mb-3 pb-2 border-b ${theme.title} ${font.title}`}>6. COMPLIANCE CHECKLIST</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
              <p className={`text-xs ${theme.title}`}>Amount is below $3,000 threshold (no multiple quotations required)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
              <p className={`text-xs ${theme.title}`}>Vendor is on approved GeBiz Standing Offer Arrangement</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
              <p className={`text-xs ${theme.title}`}>Procurement is within allocated budget</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
              <p className={`text-xs ${theme.title}`}>No conflict of interest declared</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
              <p className={`text-xs ${theme.title}`}>Vendor certifications verified (Halal, Food Safety)</p>
            </div>
          </div>
        </div>

        {/* Section 7: Approval */}
        <div className="mb-6">
          <h3 className={`text-xs mb-3 pb-2 border-b ${theme.title} ${font.title}`}>7. APPROVAL</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <p className={`text-xs ${theme.mutedText} mb-3`}>Prepared By:</p>
              <div className="space-y-2">
                <p className={`text-xs ${theme.title}`}>Name: [Your Name]</p>
                <p className={`text-xs ${theme.title}`}>Designation: HR Officer</p>
                <p className={`text-xs ${theme.title}`}>Signature: _______________</p>
                <p className={`text-xs ${theme.title}`}>Date: {new Date().toLocaleDateString('en-SG')}</p>
              </div>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-amber-50/50 dark:bg-amber-950/10">
              <p className={`text-xs ${theme.mutedText} mb-3`}>Approved By (Reporting Officer):</p>
              <div className="space-y-2">
                <p className={`text-xs ${theme.title}`}>Name: _______________</p>
                <p className={`text-xs ${theme.title}`}>Designation: HR Manager</p>
                <p className={`text-xs ${theme.title}`}>Signature: _______________</p>
                <p className={`text-xs ${theme.title}`}>Date: _______________</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className={`text-xs ${theme.mutedText} text-center italic`}>
            This document is generated by AI Assistant Desk Procurement Assistant and requires official approval before processing.
          </p>
        </div>
      </div>

      {/* Action Bar */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <div className="flex gap-2">
            <Button size="sm" className="text-xs bg-blue-600 hover:bg-blue-700 text-white">
              Submit for Approval
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              Save Draft
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-xs">
              Edit Details
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Print
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
