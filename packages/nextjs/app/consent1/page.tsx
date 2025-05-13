"use client";

import type { NextPage } from "next";

const InformedConsent: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10 px-6">
      <h1 className="text-center mb-8">
        <span className="block text-4xl font-bold">Ginger Science SPF Research Registry</span>
        <span className="block text-2xl font-semibold mt-2">Informed Consent</span>
      </h1>

      <div className="max-w-3xl space-y-6 text-left text-gray-800">
        <p>
          The Ginger Science SPF Research Registry collects information from participants regarding sun protection product use,
          experiences, and preferences to better understand and address the unique sun protection needs of individuals with red hair
          and the MC1R genetic variant.
        </p>

        <p>
          Registries collect and store data about specific characteristics from individuals with shared traits or conditions. By participating,
          you contribute valuable insights that help researchers and product developers create safer, more effective sun protection products
          tailored specifically for redheads.
        </p>

        <p>
          De-identified information regarding your sun protection product use, preferences, experiences, and related health data will be securely stored
          and used for research and product development purposes. The registry aims to improve understanding of sun protection effectiveness specifically for
          people with the MC1R gene variant. There is no cost to participate in the registry.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>I understand my participation is voluntary, and I may withdraw at any time.</li>
          <li>I understand that efforts will be made to protect my privacy. My personal information will be securely stored using anonymized codes.</li>
          <li>I agree to be contacted periodically by the registry to update or verify my information.</li>
          <li>I consent to sharing my de-identified data for research studies and product development efforts.</li>
          <li>I understand my de-identified information may be shared with other reputable skincare and dermatological research databases.</li>
          <li>I acknowledge I may not directly benefit from participating, and my data may be used broadly in research and product development.</li>
          <li>I understand I may withdraw my consent at any time, although data already included in ongoing research or product development cannot be removed.</li>
        </ul>

        <h2 className="text-xl font-semibold pt-4">Optional: Conditional Reidentification</h2>

        <p>
          As part of the Ginger Science SPF Research Registry, your information is stored in a de-identified format. This means we remove personal details so that your identity is not linked to your responses in the research database.
        </p>

        <p>
          In some cases, researchers may want to follow up with participants to share findings, offer new research opportunities, or provide personalized insights. To make that possible, we ask for your optional consent to allow reidentification of your record under specific conditions.
        </p>

        <p className="font-medium">By opting in, you agree to the following:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>I consent to my de-identified data being re-linked to my identity only by authorized registry staff under secure and limited circumstances.</li>
          <li>I understand that this reidentification would be used solely to contact me for follow-up research, personalized feedback, or product testing invitations.</li>
          <li>I understand I may revoke this consent at any time by notifying the registry.</li>
          <li>I understand that my contact information will not be shared with third parties without my explicit, additional consent.</li>
          <li>There are no penalties for declining this option, and your data will still be fully included in the registry and used for research in de-identified form.</li>
        </ul>

        <div className="pt-4 space-y-2">
          <p><strong>Please indicate your preference below:</strong></p>
          <p>☐ YES, I consent to conditional reidentification for the purposes described above.</p>
          <p>☐ NO, I prefer to remain fully de-identified and will not be contacted for follow-up.</p>
        </div>

        <p className="pt-6">
          I have read and understand this form, have been provided sufficient background information, had adequate time to ask questions, all my questions were answered, and I have decided to participate in the Ginger Science SPF Research Registry. I will receive a copy of this consent form.
        </p>

        <div className="pt-8 text-sm text-gray-600 border-t border-gray-300">
          <p className="pt-4">
            <strong>Contact Information</strong><br />
            Research Coordinator<br />
            Ginger Science SPF Registry<br />
            (919) 555-1212<br />
            research@gingerscience.org<br />
            123 Sunshine Street, Raleigh, NC 27607
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformedConsent;
